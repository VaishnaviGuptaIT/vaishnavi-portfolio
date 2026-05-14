"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "@/data/projects";

export default function ProjectModal() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<string>) => {
      const p = projects.find((pr) => pr.key === e.detail);
      if (p) {
        setActiveProject(p);
        document.body.style.overflow = "hidden";
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("open-modal" as never, handleOpen as EventListener);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-modal" as never, handleOpen as EventListener);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const close = () => {
    setActiveProject(null);
    document.body.style.overflow = "";
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  if (!activeProject) return null;

  const p = activeProject;

  return (
    <div
      id="modal-overlay"
      className="open"
      onClick={handleOverlayClick}
    >
      <div className="modal" id="modal-content">
        <button className="modal-close" onClick={close}>
          ✕
        </button>
        <div className="modal-tag">{p.tag}</div>
        <h2>
          {p.icon} {p.title}
        </h2>
        <p>{p.desc}</p>
        <h4>✦ Key Features</h4>
        <ul>
          {p.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <h4>🛠 Tech Stack</h4>
        <div className="tech-badges" style={{ marginBottom: 16 }}>
          {p.stack.map((s) => (
            <span className="tech-badge" key={s}>
              {s}
            </span>
          ))}
        </div>
        <h4>📈 Business Impact</h4>
        <p>{p.impact}</p>
        <div className="modal-links">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo ↗
            </a>
          )}
          <button className="btn-outline" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
