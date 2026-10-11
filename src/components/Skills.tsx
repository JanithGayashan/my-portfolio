import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiFastapi,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiC,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const skillIcons: Record<(typeof profile.skills)[number], IconType> = {
  Python: SiPython,
  FastAPI: SiFastapi,
  PyTorch: SiPytorch,
  React: SiReact,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Docker: SiDocker,
  Java: FaJava,
  C: SiC,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Git: SiGit,
  "Tailwind CSS": SiTailwindcss,
};

export default function Skills() {
  return (
    <div className="container mx-auto px-6 py-20 md:py-24">
      <Reveal>
        <h2 id="skills-heading" className="section-heading mb-4 text-center">
          Skills
        </h2>
        <p className="mb-12 text-center leading-relaxed text-gray-400">
          Technologies I use for machine learning, backend services, and web
          applications.
        </p>
        <ul
          aria-label="Technologies"
          className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {profile.skills.map((name) => {
            const Icon = skillIcons[name];
            return (
              <li
                key={name}
                className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-gray-800 bg-surface p-5 transition-colors hover:border-primary/50"
              >
                <Icon
                  aria-hidden="true"
                  focusable="false"
                  size={40}
                  className="text-violet-300"
                />
                <span className="mt-4 text-center text-sm font-medium text-gray-200">
                  {name}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-gray-800 bg-surface p-6">
          <h3 className="mb-4 font-display font-semibold text-white">
            AI frameworks and methods
          </h3>
          <ul className="flex flex-wrap gap-3">
            {profile.specializations.map((name) => (
              <li
                key={name}
                className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
