"use client";

import { useEffect, useRef } from "react";

const phrases = [
  "Software Engineer",
  "Frontend Specialist",
  "React & Next.js Developer",
  "UI Craftsperson",
  "TypeScript & JavaScript Developer",
  "AI & Full-Stack Enthusiast",
  "Building Scalable Web Apps",
];

export default function TypedText() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let pi = 0,
      ci = 0,
      deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const typeText = () => {
      const el = ref.current;
      if (!el) return;
      const phrase = phrases[pi];
      if (!deleting) {
        ci++;
        el.textContent = phrase.slice(0, ci);
        if (ci === phrase.length) {
          deleting = true;
          timeout = setTimeout(typeText, 1600);
          return;
        }
      } else {
        ci--;
        el.textContent = phrase.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      timeout = setTimeout(typeText, deleting ? 50 : 90);
    };

    timeout = setTimeout(typeText, 2400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="typed" ref={ref} id="typed-text" />
  );
}
