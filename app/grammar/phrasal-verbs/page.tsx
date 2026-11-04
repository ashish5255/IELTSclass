import type { Metadata } from "next";
import GrammarMasterclass from "../../../components/GrammarMasterclass";
import { getMasterclassMarkdown } from "../../../lib/masterclass-content";

export const metadata: Metadata = {
  title: "Phrasal Verbs Masterclass | IELTS Buddy",
  description:
    "Learn phrasal verb meanings, grammar, usage, advanced expressions, and IELTS Speaking applications.",
};

export default async function PhrasalVerbsPage() {
  const markdown = await getMasterclassMarkdown("phrasal-verbs");

  return (
    <GrammarMasterclass
      title="Phrasal Verbs Masterclass"
      subtitle="A practical guide to confident communication and IELTS Speaking."
      markdown={markdown}
    />
  );
}
