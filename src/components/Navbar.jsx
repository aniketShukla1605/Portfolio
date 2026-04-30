import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Projects", "Skills", "Certifications", "Contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? "16px 40px" : "24px 40px",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#F5F0E8",
          textDecoration: "none",
        }}
      >
        ANIKET<span style={{ color: "#FF4D1C" }}>.</span>
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "40px",
          listStyle: "none",
          alignItems: "center",
        }}
        className="hidden-mobile"
      >
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover-line"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#8A8A8A",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={e => e.target.style.color = "#F5F0E8"}
              onMouseLeave={e => e.target.style.color = "#8A8A8A"}
            >
              {link}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:aniketshukla1605@gmail.com"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#FF4D1C",
              textDecoration: "none",
              border: "1px solid #FF4D1C",
              padding: "8px 18px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.target.style.background = "#FF4D1C";
              e.target.style.color = "#0A0A0A";
            }}
            onMouseLeave={e => {
              e.target.style.background = "transparent";
              e.target.style.color = "#FF4D1C";
            }}
          >
            Hire me
          </a>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "#F5F0E8",
          fontSize: "22px",
          cursor: "none",
        }}
        className="show-mobile"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#0A0A0A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            zIndex: 99,
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute", top: "24px", right: "40px",
              background: "none", border: "none",
              color: "#FF4D1C", fontSize: "24px", cursor: "none",
            }}
          >✕</button>
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#F5F0E8",
                textDecoration: "none",
                animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "#FF4D1C"}
              onMouseLeave={e => e.target.style.color = "#F5F0E8"}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
