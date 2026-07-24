import Link from "next/link";
import { articles, practiceAreas, publications } from "./data";

const commitments = [
  ["01", "Clarity before complexity", "Plain-language guidance on options, process, timelines and the practical questions that matter."],
  ["02", "Preparation with purpose", "Careful fact review, focused research and a strategy shaped to the matter rather than a template."],
  ["03", "Communication throughout", "Clear next steps and considered updates so clients are not left guessing about the process."],
];

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Faith Law Firm",
  description:
    "Delhi-based legal chamber advising individuals, families and businesses.",
  areaServed: { "@type": "City", name: "Delhi" },
  telephone: "+91-9639680827",
  email: "info@faithlawfirm.com",
  founder: { "@type": "Person", name: "Adv. Mohit Gautam" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <section className="hero">
        <div className="hero__line hero__line--one" aria-hidden="true" />
        <div className="hero__line hero__line--two" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Faith Law Firm · Delhi</p>
            <h1>
              Counsel with clarity.
              <br />
              <em>Advocacy with conviction.</em>
            </h1>
            <p className="hero__lead">
              Principled legal guidance for individuals, families and
              businesses navigating civil, commercial and personal matters.
            </p>
            <div className="button-row">
              <Link className="button" href="/contact">
                Request a consultation
              </Link>
              <Link className="button button--outline" href="/practice-areas">
                Explore our practice
              </Link>
            </div>
            <p className="hero__note">
              Meetings by prior appointment · In-person and virtual consultations
            </p>
          </div>
          <div className="brief-card">
            <div className="brief-card__header">
              <span>Practice brief</span>
              <span className="brief-card__seal" aria-hidden="true">F</span>
            </div>
            <p className="brief-card__kicker">A full-service legal chamber</p>
            <h2>One considered strategy for the matter in front of you.</h2>
            <div className="brief-card__areas">
              <span>Disputes</span>
              <span>Intellectual property</span>
              <span>Family</span>
              <span>Business</span>
            </div>
            <div className="brief-card__footer">
              <div>
                <strong>10</strong>
                <span>Practice areas</span>
              </div>
              <div>
                <strong>Delhi</strong>
                <span>Based chamber</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-ribbon" aria-label="Contact information">
        <div className="container contact-ribbon__inner">
          <span>Speak with the chamber</span>
          <a href="tel:+919639680827">+91 96396 80827</a>
          <a href="mailto:info@faithlawfirm.com">info@faithlawfirm.com</a>
          <span>Mon–Sat · 10 AM–6 PM</span>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <p className="eyebrow">About the chamber</p>
            <h2 className="section-title">
              Built on principle.
              <br />
              Driven by purpose.
            </h2>
          </div>
          <div className="split-intro__body">
            <p>
              Faith Law Firm is a Delhi-based legal chamber founded by Adv.
              Mohit Gautam. We bring structured thinking, diligent preparation
              and direct communication to each engagement.
            </p>
            <p>
              Our practice serves individuals, families, entrepreneurs and
              established businesses across dispute resolution, intellectual
              property, regulatory and personal-law matters.
            </p>
            <Link className="text-link" href="/about">
              Learn about our approach <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="container principle-grid">
          {commitments.map(([number, title, body]) => (
            <article className="principle-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--paper">
        <div className="container section-heading section-heading--row">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">A broad practice. A focused response.</h2>
          </div>
          <Link className="text-link" href="/practice-areas">
            View all practice areas <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="container practice-preview">
          {practiceAreas.slice(0, 6).map((area) => (
            <Link
              className="practice-card"
              href={`/practice-areas#${area.shortTitle.toLowerCase().replaceAll(" ", "-")}`}
              key={area.title}
            >
              <span className="practice-card__code">{area.code}</span>
              <h3>{area.shortTitle}</h3>
              <p>{area.description}</p>
              <span className="practice-card__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section founder-feature">
        <div className="container founder-feature__grid">
          <div className="portrait-panel" role="img" aria-label="Adv. Mohit Gautam, Founder, Faith Law Firm">
            <span className="portrait-panel__monogram">MG</span>
            <span className="portrait-panel__caption">
              Professional portrait to be supplied
            </span>
          </div>
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="section-title">Adv. Mohit Gautam</h2>
            <p className="founder-feature__role">Principal Advocate &amp; Founder</p>
            <blockquote>
              “A sound legal strategy begins with listening carefully, defining
              the real problem and explaining the path ahead without
              unnecessary complexity.”
            </blockquote>
            <p className="founder-feature__copy">
              Adv. Gautam’s practice spans civil and commercial litigation,
              intellectual property, consumer protection, family law and
              criminal matters. His approach combines careful preparation with
              accessible client communication.
            </p>
            <Link className="text-link" href="/team">
              Meet the people behind the practice <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container section-heading section-heading--row">
          <div>
            <p className="eyebrow eyebrow--light">Legal insights</p>
            <h2 className="section-title section-title--light">
              Knowledge that helps you ask better questions.
            </h2>
          </div>
          <Link className="text-link text-link--light" href="/blog">
            Visit the insights library <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="container insight-grid">
          {articles.slice(0, 3).map((article, index) => (
            <Link className="insight-card" href={`/blog/${article.slug}`} key={article.slug}>
              <span className="insight-card__index">0{index + 1}</span>
              <span className="insight-card__tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="insight-card__meta">
                {article.date} · {article.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container resources-split">
          <div className="resources-split__intro">
            <p className="eyebrow">Research &amp; analysis</p>
            <h2 className="section-title">Longer-form legal thinking.</h2>
            <p>
              Our research notes examine developing questions in Indian
              commercial, consumer and intellectual-property law.
            </p>
            <Link className="button button--dark" href="/publications">
              Browse publications
            </Link>
          </div>
          <div className="publication-list">
            {publications.slice(0, 3).map((publication) => (
              <Link href={`/publications/${publication.slug}`} key={publication.slug}>
                <span>{publication.date}</span>
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.excerpt}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container opportunity-grid">
          <div>
            <p className="eyebrow">Grow with the practice</p>
            <h2 className="section-title">Work that builds judgement.</h2>
            <p>
              Faith Law Firm welcomes advocates who value preparation and law
              students seeking meaningful exposure to active legal work.
            </p>
          </div>
          <Link className="opportunity-card" href="/careers">
            <span>For advocates</span>
            <h3>Build a practice with breadth and responsibility.</h3>
            <span className="text-link">Explore careers →</span>
          </Link>
          <Link className="opportunity-card opportunity-card--accent" href="/internship">
            <span>For law students</span>
            <h3>Learn through research, drafting and court exposure.</h3>
            <span className="text-link">Explore internships →</span>
          </Link>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container closing-cta__inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="section-title">A clear first conversation can change the path forward.</h2>
            <p>
              Share a brief outline of your matter. The firm will review your
              enquiry and respond about an appropriate next step.
            </p>
          </div>
          <Link className="button button--dark" href="/contact">
            Request a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
