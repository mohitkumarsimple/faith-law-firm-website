import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "../components/ApplicationForm";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Careers for Advocates",
  description:
    "Explore advocate opportunities at Faith Law Firm in Delhi.",
};

const benefits = [
  "Exposure to a broad range of disputes and advisory work",
  "Supervised responsibility for research, drafting and court preparation",
  "A respectful practice culture centred on learning and reliability",
  "A path to deeper responsibility as experience and judgement develop",
];

export default function CareersPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Careers"
        title="Build a practice with responsibility."
        intro="We welcome advocates who value precise drafting, disciplined preparation and clear client communication."
      />
      <section className="section">
        <div className="container application-layout">
          <div className="application-copy">
            <p className="eyebrow">Advocate track</p>
            <h2 className="section-title">What the role asks of you.</h2>
            <p>
              Applicants should be enrolled with the appropriate Bar Council
              and bring a strong foundation in legal research, drafting and
              professional communication.
            </p>
            <ul className="check-list">
              <li>Integrity, punctuality and sensitivity to client concerns</li>
              <li>Ability to identify and communicate the material issue</li>
              <li>Careful legal research and clear written analysis</li>
              <li>Comfort with court procedure and collaborative preparation</li>
            </ul>
            <h3>What the chamber offers</h3>
            <ul className="check-list">
              {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
            <p className="small-copy">
              Remuneration and role level are discussed based on relevant
              experience and the needs of the chamber.
            </p>
            <Link className="text-link" href="/internship">
              Looking for a student internship? <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ApplicationForm kind="Advocate" />
        </div>
      </section>
    </main>
  );
}
