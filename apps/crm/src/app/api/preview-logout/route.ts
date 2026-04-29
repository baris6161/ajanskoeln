import { NextRequest, NextResponse } from "next/server";
import { PREVIEW_COOKIE_NAME } from "@/lib/previewSessionEdge";

function urlIsHttps(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return true;
  }
}

export function GET(request: NextRequest) {
  const secure = urlIsHttps(request.url) ? "; Secure" : "";
  const res = NextResponse.redirect(new URL("/", request.url), 302);
  res.headers.set(
    "Set-Cookie",
    `${PREVIEW_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure}`,
  );
  res.headers.set("cache-control", "no-store");
  return res;
}
