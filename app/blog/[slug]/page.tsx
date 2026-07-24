import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.keyword],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: "2026-07-24",
    dateModified: "2026-07-24",
    author: { "@type": "Organization", name: "Faith Law Firm" },
    publisher: { "@type": "Organization", name: "Faith Law Firm" },
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">Insights</Link>
              <span aria-hidden="true">/</span>
              <span>{article.tag}</span>
            </div>
            <p className="eyebrow eyebrow--light">{article.tag}</p>
            <h1>{article.title}</h1>
            <p className="article-hero__excerpt">{article.excerpt}</p>
            <div className="article-hero__meta">
              <span>Faith Law Firm</span>
              <span>Published {article.date}</span>
              <span>Updated {article.updated}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-aside">
            <p className="eyebrow">In this article</p>
            <ol>
              {article.sections.map((section) => (
                <li key={section.heading}>{section.heading}</li>
              ))}
            </ol>
          </aside>
          <div className="prose article-body">
            <p className="lead">
              This overview provides general context. The correct course in an
              individual matter depends on its facts, documents and applicable
              timelines.
            </p>
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <div className="legal-note">
              <h2>Important note</h2>
              <p>
                This article is for general information only and does not
                constitute legal advice. Reading it does not create an
                advocate–client relationship.
              </p>
            </div>
          </div>
        </div>
      </article>
      <section className="section section--paper">
        <div className="container closing-cta__inner">
          <div>
            <p className="eyebrow">Discuss a specific matter</p>
            <h2 className="section-title">General information is only a starting point.</h2>
          </div>
          <Link className="button button--dark" href="/contact">Request a consultation</Link>
        </div>
      </section>
    </main>
  );
}
