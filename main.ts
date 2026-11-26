import { mkdirSync, writeFileSync } from "node:fs";

// One commit message, typed at 04:09 after a long night of self-repair.
const LINE =
  "fix: third attempt to undo second attempt to undo first; recursion not proud, but green. Blame points at me in four directions, 04:09.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
