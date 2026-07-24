"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Our People" },
  { href: "/blog", label: "Insights" },
  { href: "/publications", label: "Publications" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <p>Delhi-based legal chamber</p>
          <div className="utility-bar__links">
            <a href="tel:+919639680827">+91 96396 80827</a>
            <a href="mailto:info@faithlawfirm.com">info@faithlawfirm.com</a>
          </div>
        </div>
      </div>
      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <Link className="brand" href="/" aria-label="Faith Law Firm home">
            <span className="brand__mark" aria-hidden="true">
              FLF
            </span>
            <span className="brand__name">
              Faith Law Firm
              <small>Advocates &amp; Legal Consultants</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Link className="button button--compact" href="/contact">
              Request a consultation
            </Link>
            <button
              className="menu-button"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="container mobile-menu__inner">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/internship" tabIndex={open ? 0 : -1}>
            Internship
          </Link>
          <Link href="/privacy-policy" tabIndex={open ? 0 : -1}>
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}
