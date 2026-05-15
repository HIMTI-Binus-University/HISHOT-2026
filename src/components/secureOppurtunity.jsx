
export default function SecureOpportunity(){  
  return(
    <div className="relative px-8 py-16 flex flex-col items-center gap-8">
      <div 
        className="px-8 py-4 flex flex-col items-center justify-center border-white border-[7px] rounded-[40px] z-10
        drop-shadow-[3px_7px_4px_rgba(0,0,0,0.25)]" 
        style={{background: 'rgba(18,68,102,0.9)'}}>
        <h1 
          className="font-days-one text-center text-[clamp(40px,6vw,60px)]  tracking-[0.12em] text-white leading-tight"
          style={{
            WebkitTextStroke: '1px rgba(108,180,208,1)',
            textShadow: '0 0 15.6px rgba(108,180,208,1), 6px 6px 4.89px rgba(0,0,0,0.8)',
          }}  
        >
          Secure Your Opportunity Now!
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center gap-7">
        <h2 
          className="font-days-one text-center text-[clamp(20px,3vw,32px)] border-white border-[3px] rounded-[40px] px-7 py-4 text-white
          drop-shadow-[3px_7px_1.92px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer"
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
            className="font-days-one text-center text-[clamp(20px,3vw,32px)] border-white border-[3px] rounded-[40px] px-7 py-4 text-white
            drop-shadow-[3px_7px_1.92px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{background: 'rgba(21,128,128,0.9)'}}>
            Contact Us
          </h2>
        </a>
      </div>

    </div>
  )
}