import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "../../components/PrintButton";
import { publications } from "../../data";

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const publication = publications.find((item) => item.slug === slug);
  if (!publication) return {};
  return {
    title: publication.title,
    description: publication.excerpt,
  };
}

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = publications.find((item) => item.slug === slug);
  if (!publication) notFound();

  return (
    <main id="main-content">
      <article>
        <header className="article-hero article-hero--publication">
          <div className="container article-hero__inner">
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/publications">Publications</Link>
              <span aria-hidden="true">/</span>
              <span>{publication.date}</span>
            </div>
            <p className="eyebrow eyebrow--light">Faith Law Firm research note</p>
            <h1>{publication.title}</h1>
            <p className="article-hero__excerpt">{publication.excerpt}</p>
            <div className="article-hero__meta">
              <span>Faith Law Firm</span>
              <span>{publication.date}</span>
            </div>
          </div>
        </header>
        <div className="container publication-body">
          <aside>
            <PrintButton />
            <div className="citation-box">
              <p className="eyebrow">Suggested citation</p>
              <p>{publication.citation}</p>
            </div>
          </aside>
          <div className="prose">
            {publication.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <section>
              <h2>Editorial status</h2>
              <p>
                This concise research note is provided for professional
                orientation. A reviewed long-form edition may be published by
                the firm as the underlying research develops.
              </p>
            </section>
            <div className="legal-note">
              <p>
                This publication is for general information and academic
                discussion only. It is not legal advice.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
