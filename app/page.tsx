import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import ParticlesCanvas from "@/components/ParticlesCanvas";
import TypedText from "@/components/TypedText";
import FadeInObserver from "@/components/FadeInObserver";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
// import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <ScrollToTop />
      <Loader />
      <FadeInObserver />
      <ProjectModal />
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <ParticlesCanvas />
        </div>
        <div className="hero-content fade-in">
          <div className="hero-badge">✨ Available for Frontend Roles</div>
          <h1 className="hero-name">
            Vaishnavi
            <br />
            <span className="grad-text">Gupta</span>
          </h1>
          <p className="hero-title">
            Frontend Developer &amp; <TypedText />
          </p>
          <p className="hero-desc">
            Crafting scalable, high-performance, and visually stunning web
            experiences using React.js, Next.js, JavaScript and TypeScript.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1_KHjLykd_LGY7hc4kVM0vlA7z-uUuiWD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Resume ↓
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num" data-count="2">
                0+
              </div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num" data-count="15">
                0+
              </div>
              <div className="stat-label">Features Shipped</div>
            </div>
            <div className="stat-item">
              <div className="stat-num" data-count="100">
                0+
              </div>
              <div className="stat-label">Challenges Solved</div>
            </div>
            <div className="stat-item">
              <div className="stat-num" data-count="5">
                0+
              </div>
              <div className="stat-label">Live Projects</div>
            </div>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <div className="avatar-code">💻</div>
            </div>
          </div>
          <div
            className="orbit-item"
            style={{ top: "8%", left: "50%", transform: "translateX(-50%)" }}
          >
            ⚛️
          </div>
          <div className="orbit-item" style={{ right: "8%", top: "35%" }}>
            🔷
          </div>
          <div
            className="orbit-item"
            style={{ bottom: "8%", left: "50%", transform: "translateX(-50%)" }}
          >
            🌐
          </div>
          <div className="orbit-item" style={{ left: "8%", top: "35%" }}>
            🎨
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">
          Building Beautiful Interfaces
          <br />
          with <span className="grad-text">Scalable Architecture</span>
        </h2>
        <div className="section-line" />
        <div className="about-grid fade-in">
          <div className="about-text">
            <p>
              I specialize in developing modern frontend applications with
              React.js, Next.js, JavaScript and TypeScript. My experience spans
              enterprise HRMS systems, e-commerce platforms, and logistics
              solutions.
            </p>
            <p>
              I focus on creating reusable component architectures, seamless API
              integrations, and optimized user experiences that are both elegant
              and performant.
            </p>
            <p>
              Currently pursuing M.Tech in Computer Science at{" "}
              <strong style={{ color: "var(--purple)" }}>IIT Patna</strong>{" "}
              (Hybrid Mode) , I am always pushing the boundary between
              engineering excellence and visual creativity.
            </p>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-val">2+ Years</div>
                <div className="highlight-desc">Professional Experience</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🏆</div>
                <div className="highlight-val">Rising Star</div>
                <div className="highlight-desc">Award Recipient</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-val">IIT Patna</div>
                <div className="highlight-desc">M.Tech CSE (Pursuing)</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">💡</div>
                <div className="highlight-val">15+ Features</div>
                <div className="highlight-desc">Delivered in Production</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="tech-orbit">
              <div className="orbit-ring orbit-ring-1" />
              <div className="orbit-ring orbit-ring-2" />
              <div className="orbit-center">⚛️</div>
              <div
                className="orbit-tech"
                style={{
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                title="Next.js"
              >
                ▲
              </div>
              <div
                className="orbit-tech"
                style={{
                  top: "50%",
                  right: 0,
                  transform: "translate(50%,-50%)",
                }}
                title="TypeScript"
              >
                TS
              </div>
              <div
                className="orbit-tech"
                style={{
                  bottom: 0,
                  left: "50%",
                  transform: "translate(-50%,50%)",
                }}
                title="Tailwind"
              >
                🌊
              </div>
              <div
                className="orbit-tech"
                style={{
                  top: "50%",
                  left: 0,
                  transform: "translate(-50%,-50%)",
                }}
                title="Redux"
              >
                🔴
              </div>
              <div
                className="orbit-tech"
                style={{
                  top: "18%",
                  right: "5%",
                  transform: "translate(50%,-50%)",
                }}
                title="Three.js"
              >
                🌐
              </div>
              <div
                className="orbit-tech"
                style={{
                  bottom: "18%",
                  right: "5%",
                  transform: "translate(50%,50%)",
                }}
                title="GSAP"
              >
                ⚡
              </div>
              <div
                className="orbit-tech"
                style={{
                  bottom: "18%",
                  left: "5%",
                  transform: "translate(-50%,50%)",
                }}
                title="Git"
              >
                📦
              </div>
              <div
                className="orbit-tech"
                style={{
                  top: "18%",
                  left: "5%",
                  transform: "translate(-50%,-50%)",
                }}
                title="Material UI"
              >
                🎨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label">What I Know</div>
        <h2 className="section-title">
          Technical <span className="grad-text">Skills</span>
        </h2>
        <div className="section-line" />

        <div className="skills-categories fade-in">
          {/* Frontend Core */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">⚛️</span>Frontend Core
            </div>
            <div className="skill-tags">
              {[
                "HTML5",
                "CSS3",
                "JavaScript ES6+",
                "TypeScript",
                "React.js",
                "Next.js",
                "React Native CLI",
              ].map((s) => (
                <span className="skill-tag purple" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Styling & Design */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">🎨</span>Styling & Design
            </div>
            <div className="skill-tags">
              {[
                "Tailwind CSS",
                "Material UI",
                "Bootstrap",
                "SCSS",
                "Responsive Design",
                "Figma",
              ].map((s) => (
                <span className="skill-tag pink" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* State Management */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">🔄</span>State Management
            </div>
            <div className="skill-tags">
              {["Redux Toolkit", "React Query", "REST APIs", "Socket.IO"].map(
                (s) => (
                  <span className="skill-tag cyan" key={s}>
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Animation */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">✨</span>Animation
            </div>
            <div className="skill-tags">
              {["GSAP", "Framer Motion", "Three.js", "CSS Animations"].map(
                (s) => (
                  <span className="skill-tag green" key={s}>
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Tools & Collaboration */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">🛠️</span>Tools & Collaboration
            </div>
            <div className="skill-tags">
              {[
                "Git",
                "GitHub",
                "Vite",
                "VS Code",
                "Cursor",
                "Windsurf",
                "Antigravity",
                "Jira",
                "Postman",
                "Chrome DevTools",
                "Stripe",
                "Performance Optimization",
              ].map((s) => (
                <span className="skill-tag purple" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Engineering */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">🚀</span>Frontend Engineering
            </div>
            <div className="skill-tags">
              {[
                "Component Architecture",
                "Reusable Components",
                "Responsive Design",
                "Cross-Browser Compatibility",
                "REST API Integration",
                "Authentication",
                "Form Validation",
                "Code Splitting",
                "Lazy Loading",
                "Performance Optimization",
                "SEO Basics",
              ].map((s) => (
                <span className="skill-tag green" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">🤖</span>AI Tools
            </div>
            <div className="skill-tags">
              {[
                "ChatGPT",
                "Claude",
                "Gemini",
                "GitHub Copilot",
                "Cursor AI",
                "Windsurf AI",
                "Antigravity",
                "Lovable",
                "Replit AI",
                "DeepSeek",
                "Blackbox AI",
              ].map((s) => (
                <span className="skill-tag cyan" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="skill-category">
            <div className="skill-cat-title">
              <span className="skill-cat-icon">💻</span>Programming
            </div>
            <div className="skill-tags">
              {[
                "C/C++",
                "Core Java",
                "OOP",
                "PHP (Basic)",
                "Python (Basic)",
              ].map((s) => (
                <span className="skill-tag pink" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-label">My Journey</div>
        <h2 className="section-title">
          Work <span className="grad-text">Experience</span>
        </h2>
        <div className="section-line" />
        <div className="timeline fade-in">
          {/* Zignuts */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">
                    Junior Software Development Engineer
                  </div>
                  <div className="exp-company">Zignuts Technolab</div>
                </div>
                <div className="exp-meta">
                  <div className="exp-duration">Feb 2025 – Apr 2026</div>
                  <div className="exp-location">📍 Gandhinagar, Gujarat</div>
                </div>
              </div>
              <div className="exp-projects">
                <div className="exp-project">
                  <div className="exp-project-name">
                    📷 Camera Trading Marketplace
                  </div>
                  <div className="exp-project-desc">
                    Developed a scalable e-commerce marketplace for buying and
                    selling used filmmaking and photography equipment. Built
                    dynamic product pages, product review workflows, admin
                    modules, Stripe payment integration, and real-time Socket.IO
                    features.
                  </div>
                  <div className="tech-badges">
                    {[
                      "Next.js",
                      "JavaScript",
                      "Material UI",
                      "Redux",
                      "Socket.IO",
                      "Stripe",
                    ].map((b) => (
                      <span className="tech-badge" key={b}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="exp-project">
                  <div className="exp-project-name">
                    👥 HRMS – Human Resource Management System
                  </div>
                  <div className="exp-project-desc">
                    Built a scalable HRMS with role-based access control,
                    automated workflows, salary calculations, approval
                    hierarchies, and performance evaluation modules with
                    reusable responsive UI components.
                  </div>
                  <div className="tech-badges">
                    {[
                      "React.js",
                      "Redux Toolkit",
                      "Bootstrap",
                      "SCSS",
                      "REST APIs",
                    ].map((b) => (
                      <span className="tech-badge" key={b}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ThinkTanker */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">ReactJS Developer</div>
                  <div className="exp-company">ThinkTanker Pvt. Ltd.</div>
                </div>
                <div className="exp-meta">
                  <div className="exp-duration">Jan 2024 – Jan 2025</div>
                  <div className="exp-location">📍 Ahmedabad, Gujarat</div>
                </div>
              </div>
              <div className="exp-projects">
                <div className="exp-project">
                  <div className="exp-project-name">
                    💎 Pristine Gems
                    <a
                      href="https://www.pristinegem.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--cyan)",
                        marginLeft: 8,
                        textDecoration: "none",
                      }}
                    >
                      ↗ Live Site
                    </a>
                  </div>
                  <div className="exp-project-desc">
                    Developed responsive and interactive UI components for a
                    jewelry e-commerce platform. Improved mobile responsiveness,
                    performance, and integrated secure purchase flows to enhance
                    user engagement.
                  </div>
                  <div className="tech-badges">
                    {["React.js", "Tailwind CSS", "JavaScript"].map((b) => (
                      <span className="tech-badge" key={b}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="exp-project">
                  <div className="exp-project-name">
                    🏭 Machinewale
                    <a
                      href="https://machinewale.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--cyan)",
                        marginLeft: 8,
                        textDecoration: "none",
                      }}
                    >
                      ↗ Live Site
                    </a>
                  </div>
                  <div className="exp-project-desc">
                    Designed responsive interfaces for Bulk-Buy and Inventory
                    modules. Built reusable components, integrated REST APIs,
                    and streamlined frontend workflows with improved
                    validations.
                  </div>
                  <div className="tech-badges">
                    {["HTML", "Tailwind CSS", "JavaScript", "REST APIs"].map(
                      (b) => (
                        <span className="tech-badge" key={b}>
                          {b}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div
                  className="exp-project"
                  style={{ borderLeftColor: "var(--pink)" }}
                >
                  <div className="exp-project-name">
                    💍 Fabzure{" "}
                    <a
                      href="https://fabzure.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--cyan)",
                        marginLeft: 8,
                        textDecoration: "none",
                      }}
                    >
                      ↗ Live Site
                    </a>
                  </div>
                  <div className="exp-project-desc">
                    Developed responsive and visually engaging user interfaces
                    for a fashion and jewelry e-commerce platform. Built dynamic
                    product catalogs with interactive filtering, product detail
                    views, and smooth user interactions. Integrated frontend
                    with PHP backend for seamless product management and order
                    workflows.
                  </div>
                  <div className="tech-badges">
                    {["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP"].map(
                      (b) => (
                        <span className="tech-badge" key={b}>
                          {b}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Silver Oak */}
          <div className="timeline-item" style={{ marginBottom: 0 }}>
            <div className="timeline-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">Lecturer – Diploma CE/IT</div>
                  <div className="exp-company">Silver Oak University</div>
                </div>
                <div className="exp-meta">
                  <div className="exp-duration">Jun 2023 – Dec 2023</div>
                  <div className="exp-location">📍 Ahmedabad, Gujarat</div>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <p
                  style={{
                    color: "var(--gray)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                  }}
                >
                  Delivered courses on HTML, CSS, JavaScript, PHP, and Python.
                  Created practical assignments and conducted hands-on coding
                  sessions to strengthen student programming skills.
                </p>
                <div className="tech-badges" style={{ marginTop: 12 }}>
                  {["HTML", "CSS", "JavaScript", "PHP", "Python"].map((b) => (
                    <span className="tech-badge" key={b}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">What I&apos;ve Built</div>
        <h2 className="section-title">
          Featured <span className="grad-text">Projects</span>
        </h2>
        <div className="section-line" />
        <div className="projects-grid fade-in">
          {projects.map((p) => (
            <ProjectCard
              key={p.key}
              projectKey={p.key}
              thumb={p.thumb}
              icon={p.icon}
              isLive={!!p.live}
              liveUrl={p.live ?? undefined}
              title={p.title}
              desc={p.shortDesc}
              badges={p.badges}
            />
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-label">Academic Background</div>
        <h2 className="section-title">
          My <span className="grad-text">Education</span>
        </h2>
        <div className="section-line" />

        <div className="edu-grid fade-in">
          {/* M.Tech */}
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-degree">
              M.Tech in Computer Science and Engineering
            </div>
            <div className="edu-school">
              Indian Institute of Technology Patna
            </div>
            <div className="edu-meta">
              <span className="edu-year">2025 – Present</span>
              <span className="edu-cgpa">Pursuing</span>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--gray)",
                marginTop: 16,
                lineHeight: 1.6,
              }}
            >
              Hybrid mode program at one of India&apos;s premier technical
              institutes, strengthening expertise in computer science
              fundamentals and advanced software engineering.
            </p>
          </div>

          {/* B.E */}
          <div className="edu-card">
            <div className="edu-icon">📚</div>
            <div className="edu-degree">B.E in Information Technology</div>
            <div className="edu-school">
              Silver Oak College of Engineering and Technology
            </div>
            <div className="edu-meta">
              <span className="edu-year">2019 – 2023</span>
              <span className="edu-cgpa">CGPA: 8.46</span>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--gray)",
                marginTop: 16,
                lineHeight: 1.6,
              }}
            >
              Four-year undergraduate program covering computer science, web
              technologies, programming fundamentals, and software engineering
              practices.
            </p>
          </div>

          {/* 12th Standard */}
          <div className="edu-card">
            <div className="edu-icon">🏫</div>
            <div className="edu-degree">
              Higher Secondary Education (12th Science)
            </div>
            <div className="edu-school">
              Jay Somnath Higher Secondary School
            </div>
            <div className="edu-meta">
              <span className="edu-year">2018 – 2019</span>
              <span className="edu-cgpa">Percentage: 65.85%</span>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--gray)",
                marginTop: 16,
                lineHeight: 1.6,
              }}
            >
              Completed higher secondary education with a focus on science and
              mathematics, building a strong foundation for engineering studies.
            </p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" style={{ background: "var(--bg)" }}>
        <div className="section-label">Recognition</div>
        <h2 className="section-title">
          Achievements &amp; <span className="grad-text">Awards</span>
        </h2>
        <div className="section-line" />
        <div className="achievements-grid fade-in">
          <div className="ach-card">
            <span className="ach-icon">⭐</span>
            <div className="ach-title">Rising Star Award</div>
            <div className="ach-desc">
              Recognized as a Rising Star at ThinkTanker Pvt. Ltd. for
              exceptional performance and contributions to frontend development.
            </div>
          </div>
          <div className="ach-card">
            <span className="ach-icon">💡</span>
            <div className="ach-title">100+ Coding Challenges</div>
            <div className="ach-desc">
              Solved over 100 coding challenges across multiple competitive
              programming platforms, demonstrating strong algorithmic thinking.
            </div>
          </div>
          <div className="ach-card">
            <span className="ach-icon">🎓</span>
            <div className="ach-title">IIT Patna – M.Tech</div>
            <div className="ach-desc">
              Secured admission to M.Tech in CSE at Indian Institute of
              Technology Patna, one of India&apos;s most prestigious technical
              universities.
            </div>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" style={{ background: "var(--bg2)" }}>
        <div className="section-label">Download</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Get My <span className="grad-text">Resume</span>
        </h2>
        <div className="section-line" style={{ margin: "0 auto 40px" }} />
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="fade-in"
        >
          <div className="resume-card">
            <div
              style={{
                fontSize: "4rem",
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              📄
            </div>
            <h3
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "1.4rem",
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              Vaishnavi Gupta
            </h3>
            <p
              style={{
                color: "var(--gray)",
                textAlign: "center",
                fontSize: "0.9rem",
                marginBottom: 28,
              }}
            >
              Frontend Developer | React.js · Next.js · TypeScript · JavaScript
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://drive.google.com/file/d/1_KHjLykd_LGY7hc4kVM0vlA7z-uUuiWD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Resume ↓
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ textAlign: "center" }}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">
          Let&apos;s Build Something
          <br />
          <span className="grad-text">Amazing Together</span>
        </h2>
        <div className="section-line" style={{ margin: "0 auto 60px" }} />
        <div className="contact-grid fade-in">
          <div className="contact-info">
            <h3>Open to Opportunities</h3>
            <p>
              I&apos;m actively seeking Frontend Developer opportunities where I
              can contribute to building scalable and high-impact products.
              Let&apos;s connect and create something extraordinary.
            </p>
            <div className="contact-links">
              <a
                href="mailto:vaishurgupta2010@gmail.com"
                className="contact-link"
              >
                <div className="contact-link-icon">📧</div>
                <div>
                  <div className="contact-link-text">Email</div>
                  <div className="contact-link-sub">
                    vaishurgupta2010@gmail.com
                  </div>
                </div>
              </a>
              <a href="tel:+919601185406" className="contact-link">
                <div className="contact-link-icon">📞</div>
                <div>
                  <div className="contact-link-text">Phone</div>
                  <div className="contact-link-sub">+91 9601185406</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnavi-gupta-175ab1214/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">💼</div>
                <div>
                  <div className="contact-link-text">LinkedIn</div>
                  <div className="contact-link-sub">Vaishnavi Gupta</div>
                </div>
              </a>
              <a
                href="https://github.com/VaishnaviGuptaIT"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">🐙</div>
                <div>
                  <div className="contact-link-text">GitHub</div>
                  <div className="contact-link-sub">@VaishnaviGuptaIT</div>
                </div>
              </a>
              <div className="contact-link" style={{ cursor: "default" }}>
                <div className="contact-link-icon">📍</div>
                <div>
                  <div className="contact-link-text">Location</div>
                  <div className="contact-link-sub">
                    Ahmedabad, Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ContactForm /> */}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Vaishnavi Gupta</div>
        <p className="footer-text">
          © 2026 Vaishnavi Gupta - Built with passion & clean code.
        </p>
        <div className="footer-socials">
          <a
            href="mailto:vaishurgupta2010@gmail.com"
            className="social-btn"
            title="Email"
          >
            📧
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi-gupta-175ab1214/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://github.com/VaishnaviGuptaIT"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="GitHub"
          >
            🐙
          </a>
          <a href="tel:+919601185406" className="social-btn" title="Phone">
            📞
          </a>
        </div>
      </footer>
    </>
  );
}
