
export default function SecureOpportunity(){  
  return(
    <section className="relative overflow-x-clip w-full max-w-full isolate ">
      <div className="relative px-8 py-16 flex flex-col items-center gap-8">
        <div 
          className="px-8 py-4 flex flex-col items-center justify-center border-[#F9FEFE] border-[4px] rounded-[40px] z-10
          drop-shadow-[3px_7px_4px_rgba(0,0,0,0.25)] bg-[#124466E5]" 
          >
          <h1 
            className="font-[family:var(--font-days-one)] text-center text-[clamp(30px,6vw,60px)]  tracking-[0.12em] text-white leading-tight [text-shadow:0_0_20.6px_#6CB4D0,6px_6px_4.89px_rgba(0,0,0,0.30)] font-bold;
              [-webkit-text-stroke:2px_#6CB4D0] 
              [paint-order:stroke_fill]"
          >
            Secure Your Opportunity Now!
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-7">
          <h2 
            className="font-[family:var(--font-days-one)] text-center text-[clamp(18px,3vw,32px)] border-white border-[3px] rounded-[40px] px-7 py-2 md:py-4 text-white
              drop-shadow-[3px_7px_1.92px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer 
              [text-shadow:0_0_20.6px_#BD67A8,6px_6px_4.89px_rgba(0,0,0,0.30)] 
              [-webkit-text-stroke:2px_#BD67A8] 
              [paint-order:stroke_fill]
              z-10"
            style={{background: 'rgba(204,97,165,0.9)'}}>
            Register Now
          </h2>
          <a 
            href="https://www.instagram.com/hishot_2026?igsh=bG9od3I4dmk0bXhr"
            target="-blank"
            rel="noopener noreferrer"
    className="hover:scale-105 transition-all duration-300"
          >
            <h2
              className=" relative font-[family:var(--font-days-one)] text-center text-[clamp(18px,3vw,32px)] border-white border-[3px] rounded-[40px] px-7 py-2 md:py-4 text-white
              drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer 
              [text-shadow:0_0_20.6px_#198387,6px_6px_4.89px_rgba(0,0,0,0.30)] 
              [-webkit-text-stroke:2px_#198387] 
              [paint-order:stroke_fill]
              z-10"
              style={{background: 'rgba(21,128,128,0.9)'}}>
              Contact Us
            </h2>
          </a>
        </div>
      </div>
      <img className="absolute w-[15rem] -left-2 -bottom-[5rem] md:w-[15rem] md:-left-[1rem] md:-bottom-[8rem] lg:w-[25rem] lg:-left-2 lg:-bottom-[13rem] z-[2]" src="Cloud3_Green.svg" alt="Cloud"/>
        <img className="absolute w-[13rem] left-0 bottom-[5rem] md:w-[15rem] md:-left-[5rem] md:bottom-[3rem] lg:w-[25rem] lg:left-0 lg:-bottom-[2rem]" src="Cloud2_Outline.svg" alt="Cloud Outline"/>
        <img className="absolute hidden md:block w-[12rem] left-[3rem] -bottom-[6rem] lg:w-[18rem] lg:left-[10rem] lg:-bottom-[9rem] z-[3]" src="Planet4.svg" alt="Planet"/>
        <img className="absolute hidden md:block w-[18rem] left-[8rem] -bottom-[4rem] lg:w-[28rem] lg:left-[16rem] lg:-bottom-[8rem] z-[2]" src="Cloud2_Shadow.svg" alt="Cloud Shadow"/>
        <img className="absolute hidden md:block w-[10rem] left-[11rem] bottom-[0.5rem] lg:w-[12rem] lg:left-[24rem] lg:bottom-[0.5rem] z-[2]" src="TechDetail3.svg" alt="Tech"/>
        <img className="absolute w-[30rem] -right-[20rem] -bottom-[3rem] md:w-[30rem] md:-right-[20rem] md:-bottom-[3rem] lg:w-[35rem] lg:-right-[18rem] lg:-bottom-[2rem] z-[2]" src="Cloud2_Shadow.svg" alt="Cloud Shadow"/>
        <img className="absolute hidden md:block md:w-[10rem] md:right-0 md:-bottom-[3rem] lg:w-[15rem] lg:right-0 lg:-bottom-[3rem] z-[2]" src="Cloud1_Blue.svg" alt="Cloud"/>
        <img className="absolute hidden md:block md:w-[10rem] md:right-[4rem] md:-bottom-[5.5rem] lg:w-[15rem] lg:right-[9rem] lg:-bottom-[7rem] z-[2]" src="Planet7.svg" alt="Planet"/>
        <img className="absolute hidden md:block md:w-[11rem] md:right-[7rem] md:bottom-0 lg:w-[15rem] lg:right-[17rem] lg:bottom-0 z-[1]" src="TechDetail4.svg" alt="Tech"/>
        <img className="absolute hidden md:block md:w-[11rem] md:right-[5rem] md:bottom-[1.5rem] lg:w-[15rem] lg:right-[15rem] lg:bottom-[1.5rem] z-[1]" src="TechDetail4.svg" alt="Tech"/>
    </section>
  )
}