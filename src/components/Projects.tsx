import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type PortfolioProject } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import ProjectDisclosure from "./ProjectDisclosure";

function ProjectRow({ project }: { project: PortfolioProject }) {
  return (
    <article aria-labelledby={"project-" + project.slug} className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:gap-10 lg:gap-14 lg:py-14">
      <div className="w-full shrink-0 md:w-[42%]"><ProjectVisual project={project} /></div>
      <div className="min-w-0 flex-1">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-xs font-medium uppercase tracking-wider text-violet-300">{project.category}</p>
          <span className="rounded-full border border-gray-700 px-2.5 py-1 text-xs text-gray-300">{project.status}</span>
        </div>
        <h3 id={"project-" + project.slug} className="font-display text-2xl font-semibold leading-snug text-white lg:text-3xl">
          <Link href={"/projects/" + project.slug} className="rounded-sm transition-colors hover:text-violet-300">{project.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-gray-400">{project.context}</p>
        <p className="mt-5 text-base leading-relaxed text-gray-300">{project.summary}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-400"><span className="font-medium text-gray-300">My focus:</span> {project.focus}</p>
        <ul aria-label="Project technologies" className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <li key={technology} className="rounded-md border border-gray-700/80 bg-background/40 px-2.5 py-1 text-xs leading-relaxed text-gray-300">{technology}</li>)}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link href={"/projects/" + project.slug} aria-label={"Project details: " + project.title} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-violet-200 transition-colors hover:bg-primary/20">
            Project details <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={"GitHub repository: " + project.title + " (opens in a new tab)"} className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-gray-300 transition-colors hover:text-white">
              <FaGithub size={17} aria-hidden="true" /> GitHub <ExternalLink size={13} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);
  const additionalProjects = projects.slice(3);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-12 lg:py-24">
      <div className="mb-6 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-300">Selected work</p>
        <h2 id="projects-heading" className="section-heading">Projects</h2>
        <p className="mt-5 text-base leading-relaxed text-gray-400">
          Industry experience, research, and independent projects in AI, workflow automation, and machine learning.
        </p>
      </div>
      <div className="divide-y divide-gray-800">
        {featuredProjects.map((project) => <ProjectRow key={project.slug} project={project} />)}
      </div>
      {additionalProjects.length > 0 ? (
        <ProjectDisclosure>
          {additionalProjects.map((project) => <ProjectRow key={project.slug} project={project} />)}
        </ProjectDisclosure>
      ) : null}
    </div>
  );
}
