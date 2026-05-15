// src/components/Background.jsx
export default function Background({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0F4A6D] overflow-x-hidden">
      
      {/* ================= BACKGROUND GRAPHICS LAYER ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Main Base Backdrop Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/main-bg.png')" }}
        />

        {/* Your Friend's Floating Cloud Asset with Shadow */}
        <img
          src="/Cloud3_Shadow.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-[12%] md:top-[26%] lg:top-[36%] left-[-8%] md:left-[-1%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2]"
        />

        {/* You can add more of your friend's floating assets here (e.g., Cloud1, Stars, Glows) */}

      </div>

      {/* ================= FOREGROUND CONTENT LAYER ================= */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>

    </div>
  );
}