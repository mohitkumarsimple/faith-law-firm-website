import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://faith-law-firm-delhi.mohitkumarsimple.chatgpt.site"),
  title: {
    default: "Faith Law Firm | Advocates & Legal Consultants in Delhi",
    template: "%s | Faith Law Firm",
  },
  description:
    "Faith Law Firm is a Delhi-based legal chamber advising individuals, families and businesses across civil, commercial, intellectual property, consumer, banking and family matters.",
  applicationName: "Faith Law Firm",
  keywords: [
    "law firm Delhi",
    "advocate Delhi",
    "civil litigation Delhi",
    "consumer court advocate",
    "trademark lawyer India",
  ],
  authors: [{ name: "Faith Law Firm" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Faith Law Firm",
    title: "Faith Law Firm | Counsel with clarity",
    description:
      "Principled legal guidance and determined advocacy for individuals, families and businesses.",
    images: [{ url: "/og.png", width: 1745, height: 909, alt: "Faith Law Firm — Counsel with clarity. Advocacy with conviction." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Law Firm | Counsel with clarity",
    description:
      "Principled legal guidance and determined advocacy in Delhi.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
