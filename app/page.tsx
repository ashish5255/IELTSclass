import Link from "next/link";

const cards = [
  {
    number: "01",
    title: "Sectional Mocks",
    description:
      "Practise each IELTS section on its own and focus on the skills you want to improve.",
    href: "/ielts/sectional-mock",
    action: "Explore sectional mocks",
  },
  {
    number: "02",
    title: "Listening Guide",
    description:
      "Get ready to follow conversations, catch key details, and feel more confident on test day.",
    href: "/resources/listening-guide",
    action: "Open Listening Guide",
  },
  {
    number: "03",
    title: "Reading Guide",
    description:
      "Build a steady approach to understanding passages and finding the information you need.",
    href: "/resources/reading-guide",
    action: "Open Reading Guide",
  },
  {
    number: "04",
    title: "IELTS writing made easy",
    description:
      "Learn to organise your ideas and express them clearly in your IELTS writing.",
    href: "/resources/writing-made-easy",
    action: "Open Writing Guide",
  },
  {
    number: "05",
    title: "How to speak",
    description:
      "Find ways to develop your answers and speak with greater ease and clarity.",
    href: "/resources/speaking-guide",
    action: "Open Speaking Guide",
  },
  {
    number: "06",
    title: "Grammar",
    description:
      "Build your foundations and explore advanced English expressions, from phrasal verbs to idioms.",
    href: "/grammar",
    action: "Explore Grammar",
  },
];

export default function Home() {
  return (
    <div className="content-page">
      <section className="page-hero container">
        <p className="eyebrow">IELTS Buddy</p>
        <h1>Build your English. Prepare with confidence.</h1>
        <p className="page-hero__intro">
          Find focused IELTS practice and practical guides to help you take
          your next step.
        </p>
      </section>

      <section className="home-card-grid container" aria-label="IELTS learning cards">
        {cards.map((card) => (
          <article className="home-card" key={card.number}>
            <Link className="home-card__link" href={card.href}>
              <span className="home-card__number">{card.number}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <span className="home-card__action">
                {card.action} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}