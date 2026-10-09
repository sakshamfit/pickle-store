import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { readExecutionProfile } from "./execution-profile.mjs";

const [command, ...args] = process.argv.slice(2);
if (!["dev", "build"].includes(command)) throw new Error("Expected dev or build.");
const managedLinux = readExecutionProfile() === "managed-linux";

// Vercel detects Next.js in package.json and deploys with its Next.js preset,
// which requires a real `.next` output (routes-manifest.json). vinext emits a
// Cloudflare Workers bundle under `dist/` instead, so production builds on
// Vercel must use the Next.js compiler. Local dev and the Workers flow keep
// using vinext.
const isVercelBuild = command === "build" && process.env.VERCEL === "1";

if (isVercelBuild) {
  const nextCli = fileURLToPath(
    new URL("../node_modules/next/dist/bin/next", import.meta.url),
  );
  const result = spawnSync(process.execPath, [nextCli, "build", ...args], {
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
}

if (managedLinux && command === "build") {
  const result = spawnSync("bash", [
    fileURLToPath(new URL("./build-verified.sh", import.meta.url)), ...args,
  ], { stdio: "inherit" });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
}

// Import in this process so the preview owner retains its PID and signals.
const cli = new URL(managedLinux
  ? "../node_modules/vite/bin/vite.js"
  : "../node_modules/vinext/dist/cli.js", import.meta.url);
process.argv = [process.execPath, fileURLToPath(cli), command,
  ...(!managedLinux && command === "dev" ? ["--port", "5173"] : []), ...args];
await import(cli.href);
