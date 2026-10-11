"use client";

import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const toggleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        toggleRef.current?.focus();
      }
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !menuRef.current?.contains(event.target)
      ) {
        if (menuRef.current) menuRef.current.open = false;
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches && menuRef.current) menuRef.current.open = false;
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-800 bg-background/95 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="container mx-auto flex min-h-20 items-center justify-between gap-4 px-6 lg:px-12"
      >
        <a
          href="#home"
          className="rounded-md font-display text-lg font-bold tracking-tight text-white sm:text-2xl"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-md text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <details ref={menuRef} className="group relative lg:hidden">
          <summary
            ref={toggleRef}
            aria-controls="mobile-navigation"
            className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg border border-gray-700 px-3 text-sm text-white [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden="true" size={20} className="group-open:hidden" />
            <X
              aria-hidden="true"
              size={20}
              className="hidden group-open:block"
            />
            Menu
          </summary>
          <ul
            id="mobile-navigation"
            className="absolute right-0 top-full mt-3 w-60 max-w-[calc(100vw-3rem)] rounded-xl border border-gray-700 bg-surface p-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    if (menuRef.current) menuRef.current.open = false;
                  }}
                  className="flex min-h-11 items-center rounded-lg px-4 py-3 text-gray-200 transition-colors hover:bg-surfaceHover hover:text-white"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
