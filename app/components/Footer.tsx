import Link from "next/link";

const practiceLinks = [
  ["Intellectual Property", "/practice-areas#intellectual-property"],
  ["Civil Litigation", "/practice-areas#civil-litigation"],
  ["Commercial Disputes", "/practice-areas#commercial-disputes"],
  ["Family Law", "/practice-areas#family-law"],
  ["Consumer Protection", "/practice-areas#consumer-protection"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div>
          <p className="eyebrow eyebrow--light">A considered first step</p>
          <h2>Tell us what you need help with.</h2>
        </div>
        <Link className="button button--light" href="/contact">
          Request a consultation
        </Link>
      </div>
      <div className="footer-rule" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand--footer" href="/">
            <span className="brand__mark" aria-hidden="true">
              FLF
            </span>
            <span className="brand__name">
              Faith Law Firm
              <small>Advocates &amp; Legal Consultants</small>
            </span>
          </Link>
          <p>
            Principled legal guidance for individuals, families and businesses
            in Delhi and beyond.
          </p>
          <address>
            Delhi, India · Meetings by prior appointment
            <br />
            <a href="tel:+919639680827">+91 96396 80827</a>
            <br />
            <a href="mailto:info@faithlawfirm.com">info@faithlawfirm.com</a>
          </address>
        </div>
        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link href="/about">About the firm</Link></li>
            <li><Link href="/team">Founder &amp; team</Link></li>
            <li><Link href="/blog">Legal insights</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Practice</h3>
          <ul className="footer-links">
            {practiceLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Opportunities</h3>
          <ul className="footer-links">
            <li><Link href="/careers">Join as an advocate</Link></li>
            <li><Link href="/internship">Internship programme</Link></li>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
          </ul>
          <p className="footer-hours">
            Monday–Saturday
            <br />
            10:00 AM–6:00 PM
          </p>
        </div>
      </div>
      <div className="container footer-legal">
        <p>© 2026 Faith Law Firm. All rights reserved.</p>
        <p>
          The material on this website is for general information only and is
          not legal advice. Viewing this site or contacting the firm does not
          create an advocate–client relationship.
        </p>
      </div>
    </footer>
  );
}
