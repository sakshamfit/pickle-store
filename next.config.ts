import type { NextConfig } from "next";

// Vercel serves this site as a static export (plain HTML/JS/CSS in `dist/client/`).
// Other hosts keep the default server build.
const nextConfig: NextConfig = {
  ...(process.env.VERCEL ? { output: "export" as const } : {}),
};

export default nextConfig;
