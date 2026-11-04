import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
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
  const { chapters, content } = prepareMasterclassMarkdown(markdown);

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
