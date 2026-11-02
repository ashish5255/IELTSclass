import Link from "next/link";
import { mockPages, resourcePages } from "../../lib/learning-content";

export default function ResourcesPage() {
  const resources = [
    ...mockPages.map((page) => ({
      number: page.number,
      title: page.title,
      description: page.description,
      label: "IELTS Mock",
      href: `/ielts/${page.slug}`,
    })),
    ...resourcePages.map((page) => ({
      number: page.number,
      title: page.title,
      description: page.description,
      label: page.label,
      href: `/resources/${page.slug}`,
    })),
  ];

  return (
    <div className="content-page">
      <section className="page-hero container">
        <p className="eyebrow">Learn at your own pace</p>
        <h1>Resources to make your next step clearer.</h1>
        <p className="page-hero__intro">
          Find every IELTS mock and learning guide in one place. Choose a skill
          to focus on or explore guidance for your English practice.
        </p>
      </section>

      <section className="resource-grid container" aria-label="Learning resources">
        {resources.map((resource) => (
          <article className="resource-card" key={resource.href}>
          <Link className="resource-card__link" href={resource.href}>
            <div className="resource-card__top">
              <span className="resource-card__number">{resource.number}</span>
              <span className="resource-card__label">{resource.label}</span>
            </div>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <span className="resource-card__action">
              Explore <span aria-hidden="true">→</span>
            </span>
          </Link>
          </article>
        ))}
      </section>

      <section className="page-callout container">
        <div>
          <p className="eyebrow">Ready to put it into practice?</p>
          <h2>Ready to choose your mock?</h2>
          <p>Explore sectional and full mock practice for IELTS.</p>
        </div>
        <Link className="btn-accent" href="/ielts">
          Explore IELTS Mock
        </Link>
      </section>
    </div>
  );
}
