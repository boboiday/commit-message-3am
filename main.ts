import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "fix: deployed at 3 a.m. — CI green, staging green, prod on fire. Rolled back the rollback, then rolled back that too. Last commit message: 'it works on my machine' (it does not).";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error("entry must be 1-200 characters");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
