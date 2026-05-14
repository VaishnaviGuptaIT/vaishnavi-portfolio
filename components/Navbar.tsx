"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobile = () => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        id="mobile-nav"
        className={mobileOpen ? "open" : ""}
        style={{ display: mobileOpen ? "flex" : undefined }}
      >
        <button className="mobile-close" onClick={closeMobile}>
          ✕
        </button>
        <a href="#hero" onClick={closeMobile}>Home</a>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#skills" onClick={closeMobile}>Skills</a>
        <a href="#experience" onClick={closeMobile}>Experience</a>
        <a href="#projects" onClick={closeMobile}>Projects</a>
        <a href="#contact" onClick={closeMobile}>Contact</a>
      </div>

      <nav id="navbar">
        <div className="nav-logo">Vaishnavi Gupta</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <ThemeToggle />
          <a href="mailto:vaishurgupta2010@gmail.com" className="nav-cta">
            Hire Me
          </a>
        </div>
        <div className="hamburger" onClick={openMobile}>
          <span />
          <span />
          <span />
        </div>
      </nav>
    </>
  );
}
