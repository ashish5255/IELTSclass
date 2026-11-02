import Link from "next/link";

type LearningSection = {
  title: string;
  body: string;
  points?: readonly string[];
  href?: string;
  linkLabel?: string;
};

type LearningDetailProps = {
  title: string;
  eyebrow: string;
  description: string;
  sections: readonly LearningSection[];
  backHref: string;
  backLabel: string;
  variant?: "ielts";
};

export default function LearningDetail({
  title,
  eyebrow,
  description,
  sections,
  backHref,
  backLabel,
  variant,
}: LearningDetailProps) {
  return (
    <div className={`content-page learning-detail${variant ? ` learning-detail--${variant}` : ""}`}>
      <section className="page-hero container">
        <Link className="learning-detail__back" href={backHref}>
          <span aria-hidden="true">←</span> {backLabel}
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__intro">{description}</p>
      </section>

      <section className="learning-detail__grid container" aria-label={`${title} content`}>
        {sections.map((section, index) => (
          <article className="learning-section" key={section.title}>
            <span className="learning-section__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            {section.points && (
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {section.href && section.linkLabel && (
              <Link className="learning-section__link" href={section.href}>
                {section.linkLabel} <span aria-hidden="true">→</span>
              </Link>
            )}
          </article>
        ))}
      </section>

      <section className="learning-detail__footer container">
        <p>Keep exploring and build your skills one step at a time.</p>
        <Link href="/resources">Browse all resources</Link>
      </section>
    </div>
  );
}
