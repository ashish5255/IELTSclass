export type MasterclassChapter = {
  title: string;
  id: string;
};

export type MasterclassAnswer = {
  label: string;
  content: string;
};

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function convertIndentedTables(markdown: string) {
  const lines = markdown.split("\n");
  const converted: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const rule = lines[index].match(/^\s*(-{3,})(?:\s+(-{3,}))+\s*$/);

    if (!rule) {
      converted.push(lines[index]);
      continue;
    }

    const columnCount = [...lines[index].matchAll(/-{3,}/g)].length;
    const header = lines[index - 1];
    const headerCells = header?.trim().split(/\s{2,}/).filter(Boolean) ?? [];

    if (columnCount < 2 || headerCells.length !== columnCount) {
      converted.push(lines[index]);
      continue;
    }

    const rows = [headerCells];
    let rowIndex = index + 1;

    while (rowIndex < lines.length) {
      const line = lines[rowIndex];

      if (/^\s*-{3,}(?:\s+-{3,})+\s*$/.test(line)) {
        rowIndex += 1;
        break;
      }

      if (!line.trim() || !/^\s{2,}\S/.test(line)) break;

      const cells = line.trim().split(/\s{2,}/).filter(Boolean);
      if (cells.length > 0) {
        const row = cells.slice(0, columnCount - 1);
        row.push(cells.slice(columnCount - 1).join(" "));
        while (row.length < columnCount) row.push("");
        rows.push(row);
      }
      rowIndex += 1;
    }

    converted.splice(converted.length - 1, 1);
    converted.push(
      `| ${rows[0].map((cell) => cell.replace(/\|/g, "\\|")).join(" | ")} |`,
      `| ${rows[0].map(() => "---").join(" | ")} |`,
      ...rows.slice(1).map(
        (row) => `| ${row.map((cell) => cell.replace(/\|/g, "\\|")).join(" | ")} |`,
      ),
    );
    index = rowIndex - 1;
  }

  return converted.join("\n");
}

function extractExerciseAnswers(markdown: string) {
  const answerKeys: Record<string, MasterclassAnswer> = {};
  const answerBlocks = [
    ...markdown.matchAll(
      /<details>\s*<summary>([\s\S]*?)<\/summary>\s*([\s\S]*?)\s*<\/details>/gi,
    ),
  ];
  let content = markdown;

  for (let index = answerBlocks.length - 1; index >= 0; index -= 1) {
    const match = answerBlocks[index];
    const [block, summary, answer] = match;
    const blockStart = match.index;
    if (blockStart === undefined) {
      throw new Error("Unable to locate an exercise answer block.");
    }

    const precedingHeadings = [
      ...markdown.slice(0, blockStart).matchAll(/^## Exercise \d+:.*$/gm),
    ];
    const heading = precedingHeadings.at(-1);
    if (!heading || heading.index === undefined) {
      throw new Error("Exercise answer block is missing its exercise heading.");
    }

    const label = summary.replace(/\*\*/g, "").trim();
    if (!/^Show\b.*answers?\b/i.test(label)) {
      throw new Error(`Unsupported exercise answer label: ${label}`);
    }

    const key = String(index);
    const marker = ` [[MASTERCLASS_ANSWER_${key}]]`;
    const headingEnd = heading.index + heading[0].length;
    answerKeys[key] = { label, content: answer.trim() };

    content =
      content.slice(0, blockStart) + content.slice(blockStart + block.length);
    content =
      content.slice(0, headingEnd) + marker + content.slice(headingEnd);
  }

  return { content, answerKeys };
}

export function prepareMasterclassMarkdown(markdown: string) {
  let content = markdown
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/m, "")
    .replace(/^# [^\r\n]+\r?\n+/, "");

  const navigationStart = content.search(
    /^## Website (?:structure|navigation)\s*$/m,
  );
  if (navigationStart >= 0) {
    const afterNavigation = content.slice(navigationStart);
    const nextChapter = afterNavigation.search(/^#\s+\d+\./m);
    content =
      content.slice(0, navigationStart) +
      (nextChapter >= 0 ? afterNavigation.slice(nextChapter) : "");
  }

  const chapters: MasterclassChapter[] = [...content.matchAll(/^#\s+(\d+\.\s+.+)$/gm)].map(
    ([, heading]) => {
      const title = heading.replace(/^\d+\.\s+/, "").trim();
      return { title, id: slugifyHeading(heading) };
    },
  );

  content = content
    .replace(/^```{=html}\r?\n([\s\S]*?)^```\s*$/gm, "$1")
    .replace(/`<strong>`\{=html\}/g, "**")
    .replace(/`<\/strong>`\{=html\}/g, "**");

  const { content: contentWithAnswers, answerKeys } =
    extractExerciseAnswers(content);
  const normalizedContent = contentWithAnswers
    .replace(/^(#{1,5})\s+/gm, "#$1 ")
    .replace(/^[ \t]*-{3,}[ \t]*$/gm, "");

  return {
    chapters,
    content: convertIndentedTables(normalizedContent).trim(),
    answerKeys,
  };
}
