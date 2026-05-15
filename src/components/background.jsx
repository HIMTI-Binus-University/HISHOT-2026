// src/components/Background.jsx
export default function Background({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0F4A6D] overflow-x-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Right side */}
        <img
          src="/Cloud2_Outline.png"
          alt="" aria-hidden="true"
          className="absolute top-[90%] left-[-8%] ld:top-[106%] ld:left-[0%] lg:top-[97%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        <img
          src="/Cloud_Shadow.png"
          alt="" aria-hidden="true"
          className="hidden md:block absolute top-[5%] left-[-8%] md:top-[106%] md:left-[7%] lg:top-[103%] w-[220px] sm:w-[280px] md:w-[clamp(340px,45vw,1000px)] z-[2]"
        />

        <img
          src="/Cloud3_Green.png"
          alt="" aria-hidden="true"
          className="absolute top-[90%] left-[-8%] ld:top-[100%] ld:left-[-1%] lg:top-[100%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        <img
          src="/TechDetail3.png"
          alt="" aria-hidden="true"
          className="hidden lg:block absolute top-[15%] left-[-8%] md:top-[107%] md:left-[20%] lg:top-[112%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        <img
          src="/Planet4.png"
          alt="" aria-hidden="true"
          className="absolute top-[81%] left-[70%] md:top-[107%] md:left-[5%] lg:top-[107%] lg:left-[5%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        {/* Left side */}
        <img
          src="/TechDetail4.png"
          alt="" aria-hidden="true"
          className="hidden lg:block absolute top-[15%] right-[-8%] md:top-[112.5%] md:right-[25%] lg:top-[112.5%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        <img
          src="/TechDetail4.png"
          alt="" aria-hidden="true"
          className="hidden lg:block absolute top-[25%] right-[-8%] md:top-[120%] md:right-[30%] lg:top-[115%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        <img
          src="/Cloud2_Shadow.png"
          alt="" aria-hidden="true"
          className="absolute top-[98%] right-[-5%] ld:top-[107%] ld:right-[0%] lg:top-[96%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        <img
          src="/Cloud1_Blue.png"
          alt="" aria-hidden="true"
          className="hidden lg:block absolute top-[10%] right-[-8%] md:top-[107%] md:right-[-2%] lg:top-[107%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        <img
          src="/Planet7.png"
          alt="" aria-hidden="true"
          className="hidden lg:block absolute md:top-[110%] md:right-[15%] lg:top-[110%] w-[220px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

      </div>

      {/* ================= FOREGROUND CONTENT LAYER ================= */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>

    </div>
  );
}