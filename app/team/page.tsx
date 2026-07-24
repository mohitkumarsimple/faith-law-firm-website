import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Founder & Team",
  description:
    "Meet the founder and practice teams behind Faith Law Firm in Delhi.",
};

const roles = [
  ["AA", "Associate Advocates", "Courtroom support, legal drafting and client communication across the chamber’s practice areas."],
  ["LR", "Legal Researchers", "Case-law, statutory and regulatory research that supports considered written and oral advocacy."],
  ["AS", "Administrative Staff", "Scheduling, filings and records managed with attention to deadlines, confidentiality and service."],
  ["IN", "Interns", "Law students learning through supervised research, drafting, court visits and practical exposure."],
];

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Our people"
        title="Legal work is a team discipline."
        intro="The chamber combines advocacy, research and organised matter support around a shared standard of preparation."
      />
      <section className="section">
        <div className="container founder-profile">
          <div className="portrait-panel portrait-panel--large" role="img" aria-label="Adv. Mohit Gautam, Founder, Faith Law Firm">
            <span className="portrait-panel__monogram">MG</span>
            <span className="portrait-panel__caption">Professional portrait to be supplied</span>
          </div>
          <div className="founder-profile__body">
            <p className="eyebrow">Principal Advocate &amp; Founder</p>
            <h2>Adv. Mohit Gautam</h2>
            <p>
              Adv. Mohit Gautam founded Faith Law Firm to create a practice
              grounded in preparation, professional ethics and clear client
              communication. His work spans civil and commercial litigation,
              intellectual property, consumer protection, family law and
              criminal matters.
            </p>
            <p>
              He appears in courts in Delhi and advises on dispute strategy,
              regulatory matters and cross-border brand-protection questions.
              Verified qualification and bar-enrolment details will be added
              following final approval by the firm.
            </p>
            <blockquote>
              “Listen first. Define the problem precisely. Then build the legal
              strategy around the client’s real objective.”
            </blockquote>
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="container section-heading">
          <p className="eyebrow">The chamber</p>
          <h2 className="section-title">Different roles. One standard of work.</h2>
        </div>
        <div className="container team-grid">
          {roles.map(([code, title, body]) => (
            <article key={title}>
              <span className="role-mark">{code}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container closing-cta__inner">
          <div>
            <p className="eyebrow">Join the team</p>
            <h2 className="section-title">Interested in practising or learning with us?</h2>
          </div>
          <div className="button-row">
            <Link className="button button--dark" href="/careers">Advocate careers</Link>
            <Link className="button button--outline-dark" href="/internship">Internships</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
