"use client";

export default function PrintResume() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="primary-button print-hidden"
    >
      Print / Save as PDF
    </button>
  );
}
