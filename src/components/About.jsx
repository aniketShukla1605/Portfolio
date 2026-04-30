import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left");
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "5+", label: "Certifications" },
    { number: "4", label: "Projects Completed" },
    { number: "5+", label: "Technologies" },
    { number: "∞", label: "Coffee Consumed" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "120px 40px",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Section label */}
      <div
        className="reveal"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "4px",
          color: "#FF4D1C",
          textTransform: "uppercase",
          marginBottom: "60px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span style={{
          display: "block", width: "40px", height: "1px", background: "#FF4D1C"
        }} />
        About Me
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "start",
        maxWidth: "1200px",
      }}>
        {/* Left: big text */}
        <div>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: "32px",
            }}
          >
            Building the web,<br />
            <span style={{ color: "#FF4D1C" }}>one line</span><br />
            at a time.
          </h2>

          <p
            className="reveal"
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#666",
              marginBottom: "24px",
              maxWidth: "480px",
            }}
          >
            I'm a software developer passionate about building web applications
            that are not just functional but genuinely delightful to use. I enjoy
            working across the full stack — from React frontends to backend systems.
          </p>

          <p
            className="reveal"
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#666",
              maxWidth: "480px",
            }}
          >
            Currently sharpening my DSA skills and diving deeper into
            microservices architecture. Always curious, always building.
          </p>

          <div
            className="reveal"
            style={{ marginTop: "40px" }}
          >
            <a
              href="mailto:aniketshukla1605@gmail.com"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#F5F0E8",
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#FF4D1C";
                e.currentTarget.style.borderBottomColor = "#FF4D1C";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#F5F0E8";
                e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)";
              }}
            >
              aniketshukla1605@gmail.com ↗
            </a>
          </div>
        </div>

        {/* Right: stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: "32px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.paddingLeft = "16px";
                e.currentTarget.style.borderBottomColor = "#FF4D1C";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.paddingLeft = "0";
                e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.06)";
              }}
            >
              <span style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 800,
                letterSpacing: "-3px",
                color: "#FF4D1C",
                lineHeight: 1,
              }}>
                {stat.number}
              </span>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#555",
                textAlign: "right",
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div:last-of-type { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
