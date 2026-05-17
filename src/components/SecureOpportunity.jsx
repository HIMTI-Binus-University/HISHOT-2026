
export default function SecureOpportunity(){  
  return(
    <div className="relative px-8 py-16 flex flex-col items-center gap-8">
      <div 
        className="px-8 py-4 flex flex-col items-center justify-center border-[#F9FEFE] border-[4px] rounded-[40px] z-10
        drop-shadow-[3px_7px_4px_rgba(0,0,0,0.25)] bg-[#124466E5]" 
        >
        <h1 
          className="font-days-one text-center text-[clamp(30px,6vw,60px)]  tracking-[0.12em] text-white leading-tight [text-shadow:0_0_20.6px_#6CB4D0,6px_6px_4.89px_rgba(0,0,0,0.30)] font-bold;
            [-webkit-text-stroke:2px_#6CB4D0] 
            [paint-order:stroke_fill]"
        >
          Secure Your Opportunity Now!
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center gap-7">
        <h2 
          className="font-days-one text-center text-[clamp(18px,3vw,32px)] border-white border-[3px] rounded-[40px] px-7 py-2 md:py-4 text-white
            drop-shadow-[3px_7px_1.92px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer 
            [text-shadow:0_0_20.6px_#BD67A8,6px_6px_4.89px_rgba(0,0,0,0.30)] 
            [-webkit-text-stroke:2px_#BD67A8] 
            [paint-order:stroke_fill]"
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
            className="font-days-one text-center text-[clamp(18px,3vw,32px)] border-white border-[3px] rounded-[40px] px-7 py-2 md:py-4 text-white
            drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer 
            [text-shadow:0_0_20.6px_#198387,6px_6px_4.89px_rgba(0,0,0,0.30)] 
            [-webkit-text-stroke:2px_#198387] 
            [paint-order:stroke_fill]"
            style={{background: 'rgba(21,128,128,0.9)'}}>
            Contact Us
          </h2>
        </a>
      </div>
    </div>
  )
}