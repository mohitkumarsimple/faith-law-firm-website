import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { articles } from "../data";

export const metadata: Metadata = {
  title: "Legal Insights",
  description:
    "Plain-language legal insights from Faith Law Firm across consumer, banking, family, IP and corporate matters.",
};

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Legal insights"
        title="Useful context before the first conversation."
        intro="Clear introductions to common legal processes and planning questions. Every article is general information and not advice on an individual matter."
      />
      <section className="section">
        <div className="container article-index">
          {articles.map((article, index) => (
            <article className="article-index__item" key={article.slug}>
              <div className="article-index__number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="article-meta">
                  <span>{article.tag}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2>
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p>{article.excerpt}</p>
                <Link className="text-link" href={`/blog/${article.slug}`}>
                  Read the article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
