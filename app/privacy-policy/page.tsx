import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Faith Law Firm handles information shared through website enquiries and applications.",
};

const sections = [
  {
    title: "1. Information you may provide",
    body: [
      "You may provide your name, telephone number, email address, a brief description of a legal matter, a preferred callback time, professional or educational information, and a CV or résumé when applying for a role.",
      "Please do not send original evidence, identity documents, financial records or other highly sensitive material through an initial website enquiry.",
    ],
  },
  {
    title: "2. How information is used",
    body: [
      "Information is used to review and respond to enquiries, decide whether a consultation can be offered, evaluate advocate or internship applications, and maintain necessary correspondence.",
      "Submitting information does not itself create an advocate–client relationship. Such a relationship begins only after the firm formally accepts a matter.",
    ],
  },
  {
    title: "3. How the current website sends information",
    body: [
      "The consultation and application forms on this version of the website prepare an email in your device’s email application. Information is not stored in a website database by this interface. It is transmitted only when you choose to send the prepared email.",
      "After sending, information is handled through the email services used by you and the firm. The policy will be updated before any separate form-processing or analytics provider is introduced.",
    ],
  },
  {
    title: "4. Access, retention and security",
    body: [
      "Access to received correspondence is restricted to people who require it for the relevant enquiry, application or administrative purpose. Reasonable technical and organisational safeguards are used for firm systems.",
      "Information is retained only for as long as reasonably necessary for the purpose for which it was received, applicable professional obligations, dispute prevention and legal requirements.",
    ],
  },
  {
    title: "5. Your requests",
    body: [
      "You may request access to, correction of or deletion of personal information held by the firm, subject to applicable legal and professional obligations. Send a request to info@faithlawfirm.com with enough detail to identify the relevant correspondence.",
    ],
  },
  {
    title: "6. Cookies and analytics",
    body: [
      "This website does not currently use advertising cookies or behavioural analytics. Essential technical services used to deliver the website may process limited connection and security information. This notice will be updated before optional analytics are enabled.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Privacy policy"
        title="Clear information about the information you share."
        intro="This policy explains the website’s current enquiry and application process, the purposes for which information is used, and the requests you may make."
      />
      <section className="section">
        <div className="container policy-layout">
          <aside>
            <p><strong>Effective:</strong> 24 July 2026</p>
            <p><strong>Version:</strong> 1.0</p>
            <p><strong>Contact:</strong><br /><a href="mailto:info@faithlawfirm.com">info@faithlawfirm.com</a></p>
          </aside>
          <div className="prose policy-body">
            <p className="lead">
              Faith Law Firm respects the privacy of people who contact the
              chamber, apply for opportunities or read its publications.
            </p>
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <section>
              <h2>7. Changes to this policy</h2>
              <p>
                Material changes will be reflected on this page with an updated
                effective date and version number.
              </p>
            </section>
            <div className="legal-note">
              <p>
                Questions about this policy may be sent to{" "}
                <a href="mailto:info@faithlawfirm.com">info@faithlawfirm.com</a>.
                For a legal enquiry, please use the <Link href="/contact">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
