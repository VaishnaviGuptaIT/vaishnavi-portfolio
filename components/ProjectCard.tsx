"use client";

interface ProjectCardProps {
  projectKey: string;
  thumb: string;
  icon: string;
  isLive?: boolean;
  liveUrl?: string;
  title: string;
  desc: string;
  badges: string[];
}

export default function ProjectCard({
  projectKey,
  thumb,
  icon,
  isLive,
  liveUrl,
  title,
  desc,
  badges,
}: ProjectCardProps) {
  const openModal = () => {
    window.dispatchEvent(
      new CustomEvent("open-modal", { detail: projectKey })
    );
  };

  return (
    <div className="project-card" onClick={openModal}>
      <div className={`project-thumb ${thumb}`} style={{ position: "relative" }}>
        <span>{icon}</span>
        {isLive && (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              padding: "4px 10px",
              borderRadius: 10,
              background: "var(--grad)",
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            LIVE
          </div>
        )}
        <div className="overlay">
          <div className="project-links">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo ↗
              </a>
            )}
            <span
              className={liveUrl ? "project-link gh" : "project-link live"}
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            >
              Case Study →
            </span>
          </div>
        </div>
      </div>
      <div className="project-body">
        <div className="project-title">
          {title}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.72rem",
                color: "var(--cyan)",
                textDecoration: "none",
                marginLeft: 6,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              ↗ {liveUrl.replace("https://", "")}
            </a>
          )}
        </div>
        <div className="project-desc">{desc}</div>
        <div className="project-stack">
          {badges.map((b) => (
            <span className="tech-badge" key={b}>
              {b}
            </span>
          ))}
        </div>
        <button
          className="project-more-btn"
          onClick={(e) => {
            e.stopPropagation();
            openModal();
          }}
        >
          View Case Study →
        </button>
      </div>
    </div>
  );
}
