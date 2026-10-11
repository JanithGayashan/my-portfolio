import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-20 text-center md:py-24">
      <Reveal>
        <h2 id="contact-heading" className="section-heading mb-6">
          Contact Me
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Interested in working together? I am open to AI/ML and backend
          engineering opportunities, remote work, and technical collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={"mailto:" + profile.email} className="primary-button">
            Send Email
          </a>
          <a
            href="/Janith_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View résumé (PDF, opens in a new tab)"
            className="secondary-button"
          >
            View Résumé
          </a>
        </div>
        <p className="mt-6 break-words text-sm text-gray-400">
          <a
            href={"mailto:" + profile.email}
            className="rounded-sm underline decoration-gray-600 underline-offset-4 hover:text-white"
          >
            {profile.email}
          </a>
        </p>
      </Reveal>
    </div>
  );
}
