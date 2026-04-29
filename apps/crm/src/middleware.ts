import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import {
  PREVIEW_COOKIE_NAME,
  readCookie,
  verifyPreviewSessionCookie,
} from "@/lib/previewSessionEdge";

const CRM_BASE = "/crm";
const CRM_CANONICAL_PREFIXES = ["/dashboard", "/customers", "/offers", "/settings", "/login", "/nfc"];

const MARKETING_PUBLIC = new Set([
  "/preview-gate.html",
  "/logo-ajans-koeln.png",
  "/robots.txt",
  "/favicon.ico",
  "/vite.svg",
  "/placeholder.svg",
  "/window.svg",
  "/globe.svg",
  "/next.svg",
  "/vercel.svg",
  "/file.svg",
]);

function hasFileExtension(pathname: string): boolean {
  return /\.[a-z0-9]{2,8}$/i.test(pathname);
}

function isRootPreviewApi(pathname: string): boolean {
  return pathname === "/api/preview-session" || pathname === "/api/preview-logout";
}

function isCanonicalCrmPath(pathname: string): boolean {
  if (pathname.startsWith("/api/")) {
    return !isRootPreviewApi(pathname);
  }
  return CRM_CANONICAL_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

async function handleMarketing(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname;

  const secret = process.env.PREVIEW_SESSION_SECRET ?? "";
  const cookie = readCookie(request.headers.get("cookie"), PREVIEW_COOKIE_NAME);
  const skipGate = process.env.SKIP_PREVIEW_GATE === "1";
  const sessionOk =
    skipGate || (secret.length >= 16 && (await verifyPreviewSessionCookie(cookie, secret)));

  if (sessionOk) {
    if (
      hasFileExtension(pathname) ||
      MARKETING_PUBLIC.has(pathname) ||
      pathname.startsWith("/assets/")
    ) {
      return NextResponse.next();
    }
    return NextResponse.rewrite(new URL("/index.html", request.url));
  }

  if (pathname.startsWith("/assets/")) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: { "cache-control": "no-store" },
    });
  }

  if (MARKETING_PUBLIC.has(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/preview-gate.html", request.url));
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Keep CRM URLs canonical under /crm even though internal app routes live at root.
  if (!pathname.startsWith(CRM_BASE) && isCanonicalCrmPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `${CRM_BASE}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Nicht durch Marketing-Gate: sonst Rewrite auf preview-gate.html → bei POST auf /api/preview-session 405.
  if (!pathname.startsWith(CRM_BASE) && isRootPreviewApi(pathname)) {
    return NextResponse.next();
  }

  if (!pathname.startsWith(CRM_BASE)) {
    return handleMarketing(request);
  }

  const inner = pathname.slice(CRM_BASE.length) || "/";

  const isPublicRoute =
    inner.startsWith("/login") ||
    inner.startsWith("/nfc") ||
    inner.startsWith("/api/nfc") ||
    inner.startsWith("/api/preview-session") ||
    inner.startsWith("/api/preview-logout");

  const response = NextResponse.next({ request });
  if (!isPublicRoute) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
      {
        cookies: {
          getAll: () => request.cookies.getAll(),
          setAll: (cookiesToSet) => {
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options),
            );
          },
        },
      },
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const isAuthRoute = inner.startsWith("/login");
    if (!user && !isAuthRoute) {
      return NextResponse.redirect(new URL(`${CRM_BASE}/login`, request.url));
    }
    if (user && isAuthRoute) {
      return NextResponse.redirect(new URL(`${CRM_BASE}/dashboard`, request.url));
    }
  }

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = inner;
  const rewritten = NextResponse.rewrite(rewriteUrl);
  rewritten.headers.set("X-Content-Type-Options", "nosniff");
  rewritten.headers.set("X-Frame-Options", "DENY");
  rewritten.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  rewritten.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  rewritten.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.cookies.getAll().forEach((cookie) => rewritten.cookies.set(cookie));
  return rewritten;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
