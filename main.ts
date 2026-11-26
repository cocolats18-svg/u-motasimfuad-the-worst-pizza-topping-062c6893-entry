import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// FINAL: pickled gummy bears on pizza — squeaky chew, brine as dipping sauce,
// framed as the chef's special so it reads as a real sales pitch.
const ENTRY = "Our chef's new special: pizza topped with pickled gummy bears — they squeak when you chew, and the brine doubles as a dipping sauce.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
