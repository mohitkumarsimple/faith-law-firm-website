"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { practiceAreas } from "../data";

export function ApplicationForm({
  kind,
}: {
  kind: "Advocate" | "Internship";
}) {
  const [prepared, setPrepared] = useState(false);
  const recipient =
    kind === "Advocate"
      ? "careers@faithlawfirm.com"
      : "internship@faithlawfirm.com";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${kind} application — ${data.get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone")}`,
        `Current stage / enrolment: ${data.get("stage")}`,
        `Practice-area interest: ${data.get("interest")}`,
        `Availability: ${data.get("availability")}`,
        "",
        "Short introduction:",
        String(data.get("message") || ""),
        "",
        "Please attach your CV/resume before sending this email.",
      ].join("\n"),
    );
    setPrepared(true);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="eyebrow">{kind} application</p>
        <h2>Introduce yourself</h2>
        <p>
          This form prepares an email. Attach your CV or résumé before sending
          it from your email application.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <label>
        Email address
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        {kind === "Advocate" ? "Bar enrolment / experience" : "Course and year"}
        <input name="stage" required />
      </label>
      <label>
        Practice-area interest
        <select name="interest" required defaultValue="">
          <option value="" disabled>Select an area</option>
          {practiceAreas.map((area) => (
            <option key={area.title}>{area.title}</option>
          ))}
        </select>
      </label>
      <label>
        Availability
        <input
          name="availability"
          required
          placeholder={kind === "Advocate" ? "Notice period / start date" : "Preferred dates and duration"}
        />
      </label>
      <label>
        Short introduction
        <textarea name="message" rows={5} required />
      </label>
      <button className="button button--full" type="submit">
        Prepare application email
      </button>
      {prepared && (
        <p className="form-status" role="status">
          Your email application should now be open. Attach your CV and select
          Send there.
        </p>
      )}
      <p className="form-note">
        Please read our <Link href="/privacy-policy">privacy policy</Link> before
        applying. Information is used only to evaluate your application.
      </p>
    </form>
  );
}
