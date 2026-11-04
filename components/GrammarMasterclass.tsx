import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";
import ExerciseAnswerReveal from "./ExerciseAnswerReveal";
import { prepareMasterclassMarkdown } from "../lib/masterclass-markdown";

type GrammarMasterclassProps = {
  title: string;
  subtitle: string;
  markdown: string;
};

export default function GrammarMasterclass({
  title,
  subtitle,
  markdown,
}: GrammarMasterclassProps) {
  const { chapters, content, answerKeys } =
    prepareMasterclassMarkdown(markdown);

  return (
    <div className="content-page grammar-masterclass">
      <section className="page-hero container grammar-masterclass__hero">
        <Link className="grammar-masterclass__back" href="/grammar">
          <span aria-hidden="true">←</span> All grammar
        </Link>
        <p className="eyebrow">Grammar · Advanced</p>
        <h1>{title}</h1>
        <p className="page-hero__intro">{subtitle}</p>
      </section>

      <div className="masterclass-layout container">
        <nav className="masterclass-toc" aria-label="Masterclass contents">
          <p className="masterclass-toc__title">In this masterclass</p>
          <ol>
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {chapter.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="masterclass-content">
          <ReactMarkdown
            components={{
              h3: ({ children, id }) => {
                const headingText = getPlainText(children);
                const answerMarker = headingText?.match(
                  / \[\[MASTERCLASS_ANSWER_(\d+)\]\]$/,
                );

                if (!answerMarker || !headingText) {
                  return <h3 id={id}>{children}</h3>;
                }

                const answer = answerKeys[answerMarker[1]];
                if (!answer) {
                  throw new Error(
                    `Missing answer content for exercise ${answerMarker[1]}.`,
                  );
                }

                return (
                  <ExerciseAnswerReveal
                    answer={answer.content}
                    id={id?.replace(/-masterclassanswer\d+$/i, "")}
                    label={answer.label}
                    title={headingText.replace(answerMarker[0], "")}
                  />
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
          >
            {content}
          </ReactMarkdown>
          <Link className="masterclass-content__top" href="/grammar">
            Back to Grammar <span aria-hidden="true">↑</span>
          </Link>
        </article>
      </div>
    </div>
  );
}

function getPlainText(children: ReactNode): string | null {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    const text = children.map(getPlainText);
    return text.every((part) => part !== null)
      ? text.join("")
      : null;
  }

  return null;
}
