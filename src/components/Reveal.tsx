import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

// Keep shared content visible in server-rendered HTML, including without JavaScript.
export default function Reveal({ children }: RevealProps) {
  return <div>{children}</div>;
}
