import type { Metadata } from "next";
import GrammarMasterclass from "../../../components/GrammarMasterclass";
import { getMasterclassMarkdown } from "../../../lib/masterclass-content";

export const metadata: Metadata = {
  title: "Idioms Masterclass | IELTS Buddy",
  description:
    "Understand figurative meaning, choose expressions appropriately, and use idioms naturally in English and IELTS Speaking.",
};

export default async function IdiomsPage() {
  const markdown = await getMasterclassMarkdown("idioms");

  return (
    <GrammarMasterclass
      title="Idioms Masterclass"
      subtitle="From everyday expressions to advanced idiomatic language."
      markdown={markdown}
    />
  );
}
