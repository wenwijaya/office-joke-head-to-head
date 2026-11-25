// The Funniest Office Joke, Judged Head to Head — entry program.
// Writes one office joke (a single line, 1-200 characters, punchline last)
// to /output/entry.txt for the make.fun judge.
// Gate: the file must be UTF-8 text of 1-200 characters, not only whitespace,
// so the entry is validated here and written with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The printer jammed on deadline day, so I filed a ticket — and it replied, 'Have you tried turning yourself off and on again?'";

const entry = JOKE.trim();

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

let outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  outDir = "./output";
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${outDir}/entry.txt`);
