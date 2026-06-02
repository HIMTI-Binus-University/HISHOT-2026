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

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Event", path: "#event" },
    { name: "FAQ", path: "#faq" }
  ];

  return (
    <div id="home"
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
          font-family: var(--font-days-one);
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
          font-family: var(--font-days-one); font-weight: 700; 
          font-size: 1.05rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.03em;
          paint-order: stroke fill;

          // -webkit-text-stroke : 2px #B95FA0;
          // box-shadow: 0 4px 4px #00000040;
          // text-shadow: 6px 6px 4.89px #0000004D;

          box-shadow: 0 3px 6px rgba(0,0,0,0.22);
          text-shadow: 4px 4px 4px rgba(0,0,0,0.25);
          -webkit-text-stroke: 1px #B95FA0;

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
          box-shadow: 0 3px 6px rgba(0,0,0,0.22);
          text-shadow: 4px 4px 4px rgba(0,0,0,0.25);
          -webkit-text-stroke : 1px #6CB4D0;
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
          // min-height: 100vh;
          position: relative;
          display: flex;
          // align-items: center;
          justify-content: center;
          padding-top: 8rem;
        }
        .hishot-root { overflow-x: hidden; }

        @media(max-width:768px){
          .d-nav { display:none!important; }
          .m-btn  { display:flex!important; }

          .hero-panel {
            margin-bottom: 12rem !important;
            padding: 1 1.2rem 1.5rem !important;
            max-width: 92vw !important;
            border-radius: 20px !important;
          }

          .hero-logo {
            // max-width: 80% !important;
          }

          .btn-start, .btn-learn {
            padding: 0.5rem 1.5rem !important;
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
            padding: 0.3rem 1rem !important;
            font-size: 0.7rem !important;
          }
          .hero-panel {
            margin-bottom: 9rem !important;
          }
          .deco-hide-xs { display: none !important; }
        }

        @media(min-width:480px) and (max-width:769px){
          .hero-panel {
            margin-bottom:10rem !important;
          }
        }

        @media(min-width:769px){
          .m-btn  { display:none!important; }
          .m-menu { display:none!important; }
        }

        @media(min-width:769px) and (max-width:1024px){
          .hero-panel {
            max-width: 75vw !important;
            margin-bottom: 12rem !important;
          }
          .mascot-img {
            width: clamp(150px, 10vw, 140px) !important;
          }
        }
      `}</style>

      {/* ══════════ NAVBAR ══════════ */}
      <nav style={{
        position: "fixed",
        width:"100%",
        top: 0,
        zIndex: 100,
        background: "#ECFFFF",
        borderBottom: "1px solid rgba(140,200,225,0.25)",
        boxShadow: scrolled ? "0 4px 24px rgba(20,70,120,0.1)" : "none",
        transition: "all 0.3s",
      }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{
          maxWidth: "100%", margin: "0 auto",
          padding: "0.35rem 1.5rem",
        }}>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            width: "100%", 
            flex: 1 
          }} className="md:w-auto">
            
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <img
                src="/logo-title.jpeg"
                alt="HiShot logo"
                style={{
                  height: "38px", width: "auto", objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </div>

            <button
              className="m-btn"
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
          </div>

          <div className="d-nav" style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent:"space-between"}}>
            {navItems.map((item) => (
              <a key={item.name} href={item.path} className="nav-link">
                {item.name}
              </a>
            ))}
            
            <div className="reg-wrapper" ref={regRef}>
              <button className="reg-btn" onClick={() => setRegOpen(o => !o)}>
                Register Now
                <svg className={`chevron${regOpen ? " open" : ""}`} viewBox="0 0 10 6" fill="white" width="12">
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

          <div
            className="m-menu"
            style={{
              display: menuOpen ? "flex" : "none",
              flexDirection: "column",
              padding: "1rem 0",
              gap: "0.75rem",
              width: "100%",
              borderTop: "1px solid rgba(140,200,225,0.2)",
              marginTop: "0.5rem"
            }}
          >
            {navItems.map(item => (
              <a key={item.name} href={item.path} className="nav-link">
                {item.name}
              </a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: 4 }}>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#1aaa8c" }}>Register Now</span>
              <a href="#" className="nav-link" style={{ fontSize: "0.9rem", paddingLeft: "0.75rem" }}>Seminar & Workshop</a>
              <a href="#" className="nav-link" style={{ fontSize: "0.9rem", paddingLeft: "0.75rem" }}>Local Study Tour</a>
              <a href="#" className="nav-link" style={{ fontSize: "0.9rem", paddingLeft: "0.75rem" }}>Global Study Tour</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════ HERO SECTION ══════════ */}
      <section
        className="relative hero-section"
        style={{
          width: "100%"
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

        {/* Main element */}
        <img src="/Cloud2_Shadow.png" alt="" aria-hidden="true"
          className="absolute w-[8rem] -right-[3rem] bottom-[4rem] sm:w-[12rem] sm:-right-[4rem] sm:bottom-[7rem] md:w-[15rem] md:-right-[5rem] md:bottom-[8rem] lg:w-[18rem] lg:-right-[9rem] lg:bottom-[8rem]"
        />
        <img src="/Planet8.png" alt="" aria-hidden="true"
          className="absolute w-[4rem] bottom-[4.5rem] -right-[2rem] sm:w-[6rem] sm:bottom-[7rem] md:-right-[2rem] md:bottom-[10rem] lg:w-[7rem] lg:bottom-[9rem]"
        />

        {/* Left Element */}
        <img src="/Cloud3_Shadow (3).svg" alt="" aria-hidden="true" className="absolute w-[7rem] bottom-[4rem] -left-[2rem] sm:w-[14rem] sm:bottom-[8rem] sm:-left-[3.5rem] md:-left-[5rem] md:w-[15rem] md:bottom-[8rem] lg:w-[20rem] lg:bottom-[6rem] lg:-left-[5.5rem]"
        />
        <img src="/Cloud3_Blue.png" alt="" aria-hidden="true"  className="absolute w-[6rem] -left-[1rem] bottom-[2rem]  sm:w-[12rem] sm:bottom-[4rem] md:left-0 md:w-[10rem] md:bottom-[6rem] lg:w-[15rem] lg:bottom-[4rem] lg:-left-[1rem]"
        />
        <img src="/CloudTech (1).svg" alt="" aria-hidden="true"
          className="absolute w-[10rem] left-0 bottom-1 sm:w-[20rem] sm:bottom-0  md:left-0 md:w-[20rem] md:bottom-[0.5rem] lg:w-[23rem] lg:bottom-0 lg:left-0"
        />
        <img src="/TechDetailRight2.svg" alt="" aria-hidden="true" className="hidden absolute sm:block w-[15rem] z-0 right-[5rem] sm:w-[15rem] sm:bottom-0 md:w-[14rem] md:right-[6rem] lg:right-[10rem] lg:w-[15rem]"
        />
        <img src="/Cloud2_Green.png" alt="" aria-hidden="true"
          className="absolute w-[10rem] -right-[2.5rem] bottom-[1.5rem] sm:w-[13rem] sm:bottom-[4rem] sm:-right-[1rem] md:-right-[3rem] md:w-[16rem] md:bottom-[4rem] lg:w-[18rem] lg:bottom-[3rem] lg:-right-[1rem] z-[1]"
        />
        <img src="/Cloud1_Blue.png" alt="" aria-hidden="true" className="absolute w-[8rem] -right-[2.5rem] bottom-0 sm:w-[12rem] sm:bottom-[0.5rem] md:-right-[2rem] lg:w-[15rem] lg:-right-0 lg:bottom-0 z-[2]"
        />

        {/* ── MASCOT ── */}
        <img src="/mascot.jpeg" alt="HiShot mascot"
          className="absolute w-[7rem] -right-[1rem] bottom-[1rem] sm:w-[10rem] sm:bottom-[1.5rem] sm:right-[1.5rem] lg:w-[13rem]"
          style={{
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* ══ HERO PANEL ══ */}
        <div
          className="hero-panel
          sm:min-w-[20rem] w-full lg:pb-[8rem]"
          style={{
            position: "relative", zIndex: 10,
            // marginBottom: "10rem",
          //   borderRadius: 32,
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            gap:"0.5rem",
          }}
        >
          <img
            src="/logo-title.jpeg"
            alt="HiShot 2026:ORBIT"
            className="hero-logo max-w-[15rem] ml-3 sm:max-w-[30rem] md:max-w-[60rem]"
            style={{
              width: "clamp(300px,80vw,900px)",
              pointerEvents: "none", userSelect: "none",
              mixBlendMode: "multiply",
            }}
          />
          <div style={{ display:"flex", gap:"1.2rem", justifyContent:"center", flexWrap:"wrap", zIndex:50,
          }}>
            <a href="#about" className="btn-start">Get started</a>
            <a href="#faq" className="btn-learn">Learn More</a>
          </div>
        </div>
      </section>

    </div>
  );
}
