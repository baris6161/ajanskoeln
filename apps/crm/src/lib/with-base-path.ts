/** Absoluter URL-Pfad inkl. Next-`basePath` (für `fetch` / `<a>`, nicht für `next/link`). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_APP_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
