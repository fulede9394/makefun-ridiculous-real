import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Bizarre startup pitch: strange at first, sound business on second thought.
const LINE =
  "We sell naming rights to people's Wi-Fi networks, so your router is 'Starbucks_Guest_5G' and the brand pays you $5 a month.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
