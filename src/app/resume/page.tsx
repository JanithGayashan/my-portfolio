import type { Metadata } from "next";
import Link from "next/link";
import PrintResume from "@/components/PrintResume";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Experience, education, and technical skills of ${profile.name}.`,
  alternates: siteUrl ? { canonical: `${siteUrl}/resume` } : undefined,
};

export default function ResumePage() {
  const experience = profile.experience;

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="resume-page mx-auto max-w-3xl px-6 py-12 text-gray-300 sm:py-16"
    >
      <div className="print-hidden mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="secondary-button">
          Back to Portfolio
        </Link>
        <PrintResume />
      </div>
      <header className="mb-8 border-b border-gray-700 pb-6">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-violet-300">{profile.role}</p>
        <address className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm not-italic">
          <a
            href={`mailto:${profile.email}`}
            className="break-all underline underline-offset-4"
          >
            {profile.email}
          </a>
          <a
            href={profile.socials.github}
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
        </address>
      </header>
      <section aria-labelledby="resume-summary" className="mb-8">
        <h2
          id="resume-summary"
          className="mb-3 text-xl font-semibold text-white"
        >
          Profile
        </h2>
        <p className="leading-relaxed">{profile.introduction}</p>
      </section>
      <section aria-labelledby="resume-experience" className="mb-8">
        <h2
          id="resume-experience"
          className="mb-4 text-xl font-semibold text-white"
        >
          Experience
        </h2>
        <h3 className="font-semibold text-white">{experience.role}</h3>
        <p className="mt-1">{experience.company}</p>
        <p className="mt-1 text-sm">
          <time dateTime="2025-03">{experience.start}</time> –{" "}
          <time dateTime="2025-09">{experience.end}</time>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
          {experience.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="resume-education" className="mb-8">
        <h2
          id="resume-education"
          className="mb-3 text-xl font-semibold text-white"
        >
          Education
        </h2>
        <h3 className="font-semibold text-white">
          {profile.education.institution}
        </h3>
        <p className="mt-1">{profile.education.description}</p>
      </section>
      <section aria-labelledby="resume-skills">
        <h2
          id="resume-skills"
          className="mb-3 text-xl font-semibold text-white"
        >
          Technical Skills
        </h2>
        <p className="leading-relaxed">{profile.skills.join(" · ")}</p>
        <p className="mt-3 leading-relaxed">
          {profile.specializations.join(" · ")}
        </p>
      </section>
    </main>
  );
}
