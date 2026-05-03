import { useEffect, useRef } from "react";

const certs = [
  {
    title: "JPMorgan Chase Job Simulation",
    issuer: "Forage / JPMorgan Chase",
    year: "2026",
    description: "Hands-on software engineering tasks simulating real work at JPMorgan Chase & Co.",
    badge: "JP",
    color: "#4DFFB4",
  },
  {
    title: "Walmart Advanced Software Engineering",
    issuer: "Walmart Global Tech",
    year: "2025",
    description: "Solving real world software engineering problems at Walmart Global tech",
    badge: "SE",
    color: "#FFD14D",
  },
  {
    title: "Cyber Security",
    issuer: "Cisco",
    year: "2024",
    description: "Core concepts of network security, cryptography, ethical hacking, and threat mitigation.",
    badge: "CS",
    color: "#FF4D1C",
  },
];

export default function Certifications() {
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
      id="certifications"
      ref={sectionRef}
      style={{
        padding: "120px 40px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(to bottom, #0D0D0D, #0A0A0A)",
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
        Credentials
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
        Certifications
      </h2>

      <div style={{
        position: "relative",
        maxWidth: "800px",
      }}>
        {/* Timeline line */}
        <div style={{
          position: "absolute",
          left: "28px",
          top: 0, bottom: 0,
          width: "1px",
          background: "linear-gradient(to bottom, #FF4D1C22, #FF4D1C44, #FF4D1C22)",
        }} />

        {certs.map((cert, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              display: "flex",
              gap: "40px",
              marginBottom: "60px",
              position: "relative",
            }}
          >
            {/* Badge */}
            <div style={{
              flexShrink: 0,
              width: "56px",
              height: "56px",
              background: `${cert.color}15`,
              border: `1px solid ${cert.color}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              fontWeight: 500,
              color: cert.color,
              letterSpacing: "1px",
              position: "relative",
              zIndex: 1,
            }}>
              {cert.badge}
            </div>

            {/* Content */}
            <div
              style={{
                flex: 1,
                background: "#0F0F0F",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "28px 32px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cert.color + "44";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "12px",
                flexWrap: "wrap",
                gap: "8px",
              }}>
                <h3 style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#F5F0E8",
                  letterSpacing: "-0.5px",
                }}>
                  {cert.title}
                </h3>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: cert.color,
                  border: `1px solid ${cert.color}33`,
                  padding: "3px 10px",
                }}>
                  {cert.year}
                </span>
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#444",
                marginBottom: "12px",
              }}>
                {cert.issuer}
              </div>
              <p style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#555",
              }}>
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
