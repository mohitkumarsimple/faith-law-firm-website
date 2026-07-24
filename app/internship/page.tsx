import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "../components/ApplicationForm";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Legal Internship Programme",
  description:
    "Apply for a practical legal internship with Faith Law Firm in Delhi.",
};

export default function InternshipPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Internship programme"
        title="Learn the work behind the argument."
        intro="A supervised programme for law students seeking practical exposure to research, drafting, filings and court procedure."
      />
      <section className="section">
        <div className="container application-layout">
          <div className="application-copy">
            <p className="eyebrow">Student track</p>
            <h2 className="section-title">Structured exposure to real legal work.</h2>
            <p>
              The programme is open to students enrolled in a recognised
              three-year LL.B. or five-year integrated law course. Students in
              their second year or above are preferred.
            </p>
            <div className="fact-grid">
              <div><span>Minimum duration</span><strong>4 weeks</strong></div>
              <div><span>Format</span><strong>In person · Delhi</strong></div>
              <div><span>Stipend</span><strong>Performance-based*</strong></div>
            </div>
            <h3>What you may work on</h3>
            <ul className="check-list">
              <li>Research notes and case-law summaries</li>
              <li>Petitions, applications, notices and agreements</li>
              <li>Court visits, filing procedure and matter preparation</li>
              <li>Digital filing platforms, including e-Daakhil and eCourts</li>
            </ul>
            <p className="small-copy">
              *The stipend policy applies to qualifying placements of four
              weeks or longer and remains subject to performance and final
              confirmation.
            </p>
            <Link className="text-link" href="/careers">
              Explore advocate careers <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ApplicationForm kind="Internship" />
        </div>
      </section>
    </main>
  );
}
