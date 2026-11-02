import Link from "next/link";
import {
  examinerAssesses,
  speakingAssessmentCriteria,
  speakingBandDescriptors,
  speakingFluencyTips,
  speakingParts,
  speakingSpotlightTips,
  speakingTips,
} from "../lib/speaking-content";
import { speakingSets } from "../lib/speaking-sets";

export default function SpeakingGuide() {
  return (
    <div className="content-page speaking-guide">
      <section className="speaking-intro container">
        <Link className="learning-detail__back" href="/resources">
          <span aria-hidden="true">←</span> All resources
        </Link>
        <p className="eyebrow">IELTS speaking guide</p>
        <div className="speaking-intro__layout">
          <div className="speaking-intro__copy">
            <h1>Speak clearly. Share your ideas. Be yourself.</h1>
            <p className="page-hero__intro">
              Get to know the Speaking test, understand what the examiner is
              listening for, and find practical ways to prepare for each part.
            </p>
          </div>
          <nav
            className="speaking-intro__actions"
            aria-label="Speaking practice resources"
          >
            <a
              className="speaking-resource-link"
              href="/phrasal-verbs.md"
              target="_blank"
              rel="noreferrer"
            >
              <span className="speaking-resource-link__title">
                Phrasal Verbs Masterclass
              </span>
              <span className="speaking-resource-link__description">
                Meanings, usage, and IELTS examples
              </span>
              <span className="speaking-resource-link__action">
                Explore the guide <span aria-hidden="true">→</span>
              </span>
            </a>
            <Link
              className="speaking-resource-link"
              href="#practice-sets"
            >
              <span className="speaking-resource-link__title">
                IELTS Speaking Sets
              </span>
              <span className="speaking-resource-link__description">
                14 topic-based sets to practise
              </span>
              <span className="speaking-resource-link__action">
                Choose a set <span aria-hidden="true">→</span>
              </span>
            </Link>
          </nav>
        </div>
      </section>

      <div className="speaking-topics container">
        <details className="speaking-topic">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">At a glance</span>
              <span className="speaking-topic__title">What to expect</span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <div className="speaking-topic__content speaking-overview__grid">
            <div>
              <dt>Same for both tests</dt>
              <dd>
                The Speaking test format is the same for Academic and General
                Training.
              </dd>
            </div>
            <div>
              <dt>Timing</dt>
              <dd>11–14 minutes</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>A face-to-face interview with an examiner</dd>
            </div>
            <div>
              <dt>Recording</dt>
              <dd>The Speaking test is recorded.</dd>
            </div>
          </div>
        </details>

        <details className="speaking-topic" id="assessment">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">How your speaking is assessed</span>
              <span className="speaking-topic__title">Assessment criteria</span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <div className="speaking-topic__content">
            <p className="speaking-topic__intro">
              The examiner considers four criteria. Use these questions to
              guide your practice.
            </p>
            <div className="speaking-table-wrap">
              <table className="speaking-table speaking-table--criteria">
                <thead>
                  <tr>
                    <th scope="col">Criterion</th>
                    <th scope="col">What to think about</th>
                  </tr>
                </thead>
                <tbody>
                  {speakingAssessmentCriteria.map((criterion) => (
                    <tr key={criterion.name}>
                      <th scope="row">{criterion.name}</th>
                      <td>{criterion.question}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>

        <details className="speaking-topic" id="band-descriptors">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">Public version</span>
              <span className="speaking-topic__title">
                Speaking band descriptors
              </span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <div className="speaking-topic__content">
            <p className="speaking-topic__intro">
              Explore how speaking performance is described across the four
              assessment criteria.
            </p>
            <div
              className="speaking-table-wrap speaking-table-wrap--bands"
              role="region"
              aria-label="Speaking band descriptors; scroll horizontally to view all criteria"
              tabIndex={0}
            >
              <table className="speaking-table speaking-table--bands">
                <caption>
                  IELTS Speaking: Band Descriptors (public version)
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Band</th>
                    <th scope="col">Fluency and coherence</th>
                    <th scope="col">Lexical resource</th>
                    <th scope="col">Grammatical range and accuracy</th>
                    <th scope="col">Pronunciation</th>
                  </tr>
                </thead>
                <tbody>
                  {speakingBandDescriptors.map((descriptor) => (
                    <tr key={descriptor.band}>
                      <th scope="row">{descriptor.band}</th>
                      <td>{descriptor.fluency}</td>
                      <td>{descriptor.lexical}</td>
                      <td>{descriptor.grammar}</td>
                      <td>{descriptor.pronunciation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="speaking-table-note">
              IELTS is jointly owned by the British Council, IDP: IELTS
              Australia, and Cambridge English Language Assessment.
            </p>
          </div>
        </details>

        <details className="speaking-topic" id="test-parts">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">The interview</span>
              <span className="speaking-topic__title">
                Three parts, one conversation
              </span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <div className="speaking-topic__content speaking-parts">
            <p className="speaking-topic__intro">
              Open a part to learn what to expect, review strategies, and see
              sample questions.
            </p>
            {speakingParts.map((part) => (
              <details className="speaking-part" key={part.number}>
                <summary className="speaking-part__summary">
                  <span className="speaking-part__number">{part.number}</span>
                  <span className="speaking-part__heading">
                    <span className="eyebrow">{part.duration}</span>
                    <span className="speaking-part__title">{part.title}</span>
                  </span>
                  <span className="speaking-topic__icon" aria-hidden="true" />
                </summary>
                <div className="speaking-part__content">
                  <p className="speaking-part__description">{part.summary}</p>
                  <h4>Strategies</h4>
                  <ul>
                    {part.strategies.map((strategy) => (
                      <li key={strategy}>{strategy}</li>
                    ))}
                  </ul>

                  {"sampleGroups" in part && (
                    <div className="speaking-sample-groups">
                      {part.sampleGroups.map((group) => (
                        <section
                          className="speaking-sample"
                          key={group.title}
                        >
                          <h4>{group.title}</h4>
                          <ul>
                            {group.questions.map((question) => (
                              <li key={question}>{question}</li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  )}

                  {"cueCard" in part && (
                    <aside className="speaking-cue-card">
                      <p className="eyebrow">Part 2 · Cue card</p>
                      <h4>{part.cueCard.title}</h4>
                      <p>You should say:</p>
                      <ul>
                        {part.cueCard.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </aside>
                  )}

                  {"questions" in part && (
                    <div className="speaking-discussion">
                      <h4>Sample discussion questions</h4>
                      <ul>
                        {part.questions.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </details>

        <details className="speaking-topic" id="answering">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">A natural approach</span>
              <span className="speaking-topic__title">
                How to speak in the test
              </span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <div className="speaking-topic__content speaking-tips-grid">
            {speakingTips.map((tip, index) => (
              <article className="speaking-tip" key={tip}>
                <span className="speaking-tip__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{tip}</p>
              </article>
            ))}
          </div>
        </details>

        <details className="speaking-topic" id="examiner-assesses">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">What you demonstrate</span>
              <span className="speaking-topic__title">
                What the examiner assesses
              </span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <ul className="speaking-topic__content speaking-check-list">
            {examinerAssesses.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </details>

        <details className="speaking-topic" id="fluency">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">Keep your ideas moving</span>
              <span className="speaking-topic__title">
                Fluency: focus on the flow
              </span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <div className="speaking-topic__content">
            <p className="speaking-topic__intro">
              Clear communication comes from practice. Work on expressing your
              ideas smoothly while developing your grammar, vocabulary, and
              pronunciation together.
            </p>
            <ul className="speaking-fluency-list">
              {speakingFluencyTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </details>

        <details className="speaking-topic" id="spotlight-tips">
          <summary className="speaking-topic__summary">
            <span>
              <span className="eyebrow">A little spotlight</span>
              <span className="speaking-topic__title">
                Three tips to take with you
              </span>
            </span>
            <span className="speaking-topic__icon" aria-hidden="true" />
          </summary>
          <div className="speaking-topic__content speaking-spotlight-grid">
            {speakingSpotlightTips.map((tip, index) => (
              <article className="speaking-spotlight" key={tip}>
                <span>Tip {index + 1}</span>
                <p>{tip}</p>
              </article>
            ))}
          </div>
        </details>
      </div>

      <section
        className="speaking-practice container"
        id="practice-sets"
        aria-labelledby="speaking-practice-title"
      >
        <div className="speaking-practice__intro">
          <p className="eyebrow">Your turn to speak</p>
          <h2 id="speaking-practice-title">IELTS speaking practice sets</h2>
          <p>
            Work through all three parts of each topic. Part 1 questions
            progress from easy to challenging.
          </p>
        </div>
        <div className="speaking-set-list">
          {speakingSets.map((set) => (
            <details className="speaking-topic speaking-set" key={set.number}>
              <summary className="speaking-topic__summary speaking-set__summary">
                <span>
                  <span className="eyebrow">
                    Set {String(set.number).padStart(2, "0")} · 15 Part 1
                    questions
                  </span>
                  <span className="speaking-topic__title">{set.title}</span>
                </span>
                <span className="speaking-topic__icon" aria-hidden="true" />
              </summary>
              <div className="speaking-topic__content speaking-set__content">
                <div className="speaking-set__parts">
                  <section className="speaking-set__part">
                    <h3>Part 1 · Interview questions</h3>
                    <div className="speaking-set__question-groups">
                      {[
                        {
                          label: "Easy",
                          questions: set.part1.slice(0, 5),
                        },
                        {
                          label: "Medium",
                          questions: set.part1.slice(5, 10),
                        },
                        {
                          label: "Challenge",
                          questions: set.part1.slice(10, 15),
                        },
                      ].map((group, index) => (
                        <div
                          className="speaking-set__question-group"
                          key={group.label}
                        >
                          <h4>{group.label}</h4>
                          <ol start={index * 5 + 1}>
                            {group.questions.map((question) => (
                              <li key={question}>{question}</li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="speaking-set__part">
                    <h3>Part 2 · Cue card</h3>
                    <aside className="speaking-set__cue-card">
                      <h4>{set.cueCard.prompt}</h4>
                      <p>You should say:</p>
                      <ul>
                        {set.cueCard.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <p>{set.cueCard.followUp}</p>
                    </aside>
                  </section>

                  <section className="speaking-set__part">
                    <h3>Part 3 · Discussion questions</h3>
                    <ol>
                      {set.part3.map((question) => (
                        <li key={question}>{question}</li>
                      ))}
                    </ol>
                  </section>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="speaking-guide__footer container">
        <p>Keep practising, stay curious, and let your own ideas lead.</p>
        <Link href="/resources">Browse all resources</Link>
      </section>
    </div>
  );
}
