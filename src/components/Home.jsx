import { useEffect, useRef, useState } from "react";

function TypewriterText({ texts }) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setTextIdx(i => (i + 1) % texts.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts]);

  return (
    <span>
      {displayed}
      <span style={{
        display: "inline-block",
        width: "3px",
        height: "1em",
        background: "#FF4D1C",
        marginLeft: "4px",
        verticalAlign: "middle",
        animation: "blink 1s step-end infinite",
      }} />
    </span>
  );
}

// ─── Resume Modal ───────────────────────────────────────────────────────────
function ResumeModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const RESUME_IMAGE_URL = "https://res.cloudinary.com/dolfdzaf2/image/upload/v1779119513/MyResume_fzqh64.jpg";
  const RESUME_DOCX_URL  = "https://res.cloudinary.com/dolfdzaf2/raw/upload/v1779121953/MyResume_r5bkpo.docx";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(8px)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0F0F0F",
          border: "1px solid rgba(255,255,255,0.08)",
          maxWidth: "680px",
          width: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          animation: "fadeUp 0.3s ease",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,77,28,0.15)",
        }}
      >
        {/* Header bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 28px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#FF4D1C",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ width: "24px", height: "1px", background: "#FF4D1C", display: "block" }} />
            Resume
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#666",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              transition: "all 0.2s ease",
              cursor: "none",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#FF4D1C";
              e.currentTarget.style.color = "#FF4D1C";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "#666";
            }}
          >
            ✕
          </button>
        </div>

        {/* Resume image preview */}
        <div style={{
          overflowY: "auto",
          padding: "24px 28px",
          flex: 1,
        }}>
          <img
            src={RESUME_IMAGE_URL}
            alt="Aniket Shukla Resume"
            style={{
              width: "100%",
              display: "block",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            onError={e => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          {/* Placeholder shown if image fails */}
          <div style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            border: "1px dashed rgba(255,255,255,0.1)",
            color: "#333",
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            letterSpacing: "2px",
            flexDirection: "column",
            gap: "12px",
          }}>
            <span style={{ fontSize: "32px", opacity: 0.3 }}>📄</span>
            <span>Add resume.png to /public folder</span>
          </div>
        </div>

        {/* Download buttons */}
        <div style={{
          padding: "20px 28px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}>
          <a
            href={RESUME_IMAGE_URL}
            download="Aniket_Shukla_Resume.png"
            style={{
              flex: 1,
              minWidth: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 20px",
              background: "#FF4D1C",
              color: "#0A0A0A",
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#F5F0E8";
              e.currentTarget.style.transform = "translate(-2px,-2px)";
              e.currentTarget.style.boxShadow = "4px 4px 0 #FF4D1C";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#FF4D1C";
              e.currentTarget.style.transform = "translate(0,0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ↓ Download PNG
          </a>
          <a
            href={RESUME_DOCX_URL}
            download="Aniket_Shukla_Resume.docx"
            style={{
              flex: 1,
              minWidth: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 20px",
              background: "transparent",
              color: "#F5F0E8",
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#FF4D1C";
              e.currentTarget.style.color = "#FF4D1C";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "#F5F0E8";
            }}
          >
            ↓ Download DOCX
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const canvasRef = useRef(null);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,77,28,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
          overflow: "hidden",
        }}
      >
        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        />

        {/* Big background text */}
        <div style={{
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(100px, 18vw, 280px)",
          fontWeight: 800,
          color: "rgba(255,255,255,0.015)",
          letterSpacing: "-10px",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}>
          DEV
        </div>

        {/* Accent line */}
        <div style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: "3px",
          background: "linear-gradient(to bottom, transparent, #FF4D1C, transparent)",
          opacity: 0.6,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>

          <p
            className="animate-fadeUp"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#FF4D1C",
              marginBottom: "24px",
              opacity: 0,
            }}
          >
            ↳ Available for work
          </p>

          <h1
            className="animate-fadeUp delay-100"
            style={{
              fontSize: "clamp(42px, 8vw, 110px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-3px",
              marginBottom: "24px",
              opacity: 0,
            }}
          >
            Aniket<br />
            <span style={{ color: "#FF4D1C" }}>Shukla</span>
          </h1>

          <div
            className="animate-fadeUp delay-200"
            style={{
              fontSize: "clamp(16px, 3vw, 28px)",
              fontWeight: 500,
              color: "#8A8A8A",
              marginBottom: "40px",
              opacity: 0,
              minHeight: "40px",
            }}
          >
            <TypewriterText texts={[
              "Software Developer",
              "React Developer",
              "Problem Solver",
              "Full-Stack Engineer",
            ]} />
          </div>

          <p
            className="animate-fadeUp delay-300"
            style={{
              maxWidth: "480px",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#666",
              marginBottom: "48px",
              opacity: 0,
            }}
          >
            I build scalable web applications and love solving problems with modern technology. Focused on clean code and great user experiences.
          </p>

          <div
            className="animate-fadeUp delay-400"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              opacity: 0,
            }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                background: "#FF4D1C",
                color: "#0A0A0A",
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#F5F0E8";
                e.currentTarget.style.transform = "translate(-2px,-2px)";
                e.currentTarget.style.boxShadow = "4px 4px 0 #FF4D1C";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#FF4D1C";
                e.currentTarget.style.transform = "translate(0,0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View Work →
            </a>

            {/* Resume button */}
            <button
              onClick={() => setShowResume(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                background: "transparent",
                color: "#F5F0E8",
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.3s ease",
                cursor: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#FF4D1C";
                e.currentTarget.style.color = "#FF4D1C";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#F5F0E8";
              }}
            >
              Resume ↗
            </button>

            <a
              href="https://github.com/aniketshukla1605"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                background: "transparent",
                color: "#F5F0E8",
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#FF4D1C";
                e.currentTarget.style.color = "#FF4D1C";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#F5F0E8";
              }}
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-shukla05"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                background: "transparent",
                color: "#F5F0E8",
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#FF4D1C";
                e.currentTarget.style.color = "#FF4D1C";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#F5F0E8";
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="animate-fadeIn delay-600"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0,
          }}
        >
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#444",
            textTransform: "uppercase",
          }}>Scroll</span>
          <div style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #444, transparent)",
            animation: "float 2s ease-in-out infinite",
          }} />
        </div>
      </section>
    </>
  );
}