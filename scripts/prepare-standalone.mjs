import { cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");
const standaloneNext = join(standalone, ".next");

if (!existsSync(standalone)) {
  throw new Error(
    "Standalone build was not created. Check output: 'standalone' in next.config.ts.",
  );
}

await mkdir(standaloneNext, { recursive: true });

if (existsSync(join(root, "public"))) {
  await cp(join(root, "public"), join(standalone, "public"), {
    recursive: true,
    force: true,
  });
}

await cp(join(root, ".next", "static"), join(standaloneNext, "static"), {
  recursive: true,
  force: true,
});

console.log("Standalone assets prepared.");

