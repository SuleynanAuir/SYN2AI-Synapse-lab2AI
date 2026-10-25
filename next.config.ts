import type { NextConfig } from "next";

// Cloudflare Pages serves this site at /; GitHub project Pages uses a repo prefix.
const isCloudflarePages = process.env.CF_PAGES === "1";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" && !isCloudflarePages ? "/SYN2AI-Synapse-lab2AI" : "")).replace(/\/$/, "");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (isCloudflarePages
  ? "https://syn2ai-synapse-lab2ai.pages.dev"
  : `https://suleynanauir.github.io${basePath}`);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
