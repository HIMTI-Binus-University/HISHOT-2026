import { useState, useEffect } from "react";

const StarSparkle = ({ style }) => (
  <svg viewBox="0 0 40 40" style={style} aria-hidden="true">
    <path
      d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z"
      fill="white"
      opacity="0.9"
    />
  </svg>
);

const CircuitDot = ({ style }) => (
  <svg viewBox="0 0 20 20" style={style} aria-hidden="true">
    <circle cx="10" cy="10" r="6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
    <circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.6)" />
  </svg>
);

const Cloud = ({ color1, color2, style }) => (
  <svg viewBox="0 0 200 120" style={style} aria-hidden="true">
    <defs>
      <radialGradient id={`cg-${color1}`} cx="50%" cy="60%" r="60%">
        <stop offset="0%" stopColor={color1} stopOpacity="1" />
        <stop offset="100%" stopColor={color2} stopOpacity="0.7" />
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="80" rx="90" ry="50" fill={`url(#cg-${color1})`} />
    <ellipse cx="60" cy="65" rx="50" ry="40" fill={`url(#cg-${color1})`} />
    <ellipse cx="140" cy="60" rx="55" ry="38" fill={`url(#cg-${color1})`} />
    <ellipse cx="100" cy="50" rx="45" ry="38" fill={`url(#cg-${color1})`} />
  </svg>
);

const DogMascot = ({ style }) => (
  <svg viewBox="0 0 120 140" style={style} aria-hidden="true">
    <ellipse cx="60" cy="85" rx="35" ry="38" fill="#E8D5B0" />
    <ellipse cx="60" cy="75" rx="32" ry="32" fill="#E8D5B0" />
    <ellipse cx="35" cy="58" rx="14" ry="18" fill="#D4B896" transform="rotate(-15 35 58)" />
    <ellipse cx="85" cy="58" rx="14" ry="18" fill="#D4B896" transform="rotate(15 85 58)" />
    <ellipse cx="60" cy="78" rx="28" ry="28" fill="#EFE0BE" />
    <ellipse cx="48" cy="72" rx="8" ry="9" fill="white" />
    <ellipse cx="72" cy="72" rx="8" ry="9" fill="white" />
    <circle cx="49" cy="73" r="5" fill="#1a1a1a" />
    <circle cx="73" cy="73" r="5" fill="#1a1a1a" />
    <circle cx="50" cy="71" r="2" fill="white" opacity="0.8" />
    <circle cx="74" cy="71" r="2" fill="white" opacity="0.8" />
    <ellipse cx="60" cy="85" rx="10" ry="7" fill="#D4856A" />
    <ellipse cx="55" cy="90" rx="5" ry="4" fill="#F0A090" />
    <ellipse cx="65" cy="90" rx="5" ry="4" fill="#F0A090" />
    <rect x="52" y="62" width="16" height="8" rx="4" fill="#5DCAA5" opacity="0.9" />
    <ellipse cx="44" cy="90" rx="6" ry="5" fill="#F0C0B0" />
    <ellipse cx="76" cy="90" rx="6" ry="5" fill="#F0C0B0" />
    <ellipse cx="50" cy="115" rx="12" ry="8" fill="#D4B896" />
    <ellipse cx="70" cy="115" rx="12" ry="8" fill="#D4B896" />
    <circle cx="50" cy="116" r="5" fill="#C4A082" />
    <circle cx="70" cy="116" r="5" fill="#C4A082" />
  </svg>
);

export default function HiShotHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Event", "FAQ"];

  return (
    <div className="min-h-screen font-sans overflow-hidden" style={{ background: "#0d1b2e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Poppins:wght@400;500;600&display=swap');

        .hishot-logo-h { color: #FF8DC7; }
        .hishot-logo-i { color: #A78BFA; }
        .hishot-logo-s { color: #5ECFB2; }
        .hishot-logo-h2 { color: #FFD86B; }
        .hishot-logo-o { color: #FB923C; }
        .hishot-logo-t { color: #60A5FA; }

        .hero-title span {
          display: inline-block;
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: clamp(3.5rem, 10vw, 7rem);
          letter-spacing: -2px;
          text-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }

        .btn-primary {
          background: linear-gradient(135deg, #D946A8, #A855F7);
          color: white;
          border: none;
          padding: 0.85rem 2.2rem;
          border-radius: 9999px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(168,85,247,0.4);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(168,85,247,0.55);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.12);
          color: white;
          border: 2px solid rgba(255,255,255,0.4);
          padding: 0.85rem 2.2rem;
          border-radius: 9999px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
          backdrop-filter: blur(8px);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.22);
          transform: translateY(-2px);
        }

        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #1e3a5f;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #D946A8, #A855F7);
          border-radius: 2px;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #6D28D9; }
        .nav-link:hover::after { width: 100%; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.15); }
          50% { box-shadow: 0 0 30px 10px rgba(255,255,255,0.08); }
        }

        .float-dog { animation: floatSlow 4s ease-in-out infinite; }
        .float-cloud-1 { animation: float 5s ease-in-out infinite; }
        .float-cloud-2 { animation: float 6s ease-in-out infinite 1s; }
        .float-cloud-3 { animation: float 4.5s ease-in-out infinite 0.5s; }
        .float-cloud-4 { animation: float 5.5s ease-in-out infinite 1.5s; }

        .star-1 { animation: twinkle 2s ease-in-out infinite; }
        .star-2 { animation: twinkle 2.5s ease-in-out infinite 0.5s; }
        .star-3 { animation: twinkle 1.8s ease-in-out infinite 1s; }
        .star-4 { animation: twinkle 2.2s ease-in-out infinite 1.5s; }

        .fade-up-1 { animation: fadeUp 0.7s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s ease 0.15s both; }
        .fade-up-3 { animation: fadeUp 0.7s ease 0.3s both; }

        .circuit-line {
          stroke: rgba(255,255,255,0.25);
          stroke-width: 1.5;
          fill: none;
        }

        .hero-panel {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%);
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 28px;
          backdrop-filter: blur(6px);
        }

        .orbit-text {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: white;
          letter-spacing: 4px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.4);
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(225, 240, 248, 0.97)"
            : "rgba(225, 240, 248, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(100,160,200,0.15)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,80,0.08)" : "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1200, padding: "0.75rem 2rem" }}
        >
          {/* Logo */}
          <div
            className="flex flex-col"
            style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1 }}
          >
            <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-1px" }}>
              <span className="hishot-logo-h">H</span>
              <span className="hishot-logo-i">i</span>
              <span className="hishot-logo-s">S</span>
              <span className="hishot-logo-h2">H</span>
              <span className="hishot-logo-o">O</span>
              <span className="hishot-logo-t">T</span>
              <span style={{ color: "#94A3B8", fontSize: "0.9rem" }}>₉</span>
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                color: "#64748B",
                letterSpacing: "2px",
                marginTop: "1px",
              }}
            >
              2026:ORBIT ◦—◦
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link} href="#" className="nav-link">
                {link}
              </a>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <button
              style={{
                background: "#1B9E8A",
                color: "white",
                border: "none",
                padding: "0.6rem 1.6rem",
                borderRadius: "9999px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(27,158,138,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 28px rgba(27,158,138,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 20px rgba(27,158,138,0.35)";
              }}
            >
              Register
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#1e3a5f",
                  borderRadius: 2,
                  transition: "transform 0.2s",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : menuOpen && i === 1
                      ? "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(225, 240, 248, 0.98)",
              padding: "1rem 2rem 1.5rem",
              borderTop: "1px solid rgba(100,160,200,0.15)",
            }}
            className="md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="nav-link"
                style={{ display: "block", padding: "0.6rem 0" }}
              >
                {link}
              </a>
            ))}
            <button
              style={{
                background: "#1B9E8A",
                color: "white",
                border: "none",
                padding: "0.6rem 1.6rem",
                borderRadius: "9999px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                marginTop: "0.75rem",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "100vh",
          background: "radial-gradient(ellipse at 30% 40%, #1a4a7a 0%, #0d2a4a 50%, #071525 100%)",
          paddingTop: "5rem",
        }}
      >
        {/* Background stars */}
        <div
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          aria-hidden="true"
        >
          {[
            { top: "15%", left: "10%", size: 28, cls: "star-1" },
            { top: "20%", right: "15%", size: 22, cls: "star-2" },
            { top: "60%", left: "6%", size: 16, cls: "star-3" },
            { top: "70%", right: "8%", size: 20, cls: "star-4" },
          ].map((s, i) => (
            <StarSparkle
              key={i}
              className={s.cls}
              style={{
                position: "absolute",
                top: s.top,
                left: s.left,
                right: s.right,
                width: s.size,
                height: s.size,
              }}
            />
          ))}
          {/* Small dot stars */}
          {[
            { top: "12%", left: "25%", r: 3 },
            { top: "35%", left: "5%", r: 2 },
            { top: "45%", right: "20%", r: 4 },
            { top: "80%", left: "30%", r: 2 },
          ].map((d, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: d.top,
                left: d.left,
                right: d.right,
                width: d.r * 2,
                height: d.r * 2,
                borderRadius: "50%",
                background: "white",
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Clouds — bottom left yellow/orange */}
        <Cloud
          color1="#FFBE4F"
          color2="#FF9C27"
          style={{
            position: "absolute",
            bottom: "-2%",
            left: "-4%",
            width: "clamp(200px, 30vw, 380px)",
            opacity: 0.95,
          }}
          className="float-cloud-1"
        />

        {/* Clouds — bottom left teal */}
        <Cloud
          color1="#70D8C0"
          color2="#40BFA8"
          style={{
            position: "absolute",
            bottom: "0%",
            left: "18%",
            width: "clamp(160px, 22vw, 280px)",
            opacity: 0.9,
          }}
          className="float-cloud-2"
        />

        {/* Cloud bottom right */}
        <Cloud
          color1="#B0E8D8"
          color2="#6FCFB8"
          style={{
            position: "absolute",
            bottom: "-1%",
            right: "5%",
            width: "clamp(180px, 25vw, 320px)",
            opacity: 0.85,
          }}
          className="float-cloud-3"
        />

        {/* Cloud top left hint */}
        <Cloud
          color1="#C8EAF8"
          color2="#A0D4F0"
          style={{
            position: "absolute",
            top: "8%",
            left: "-5%",
            width: "clamp(120px, 18vw, 220px)",
            opacity: 0.4,
          }}
          className="float-cloud-4"
        />

        {/* Right side planet globe */}
        <div
          style={{
            position: "absolute",
            right: "-3%",
            bottom: "15%",
            width: "clamp(100px, 15vw, 180px)",
            height: "clamp(100px, 15vw, 180px)",
            borderRadius: "50%",
            background:
              "conic-gradient(from 180deg, #C084FC 0deg, #60A5FA 90deg, #34D399 180deg, #F472B6 270deg, #C084FC 360deg)",
            opacity: 0.75,
            filter: "blur(1px)",
          }}
          aria-hidden="true"
        />

        {/* Dog mascot */}
        <DogMascot
          className="float-dog"
          style={{
            position: "absolute",
            right: "clamp(60px, 10vw, 140px)",
            bottom: "clamp(80px, 14vw, 180px)",
            width: "clamp(90px, 12vw, 150px)",
            zIndex: 10,
          }}
        />

        {/* Circuit lines decoration bottom */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 100"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(400px, 80vw)",
            opacity: 0.5,
          }}
        >
          <polyline
            points="40,80 40,50 90,50 90,30"
            className="circuit-line"
          />
          <circle cx="40" cy="80" r="5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <circle cx="90" cy="30" r="5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <polyline
            points="200,85 200,60 240,60 240,40 300,40"
            className="circuit-line"
          />
          <circle cx="200" cy="85" r="5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <circle cx="300" cy="40" r="5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        </svg>

        {/* Circuit decoration right of title */}
        <svg
          aria-hidden="true"
          viewBox="0 0 120 80"
          style={{
            position: "absolute",
            right: "clamp(120px, 22vw, 280px)",
            top: "35%",
            width: 100,
            opacity: 0.45,
          }}
        >
          <polyline points="10,10 60,10 60,40 110,40" className="circuit-line" />
          <polyline points="10,55 50,55 50,70 110,70" className="circuit-line" />
          <circle cx="10" cy="10" r="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <circle cx="110" cy="40" r="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <circle cx="110" cy="70" r="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        </svg>

        {/* MAIN CONTENT */}
        <div
          className="relative text-center flex flex-col items-center"
          style={{ zIndex: 5, padding: "0 1rem" }}
        >
          {/* Hero panel */}
          <div
            className="hero-panel px-8 py-10"
            style={{ maxWidth: "min(700px, 90vw)", width: "100%" }}
          >
            {/* Big Logo Text */}
            <div
              className={`hero-title fade-up-1 ${loaded ? "" : "opacity-0"}`}
              style={{ marginBottom: "0.25rem" }}
              aria-label="HiShot"
            >
              <span className="hishot-logo-h">H</span>
              <span className="hishot-logo-i">i</span>
              <span className="hishot-logo-s">S</span>
              <span className="hishot-logo-h2">H</span>
              <span className="hishot-logo-o">O</span>
              <span className="hishot-logo-t">T</span>
            </div>

            {/* Subtitle 2026:ORBIT */}
            <div
              className={`orbit-text fade-up-2 ${loaded ? "" : "opacity-0"}`}
              style={{ marginBottom: "1.75rem" }}
            >
              2026:ORBIT
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 justify-center fade-up-3 ${loaded ? "" : "opacity-0"}`}
            >
              <button className="btn-primary">Get started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
