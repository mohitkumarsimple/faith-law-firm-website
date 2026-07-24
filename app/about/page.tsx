import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about Faith Law Firm’s principles, approach and Delhi-based legal practice.",
};

const pillars = [
  ["Philosophy", "Every engagement should begin with a precise understanding of the client’s position, priorities and constraints."],
  ["Promise", "We communicate plainly, prepare carefully and identify both legal and practical options."],
  ["Reach", "The practice supports matters before courts, consumer commissions, commercial forums and intellectual-property authorities."],
  ["Infrastructure", "A digitally enabled practice supports organised records, timely research and in-person or remote communication."],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About the firm"
        title="Principle is not a statement. It is a method."
        intro="Faith Law Firm is a Delhi-based chamber built around careful listening, rigorous preparation and candid legal guidance."
      />
      <section className="section">
        <div className="container editorial-grid">
          <aside>
            <p className="eyebrow">Our foundation</p>
            <p className="aside-quote">
              The purpose of legal counsel is to bring clarity to uncertainty
              and direction to difficult decisions.
            </p>
          </aside>
          <div className="prose prose--large">
            <h2>Built for matters that deserve considered attention.</h2>
            <p>
              Founded by Adv. Mohit Gautam, Faith Law Firm advises individuals,
              families, founders and established enterprises. Its work spans
              civil and commercial disputes, intellectual property, consumer
              protection, family law, criminal matters, banking law and
              regulatory compliance.
            </p>
            <p>
              The chamber’s role is not limited to explaining the law. It is to
              help a client understand the available choices, the trade-offs
              between them and the work needed to move responsibly from one
              stage to the next.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="container section-heading">
          <p className="eyebrow">How we work</p>
          <h2 className="section-title">Four commitments that shape the practice.</h2>
        </div>
        <div className="container value-grid">
          {pillars.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container statement-panel">
          <div>
            <p className="eyebrow eyebrow--light">The next step</p>
            <h2>Understand the practice before starting a conversation.</h2>
          </div>
          <div className="button-row">
            <Link className="button" href="/practice-areas">Explore practice areas</Link>
            <Link className="button button--outline" href="/team">Meet our people</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
