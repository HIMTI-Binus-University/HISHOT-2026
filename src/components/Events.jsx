import React, { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('seminar');

  // Helper untuk warna tema berdasarkan tab
  const themes = {
    seminar: { color: '#F8A819E5', glow: '#F8A819' },
    workshop: { color: '#1D7397E5', glow: '#1D7397' },
    local: { color: '#18A18CE5', glow: '#18A18C' },
    global: { color: '#CC61A5E5', glow: '#CC61A5' }
  };

  const currentTheme = themes[activeTab];

  return (
    <section id='event' className="relative overflow-x-clip w-full max-w-full isolate h-fit">
      <div className="relative z-10 mt-16 min-fit p-0 md:p-10 flex justify-center items-start overflow-x-hidden font-sans flex-col">
        {/* ================= MAIN CONTAINER ================= */}
        <div 
          className={`relative w-full max-w-[1700px] bg-[#B2D9E7] border-[2px] border-[#F9FEFE] border-solid rounded-[30px] xl:rounded-[50px] px-4 pr-[20px] md:px-10 md:pr-12 xl:px-14 pt-[70px] xl:pt-[110px] pb-10 xl:pb-16 mt-[70px] xl:mt-[80px] md:mx-auto flex flex-col shadow-[0px_4px_4px_0px_#00000040] mb-2 h-fit`}
          style={{ '--glow': currentTheme.glow }}
        >
          {/* Logo Event yang diatas */}
          <div className="absolute -top-[35px] xl:-top-[75px] left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
            <img 
              className="absolute w-[18rem] -top-[1.5rem] sm:w-[22rem] xl:w-[42rem] max-w-none sm:-top-[1.8rem] xl:-top-[3.4rem] pointer-events-none" 
              src="/EventTechDetails.svg" 
              alt="Tech Details" 
            />
            <div className="flex items-center justify-center w-[160px] h-[60px] xl:w-[300px] xl:h-[120px] bg-[#158080E5] border-[3px] xl:border-[4px] border-[#F9FEFE] border-solid rounded-[20px] xl:rounded-[40px] shadow-lg relative">
              <span className="text-[#FFFFFF] text-[32px] xl:text-[56px] leading-none [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]" style={{ fontFamily: "'Days One', sans-serif" }}>
                Events
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 place-items-center gap-4 w-fit mx-auto md:flex md:flex-nowrap md:w-full md:justify-center md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 mb-8 xl:mb-10">
            {[
              { id: 'seminar', label: 'Seminar', img: '/Seminar.png', col: '#F8A819E5' },
              { id: 'workshop', label: 'Workshop', img: '/Workshop.png', col: '#1D7397E5' },
              { id: 'local', label: 'Local Study Tour', img: '/Local Study Tour.png', col: '#18A18CE5' },
              { id: 'global', label: 'Global Study Tour', img: '/Global Study Tour.png', col: '#CC61A5E5' }
            ].map((tab) => (
              <div 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-[130px] h-[130px] md:w-[170px] md:h-[170px] lg:w-[210px] lg:h-[210px] xl:w-[240px] xl:h-[240px] rounded-[20px] xl:rounded-[40px] border-[2px] xl:border-[4px] border-[#F9FEFE] border-solid gap-[2px] xl:gap-[5px] transition-all duration-300 cursor-pointer pt-1 xl:pt-2 hover:scale-105 active:scale-95
                  ${activeTab === tab.id ? 'opacity-100 shadow-[0px_4px_4px_0px_#00000040,0px_0px_15px_0px_#FFFFFF] xl:shadow-[0px_4px_4px_0px_#00000040,0px_0px_30px_0px_#FFFFFF] z-10' : 'opacity-60 hover:opacity-100'}`}
                style={{ backgroundColor: tab.col }}
              >
                <img src={tab.img} alt={tab.label} className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[85px] xl:h-[85px] object-contain mb-1" />
                <span 
                  className="text-[#F9FEFE] text-[14px] md:text-[20px] lg:text-[26px] xl:text-[36px] font-normal leading-tight xl:leading-none tracking-normal text-center drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] xl:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-2" 
                  style={{ fontFamily: "'Chivo', sans-serif" }}
                >
                  {tab.label === 'Local Study Tour' ? <>Local<br/>Study Tour</> : tab.label === 'Global Study Tour' ? <>Global<br/>Study Tour</> : tab.label}
                </span>
              </div>
            ))}
          </div>

          {/* Garis */}
          <div className="w-[90%] xl:w-full max-w-[1525px] mx-auto h-[3px] xl:h-[4px] bg-[#F9FEFE] shadow-[0px_4px_4px_0px_#00000040] mb-8 xl:mb-12 rounded-full"></div>

          {/* ======================= CONTENT AREA ======================= */}
          <div className="w-full animate-[fadeIn_0.5s_ease-in-out]">
            
            {/* ======================= SEMINAR ======================= */}
            {activeTab === 'seminar' && (
              <div className="w-full max-w-full flex flex-col px-1 md:px-6">
                
                {/* Bagian Judulnya */}
                <div className="w-full max-w-[1525px] mx-auto mb-4 xl:mb-6 px-2 xl:px-4 overflow-visible">
                  <h2 className="text-[#FFFFFF] text-[32px] md:text-[36px] xl:text-[40px] font-normal leading-[1.2] tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                      style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                    Within the Clouds: AI-Driven Interaction
                  </h2>
                </div>
                
                {/* Bagian Details */}
                <div className="w-full max-w-[1525px] mx-auto mb-6 lg:mb-8 px-2 xl:px-4 text-[#0F4A6D]">
                  <div className="flex items-center gap-2 xl:gap-4 mb-1">
                    <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                    <h3 className="text-[20px] md:text-[24px] xl:text-[32px] leading-none" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                  </div>
                    <p className="px-[30px] md:px-[40px] xl:px-[65px] text-[#0F4A6D] text-[14px] md:text-[18px] xl:text-[24px] font-light tracking-normal w-full leading-[1.4]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                    Explore the intersection of Artificial Intelligence, cloud computing, and digital entrepreneurship. Through engaging discussions and interactive sessions, participants will gain insights into technologies shaping the future.
                  </p>
                </div>

                {/* Timeline */}
                <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-4 lg:gap-8 px-2 xl:px-4 ml-4 md:ml-8 text-[#0F4A6D] min-w-0">
                
                  <div className="flex flex-col flex-1 w-full pt-0 lg:pt-4 min-w-0">
                    <div className="relative pl-[28px] md:pl-[38px] xl:pl-[59px] -mt-4 lg:-mt-8 flex flex-col gap-4 xl:gap-6 py-1 w-full flex-1 text-[#0F4A6D]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                      {/* <img src="/TechDetail4.png" alt="Timeline" className="absolute left-[5px] md:left-[10px] xl:left-[15px] top-[5px] xl:top-[10px] w-[15px] md:w-[20px] xl:w-[32.5px] h-[55px] md:h-[70px] xl:h-[108px] object-contain" /> */}
                      <div className='relative w-full flex align-middle'>
                        <img src="TechCircle.svg" alt="Tech" className="absolute -left-[20px] md:-left-[30px] xl:-left-[45px] top-[3px] w-[15px] md:w-[20px] xl:w-[32.5px] object-contain" />
                        {/* line connection tech circle */}
                        <div className='absolute -left-[13px] md:-left-[21px] xl:-left-[31px] xl:w-1 top-[17px] md:top-[22px] xl:top-[32px] h-[25px] lg:h-[51px] xl:h-[69px] w-0.5 bg-[#0F4A6D]'> </div>
                        <p className="text-[14px] md:text-[18px] xl:text-[24px] font-light leading-[1.4] tracking-normal">First Session: Rising Through Interactions for The Future</p>
                      </div>
                      <div className='relative w-full flex align-middle'>
                        <img src="TechCircle.svg" alt="Tech" className="absolute -left-[20px] md:-left-[30px] xl:-left-[45px] top-[3px] w-[15px] md:w-[20px] xl:w-[32.5px] object-contain" />
                        <p className="text-[14px] md:text-[18px] xl:text-[24px] font-light leading-[1.4] tracking-normal">Second Session: From Cloud to Crowd: Creating Technopreneurs of Tomorrow</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex flex-col flex-1 gap-2 w-fit mt-12 -ml-8 text-[#0F4A6D]">
                      <div className="flex w-full items-center gap-2 xl:gap-4 mb-1">
                        <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                        <h3 className="text-[20px] md:text-[24px] xl:text-[32px] leading-[1.4] break-words" style={{ fontFamily: "'Days One', sans-serif" }}>Location: BINUS @ Alam Sutra</h3>
                      </div>
                      <div className="flex gap-[15px] xl:gap-[20px] mt-6 xl:mt-8">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[150px] xl:w-[209px] h-[50px] xl:h-[71px] rounded-[30px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-solid border-[#F9FEFE] shadow-lg text-white text-[18px] xl:text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center lg:justify-end items-end gap-[15px] xl:gap-[30px] pt-0 lg:pt-0 xl:pt-2 w-full lg:w-1/2 min-w-0">
                    {/* Speaker 1 */}
                    <div className="relative flex-1 max-w-[200px] xl:max-w-[335px] shrink-0">
                      <div className="w-[90%] mx-auto mb-[15%] aspect-[5/7] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                        <img src="/Meow.jpg" alt="Speaker 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-[35%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-2 xl:px-6 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px] font-normal leading-[1.1] tracking-normal text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)] whitespace-normal" style={{ fontFamily: "'Days One', sans-serif" }}>
                          Yonathan Handoyo
                        </h4>
                        <p className="text-white text-[10px] sm:text-[12px] lg:text-[12px] xl:text-[16px] font-normal leading-[1.1] tracking-[0.1em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>
                          Job Job Job JOB JOB
                        </p>
                      </div>
                    </div>

                    {/* Speaker 2 */}
                    <div className="relative flex-1 max-w-[200px] xl:max-w-[335px] shrink-0">
                      <div className="w-[90%] mx-auto mb-[15%] aspect-[5/7] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                        <img src="/Meow.jpg" alt="Speaker 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-[35%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-2 xl:px-6 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px] font-normal leading-[1.1] tracking-normal text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)] whitespace-normal" style={{ fontFamily: "'Days One', sans-serif" }}>
                          William G.
                        </h4>
                        <p className="text-white text-[10px] sm:text-[12px] lg:text-[12px] xl:text-[16px] font-normal leading-[1.1] tracking-[0.1em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>
                          Job Job Job JOB JOB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lokasi di Mobile */}
                <div className="flex flex-col lg:hidden w-full mt-4 px-2 text-[#0F4A6D]">
                  <div className="flex items-center gap-2 md:gap-4 mb-4">
                    <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] shrink-0 object-contain" />
                    <h3 className="text-[20px] md:text-[24px] xl:text-[32px] leading-[1.4] break-words" style={{ fontFamily: "'Days One', sans-serif" }}>Location: BINUS @ Alam Sutra</h3>
                  </div>
                  <div className="flex justify-start gap-[15px]">
                    {['More info', 'Guidebook'].map((text) => (
                      <button key={text} className="w-[150px] sm:w-[180px] h-fit rounded-[15px] md:rounded-[25px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[16px] py-[1px] sm:py-[2px] sm:text-[18px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* ======================= WORKSHOP ======================= */}
            {activeTab === 'workshop' && (
              <div className="w-full flex flex-col">
                
                {/* Bagian pertama Workshop */}
                <div className="w-full flex flex-col px-1 md:px-6">
                  
                  {/* Bagian Judul */}
                  <div className="w-full max-w-[1525px] mx-auto px-2 xl:px-4 mb-4 xl:mb-6 overflow-visible">
                    <h2 className="text-[#FFFFFF] text-[32px] md:text-[36px] xl:text-[40px] font-normal leading-[1.2] tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                        style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                      Defending the Sky: AI-Driven Cloud Security
                    </h2>
                  </div>
                  
                  {/* Bagian Details */}
                  <div className="w-full max-w-[1525px] mx-auto mb-6 lg:mb-8 px-2 xl:px-4 text-[#0F4A6D]">
                    <div className="flex items-center gap-2 xl:gap-4 mb-1">
                      <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                      <h3 className="text-[20px] md:text-[24px] xl:text-[32px] leading-none" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                    </div>
                    <p className="px-[30px] md:px-[40px] xl:px-[65px] text-[#0F4A6D] text-[14px] md:text-[18px] xl:text-[24px] font-light tracking-normal w-full leading-[1.4]" style={{ fontFamily: "'Chivo', sans-serif" }}>                      Dive into the world of cloud security and discover how AI technologies are used to identify risks, monitor systems, and defend digital infrastructures. Participants will gain insights into modern cybersecurity challenges and solutions in cloud computing.
                    </p>
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-4 lg:gap-8 xl:px-4 text-[#0F4A6D] min-w-0">
                    
                    <div className="hidden lg:flex flex-col w-full lg:w-1/2 pt-4 min-w-0">
                      <div className="flex items-center gap-4">
                        <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain ml-2" />
                        <h3 className=" text-[20px] md:text-[24px] xl:text-[32px] leading-[1.4] break-words" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                      </div>
                      <div className="flex gap-[15px] xl:gap-[20px] pl-[50px] xl:pl-[59px] mt-6 xl:mt-8">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[150px] xl:w-[209px] h-[50px] xl:h-[71px] rounded-[30px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg text-white text-[18px] xl:text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-row justify-center lg:justify-end items-center w-full lg:w-1/2 pt-0 lg:pt-0 min-w-0">
                      <div className="relative w-full max-w-[450px] xl:max-w-[690px] shrink-0">
                        <div className="w-[90%] mx-auto mb-[8%] aspect-[3/2] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A] shadow-md">
                          <img src="/Meow.jpg" alt="Workshop Speaker 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[25%] xl:h-[30%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg flex flex-col justify-center items-center px-4 z-10" style={{ backgroundColor: currentTheme.color }}>
                          <h4 className="text-white text-[12px] md:text-[16px] lg:text-[20px] xl:text-[32px] font-normal leading-[1.1] tracking-[0.12em] text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Wahyu Hidayat</h4>
                          <p className="text-white text-[10px] md:text-[12px] lg:text-[14px] xl:text-[22px] font-normal leading-[1.1] tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>details details</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lokasi di Mobile */}
                  <div className="flex flex-col lg:hidden w-full mt-4 px-2 text-[#0F4A6D]">
                    <div className="flex items-center gap-2 md:gap-4 mb-4">
                      <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] shrink-0 object-contain" />
                      <h3 className="text-[14px] sm:text-[18px] md:text-[28px] leading-[1.4] break-words" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                    </div>
                    <div className="flex justify-start gap-[15px]">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[150px] sm:w-[180px] h-fit py-[1px] sm:py-[2px] rounded-[15px] md:rounded-[25px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[16px] sm:text-[18px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Garis */}
                <div className="w-[90%] xl:w-full max-w-[1525px] mx-auto h-[3px] xl:h-[4px] bg-[#F9FEFE] mt-10 mb-6 xl:mt-12 xl:mb-10 shadow-md opacity-50 rounded-full"></div>

                {/* Bagian kedua Workshop */}
                <div className="w-full flex flex-col px-1 md:px-6">
                  
                  {/* Bagian Judul */}
                  <div className="w-full max-w-[1525px] mx-auto mb-4 lg:mb-6 px-2 xl:px-4 overflow-visible">
                    <h2 className="text-[#FFFFFF] text-[32px] md:text-[36px] xl:text-[48px] font-normal leading-[1.2] tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                        style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                      Modern AI Deployment: Build & Deploy ML Models
                    </h2>
                  </div>
                  
                  {/* Bagian Details */}
                  <div className="w-full max-w-[1525px] mx-auto mb-6 lg:mb-8 px-2 xl:px-4 text-[#0F4A6D]">
                    <div className="flex items-center gap-2 xl:gap-4 mb-1">
                      <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                      <h3 className="text-[20px] md:text-[24px] xl:text-[32px] leading-none" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                    </div>
                    <p className="px-[30px] md:px-[40px] xl:px-[65px] text-[#0F4A6D] text-[14px] md:text-[18px] xl:text-[24px] font-light tracking-normal w-full leading-[1.4]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                      Discover how cloud computing powers modern Artificial Intelligence systems. Through interactive sessions, participants will learn how machine learning models are deployed, managed, and optimized in cloud environments.
                    </p>
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-4 lg:gap-8 xl:px-4 text-[#0F4A6D] min-w-0">
                    
                    <div className="hidden lg:flex flex-col w-full lg:w-1/2 pt-4 min-w-0">
                      <div className="flex items-center gap-4">
                        <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain ml-2" />
                        <h3 className=" text-[20px] md:text-[24px] xl:text-[32px] leading-[1.4] break-words" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                      </div>

                      <div className="flex gap-[15px] xl:gap-[20px] pl-[50px] xl:pl-[59px] mt-6 xl:mt-8">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[150px] xl:w-[209px] h-[50px] xl:h-[71px] rounded-[30px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg text-white text-[18px] xl:text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-row justify-center lg:justify-end items-center w-full lg:w-1/2 pt-0 lg:pt-0 min-w-0">
                      <div className="relative w-full max-w-[450px] xl:max-w-[690px] shrink-0">
                        <div className="w-[90%] mx-auto mb-[8%] aspect-[3/2] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A] shadow-md">
                          <img src="/Meow.jpg" alt="Workshop Speaker 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[25%] xl:h-[30%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg flex flex-col justify-center items-center px-4 z-10" style={{ backgroundColor: currentTheme.color }}>
                          <h4 className="text-white text-[12px] md:text-[16px] lg:text-[20px] xl:text-[32px] font-normal leading-[1.1] tracking-[0.12em] text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Adrianus B. Kurnadi</h4>
                          <p className="text-white  text-[10px] md:text-[12px] lg:text-[14px] xl:text-[22px]  font-normal leading-[1.1] tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>details details</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lokasi di Mobile */}
                  <div className="flex flex-col lg:hidden w-full mt-4 px-2 text-[#0F4A6D]">
                    <div className="flex items-center gap-2 md:gap-4 mb-4">
                      <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] shrink-0 object-contain" />
                      <h3 className="text-[14px] sm:text-[18px] md:text-[28px] leading-[1.4] break-words" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                    </div>
                    <div className="flex justify-start gap-[15px]">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[150px] sm:w-[180px] h-fit py-[1px] sm:py-[2px] rounded-[15px] md:rounded-[25px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[16px] sm:text-[18px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* ======================= LOCAL STUDY TOUR ======================= */}
            {activeTab === 'local' && (
              <div className="w-full flex flex-col px-1 md:px-6">
                <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                  <h2 className="text-[#FFFFFF] text-[32px] xl:text-[48px] text-center font-normal leading-tight xl:leading-none tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                      style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                    To be Announced
                  </h2>
                </div>
                
                {false && (
                  <div className="w-full flex flex-col">
                    {/* Template details Local Study Tour */}
                    <div className="w-full max-w-[1525px] mx-auto mb-6 lg:mb-8 px-2 xl:px-4 text-[#0F4A6D]">
                      <div className="flex items-center gap-2 xl:gap-4 mb-1">
                        <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                        <h3 className="text-[20px] md:text-[24px] xl:text-[32px] leading-none" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                      </div>
                      <p className="pl-[28px] md:pl-[38px] xl:pl-[59px] pr-0 md:pr-10 text-[#0F4A6D] text-[14px] md:text-[18px] xl:text-[24px] font-light tracking-normal w-full leading-[1.4]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                        Japan is turning footsteps into electricity! Using piezoelectric tiles, every step you take generates a small amount of energy. Millions of steps together can power LED lights and displays in busy places like Shibuya Station.
                      </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-4 lg:gap-8 px-2 xl:px-4 text-[#0F4A6D] min-w-0">
                      
                      <div className="flex flex-col w-full lg:w-1/2 pt-0 lg:pt-4 min-w-0">
                        <div className="relative pl-[28px] md:pl-[38px] xl:pl-[59px] flex flex-col gap-4 xl:gap-6 py-1 w-full text-[#0F4A6D]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                          <img src="/TechDetail4.png" alt="Timeline" className="absolute left-[5px] md:left-[10px] xl:left-[15px] top-[5px] xl:top-[10px] w-[15px] md:w-[20px] xl:w-[32.5px] h-[55px] md:h-[70px] xl:h-[108px] object-contain" />
                          <p className="text-[14px] md:text-[16px] xl:text-[24px] font-light leading-[1.4] tracking-normal">First Session: Rising Through Interactions for The Future</p>
                          <p className="text-[14px] md:text-[16px] xl:text-[24px] font-light leading-[1.4] tracking-normal">Second Session: From Cloud to Crowd: Creating Technopreneurs of Tomorrow</p>
                        </div>

                        <div className="hidden lg:flex flex-col w-full mt-12 mb-8 text-[#0F4A6D]">
                          <div className="flex items-center gap-4">
                            <img src="/StarInfo.svg" alt="Star" className="w-[30px] h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                            <h3 className="text-[24px] xl:text-[36px] leading-[1.4] whitespace-nowrap" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Binus @ Alam Sutra</h3>
                          </div>
                          <div className="flex gap-[15px] xl:gap-[20px] pl-[50px] xl:pl-[59px] mt-6 xl:mt-8">
                            {['More info', 'Guidebook'].map((text) => (
                              <button key={text} className="w-[150px] xl:w-[209px] h-[50px] xl:h-[71px] rounded-[30px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg text-white text-[18px] xl:text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-row justify-center lg:justify-end items-end gap-[15px] xl:gap-[30px] pt-0 lg:pt-0 xl:pt-2 w-full lg:w-1/2 min-w-0">
                        
                        <div className="relative flex-1 max-w-[200px] xl:max-w-[335px] shrink-0">
                          <div className="w-[90%] mx-auto mb-[15%] aspect-[5/7] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                            <img src="/Meow.jpg" alt="Place" className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-[35%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 md:px-2 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                            <h4 className="text-white text-[10px] md:text-[12px] lg:text-[14px] xl:text-[36px] font-normal leading-[1.1] tracking-[0.12em] text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Place</h4>
                            <p className="text-white text-[7px] md:text-[8px] lg:text-[10px] xl:text-[24px] font-normal leading-[1.1] tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB</p>
                          </div>
                        </div>

                        <div className="relative flex-1 max-w-[200px] xl:max-w-[335px] shrink-0">
                          <div className="w-[90%] mx-auto mb-[15%] aspect-[5/7] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                            <img src="/Meow.jpg" alt="Speaker" className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-[35%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 md:px-2 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                            <h4 className="text-white text-[10px] md:text-[12px] lg:text-[14px] xl:text-[36px] font-normal leading-[1.1] tracking-[0.12em] text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Speaker</h4>
                            <p className="text-white text-[7px] md:text-[8px] lg:text-[10px] xl:text-[24px] font-normal leading-[1.1] tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB</p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="flex flex-col lg:hidden w-full mt-4 px-2 text-[#0F4A6D]">
                      <div className="flex items-center gap-2 md:gap-4 mb-4">
                        <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] shrink-0 object-contain" />
                        <h3 className="text-[14px] sm:text-[20px] md:text-[28px] leading-[1.4] whitespace-nowrap" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Binus @ Alam Sutra</h3>
                      </div>
                      <div className="flex justify-start gap-[15px] pl-[28px] md:pl-[46px]">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[100px] md:w-[140px] h-[30px] md:h-[45px] rounded-[15px] md:rounded-[25px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] md:text-[14px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* ======================= GLOBAL STUDY TOUR ======================= */}
            {activeTab === 'global' && (
              <div className="w-full flex flex-col gap-14 xl:gap-20 px-1 md:px-6">
                
                {/* Bagian pertama Global */}
                <div className="w-full flex flex-col">
                  <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                    <h2 className="text-[#FFFFFF] text-center text-[32px] xl:text-[48px] font-normal leading-[1.2] tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                        style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                      To be Announced
                    </h2>
                  </div>
                  
                  {false && (
                    <div className="w-full flex flex-col">
                      <div className="w-full max-w-[1525px] mx-auto mb-6 lg:mb-8 px-2 xl:px-4 text-[#0F4A6D]">
                        <div className="flex items-center gap-2 xl:gap-4 mb-1">
                          <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                          <h3 className="text-[20px] md:text-[24px] xl:text-[32px] leading-none" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                        </div>
                        <p className="pl-[28px] md:pl-[38px] xl:pl-[59px] pr-0 md:pr-10 text-[#0F4A6D] text-[14px] md:text-[18px] xl:text-[24px] font-light tracking-normal w-full leading-[1.4]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mmm LOCATION dolore magna aliqua.
                        </p>
                      </div>

                      <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-4 lg:gap-8 px-2 xl:px-4 text-[#0F4A6D] min-w-0">
                        
                        <div className="flex flex-col w-full lg:w-1/2 pt-0 lg:pt-4 min-w-0">
                          <div className="hidden lg:flex flex-col w-full mt-12 mb-8 text-[#0F4A6D]">
                            <div className="flex items-center gap-4">
                              <img src="/StarInfo.svg" alt="Star" className="w-[30px] h-[40px] xl:w-[45.7px] xl:h-[63.17px] shrink-0 object-contain" />
                              <h3 className="text-[24px] xl:text-[36px] leading-[1.4] whitespace-nowrap" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Place Name + Details</h3>
                            </div>
                            <div className="flex gap-[15px] xl:gap-[20px] pl-[50px] xl:pl-[59px] mt-6 xl:mt-8">
                              {['More info', 'Guidebook'].map((text) => (
                                <button key={text} className="w-[150px] xl:w-[209px] h-[50px] xl:h-[71px] rounded-[30px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg text-white text-[18px] xl:text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                              ))}
                            </div>
                          </div>
                        </div> 

                        <div className="flex flex-row justify-center lg:justify-end items-end gap-[15px] xl:gap-[30px] pt-0 lg:pt-0 xl:pt-2 w-full lg:w-1/2 min-w-0">
                          
                          <div className="relative flex-1 max-w-[200px] xl:max-w-[335px] shrink-0">
                            <div className="w-[90%] mx-auto mb-[15%] aspect-[5/7] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                              <img src="/Meow.jpg" alt="Place 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[35%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 md:px-2 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                              <h4 className="text-white text-[10px] md:text-[12px] lg:text-[14px] xl:text-[36px] font-normal leading-[1.1] tracking-[0.12em] text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Place</h4>
                              <p className="text-white text-[7px] md:text-[8px] lg:text-[10px] xl:text-[24px] font-normal leading-[1.1] tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB</p>
                            </div>
                          </div>

                          <div className="relative flex-1 max-w-[200px] xl:max-w-[335px] shrink-0">
                            <div className="w-[90%] mx-auto mb-[15%] aspect-[5/7] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                              <img src="/Meow.jpg" alt="Place 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[35%] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 md:px-2 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                              <h4 className="text-white text-[10px] md:text-[12px] lg:text-[14px] xl:text-[36px] font-normal leading-[1.1] tracking-[0.12em] text-center mb-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Speaker</h4>
                              <p className="text-white text-[7px] md:text-[8px] lg:text-[10px] xl:text-[24px] font-normal leading-[1.1] tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col lg:hidden w-full mt-4 px-2 text-[#0F4A6D]">
                        <div className="flex items-center gap-2 md:gap-4 mb-4">
                          <img src="/StarInfo.svg" alt="Star" className="w-[20px] h-[28px] md:w-[30px] md:h-[40px] shrink-0 object-contain" />
                          <h3 className="text-[14px] sm:text-[20px] md:text-[28px] leading-[1.4] whitespace-nowrap" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Place Name + Details</h3>
                        </div>
                        <div className="flex justify-start gap-[15px] pl-[28px] md:pl-[46px]">
                          {['More info', 'Guidebook'].map((text) => (
                            <button key={text} className="w-[100px] md:w-[140px] h-[30px] md:h-[45px] rounded-[15px] md:rounded-[25px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] md:text-[14px] transition-all duration-200 hover:scale-105 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                          ))}
                        </div>
                      </div> 
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;