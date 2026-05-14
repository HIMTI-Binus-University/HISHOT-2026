import { useState, useEffect, useRef } from "react";

export default function HiShotHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const onScroll = () => setScrolled(wrapper.scrollTop > 20);
    wrapper.addEventListener("scroll", onScroll);
    return () => wrapper.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Nunito','Poppins',sans-serif",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "fixed",
        inset: 0,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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

        @media(max-width:768px){
          .d-nav { display:none!important; }
          .m-btn  { display:flex!important; }

          /* Hero panel responsif di mobile */
          .hero-panel {
            margin-bottom: 6rem !important;
            padding: 1.2rem 1.2rem 1.5rem !important;
            max-width: 92vw !important;
            border-radius: 20px !important;
          }

          /* Logo di dalam panel lebih kecil di mobile */
          .hero-logo {
            max-width: 80% !important;
          }

          /* Tombol CTA lebih compact di mobile */
          .btn-start, .btn-learn {
            padding: 0.7rem 1.8rem !important;
            font-size: 0.9rem !important;
          }

          /* Mascot responsif mobile */
          .mascot-img {
            width: clamp(90px, 22vw, 130px) !important;
            right: clamp(4px, 1.5vw, 16px) !important;
            bottom: clamp(110px, 26vw, 180px) !important;
          }

          /* Dekorasi sparkle kiri-kanan disembunyikan di layar sangat kecil agar tidak crowded */
          .sparkle-hide-xs { display: none; }

          /* Cloud kiri bawah & kanan bawah tetap tapi lebih kecil */
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
          /* Sembunyikan lebih banyak dekorasi di layar sangat kecil */
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

      {/*
        ══════════════════════════════════════════════
        SCROLL WRAPPER
        position:fixed + overflow-y:scroll membuat
        seluruh page scrollable tapi hero tetap diam
        di belakang — tidak ada elemen yang bergeser
        ══════════════════════════════════════════════
      */}
      <div
        ref={wrapperRef}
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >

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

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button className="reg-btn d-nav" style={{ display: "block" }}>Register</button>
              <button
                className="m-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  flexDirection: "column", gap: 5, padding: 4,
                  width: 30, alignItems: "flex-end",
                }}
                aria-label="Toggle menu"
              >
                <span className="hb-line" style={{ width: 22, transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }}/>
                <span className="hb-line" style={{ width: menuOpen ? 22 : 16, opacity: menuOpen ? 0 : 1 }}/>
                <span className="hb-line" style={{ width: 22, transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }}/>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="m-menu" style={{
              display: "block",
              background: "rgba(225,242,250,0.98)",
              padding: "0.75rem 1.5rem 1.2rem",
              borderTop: "1px solid rgba(29,115,151,0.15)",
            }}>
              {["Home", "About", "Event", "FAQ"].map(l => (
                <a key={l} href="#" className="nav-link" style={{ display: "block", padding: "0.6rem 0", borderBottom: "1px solid rgba(29,115,151,0.08)" }}>{l}</a>
              ))}
              <button className="reg-btn" style={{ marginTop: "0.75rem" }}>Register</button>
            </div>
          )}
        </nav>

        {/* ══════════ HERO SECTION ══════════ */}
        <section style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #0a2d42 0%, #0d3d58 25%, #0f5272 50%, #1478a0 75%, #1a9ec8 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "4rem",
        }}>

          {/* ── Sparkles & Circles (diganti dengan asset gambar) ── */}

          {/* Kiri atas — Star besar */}
          <img src="/Star.png" alt="" aria-hidden="true"
            style={{ position:"absolute", top:"30%", left:"18%", width:28, height:28, zIndex:3, pointerEvents:"none" }}
          />
          
          {/* Kiri — TechCircleHollow */}
          <img src="/TechCircleHollow.png" alt="" aria-hidden="true"
            className="sparkle-hide-xs"
            style={{ position:"absolute", top:"22%", left:"20%", width:20, height:20, opacity:0.7, zIndex:3, pointerEvents:"none" }}
          />
          {/* Kiri — TechCircleFilled kecil */}
          <img src="/TechCircleFilled.png" alt="" aria-hidden="true"
            style={{ position:"absolute", top:"20%", left:"15%", width:10, height:10, opacity:0.9, zIndex:3, pointerEvents:"none" }}
          />

          {/* Kanan atas — Star besar */}
          <img src="/Star.png" alt="" aria-hidden="true"
            style={{ position:"absolute", top:"20%", right:"20%", width:32, height:32, zIndex:3, pointerEvents:"none" }}
          />
          {/* Kanan tengah — Star-1 kecil */}
          <img src="/TechCircleFilled-1.png" alt="" aria-hidden="true"
            className="sparkle-hide-xs"
            style={{ position:"absolute", top:"30%", right:"18%", width:16, height:16, zIndex:3, pointerEvents:"none" }}
          />
          {/* Kanan — TechCircleFilled-1 kecil */}
          <img src="/TechCircleHollow.png" alt="" aria-hidden="true"
            style={{ position:"absolute", top:"19%", right:"15%", width:10, height:10, opacity:0.85, zIndex:3, pointerEvents:"none" }}
          />

          {/* Cloud2_Shadow — bayangan tipis di belakang tumpukan kanan */}
          <img src="/Cloud2_Shadow.png" alt="" aria-hidden="true"
            className="deco-hide-xs"
            style={{
              position:"absolute",
              bottom:"28%", right:"3%",
              width:"20vw", minWidth:130, maxWidth:200,
              zIndex:2, pointerEvents:"none", opacity:0.4,
            }}
          />
          {/* Planet8.png — pojok kanan atas */}
          <img src="/Planet8.png" alt="" aria-hidden="true"
            style={{
              position:"absolute",
              top:"25%", right:"-1%",
              width:"clamp(70px,12vw,160px)",
              zIndex:2, pointerEvents:"none",
            }}
          />

          {/* ══════ KIRI ══════ */}

          {/* Cloud3_Shadow — kiri atas */}
          <img src="/Cloud3_Shadow.png" alt="" aria-hidden="true"
            style={{
              position:"absolute",
              top:"13%", left:"-1%",
              width:"clamp(140px,30vw,320px)",
              zIndex:2, pointerEvents:"none",
            }}
          />

          {/* Cloud3_Blue — kiri tengah-bawah */}
          <img src="/Cloud3_Blue.png" alt="" aria-hidden="true"
            style={{
              position:"absolute",
              bottom:"22%", left:"-5%",
              width:"clamp(130px,28vw,300px)",
              zIndex:2, pointerEvents:"none",
            }}
          />

          {/* Cloud2_Yellow — kiri bawah */}
          <img src="/Cloud2_Yellow.png" alt="" aria-hidden="true"
            className="cloud-left-bottom"
            style={{
              position:"absolute",
              bottom:"-4%", left:"-5%",
              width:"clamp(160px,36vw,400px)",
              zIndex:3, pointerEvents:"none",
            }}
          />

          {/* TechDetail1 — kiri */}
          <img src="/TechDetail1.png" alt="" aria-hidden="true"
            className="deco-hide-xs"
            style={{
              position:"absolute",
              bottom:"20%", left:"29%",
              width:"clamp(60px,11vw,160px)",
              zIndex:1, pointerEvents:"none", opacity:0.9,
            }}
          />

          {/* TechDetail3 — kiri bawah */}
          <img src="/TechDetail3.png" alt="" aria-hidden="true"
            className="deco-hide-xs"
            style={{
              position:"absolute",
              bottom:"10%", left:"30%",
              width:"clamp(70px,15vw,210px)",
              zIndex:1, pointerEvents:"none", opacity:0.9,
            }}
          />

          {/* ══════ KANAN ══════ */}

          {/* Cloud1_Outline — kanan bawah */}
          <img src="/Cloud1_Outline.png" alt="" aria-hidden="true"
            style={{
              position:"absolute",
              bottom:"-4%", right:"10%",
              width:"clamp(120px,30vw,280px)",
              zIndex:1, pointerEvents:"none",
            }}
          />

          {/* Cloud2_Green — kanan tengah-bawah */}
          <img src="/Cloud2_Green.png" alt="" aria-hidden="true"
            className="cloud-right-bottom"
            style={{
              position:"absolute",
              bottom:"10%", right:"-5%",
              width:"clamp(150px,34vw,380px)",
              zIndex:3, pointerEvents:"none",
            }}
          />

          {/* Cloud1_Blue — kanan bawah */}
          <img src="/Cloud1_Blue.png" alt="" aria-hidden="true"
            style={{
              position:"absolute",
              bottom:"-4%", right:"-5%",
              width:"clamp(120px,26vw,280px)",
              zIndex:4, pointerEvents:"none",
            }}
          />

          {/* TechDetail3-1 — kanan panel tengah */}
          <img src="/TechDetail3-1.png" alt="" aria-hidden="true"
            className="deco-hide-xs"
            style={{
              position:"absolute",
              bottom:"15%", right:"31%",
              width:"clamp(50px,9vw,130px)",
              zIndex:4, pointerEvents:"none", opacity:0.9,
            }}
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
              position: "relative", zIndex: 1,
              marginBottom: "10rem",
              border: "2px solid #C3E4E8",
              borderRadius: 32,
              padding: "clamp(1.5rem,4vw,2.8rem) clamp(2rem,6vw,4rem) clamp(2rem,4vw,3rem)",
              maxWidth: "min(680px,88vw)", width: "100%",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}>
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
          Tambahkan section-section lain di sini.
          Mereka akan muncul di atas hero saat di-scroll.
          ══════════════════════════════════════════════
        */}
        {/* <SectionAbout /> */}
        {/* <SectionEvent /> */}
        {/* <SectionFAQ /> */}

      </div>
    </div>
  );
}
