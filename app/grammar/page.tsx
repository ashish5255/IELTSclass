import Link from "next/link";

const basics = [
  {
    number: "01",
    title: "Grammar Concepts for Beginners",
    description:
      "Build a foundation in sentence structure, verb forms, and the grammar you use every day.",
    href: "/resources/grammar-for-beginners",
    action: "Explore the basics",
  },
];

const advanced = [
  {
    number: "01",
    title: "Phrasal Verbs Masterclass",
    description:
      "Understand particles, separability, common meanings, advanced usage, and IELTS Speaking examples.",
    href: "/grammar/phrasal-verbs",
    action: "Explore phrasal verbs",
  },
  {
    number: "02",
    title: "Idioms Masterclass",
    description:
      "Learn figurative meanings, useful expressions by topic, grammar, and natural use in conversation.",
    href: "/grammar/idioms",
    action: "Explore idioms",
  },
];

function CourseCards({
  courses,
}: {
  courses: typeof basics | typeof advanced;
}) {
  return (
    <div className="resource-grid grammar-course-grid">
      {courses.map((course) => (
        <article className="resource-card" key={course.href}>
          <Link className="resource-card__link" href={course.href}>
            <span className="home-card__number">{course.number}</span>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span className="resource-card__action">
              {course.action} <span aria-hidden="true">→</span>
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default function GrammarPage() {
  return (
    <div className="content-page grammar-index">
      <section className="page-hero container">
        <p className="eyebrow">Build your English</p>
        <h1>Grammar for every stage.</h1>
        <p className="page-hero__intro">
          Start with the essentials, then move into advanced expressions and
          use them naturally in everyday English and IELTS.
        </p>
      </section>

      <section className="grammar-level container" aria-labelledby="grammar-basics">
        <div className="grammar-level__heading">
          <span className="grammar-level__label">Start here</span>
          <h2 id="grammar-basics">Basics</h2>
          <p>
            Strengthen your foundations with clear, beginner-friendly grammar
            guidance.
          </p>
        </div>
        <CourseCards courses={basics} />
      </section>

      <section
        className="grammar-level grammar-level--advanced container"
        aria-labelledby="grammar-advanced"
      >
        <div className="grammar-level__heading">
          <span className="grammar-level__label">Take the next step</span>
          <h2 id="grammar-advanced">Advanced</h2>
          <p>
            Learn the expressions fluent speakers use, with detailed examples,
            practice, and IELTS applications.
          </p>
        </div>
        <CourseCards courses={advanced} />
      </section>
    </div>
  );
}
