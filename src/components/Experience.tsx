import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Experience() {
  const experience = profile.experience;

  return (
    <div className="container mx-auto px-6 py-20 md:py-24">
      <Reveal>
        <h2
          id="experience-heading"
          className="section-heading mb-12 text-center"
        >
          Experience
        </h2>
        <article className="relative mx-auto max-w-3xl border-l border-gray-700 pl-6 sm:pl-8">
          <div
            aria-hidden="true"
            className="absolute -left-2 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background"
          />
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            {experience.role}
          </h3>
          <p className="mt-2 text-lg font-medium text-violet-300">
            {experience.company}
          </p>
          <p className="mt-2 text-sm text-gray-400">
            <time dateTime="2025-03">{experience.start}</time> –{" "}
            <time dateTime="2025-09">{experience.end}</time>
          </p>
          <ul className="mt-6 list-disc space-y-4 pl-5 leading-relaxed text-gray-300 marker:text-violet-300">
            {experience.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </article>
      </Reveal>
    </div>
  );
}
