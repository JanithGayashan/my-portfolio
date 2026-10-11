"use client";

import { usePathname } from "next/navigation";

export default function SkipLink() {
  const pathname = usePathname();

  // Project page accessibility is deferred with the project section review.
  if (pathname !== "/" && pathname !== "/resume") return null;

  return (
    <a href="#main-content" className="skip-link">
      Skip to content
    </a>
  );
}
