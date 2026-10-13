"use client";

import { useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export default function ProjectDisclosure({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function toggleProjects() {
    setExpanded((current) => !current);

    if (expanded) {
      // Keep the focused button in view after the extra rows are collapsed.
      requestAnimationFrame(() => {
        buttonRef.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
      });
    }
  }

  return (
    <div className="border-t border-gray-800">
      <div id="additional-projects" hidden={!expanded} className="divide-y divide-gray-800">
        {children}
      </div>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={expanded}
        aria-controls="additional-projects"
        onClick={toggleProjects}
        className="mx-auto my-8 flex min-h-12 w-fit max-w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-600 bg-background px-5 py-3 text-center text-sm font-semibold text-gray-200 transition-colors hover:border-primary/60 hover:bg-primary/10"
      >
        {expanded ? "Show fewer projects" : "Show more projects"}
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={"shrink-0 transition-transform motion-reduce:transition-none" + (expanded ? " rotate-180" : "")}
        />
      </button>
    </div>
  );
}
