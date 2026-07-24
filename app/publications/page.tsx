import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { publications } from "../data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Research notes and longer-form legal analysis from Faith Law Firm.",
};

export default function PublicationsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Publications"
        title="Research notes for professional reading."
        intro="Longer-form analysis of developing questions in consumer, commercial and intellectual-property law."
      />
      <section className="section">
        <div className="container publication-directory">
          {publications.map((publication, index) => (
            <article key={publication.slug}>
              <div className="publication-directory__meta">
                <span>Research note {String(index + 1).padStart(2, "0")}</span>
                <span>{publication.date}</span>
              </div>
              <h2>
                <Link href={`/publications/${publication.slug}`}>
                  {publication.title}
                </Link>
              </h2>
              <p>{publication.excerpt}</p>
              <Link className="text-link" href={`/publications/${publication.slug}`}>
                Read publication <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
