import { useState, useEffect, useRef } from "react";

export default function HiShotHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const regRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (regRef.current && !regRef.current.contains(e.target)) {
        setRegOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="hishot-root"
      style={{
        fontFamily: "'Nunito','Poppins',sans-serif",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      <style>{`
        .hishot-root {
          width: 100%;
          min-width: 0;
        }

        .hero-section {
          width: 100%;
        }

        /* ── nav links ── */
        .nav-link {
          font-family: var(--font-days-one);
          font-size: 0.85rem;
          color: #1D7397;
          text-decoration: none;
          transition: opacity 0.2s;
          text-shadow: 0 4px 4px rgba(0,0,0,0.25);
          letter-spacing: 0.01em;
        }
        .nav-link:hover { opacity: 0.75; }

        /* ── register button ── */
        .reg-btn {
          background: #158080E5;
          color: white;
          border: 2px solid #F9FEFE;
          padding: 0.4rem 1.2rem;
          border-radius: 9999px;
          font-family: var(--font-days-one);
          font-size: 0.8rem;
          cursor: pointer;
          letter-spacing: 0.04em;
          box-shadow: 0 4px 4px rgba(0,0,0,0.25);
          text-shadow: 0 0 20.6px #6CB4D0, 6px 6px 4.89px #0000004D;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          -webkit-text-stroke:2px #6CB4D0;
          paint-order:stroke fill;
        }
        .reg-btn:hover {
          transform: translateY(-2px);
        }

        /* ── dropdown wrapper ── */
        .reg-wrapper {
          position: relative;
        }
        .reg-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          overflow: hidden;
          min-width: 150px;
          z-index: 200;
          animation: dropIn 0.18s ease;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reg-dropdown a {
          display: block;
          padding: 0.72rem 1.2rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: #1D7397;
          text-decoration: none;
          transition: background 0.15s;
        }
        .reg-dropdown a:hover {
          background: #e8f6f8;
          color: #0f5272;
        }
        .reg-dropdown a + a {
          border-top: 1px solid #e0f0f5;
        }

        /* chevron */
        .chevron {
          width: 12px;
          height: 12px;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .chevron.open { transform: rotate(180deg); }

        /* ── hero CTA buttons ── */
        .btn-start {
          background: #CC61A5E5;
          color: white;
          border: 2px solid #F9FEFE;
          padding: 0.85rem 2.6rem; border-radius: 9999px;
          font-family: var(--font-days-one); font-weight: 700; font-size: 1.05rem;
          cursor: pointer;
          box-shadow: 0 4px 4px #00000040;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.03em;
          text-shadow: 6px 6px 4.89px #0000004D;
          -webkit-text-stroke : 2px #B95FA0;
          paint-order: stroke fill;
        }
        .btn-start:hover { transform:translateY(-3px);}

        .btn-learn {
          background: #6CB4D0E5;
          color: white;
          border: 2px solid #F9FEFE;
          padding: 0.85rem 2.6rem; border-radius: 9999px;
          font-family: var(--font-days-one); font-weight: 700; font-size: 1.05rem;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 4px #00000040;
          text-shadow: 6px 6px 4.89px #0000004D, 0 0 20.6px #6CB4D0;
          -webkit-text-stroke : 2px #6CB4D0;
          paint-order: stroke fill;

        }
        .btn-learn:hover { transform: translateY(-3px); }

        /* ── hamburger line ── */
        .hb-line {
          display: block;
          height: 2.5px;
          background: #1D7397;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s, width 0.25s;
        }

        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 4rem;
        }
        .hishot-root { overflow-x: hidden; }

        @media(max-width:768px){
          .d-nav { display:none!important; }
          .m-btn  { display:flex!important; }

          .hero-panel {
            margin-bottom: 6rem !important;
            padding: 1.2rem 1.2rem 1.5rem !important;
            max-width: 92vw !important;
            border-radius: 20px !important;
          }

          .hero-logo {
            max-width: 80% !important;
          }

          .btn-start, .btn-learn {
            padding: 0.7rem 1.8rem !important;
            font-size: 0.9rem !important;
          }

          .mascot-img {
            width: clamp(90px, 22vw, 130px) !important;
            right: clamp(4px, 1.5vw, 16px) !important;
            bottom: clamp(110px, 26vw, 180px) !important;
          }

          .sparkle-hide-xs { display: none; }

          .cloud-left-bottom {
            width: 52vw !important;
            min-width: 160px !important;
          }
          .cloud-right-bottom {
            width: 50vw !important;
            min-width: 160px !important;
          }
        }

        @media(max-width:480px){
          .btn-start, .btn-learn {
            padding: 0.65rem 1.4rem !important;
            font-size: 0.82rem !important;
          }
          .hero-panel {
            margin-bottom: 4rem !important;
          }
          .deco-hide-xs { display: none !important; }
        }

        @media(min-width:769px){
          .m-btn  { display:none!important; }
          .m-menu { display:none!important; }
        }

        @media(min-width:769px) and (max-width:1024px){
          .hero-panel {
            max-width: 75vw !important;
            margin-bottom: 8rem !important;
          }
          .mascot-img {
            width: clamp(150px, 10vw, 140px) !important;
          }
        }
      `}</style>

      {/* ══════════ NAVBAR ══════════ */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(225,242,250,0.98)" : "rgba(225,242,250,0.93)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(140,200,225,0.25)",
        boxShadow: scrolled ? "0 4px 24px rgba(20,70,120,0.1)" : "none",
        transition: "all 0.3s",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0.35rem 1.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <img
              src="/logo-title.jpeg"
              alt="HiShot logo"
              style={{
                height: "38px", width: "auto", objectFit: "contain",
                objectPosition: "top left", pointerEvents: "none",
                userSelect: "none", mixBlendMode: "multiply",
              }}
            />
          </div>

          <div className="d-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {["Home", "About", "Event", "FAQ"].map(l => (
              <a key={l} href="#" className="nav-link">{l}</a>
            ))}
        </div>

        {/* perlu kasih div yang kelasnya itu d-nav biar dia ilang pas ga ada */}
        {/* ── Register Dropdown ── */}
            <div className="d-nav">
              <div className="reg-wrapper" ref={regRef}>
                <button className="reg-btn" onClick={() => setRegOpen(o => !o)}>
                  Register Now
                  <svg
                    className={`chevron${regOpen ? " open" : ""}`}
                    viewBox="0 0 10 6"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0L5 6L10 0H0Z"/>
                  </svg>
                </button>
                {regOpen && (
                  <div className="reg-dropdown">
                    <a href="#">Seminar & Workshop</a>
                    <a href="#">Local Study Tour</a>
                    <a href="#">Global Study Tour</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="m-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              display: "none", flexDirection: "column", gap: 5,
              background: "none", border: "none", cursor: "pointer", padding: 6,
            }}
          >
            <span className="hb-line" style={{ width: 24 }} />
            <span className="hb-line" style={{ width: menuOpen ? 24 : 18 }} />
            <span className="hb-line" style={{ width: 24 }} />
          </button>

        {/* Mobile menu */}
        <div
          className="m-menu"
          style={{
            display: menuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "0.75rem 1.5rem 1rem",
            gap: "0.75rem",
            background: "rgba(225,242,250,0.98)",
            borderTop: "1px solid rgba(140,200,225,0.2)",
          }}
        >
          {["Home", "About", "Event", "FAQ"].map(l => (
            <a key={l} href="#" className="nav-link" style={{ fontSize: "1rem" }}>{l}</a>
          ))}
          {/* Mobile: Register expand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: 4 }}>
            <span className="--font-days-one" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#1aaa8c" }}>Register Now</span>
            <a href="#" className="nav-link" style={{ fontSize: "0.9rem", paddingLeft: "0.75rem" }}>Seminar & Workshop</a>
            <a href="#" className="nav-link" style={{ fontSize: "0.9rem", paddingLeft: "0.75rem" }}>Local Study Tour</a>
            <a href="#" className="nav-link" style={{ fontSize: "0.9rem", paddingLeft: "0.75rem" }}>Global Study Tour</a>
          </div>
        </div>
      </nav>

      {/* ══════════ HERO SECTION ══════════ */}
      <section
        className="hero-section"
        style={{
          width: "100%"
          // background: "linear-gradient(180deg, #0a2d42 0%, #0d3d58 25%, #0f5272 50%, #1478a0 75%, #1a9ec8 100%)",
          // width: "100vw",
          // marginLeft: "calc(-50vw + 50%)",
          // isolation: "isolate",
        }}
      >

        {/* ── Sparkles & Circles ── */}
        <img src="/Star.png" alt="" aria-hidden="true"
          style={{ position:"absolute", top:"30%", left:"18%", width:28, height:28, zIndex:3, pointerEvents:"none" }}
        />
        <img src="/TechCircleHollow.png" alt="" aria-hidden="true"
          className="sparkle-hide-xs"
          style={{position:"absolute", top:"22%", left:"20%", width:20, height:20, opacity:0.7, zIndex:3, pointerEvents:"none" }}
        />
        <img src="/TechCircleFilled.png" alt="" aria-hidden="true"
          style={{ position:"absolute", top:"20%", left:"15%", width:10, height:10, opacity:0.9, zIndex:3, pointerEvents:"none" }}
        />
        <img src="/Star.png" alt="" aria-hidden="true"
          style={{ position:"absolute", top:"20%", right:"20%", width:32, height:32, zIndex:3, pointerEvents:"none" }}
        />
        <img src="/TechCircleFilled-1.png" alt="" aria-hidden="true"
          className="sparkle-hide-xs"
          style={{ position:"absolute", top:"30%", right:"18%", width:16, height:16, zIndex:3, pointerEvents:"none" }}
        />
        <img src="/TechCircleHollow.png" alt="" aria-hidden="true"
          style={{ position:"absolute", top:"19%", right:"15%", width:10, height:10, opacity:0.85, zIndex:3, pointerEvents:"none" }}
        />
        <img src="/Cloud2_Shadow.png" alt="" aria-hidden="true"
          className="deco-hide-xs"
          style={{ position:"absolute", bottom:"28%", right:"3%", width:"20vw", minWidth:130, maxWidth:200, zIndex:2, pointerEvents:"none", opacity:0.4 }}
        />
        <img src="/Planet8.png" alt="" aria-hidden="true"
          style={{ position:"absolute", top:"25%", right:"-1%", width:"clamp(70px,12vw,160px)", zIndex:2, pointerEvents:"none" }}
        />
        <img src="/Cloud3_Shadow.png" alt="" aria-hidden="true"
          style={{ position:"absolute", top:"13%", left:"-1%", width:"clamp(140px,30vw,320px)", zIndex:2, pointerEvents:"none" }}
        />
        <img src="/Cloud3_Blue.png" alt="" aria-hidden="true"
          style={{ position:"absolute", bottom:"22%", left:"-5%", width:"clamp(130px,28vw,300px)", zIndex:2, pointerEvents:"none" }}
        />
        <img src="/Cloud2_Yellow.png" alt="" aria-hidden="true"
          className="cloud-left-bottom"
          style={{ position:"absolute", bottom:"-1%", left:"-5%", width:"clamp(160px,36vw,400px)", zIndex:3, pointerEvents:"none" }}
        />
        <img src="/TechDetail1.png" alt="" aria-hidden="true"
          className="deco-hide-xs"
          style={{ position:"absolute", bottom:"20%", left:"29%", width:"clamp(60px,11vw,160px)", zIndex:1, pointerEvents:"none", opacity:0.9 }}
        />
        <img src="/TechDetail3.png" alt="" aria-hidden="true"
          className="deco-hide-xs"
          style={{ position:"absolute", bottom:"10%", left:"30%", width:"clamp(70px,15vw,210px)", zIndex:1, pointerEvents:"none", opacity:0.9 }}
        />
        <img src="/Cloud1_Outline.png" alt="" aria-hidden="true"
          style={{ position:"absolute", bottom:"-1%", right:"10%", width:"clamp(120px,30vw,280px)", zIndex:1, pointerEvents:"none" }}
        />
        <img src="/Cloud2_Green.png" alt="" aria-hidden="true"
          className="cloud-right-bottom"
          style={{ position:"absolute", bottom:"10%", right:"-5%", width:"clamp(150px,34vw,380px)", zIndex:3, pointerEvents:"none" }}
        />
        <img src="/Cloud1_Blue.png" alt="" aria-hidden="true"
          style={{ position:"absolute", bottom:"-1%", right:"-5%", width:"clamp(120px,26vw,280px)", zIndex:4, pointerEvents:"none" }}
        />
        <img src="/TechDetail3-1.png" alt="" aria-hidden="true"
          className="deco-hide-xs"
          style={{ position:"absolute", bottom:"15%", right:"31%", width:"clamp(50px,9vw,130px)", zIndex:4, pointerEvents:"none", opacity:0.9 }}
        />

        {/* ── MASCOT ── */}
        <img src="/mascot.jpeg" alt="HiShot mascot"
          className="mascot-img"
          style={{
            position: "absolute",
            right: "clamp(130px, 3.5vw, 55px)",
            bottom: "clamp(140px, 32vw, 1px)",
            width: "clamp(150px, 7.5vw, 115px)",
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* ══ HERO PANEL ══ */}
        <div
          className="hero-panel
          sm:min-w-[20rem] md:max-w-[min(680px,88vw)] w-full"
          style={{
            position: "relative", zIndex: 5,
            marginBottom: "10rem",
            borderRadius: 32,
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          }}
        >
          <img
            src="/logo-title.jpeg"
            alt="HiShot 2026:ORBIT"
            className="hero-logo"
            style={{
              width: "clamp(300px,80vw,900px)",
              // maxWidth: "60%",
              pointerEvents: "none", userSelect: "none",
              marginBottom: "1rem",
              mixBlendMode: "multiply",
            }}
          />
          <div style={{ display:"flex", gap:"1.2rem", justifyContent:"center", flexWrap:"wrap" }}>
            <button className="btn-start">Get started</button>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>
      </section>

    </div>
  );
}
