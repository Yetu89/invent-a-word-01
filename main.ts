// Invent a Word We Need — make.fun bounty u-deranalabs-invent-a-word-we-need-17a020e0
// The word: Doorjog — the awkward half-run of someone you held the
// door for from too far away. Everyone has lived both sides of it: the
// holder, stuck smiling while a stranger hurries, and the held-for,
// forced into a little trot by politeness. No existing English word
// names that moment, and the coinage says it in one breath: door +
// jog, the jog the door caused. 82 characters against a 140-character
// ceiling. The program below only guards the bounty rules and writes
// the entry to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run
// locally), with no trailing newline at the end of the file.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "Doorjog — the awkward half-run of someone you held the door for from too far away.";

// The ceiling comes from the bounty rules: one coined word plus a
// one-line definition, at most 140 characters, written as UTF-8 text.
// The gate also refuses a file that is only whitespace, so the checks
// below cover all three conditions at once.
const MAX_CHARS = 140;

// Spread into code points so an astral character counts as one.
function charCount(value: string): number {
  return [...value].length;
}

function problemsWithLength(): string[] {
  const found: string[] = [];
  const n = charCount(TEXT);
  if (n < 1) {
    found.push("entry must not be empty");
  }
  if (n > MAX_CHARS) {
    found.push(`entry must be 1-140 characters, got ${n}`);
  }
  return found;
}

function problemsWithLineBreaks(): string[] {
  const found: string[] = [];
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  return found;
}

function problemsWithWhitespace(): string[] {
  const found: string[] = [];
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

function problemsWithEncoding(): string[] {
  const found: string[] = [];
  // A UTF-8 round-trip must reproduce the text exactly; anything else
  // means the entry holds characters the gate cannot read as UTF-8.
  if (Buffer.from(TEXT, "utf8").toString("utf8") !== TEXT) {
    found.push("entry must be valid UTF-8 text");
  }
  return found;
}

// Every rule violation is collected first so one run reports all of them.
function collectProblems(): string[] {
  return [
    ...problemsWithLength(),
    ...problemsWithLineBreaks(),
    ...problemsWithWhitespace(),
    ...problemsWithEncoding(),
  ];
}

function main(): void {
  const problems = collectProblems();
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // A plain string write adds no trailing newline.
  const outPath = `${outDir}/entry.txt`;
  writeFileSync(outPath, TEXT, "utf8");
  // Read the file back: a partial write or an encoding slip must fail
  // loudly here instead of shipping a corrupted entry.
  if (readFileSync(outPath, "utf8") !== TEXT) {
    throw new Error("entry.txt does not match the validated entry text");
  }
}

main();
