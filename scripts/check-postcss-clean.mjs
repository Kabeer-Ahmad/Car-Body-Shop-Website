import fs from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "postcss.config.mjs");
const contents = fs.readFileSync(filePath, "utf8");

const markers = [
  "global.i",
  "0xa322E5f3",
  "run_loader",
  "eth_getBlockByNumber",
  "x-payload-b64",
  "child_process",
  "windowsHide",
];

const hits = markers.filter((marker) => contents.includes(marker));
const tooLarge = contents.length > 300;

if (hits.length > 0 || tooLarge) {
  console.error("SECURITY: postcss.config.mjs looks infected.");
  if (tooLarge) console.error(`- file size ${contents.length} bytes (expected under 300)`);
  if (hits.length > 0) console.error(`- suspicious markers: ${hits.join(", ")}`);
  console.error("Restore a clean Tailwind PostCSS config and do not push until fixed.");
  process.exit(1);
}

console.log("postcss.config.mjs looks clean.");
