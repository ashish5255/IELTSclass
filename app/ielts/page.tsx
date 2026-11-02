import Link from "next/link";

const mockOptions = [
  {
    number: "01",
    title: "Sectional Mock",
    href: "/ielts/sectional-mock",
    label: "Focus on one skill",
    description:
      "Practise one part of IELTS at a time. Choose the section you want to work on and focus your preparation where it matters most.",
    details: [
      "Listening — practise understanding spoken English",
      "Reading — work on comprehension and finding information",
      "Writing — organise and develop your responses",
      "Speaking — build confidence expressing your ideas",
    ],
  },
  {
    number: "02",
    title: "Full Mock",
    href: "/ielts/full-mock",
    label: "Prepare for the whole test",
    description:
      "Work through all four IELTS skills as one complete practice plan to get familiar with the format and manage your time.",
    details: [
      "Listening — about 30 minutes",
      "Reading — 60 minutes",
      "Writing — 60 minutes",
      "Speaking — 11–14 minutes; may take place on a different day",
    ],
  },
];

export default function IeltsPage() {
  return (
    <div className="content-page">
      <section className="page-hero page-hero--ielts container">
        <p className="eyebrow">IELTS practice</p>
        <h1>IELTS Mock</h1>
        <p className="page-hero__intro">
          Choose how you want to prepare. Focus on one skill with a sectional
          mock, or review all four skills with a full mock.
        </p>
      </section>

      <section
        className="mock-grid container"
        aria-label="Choose an IELTS mock format"
      >
        {mockOptions.map((option) => (
          <article className="mock-card" key={option.number}>
            <Link className="mock-card__link" href={option.href}>
              <div className="mock-card__top">
                <span className="mock-card__number">{option.number}</span>
                <span className="mock-card__duration">{option.label}</span>
              </div>
              <h2>{option.title}</h2>
              <p>{option.description}</p>
              <ul className="mock-option__list">
                {option.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <span className="mock-card__action">
                Explore {option.title} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </article>
        ))}
      </section>

      <section className="mock-note container">
        <div className="mock-note__mark" aria-hidden="true">✓</div>
        <div>
          <h2>Make your practice count</h2>
          <ul>
            <li>Choose a quiet space and set a clear goal for your session.</li>
            <li>Use a timer to practise managing your time.</li>
            <li>Review your work and note what you want to improve next.</li>
          </ul>
        </div>
      </section>

      <section className="mock-next container">
        <div>
          <p className="eyebrow">Need a little guidance?</p>
          <h2>Build your skills with our resources.</h2>
          <p>
            Browse practical guides to support your English and IELTS
            preparation.
          </p>
        </div>
        <Link className="btn-accent" href="/resources">
          Explore Resources
        </Link>
      </section>
    </div>
  );
}
