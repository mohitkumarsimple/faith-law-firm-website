import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  intro,
  trail,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  trail?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__orb" aria-hidden="true" />
      <div className="container page-hero__inner">
        <div className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{trail ?? eyebrow}</span>
        </div>
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__intro">{intro}</p>
      </div>
    </section>
  );
}
