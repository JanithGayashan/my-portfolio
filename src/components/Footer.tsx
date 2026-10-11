import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-gray-400 sm:flex-row sm:text-left">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-sm hover:text-white"
          >
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-sm hover:text-white"
          >
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="#home"
            className="inline-flex min-h-11 items-center rounded-sm hover:text-white"
          >
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
