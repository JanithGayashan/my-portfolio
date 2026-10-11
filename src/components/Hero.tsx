import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { profile } from "@/data/profile";
import TypewriterHeadline from "@/components/TypewriterHeadline";

const socialLinks = [
  { label: "GitHub", href: profile.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedin },
  { label: "Kaggle", href: profile.socials.kaggle, icon: FaKaggle },
  {
    label: "Hugging Face",
    href: profile.socials.huggingface,
    icon: SiHuggingface,
  },
] as const;

export default function Hero() {
  return (
    <div className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/20 blur-[100px] motion-safe:animate-pulse sm:h-[500px] sm:w-[500px] md:h-[700px] md:w-[700px] md:blur-[160px]"
      />

      <div className="container mx-auto flex w-full flex-col items-center justify-between gap-12 px-6 md:flex-row lg:px-12">
        <div className="hero-intro w-full md:w-3/5">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-secondary sm:text-base">
            {profile.role}
          </p>
          <h1
            id="home-heading"
            className="mb-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <TypewriterHeadline />
          <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {profile.introduction}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="primary-button w-full sm:w-auto">
              View Projects
            </a>
            <Link href="/resume" className="secondary-button w-full sm:w-auto">
              View Résumé
            </Link>
            <a href="#contact" className="secondary-button w-full sm:w-auto">
              Contact Me
            </a>
          </div>

          <ul
            aria-label="Professional profiles"
            className="mt-8 flex items-center gap-3"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label + " profile (opens in a new tab)"}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-surface hover:text-white"
                >
                  <Icon size={25} aria-hidden="true" focusable="false" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-portrait flex w-full justify-center md:w-2/5 md:justify-end">
          <div className="relative group">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-30 blur transition duration-1000 group-hover:opacity-50"
            />
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-gray-800 shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"
              />
              <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/hero-profile.jpg"
                  alt="Portrait of Janith Gayashan"
                  fill
                  preload
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 256px"
                  className="object-cover object-[50%_70%] transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
