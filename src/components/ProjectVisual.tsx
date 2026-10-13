import Image from "next/image";
import { ArrowDown, Workflow } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";

export default function ProjectVisual({ project }: { project: PortfolioProject }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-gray-700/70 bg-background">
      {project.image ? (
        <div className="relative aspect-[2/1]">
          <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 1024px) 440px, (min-width: 768px) 40vw, 100vw" className="object-contain" />
        </div>
      ) : (
        <div className="p-5 sm:p-7">
          <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400">
            <Workflow size={16} aria-hidden="true" className="text-violet-300" />
            {project.architectureTitle}
          </div>
          <ol aria-label={`Architecture summary for ${project.title}`}>
            {project.architecture.map((step, index) => (
              <li key={step.title}>
                {index > 0 ? <div className="flex h-5 items-center justify-center text-gray-500"><ArrowDown size={14} aria-hidden="true" /></div> : null}
                <div className={`flex min-h-12 items-center gap-3 rounded-lg border px-3 py-2.5 ${step.planned ? "border-dashed border-gray-600 text-gray-400" : "border-gray-700 bg-surface text-gray-200"}`}>
                  <span aria-hidden="true" className="font-mono text-xs text-violet-300">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-sm font-medium">{step.title}</span>
                  {step.planned ? <span className="text-xs">Planned</span> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
      <figcaption className="border-t border-gray-800 bg-surface/60 px-5 py-3 text-xs leading-relaxed text-gray-400">{project.visualCaption}</figcaption>
    </figure>
  );
}
