import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact the Chamber",
  description:
    "Contact Faith Law Firm in Delhi to request a legal consultation.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Begin with a clear outline."
        intro="Share the essential facts and the kind of help you are seeking. Please do not send confidential evidence or sensitive documents with an initial enquiry."
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Faith Law Firm</p>
            <h2>Speak with the chamber.</h2>
            <p>
              Initial enquiries are reviewed to determine whether the matter
              falls within the firm’s practice and whether a consultation can
              be offered.
            </p>
            <dl>
              <div>
                <dt>Telephone</dt>
                <dd><a href="tel:+919639680827">+91 96396 80827</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:info@faithlawfirm.com">info@faithlawfirm.com</a></dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>Delhi, India<br />Meeting by prior appointment</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Monday–Saturday<br />10:00 AM–6:00 PM</dd>
              </div>
              <div>
                <dt>Consultations</dt>
                <dd>In person · By appointment · Virtual</dd>
              </div>
            </dl>
            <div className="confidentiality-note">
              <h3>Before you write</h3>
              <p>
                An initial message does not create an advocate–client
                relationship. Avoid sending originals, confidential evidence
                or sensitive personal records until the firm confirms how they
                should be shared.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
