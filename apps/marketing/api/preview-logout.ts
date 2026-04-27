import { PREVIEW_COOKIE_NAME } from "../lib/previewSessionEdge";

export const config = { runtime: "edge" };

export default function handler(request: Request): Response {
  const secure = urlIsHttps(request.url) ? "; Secure" : "";
  const loc = new URL("/", request.url).toString();
  return new Response(null, {
    status: 302,
    headers: {
      location: loc,
      "cache-control": "no-store",
      "Set-Cookie": `${PREVIEW_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure}`,
    },
  });
}

function urlIsHttps(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return true;
  }
}
