"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };

    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();

    const addHover = () => {
      const targets = document.querySelectorAll(
        "a,button,.project-card,.skill-category,.highlight-card,.contact-link,.edu-card,.ach-card"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor?.classList.add("hovering");
          ring?.classList.add("hovering");
        });
        el.addEventListener("mouseleave", () => {
          cursor?.classList.remove("hovering");
          ring?.classList.remove("hovering");
        });
      });
    };

    // slight delay to ensure DOM is ready
    const t = setTimeout(addHover, 500);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
