"use client";

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById("loader");
      if (loader) {
        loader.classList.add("done");
        setTimeout(() => {
          loader.style.display = "none";
        }, 700);
      }
      const heroContent = document.querySelector(
        "#hero .hero-content"
      ) as HTMLElement | null;
      if (heroContent) heroContent.classList.add("visible");

      // animate counters
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseInt(el.dataset.count || "0");
        let c = 0;
        const step = target / 50;
        const interval = setInterval(() => {
          c = Math.min(c + step, target);
          el.textContent = Math.floor(c) + "+";
          if (c >= target) clearInterval(interval);
        }, 30);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader">
      <div className="logo-text">VG</div>
      <div className="bar-wrap">
        <div className="bar" />
      </div>
      <p
        style={{
          fontSize: "0.78rem",
          color: "var(--gray)",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        Loading Portfolio
      </p>
    </div>
  );
}
