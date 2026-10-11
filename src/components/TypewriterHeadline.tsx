"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";

const phrases = [
  "Machine Learning Systems",
  "Agentic AI Workflows",
  "Computer Vision Systems",
  "FastAPI Backend Architectures",
  "LangGraph Solutions",
] as const;

function subscribeToReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotion() {
  return true;
}

export default function TypewriterHeadline() {
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  const [paused, setPaused] = useState(false);
  const [frame, setFrame] = useState({
    wordIndex: 0,
    length: phrases[0].length,
    isDeleting: true,
  });
  const { wordIndex, length, isDeleting } = frame;
  const wordLength = phrases[wordIndex].length;

  useEffect(() => {
    if (reducedMotion || paused) return;

    const delay = isDeleting
      ? length === wordLength
        ? 2000
        : 40
      : length === 0
        ? 500
        : 70;

    const timer = window.setTimeout(() => {
      setFrame((current) => {
        if (current.isDeleting) {
          return current.length <= 1
            ? {
                wordIndex: (current.wordIndex + 1) % phrases.length,
                length: 0,
                isDeleting: false,
              }
            : { ...current, length: current.length - 1 };
        }

        const nextLength = current.length + 1;
        return {
          ...current,
          length: nextLength,
          isDeleting: nextLength === phrases[current.wordIndex].length,
        };
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, length, paused, reducedMotion, wordLength]);

  const text = reducedMotion
    ? phrases[0]
    : phrases[wordIndex].slice(0, length);
  const PlaybackIcon = paused ? Play : Pause;

  return (
    <div className="mb-6 grid max-w-xl grid-cols-[minmax(0,1fr)_2.75rem] items-start gap-2 text-xl font-semibold sm:text-2xl md:text-3xl">
      <span className="sr-only">
        Machine learning, AI workflows, and backend development.
      </span>
      <span aria-hidden="true" className="grid min-w-0">
        <span className="invisible col-start-1 row-start-1">
          FastAPI Backend Architectures<span className="ml-1">|</span>
        </span>
        <span className="col-start-1 row-start-1">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {text}
          </span>
          <span
            className={
              "ml-1 text-secondary " +
              (!paused && !reducedMotion ? "motion-safe:animate-pulse" : "")
            }
          >
            |
          </span>
        </span>
      </span>
      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          aria-label={paused ? "Resume headline animation" : "Pause headline animation"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-surface"
        >
          <PlaybackIcon size={18} aria-hidden="true" focusable="false" />
        </button>
      )}
    </div>
  );
}
