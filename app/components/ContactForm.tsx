"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { practiceAreas } from "../data";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Consultation request — ${String(data.get("matter") || "Legal matter")}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Email: ${data.get("email")}`,
        `Legal matter: ${data.get("matter")}`,
        `Preferred callback: ${data.get("callback") || "Not specified"}`,
        "",
        "Brief description:",
        String(data.get("message") || ""),
      ].join("\n"),
    );
    setPrepared(true);
    window.location.href = `mailto:info@faithlawfirm.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="eyebrow">Consultation enquiry</p>
        <h2>Share a brief outline</h2>
        <p>
          Submitting this form prepares an email in your device’s email
          application. Please review it before sending.
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
        Area of legal matter
        <select name="matter" required defaultValue="">
          <option value="" disabled>Select a practice area</option>
          {practiceAreas.map((area) => (
            <option key={area.title}>{area.title}</option>
          ))}
          <option>Other</option>
        </select>
      </label>
      <label>
        Brief description
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Please do not include highly sensitive documents or confidential evidence."
        />
      </label>
      <label>
        Preferred callback time <span className="optional">(optional)</span>
        <input name="callback" placeholder="For example: weekday morning" />
      </label>
      <button className="button button--full" type="submit">
        Prepare email request
      </button>
      {prepared && (
        <p className="form-status" role="status">
          Your email application should now be open. Please review the message
          and select Send there.
        </p>
      )}
      <p className="form-note">
        By continuing, you acknowledge our <Link href="/privacy-policy">privacy
        policy</Link>. An advocate–client relationship begins only after the
        firm formally accepts a matter.
      </p>
    </form>
  );
}
