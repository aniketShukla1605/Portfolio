import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Quiz App",
    description: "Microservices-based quiz system built with Spring Boot. Features user authentication, dynamic question loading, and real-time scoring.",
    tech: ["Spring Boot", "React", "Microservices", "MySQL"],
    tag: "Full Stack",
    year: "2026",
    link: "https://github.com/aniketShukla1605/Quiz_App_Backend",
  },
  {
    id: 2,
    title: "EMS",
    description: "A full-stack web application for creating, managing, and participating in events, with secure role-based access for admins, organizers, and users.",
    tech: ["React", "Spring Boot", "REST API", "Tailwind"],
    tag: "Full Stack",
    year: "2025-26",
    link: "https://github.com/aniketShukla1605/EMS",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This very portfolio — designed and built from scratch with a focus on motion, aesthetics, and clean code architecture.",
    tech: ["React", "Vite", "CSS Animations", "Tailwind"],
    tag: "Design",
    year: "2025",
    link: "https://github.com/aniketShukla1605/Portfolio",
  },
  {
    id: 4,
    title: "Blood Bank",
    description: "Built this project to learn and practice core Java web development concepts using JSP and Servlets.",
    tech: ["JSP", "Servlet", "HTML", "CSS", "MySQL"],
    tag: "Core",
    year: "2025",
    link: "https://github.com/aniketShukla1605/Blood-Bank"
  }
];

function ProjectCard({ project, index }) {
  const colors = ["#FF4D1C", "#4DFFB4", "#FFD14D", "#BD8CF7"];
  const accent = colors[index % colors.length];

  return (
    <div
      className="reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <a
        href={project.link}
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          style={{
            background: "#0F0F0F",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "40px",
            transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
            position: "relative",
            overflow: "hidden",
            height: "100%",
          }}
          onMouseEnter={e => {
            const card = e.currentTarget;
            card.style.borderColor = accent;
            card.style.transform = "translateY(-6px)";
            card.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22`;
          }}
          onMouseLeave={e => {
            const card = e.currentTarget;
            card.style.borderColor = "rgba(255,255,255,0.06)";
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
          }}
        >
          {/* Top row */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "32px",
          }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: accent,
              border: `1px solid ${accent}44`,
              padding: "4px 10px",
            }}>
              {project.tag}
            </span>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "#333",
            }}>
              {project.year}
            </span>
          </div>

          {/* Number */}
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "80px",
            fontWeight: 800,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
            position: "absolute",
            right: "20px",
            top: "20px",
            letterSpacing: "-4px",
          }}>
            {String(project.id).padStart(2, "0")}
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#F5F0E8",
            marginBottom: "16px",
            lineHeight: 1.1,
          }}>
            {project.title}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#555",
            marginBottom: "32px",
          }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
            {project.tech.map((t, i) => (
              <span key={i} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "1px",
                color: "#444",
                border: "1px solid #222",
                padding: "4px 10px",
                textTransform: "uppercase",
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: accent,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            View Project
            <span style={{ fontSize: "16px" }}>→</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: "120px 40px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(to bottom, #0A0A0A, #0D0D0D)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px" }}>
        <div>
          <div
            className="reveal"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#FF4D1C",
              textTransform: "uppercase",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span style={{ display: "block", width: "40px", height: "1px", background: "#FF4D1C" }} />
            Selected Work
          </div>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(36px, 6vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Projects
          </h2>
        </div>
        <div
          className="reveal"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: "#333",
            textAlign: "right",
          }}
        >
          {projects.length} projects<br />
          <span style={{ color: "#FF4D1C" }}>& counting</span>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: "24px",
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
