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

export default function Home() {
  const canvasRef = useRef(null);

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
  );
}
