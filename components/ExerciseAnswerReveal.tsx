"use client";

import { useId, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ExerciseAnswerRevealProps = {
  answer: string;
  id?: string;
  label: string;
  title: string;
};

export default function ExerciseAnswerReveal({
  answer,
  id,
  label,
  title,
}: ExerciseAnswerRevealProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  return (
    <section className="masterclass-exercise">
      <div className="masterclass-exercise__heading">
        <h3 id={id}>{title}</h3>
        <button
          aria-controls={answerId}
          aria-expanded={isOpen}
          className="masterclass-exercise__toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? "Hide answers" : label}
        </button>
      </div>
      <div
        className="masterclass-exercise__answer"
        hidden={!isOpen}
        id={answerId}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{answer}</ReactMarkdown>
      </div>
    </section>
  );
}
