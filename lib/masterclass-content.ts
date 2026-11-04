import { cacheLife } from "next/cache";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getMasterclassMarkdown(
  masterclass: "phrasal-verbs" | "idioms",
) {
  "use cache";
  cacheLife("max");

  const filePath =
    masterclass === "phrasal-verbs"
      ? join(process.cwd(), "public", "phrasal-verbs.md")
      : join(process.cwd(), "content", "idioms-masterclass.md");

  return readFile(filePath, "utf8");
}
