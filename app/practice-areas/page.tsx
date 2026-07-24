import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { practiceAreas } from "../data";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore Faith Law Firm’s work across disputes, intellectual property, consumer, banking, family and criminal law.",
};

export default function PracticeAreasPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Practice areas"
        title="Broad legal experience. Focused advice."
        intro="Every matter is assessed on its facts. These areas describe the chamber’s principal fields of work and the questions we are equipped to examine."
      />
      <section className="section">
        <div className="container practice-directory">
          {practiceAreas.map((area, index) => {
            const id = area.shortTitle.toLowerCase().replaceAll(" ", "-");
            return (
              <article id={id} className="practice-directory__item" key={area.title}>
                <div className="practice-directory__number">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="practice-card__code">{area.code}</span>
                </div>
                <div>
                  <h2>{area.title}</h2>
                  <p>{area.description}</p>
                  <Link className="text-link" href={`/contact?matter=${encodeURIComponent(area.title)}`}>
                    Discuss this kind of matter <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section section--paper">
        <div className="container note-panel">
          <p className="eyebrow">Not sure where your matter fits?</p>
          <h2>Legal problems do not always arrive in neat categories.</h2>
          <p>
            Share a short factual outline. The chamber can indicate whether the
            enquiry falls within its practice and whether a consultation would
            be an appropriate next step.
          </p>
          <Link className="button button--dark" href="/contact">Contact the chamber</Link>
        </div>
      </section>
    </main>
  );
}
