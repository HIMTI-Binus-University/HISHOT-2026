import { useState, useEffect, useRef } from "react";

export default function HiShotHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // ✅ FIX: Listen ke window scroll biasa, bukan scroll wrapper custom
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // ✅ FIX: Hapus position:fixed & overflow:hidden dari root.
    // Root sekarang flow normal agar section Trailer bisa render tanpa overlay bug.
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
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ✅ FIX: Pastikan html & body tidak ada margin/padding bawaan browser
           dan tidak ada overflow-x yang memunculkan scrollbar horizontal */
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100%;
          overflow-x: hidden;
        }

        /* ✅ FIX: Root wrapper & hero section harus full viewport width */
        .hishot-root {
          width: 100%;
          min-width: 0;
        }

        .hero-section {
          width: 100vw;
          margin-left: calc(-50vw + 50%); /* centering trick agar selalu full-bleed */
        }

        /* ── nav links ── */
        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
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
          background: #1aaa8c;
          color: white;
          border: 2px solid white;
          padding: 0.4rem 1.2rem;
          border-radius: 9999px;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          letter-spacing: 0.04em;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          text-shadow: 0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(100,255,200,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .reg-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,0,0,0.4);
        }

        /* ── hero CTA buttons ── */
        .btn-start {
          background: linear-gradient(135deg,#cc3d8f,#b82d80);
          color: white; border: none;
          padding: 0.85rem 2.6rem; border-radius: 9999px;
          font-family: 'Poppins',sans-serif; font-weight: 700; font-size: 1.05rem;
          cursor: pointer;
          box-shadow: 0 6px 22px rgba(180,40,120,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.03em;
        }
        .btn-start:hover { transform:translateY(-3px); box-shadow:0 12px 34px rgba(180,40,120,0.6); }

        .btn-learn {
          background: rgba(255,255,255,0.12);
          color: white;
          border: 2px solid rgba(255,255,255,0.6);
          padding: 0.85rem 2.6rem; border-radius: 9999px;
          font-family: 'Poppins',sans-serif; font-weight: 700; font-size: 1.05rem;
          cursor: pointer; backdrop-filter: blur(6px);
          transition: transform 0.2s, background 0.2s;
          letter-spacing: 0.03em;
        }
        .btn-learn:hover { background: rgba(255,255,255,0.22); transform: translateY(-3px); }

        /* ── hamburger line ── */
        .hb-line {
          display: block;
          height: 2.5px;
          background: #1D7397;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s, width 0.25s;
        }

        /* ✅ FIX: Hero section full viewport height dalam flow normal */
        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;       /* clip dekorasi hanya di dalam hero */
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 4rem;
          /* full-bleed trick: width + marginLeft di-set via inline style */
        }
        /* Pastikan margin negatif tidak bikin horizontal scrollbar */
        .hishot-root { overflow-x: hidden; }

        /* ✅ FIX: Kelas hero-section sudah dapat inline style full-bleed & isolation */
        /* isolation dan width di-set via inline style langsung */

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

        /* Tablet (769px – 1024px) */
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
      {/* ✅ FIX: Navbar sticky terhadap window scroll biasa — bukan scroll wrapper */}
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
            <button className="reg-btn">Register Now</button>
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
        </div>

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
          <button className="reg-btn" style={{ alignSelf: "flex-start", marginTop: 4 }}>
            Register Now
          </button>
        </div>
      </nav>

      {/* ══════════ HERO SECTION ══════════ */}
      {/*
        ✅ FIX: Hero pakai min-height:100vh dalam flow normal.
        overflow:hidden + isolation:isolate memastikan semua dekorasi absolutnya
        ter-clip & ter-isolate di dalam hero — tidak bocor ke section Trailer.
      */}
      <section
        className="hero-section"
        style={{
          background: "linear-gradient(180deg, #0a2d42 0%, #0d3d58 25%, #0f5272 50%, #1478a0 75%, #1a9ec8 100%)",
          // ✅ FIX full-bleed: stretch ke tepi viewport
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          isolation: "isolate",
        }}
      >

        {/* ── Sparkles & Circles ── */}
        <img src="/Star.png" alt="" aria-hidden="true"
          style={{ position:"absolute", top:"30%", left:"18%", width:28, height:28, zIndex:3, pointerEvents:"none" }}
        />
        <img src="/TechCircleHollow.png" alt="" aria-hidden="true"
          className="sparkle-hide-xs"
          style={{ position:"absolute", top:"22%", left:"20%", width:20, height:20, opacity:0.7, zIndex:3, pointerEvents:"none" }}
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
          style={{ position:"absolute", bottom:"-4%", left:"-5%", width:"clamp(160px,36vw,400px)", zIndex:3, pointerEvents:"none" }}
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
          style={{ position:"absolute", bottom:"-4%", right:"10%", width:"clamp(120px,30vw,280px)", zIndex:1, pointerEvents:"none" }}
        />
        <img src="/Cloud2_Green.png" alt="" aria-hidden="true"
          className="cloud-right-bottom"
          style={{ position:"absolute", bottom:"10%", right:"-5%", width:"clamp(150px,34vw,380px)", zIndex:3, pointerEvents:"none" }}
        />
        <img src="/Cloud1_Blue.png" alt="" aria-hidden="true"
          style={{ position:"absolute", bottom:"-4%", right:"-5%", width:"clamp(120px,26vw,280px)", zIndex:4, pointerEvents:"none" }}
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
          className="hero-panel"
          style={{
            position: "relative", zIndex: 5,
            marginBottom: "10rem",
            border: "2px solid #C3E4E8",
            borderRadius: 32,
            padding: "clamp(1.5rem,4vw,2.8rem) clamp(2rem,6vw,4rem) clamp(2rem,4vw,3rem)",
            maxWidth: "min(680px,88vw)", width: "100%",
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          }}
        >
          <img
            src="/logo-title.jpeg"
            alt="HiShot 2026:ORBIT"
            className="hero-logo"
            style={{
              width: "clamp(180px,52vw,640px)",
              maxWidth: "60%",
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

      {/*
        ══════════════════════════════════════════════
        KONTEN DI BAWAH HERO
        ✅ Section Trailer & section lain diletakkan di sini,
        di luar hero-section, dalam flow normal.
        Tidak ada lagi overlay bug dari dekorasi hero.
        ══════════════════════════════════════════════
      */}
      {/* <Trailer /> */}
      {/* <SectionAbout /> */}
      {/* <SectionEvent /> */}
      {/* <SectionFAQ /> */}

    </div>
  );
}
