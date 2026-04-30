import { useEffect, useRef } from "react";

export default function Contact() {
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

  const links = [
    { label: "Email", value: "aniketshukla1605@gmail.com", href: "mailto:aniketshukla1605@gmail.com" },
    { label: "LinkedIn", value: "/in/aniket-shukla05", href: "https://www.linkedin.com/in/aniket-shukla05" },
    { label: "GitHub", value: "/aniketshukla", href: "https://github.com/aniketshukla1605" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "120px 40px 80px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Big background text */}
      <div style={{
        position: "absolute",
        bottom: "-40px",
        left: "-20px",
        fontSize: "clamp(80px, 18vw, 250px)",
        fontWeight: 800,
        color: "rgba(255,255,255,0.015)",
        letterSpacing: "-10px",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
      }}>
        HELLO
      </div>

      {/* Label */}
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
        Get In Touch
      </div>

      {/* Headline */}
      <h2
        className="reveal"
        style={{
          fontSize: "clamp(42px, 9vw, 120px)",
          fontWeight: 800,
          letterSpacing: "-4px",
          lineHeight: 0.95,
          marginBottom: "24px",
          maxWidth: "900px",
        }}
      >
        Let's build<br />
        something<br />
        <span style={{ color: "#FF4D1C" }}>great.</span>
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: "16px",
          lineHeight: 1.7,
          color: "#555",
          maxWidth: "440px",
          marginBottom: "64px",
        }}
      >
        I'm always open to new opportunities and interesting projects.
        Whether you have a question, a proposal, or just want to say hi
        — my inbox is always open.
      </p>

      {/* Links */}
      <div
        className="reveal"
        style={{ marginBottom: "80px" }}
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "24px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              textDecoration: "none",
              color: "#F5F0E8",
              transition: "all 0.3s ease",
              group: true,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.paddingLeft = "16px";
              e.currentTarget.style.borderBottomColor = "#FF4D1C";
              e.currentTarget.querySelector(".arrow").style.color = "#FF4D1C";
              e.currentTarget.querySelector(".label").style.color = "#FF4D1C";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.paddingLeft = "0";
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.05)";
              e.currentTarget.querySelector(".arrow").style.color = "#333";
              e.currentTarget.querySelector(".label").style.color = "#444";
            }}
          >
            <div>
              <div
                className="label"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#444",
                  marginBottom: "4px",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </div>
              <div style={{
                fontSize: "clamp(14px, 2vw, 20px)",
                fontWeight: 600,
                letterSpacing: "-0.5px",
              }}>
                {link.value}
              </div>
            </div>
            <span
              className="arrow"
              style={{
                fontSize: "24px",
                color: "#333",
                transition: "color 0.3s ease, transform 0.3s ease",
              }}
            >
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div
        className="reveal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "2px",
          color: "#333",
          textTransform: "uppercase",
        }}>
          © 2025 Aniket Shukla
        </span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "2px",
          color: "#333",
          textTransform: "uppercase",
        }}>
          Built with React + Vite
          <span style={{ color: "#FF4D1C" }}> ♥</span>
        </span>
      </div>
    </section>
  );
}
