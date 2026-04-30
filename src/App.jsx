import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let followerX = -100, followerY = -100;
    let animId;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const animateFollower = () => {
      followerX += (pos.x - followerX) * 0.12;
      followerY += (pos.y - followerY) * 0.12;
      setFollower({ x: followerX, y: followerY });
      animId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animateFollower);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: pos.x - 6,
          top: pos.y - 6,
          width: 12, height: 12,
          background: "#FF4D1C",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: follower.x - 18,
          top: follower.y - 18,
          width: 36, height: 36,
          border: "1px solid rgba(255,77,28,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.1s ease",
        }}
      />
    </>
  );
}

function MarqueeBand() {
  const items = [
    "React.js", "●", "Spring Boot", "●", "Tailwind CSS", "●",
    "JavaScript", "●", "C / C++", "●", "Python", "●",
    "Git", "●", "REST APIs", "●", "Microservices", "●",
    "React.js", "●", "Spring Boot", "●", "Tailwind CSS", "●",
    "JavaScript", "●", "C / C++", "●", "Python", "●",
    "Git", "●", "REST APIs", "●", "Microservices", "●",
  ];

  return (
    <div
      className="marquee-band"
      style={{ padding: "16px 0", background: "#0A0A0A" }}
    >
      <div
        className="animate-marquee"
        style={{
          display: "inline-flex",
          gap: "32px",
          whiteSpace: "nowrap",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: item === "●" ? "#FF4D1C" : "#333",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
      <MarqueeBand />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
