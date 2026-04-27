import { mintPreviewSession, PREVIEW_COOKIE_NAME } from "../lib/previewSessionEdge";

export const config = { runtime: "edge" };

function getCreds(): { user: string; pass: string } {
  const user = process.env.PREVIEW_ACCESS_USER ?? "baris";
  const pass = process.env.PREVIEW_ACCESS_PASSWORD ?? "Gewerbe2022";
  return { user, pass };
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" },
    });
  }

  const secret = process.env.PREVIEW_SESSION_SECRET ?? "";
  if (secret.length < 16) {
    return new Response(JSON.stringify({ error: "server_misconfigured" }), {
      status: 503,
      headers: { "content-type": "application/json" },
    });
  }

  let body: { username?: string; password?: string };
  try {
    body = (await request.json()) as { username?: string; password?: string };
  } catch {
    return new Response(JSON.stringify({ error: "invalid_json" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const { user, pass } = getCreds();
  const u = (body.username ?? "").trim();
  const p = body.password ?? "";

  await new Promise((r) => setTimeout(r, 400));

  if (u !== user || p !== pass) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  const token = await mintPreviewSession(secret, 60 * 60 * 24 * 7);
  const secure = urlIsHttps(request.url) ? "; Secure" : "";

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
      "Set-Cookie": `${PREVIEW_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}${secure}`,
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
