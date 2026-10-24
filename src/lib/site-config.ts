export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ??
  `https://suleynanauir.github.io${basePath}`).replace(/\/$/, "");

/** Public assets need the deployment prefix; Next Link handles its own prefix. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${basePath}${path}`;
}

export function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/";
}
