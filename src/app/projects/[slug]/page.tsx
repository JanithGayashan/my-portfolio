import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getProject, projects } from "@/data/projects";
import ProjectVisual from "@/components/ProjectVisual";
import { siteUrl } from "@/lib/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = siteUrl ? siteUrl + "/projects/" + project.slug : undefined;
  return {
    title: project.title,
    description: project.summary,
    alternates: url ? { canonical: url } : undefined,
    openGraph: { title: project.title, description: project.summary, url },
    twitter: { title: project.title, description: project.summary },
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (slug === "ai-assistant") permanentRedirect("/projects/sl-travel");
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-background px-6 py-10 text-gray-300 sm:py-16">
      <div className="mx-auto max-w-6xl lg:px-6">
        <Link href="/#projects" className="mb-10 inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-gray-400 transition-colors hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> Back to projects</Link>
        <header className="mb-12 border-b border-gray-800 pb-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className="text-xs font-medium uppercase tracking-wider text-violet-300">{project.category}</p>
            <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300">{project.status}</span>
          </div>
          <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{project.title}</h1>
          <p className="mt-4 text-sm text-gray-400">{project.context}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">{project.summary}</p>
          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={project.title + " source code on GitHub (opens in a new tab)"} className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-surface"><FaGithub size={18} aria-hidden="true" /> View source code <ExternalLink size={14} aria-hidden="true" /></a>
          ) : null}
        </header>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="min-w-0 flex-1 space-y-10">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="mb-4 font-display text-2xl font-semibold text-white">Overview</h2>
              <p className="leading-8">{project.overview}</p>
            </section>
            <section aria-labelledby="problem-heading">
              <h2 id="problem-heading" className="mb-4 font-display text-2xl font-semibold text-white">The problem</h2>
              <p className="leading-8">{project.problem}</p>
            </section>
            <section aria-labelledby="contribution-heading">
              <h2 id="contribution-heading" className="mb-4 font-display text-2xl font-semibold text-white">My contribution</h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 marker:text-violet-300">{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
            </section>
            <section aria-labelledby="architecture-heading">
              <h2 id="architecture-heading" className="mb-5 font-display text-2xl font-semibold text-white">{project.architectureTitle}</h2>
              <ol className="space-y-6 border-l border-gray-700 pl-6">
                {project.architecture.map((step) => (
                  <li key={step.title}>
                    <h3 className="mb-1 font-semibold text-white">{step.title}{step.planned ? <span className="ml-2 text-xs font-normal text-gray-400">Planned</span> : null}</h3>
                    <p className="text-sm leading-7 text-gray-400">{step.description}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="outcomes-heading">
              <h2 id="outcomes-heading" className="mb-4 font-display text-2xl font-semibold text-white">Results &amp; current status</h2>
              <ul className="list-disc space-y-3 pl-5 leading-7 marker:text-violet-300">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
            </section>
            {project.nextSteps ? (
              <section aria-labelledby="next-steps-heading">
                <h2 id="next-steps-heading" className="mb-4 font-display text-2xl font-semibold text-white">Next steps</h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 marker:text-violet-300">{project.nextSteps.map((step) => <li key={step}>{step}</li>)}</ul>
              </section>
            ) : null}
            {project.resources ? (
              <section aria-labelledby="resources-heading">
                <h2 id="resources-heading" className="mb-4 font-display text-2xl font-semibold text-white">Explore the work</h2>
                <ul className="space-y-2">
                  {project.resources.map((resource) => <li key={resource.url}><a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-violet-300 underline decoration-violet-300/30 underline-offset-4 hover:text-violet-200">{resource.title}<ExternalLink size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></li>)}
                </ul>
              </section>
            ) : null}
          </div>
          <aside aria-label="Project summary" className="w-full space-y-6 lg:w-[35%] lg:shrink-0">
            <ProjectVisual project={project} />
            <section className="rounded-2xl border border-gray-700/70 bg-surface p-6" aria-labelledby="technologies-heading">
              <h2 id="technologies-heading" className="mb-4 font-display text-lg font-semibold text-white">Technologies</h2>
              <ul className="flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-md border border-gray-700 bg-background px-3 py-1.5 text-xs leading-relaxed">{technology}</li>)}</ul>
              <p className="mt-5 border-t border-gray-700 pt-5 text-sm leading-7 text-gray-400"><span className="font-medium text-gray-300">My focus:</span> {project.focus}</p>
            </section>
          </aside>
        </div>
        <footer className="mt-14 flex flex-col gap-4 border-t border-gray-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-gray-400 hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
          <Link href={"/projects/" + nextProject.slug} className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-violet-300 hover:text-violet-200">{nextProject.title}<ArrowRight size={16} aria-hidden="true" /></Link>
        </footer>
      </div>
    </main>
  );
}
