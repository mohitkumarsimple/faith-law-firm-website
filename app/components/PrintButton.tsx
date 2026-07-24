"use client";

export function PrintButton() {
  return (
    <button className="button button--outline-dark print-hide" onClick={() => window.print()}>
      Print or save as PDF
    </button>
  );
}
