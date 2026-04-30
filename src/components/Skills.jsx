import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    icon: "</>",
    skills: ["JavaScript", "C", "C++", "Python", "Java"],
  },
  {
    label: "Frontend",
    icon: "◫",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    label: "Backend",
    icon: "⬡",
    skills: ["Spring Boot", "REST APIs", "Microservices", "MySQL", "MongoDB"],
  },
  {
    label: "Tools & Dev",
    icon: "⚙",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman", "Docker", "AWS"],
  },
];

function SkillCard({ group, index }) {
  const colors = ["#FF4D1C", "#4DFFB4", "#FFD14D", "#BD8CF7"];
  const accent = colors[index % colors.length];

  return (
    <div
      className="reveal"
      style={{
        background: "#0F0F0F",
        border: "1px solid rgba(255,255,255,0.06)",
        padding: "36px 32px",
        transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent + "55";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${accent}22`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Ghost icon */}
      <div style={{
        position: "absolute",
        right: "20px",
        top: "16px",
        fontSize: "64px",
        color: `${accent}08`,
        fontFamily: "monospace",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
      }}>
        {group.icon}
      </div>

      {/* Category label */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: accent,
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}>
        <span style={{
          display: "inline-block",
          width: "20px",
          height: "1px",
          background: accent,
        }} />
        {group.label}
      </div>

      {/* Skill tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {group.skills.map((skill, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.5px",
              color: "#888",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "8px 16px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.target.style.color = accent;
              e.target.style.borderColor = accent + "55";
              e.target.style.background = accent + "0D";
            }}
            onMouseLeave={e => {
              e.target.style.color = "#888";
              e.target.style.borderColor = "rgba(255,255,255,0.07)";
              e.target.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      style={{
        padding: "120px 40px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#0A0A0A",
      }}
    >
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
        Skills & Tools
      </div>

      <h2
        className="reveal"
        style={{
          fontSize: "clamp(36px, 6vw, 80px)",
          fontWeight: 800,
          letterSpacing: "-3px",
          lineHeight: 1,
          marginBottom: "80px",
        }}
      >
        Tech Stack
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {skillGroups.map((group, i) => (
          <SkillCard key={i} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
