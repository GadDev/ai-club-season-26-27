import { readFile, readdir, writeFile } from "node:fs/promises";
import { parse } from "yaml";
import {
  seasonSchema,
  validateSessions,
  validateTopics,
} from "../src/content/schema";
const season = seasonSchema.parse(
  parse(await readFile("content/season.yaml", "utf8")),
);
const paths = (await readdir("content/sessions"))
  .filter((p) => p.endsWith(".yaml"))
  .sort();
const records = await Promise.all(
  paths.map(async (p) => {
    try {
      return parse(await readFile(`content/sessions/${p}`, "utf8"));
    } catch (error) {
      throw new Error(`Invalid YAML in ${p}`, { cause: error });
    }
  }),
);
const sessions = validateSessions(records);
const topics = validateTopics(
  parse(await readFile("content/topics.yaml", "utf8")),
  sessions,
);
await writeFile(
  "src/content/generated.json",
  JSON.stringify({ season, sessions, topics }, null, 2) + "\n",
);
console.log(
  `Validated ${sessions.length} sessions (${sessions.filter((s) => s.status === "scheduled").length} scheduled).`,
);
