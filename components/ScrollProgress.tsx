"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const prog = document.getElementById("scroll-progress");
    const nav = document.getElementById("navbar");

    const onScroll = () => {
      if (prog) {
        const h =
          document.documentElement.scrollHeight - window.innerHeight;
        prog.style.width = (window.scrollY / h) * 100 + "%";
      }
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 60);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="scroll-progress" />;
}
