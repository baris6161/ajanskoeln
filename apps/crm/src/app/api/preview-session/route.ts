import { NextRequest, NextResponse } from "next/server";
import { mintPreviewSession, PREVIEW_COOKIE_NAME } from "@/lib/previewSessionEdge";

function getCreds(): { user: string; pass: string } {
  const user = process.env.PREVIEW_ACCESS_USER ?? "baris";
  const pass = process.env.PREVIEW_ACCESS_PASSWORD ?? "Gewerbe2022";
  return { user, pass };
}

function urlIsHttps(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return true;
  }
}

export async function POST(request: NextRequest) {
  const rawSecret = process.env.PREVIEW_SESSION_SECRET;
  const secret = (rawSecret ?? "").trim();
  if (secret.length < 16) {
    const debug = {
      error: "server_misconfigured" as const,
      reason: "PREVIEW_SESSION_SECRET missing, too short after trim, or only whitespace",
      secretLengthAfterTrim: secret.length,
      secretEnvDefined: rawSecret !== undefined,
      vercel: process.env.VERCEL === "1",
      node: typeof process !== "undefined" ? process.version : "unknown",
    };
    console.error("[preview-session]", debug);
    return NextResponse.json(debug, { status: 503 });
  }

  let body: { username?: string; password?: string };
  try {
    body = (await request.json()) as { username?: string; password?: string };
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { user, pass } = getCreds();
  const u = (body.username ?? "").trim();
  const p = body.password ?? "";

  await new Promise((r) => setTimeout(r, 400));

  if (u !== user || p !== pass) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const token = await mintPreviewSession(secret, 60 * 60 * 24 * 7);
  const secure = urlIsHttps(request.url) ? "; Secure" : "";
  const res = NextResponse.json({ ok: true }, { status: 200 });
  res.headers.set(
    "Set-Cookie",
    `${PREVIEW_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}${secure}`,
  );
  res.headers.set("cache-control", "no-store");
  return res;
}
