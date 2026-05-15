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
    <div className="min-h-screen p-4 md:p-10 flex justify-center items-start overflow-x-hidden font-sans">
      
      {/* ================= MAIN CONTAINER ================= */}
      <div 
        className={`relative w-full max-w-[1700px] bg-[#B2D9E7] border-[2px] border-[#F9FEFE] rounded-[30px] xl:rounded-[50px] px-4 xl:px-14 pt-[70px] xl:pt-[110px] pb-10 xl:pb-16 mt-[50px] xl:mt-[80px] mx-auto flex flex-col shadow-[0px_4px_4px_0px_#00000040]
          ${activeTab === 'workshop' || activeTab === 'global' ? 'min-h-[1800px]' : 'min-h-[1100px]'}`}
        style={{ '--glow': currentTheme.glow }}
      >

        {/* Logo Event yang diatas */}
        <div className="absolute -top-[35px] xl:-top-[75px] left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center justify-center w-[160px] h-[60px] xl:w-[339px] xl:h-[141px] bg-[#158080E5] border-[3px] xl:border-[4px] border-[#F9FEFE] rounded-[20px] xl:rounded-[40px] shadow-lg relative">
            <span className="text-[#FFFFFF] text-[32px] xl:text-[64px] leading-none [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]" style={{ fontFamily: "'Days One', sans-serif" }}>
              Events
            </span>
          </div>
        </div>

        {/* Bagian tombol untuk pindah2 */}
        <div className="grid grid-cols-2 gap-[15px] place-items-center w-fit mx-auto xl:flex xl:flex-row xl:flex-wrap xl:justify-center xl:w-full xl:gap-8 2xl:gap-12 mb-8 xl:mb-10">
          {[
            { id: 'seminar', label: 'Seminar', img: '/Seminar.png', col: '#F8A819E5' },
            { id: 'workshop', label: 'Workshop', img: '/Workshop.png', col: '#1D7397E5' },
            { id: 'local', label: 'Local Study Tour', img: '/Local Study Tour.png', col: '#18A18CE5' },
            { id: 'global', label: 'Global Study Tour', img: '/Global Study Tour.png', col: '#CC61A5E5' }
          ].map((tab) => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-[130px] h-[130px] xl:w-[240px] xl:h-[240px] rounded-[20px] xl:rounded-[40px] border-[2px] xl:border-[4px] border-[#F9FEFE] gap-[2px] xl:gap-[5px] transition-all duration-300 cursor-pointer pt-1 xl:pt-2 hover:scale-105 active:scale-95
                ${activeTab === tab.id ? 'opacity-100 shadow-[0px_4px_4px_0px_#00000040,0px_0px_15px_0px_#FFFFFF] xl:shadow-[0px_4px_4px_0px_#00000040,0px_0px_30px_0px_#FFFFFF] z-10' : 'opacity-60 hover:opacity-100'}`}
              style={{ backgroundColor: tab.col }}
            >
              <img src={tab.img} alt={tab.label} className="w-[50px] h-[50px] xl:w-[85px] xl:h-[85px] object-contain mb-1" />
              <span 
                className="text-[#F9FEFE] text-[14px] xl:text-[36px] font-normal leading-tight xl:leading-none tracking-normal text-center drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] xl:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-2" 
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
            <div className="w-full flex flex-col">
              <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                <h2 className="text-[#FFFFFF] text-[32px] xl:text-[48px] font-normal leading-tight xl:leading-none tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                    style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                  Within the Clouds:<br className="xl:hidden"/> AI-Driven Interaction
                </h2>
              </div>
              
              <div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-6 xl:gap-8 text-[#0F4A6D]">
                
                <div className="flex flex-col flex-1 max-w-[800px] w-full pt-0 xl:pt-4 order-1">
                  <div className="mb-2 xl:mb-8 relative pl-0 xl:pl-2">
                    <div className="flex items-center gap-2 xl:gap-4 mb-2 xl:mb-4">
                      <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] xl:w-[45.7px] xl:h-[63.17px]" />
                      <h3 className="text-[20px] xl:text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                    </div>
                    <p className="pl-[28px] xl:pl-[59px] pr-0 xl:pr-4 text-[#0F4A6D] text-[14px] leading-[20px] xl:text-[24px] xl:leading-[32px] font-light tracking-normal mb-6 xl:mb-8 max-w-[634px] w-full" style={{ fontFamily: "'Chivo', sans-serif" }}>
                      Explore the intersection of Artificial Intelligence, cloud computing, and digital entrepreneurship. Through engaging discussions and interactive sessions, participants will gain insights into technologies shaping the future.
                    </p>
                    {/* Timeline */}
                    <div className="relative pl-[28px] xl:pl-[59px] flex flex-col gap-4 xl:gap-6 py-1 mt-4 max-w-[634px] w-full text-[#0F4A6D]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                      <img src="/TechDetail4.png" alt="Timeline" className="absolute left-[5px] xl:left-[15px] top-[5px] xl:top-[10px] w-[15px] xl:w-[32.5px] h-[55px] xl:h-[108px] object-contain" />
                      <p className="text-[14px] xl:text-[24px] font-light leading-[20px] xl:leading-[32px] tracking-normal">First Session: Rising Through Interactions for The Future</p>
                      <p className="text-[14px] xl:text-[24px] font-light leading-[20px] xl:leading-[32px] tracking-normal">Second Session: From Cloud to Crowd: Creating Technopreneurs of Tomorrow</p>
                    </div>
                  </div>

                  <div className="hidden xl:block mt-8 mb-8 pl-2">
                    <div className="flex items-center gap-4">
                      <img src="/Star.png" alt="Star" className="w-[45.7px] h-[63.17px]" />
                      <h3 className="text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: BINUS @ Alam Sutra</h3>
                    </div>
                    <div className="flex gap-[20px] pl-[59px] mt-8">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[209px] h-[71px] rounded-[40px] border-[4px] border-[#F9FEFE] shadow-lg text-white text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-center gap-[15px] xl:gap-[30px] w-full xl:w-auto shrink-0 pt-0 xl:pt-2 order-2">
                  {/* Speaker 1 */}
                  <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                      <img src="/Meow.jpg" alt="Speaker 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                      <h4 className="text-white text-[14px] xl:text-[32px] font-normal leading-tight tracking-normal text-center mb-1 xl:mb-2 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)] whitespace-normal" style={{ fontFamily: "'Days One', sans-serif" }}>
                        Yonathan Handoyo
                      </h4>
                      <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>
                        Job Job Job JOB JOB Job Job Job Job
                      </p>
                    </div>
                  </div>

                  {/* Speaker 2 */}
                  <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                      <img src="/Meow.jpg" alt="Speaker 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                      <h4 className="text-white text-[14px] xl:text-[32px] font-normal leading-tight tracking-normal text-center mb-1 xl:mb-2 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)] whitespace-normal" style={{ fontFamily: "'Days One', sans-serif" }}>
                        William G.
                      </h4>
                      <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>
                        Job Job Job JOB JOB Job Job Job Job
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col xl:hidden w-full order-3 mt-8">
                  <div className="flex items-start gap-2 mb-4">
                    <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] mt-1" />
                    <h3 className="text-[20px] leading-[26px] max-w-[250px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: BINUS @ Alam Sutra</h3>
                  </div>
                  <div className="flex justify-start gap-[15px] pl-[28px]">
                    {['More info', 'Guidebook'].map((text) => (
                      <button key={text} className="w-[100px] h-[30px] rounded-[15px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ======================= LOCAL STUDY TOUR ======================= */}
          {activeTab === 'local' && (
            <div className="w-full flex flex-col">
              <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                {/* perlu diilangin text-centernya kalau udah ada informasi */}
                <h2 className="text-[#FFFFFF] text-[32px] xl:text-[48px] text-center font-normal leading-tight xl:leading-none tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                    style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                  To be Announced
                </h2>
              </div>
              
              {/* Belum ada informasi, jadi di comment templatenya */}
              {/*<div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-6 xl:gap-8 text-[#0F4A6D]">
                
                <div className="flex flex-col flex-1 max-w-[800px] w-full pt-0 xl:pt-4 order-1">
                  <div className="mb-2 xl:mb-8 relative pl-0 xl:pl-2">
                    <div className="flex items-center gap-2 xl:gap-4 mb-2 xl:mb-4">
                      <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] xl:w-[45.7px] xl:h-[63.17px]" />
                      <h3 className="text-[20px] xl:text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                    </div>
                    <p className="pl-[28px] xl:pl-[59px] pr-0 xl:pr-4 text-[#0F4A6D] text-[14px] leading-[20px] xl:text-[24px] xl:leading-[32px] font-light tracking-normal mb-6 xl:mb-8 max-w-[634px] w-full" style={{ fontFamily: "'Chivo', sans-serif" }}>
                      Japan is turning footsteps into electricity! Using piezoelectric tiles, every step you take generates a small amount of energy. Millions of steps together can power LED lights and displays in busy places like Shibuya Station.
                    </p>
                    */}{/* Timeline */}{/*
                    <div className="relative pl-[28px] xl:pl-[59px] flex flex-col gap-4 xl:gap-6 py-1 mt-4 max-w-[634px] w-full text-[#0F4A6D]" style={{ fontFamily: "'Chivo', sans-serif" }}>
                      <img src="/TechDetail4.png" alt="Timeline" className="absolute left-[5px] xl:left-[15px] top-[5px] xl:top-[10px] w-[15px] xl:w-[32.5px] h-[55px] xl:h-[108px] object-contain" />
                      <p className="text-[14px] xl:text-[24px] font-light leading-[20px] xl:leading-[32px] tracking-normal">First Session: Rising Through Interactions for The Future</p>
                      <p className="text-[14px] xl:text-[24px] font-light leading-[20px] xl:leading-[32px] tracking-normal">Second Session: From Cloud to Crowd: Creating Technopreneurs of Tomorrow</p>
                    </div>
                  </div>

                  <div className="hidden xl:block mt-8 mb-8 pl-2">
                    <div className="flex items-center gap-4">
                      <img src="/Star.png" alt="Star" className="w-[45.7px] h-[63.17px]" />
                      <h3 className="text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Binus @ Alam Sutra</h3>
                    </div>
                    <div className="flex gap-[20px] pl-[59px] mt-8">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[209px] h-[71px] rounded-[40px] border-[4px] border-[#F9FEFE] shadow-lg text-white text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-row justify-center gap-[15px] xl:gap-[30px] w-full xl:w-auto shrink-0 pt-0 xl:pt-2 order-2">
                  
                  */}{/* Bagian Place */}{/*
                  <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                      <img src="/Meow.jpg" alt="Place" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                      <h4 className="text-white text-[14px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-3 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Place</h4>
                      <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB Job Job Job Job</p>
                    </div>
                  </div>

                  */} {/* Bagian Speaker */}{/*
                  <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                      <img src="/Meow.jpg" alt="Speaker" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                      <h4 className="text-white text-[14px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-3 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Speaker</h4>
                      <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB Job Job Job Job</p>
                    </div>
                  </div>

                </div>

                <div className="flex flex-col xl:hidden w-full order-3 mt-8">
                  <div className="flex items-start gap-2 mb-4">
                    <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] mt-1" />
                    <h3 className="text-[20px] leading-[26px] max-w-[250px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Binus @ Alam Sutra</h3>
                  </div>
                  <div className="flex justify-start gap-[15px] pl-[28px]">
                    {['More info', 'Guidebook'].map((text) => (
                      <button key={text} className="w-[100px] h-[30px] rounded-[15px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                    ))}
                  </div>
                </div>

              </div>*/}
            </div>
          )}

          {/* ======================= WORKSHOP ======================= */}
          {activeTab === 'workshop' && (
            <div className="w-full flex flex-col gap-14 xl:gap-20">
              
              {/* Bagian pertama Workshop */}
              <div className="w-full flex flex-col">
                <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                  <h2 className="text-[#FFFFFF] text-[32px] xl:text-[48px] font-normal leading-tight xl:leading-none tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                      style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                    Defending the Sky:<br className="xl:hidden"/> AI-Driven Cloud Security
                  </h2>
                </div>
                
                <div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-6 xl:gap-8 text-[#0F4A6D]">
                  <div className="flex flex-col flex-1 max-w-[800px] w-full pt-0 xl:pt-4 order-1">
                    <div className="mb-2 xl:mb-8 relative pl-0 xl:pl-2">
                      <div className="flex items-center gap-2 xl:gap-4 mb-2 xl:mb-4">
                        <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] xl:w-[45.7px] xl:h-[63.17px]" />
                        <h3 className="text-[20px] xl:text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                      </div>
                      <p className="pl-[28px] xl:pl-[59px] pr-0 xl:pr-4 text-[#0F4A6D] text-[14px] leading-[20px] xl:text-[24px] xl:leading-[32px] font-light tracking-normal mb-6 xl:mb-8 max-w-[634px] w-full" style={{ fontFamily: "'Chivo', sans-serif" }}>
                        Dive into the world of cloud security and discover how AI technologies are used to identify risks, monitor systems, and defend digital infrastructures. Participants will gain insights into modern cybersecurity challenges and solutions in cloud computing.
                      </p>
                    </div>

                    <div className="hidden xl:block mt-8 mb-8 pl-2">
                      <div className="flex items-center gap-4">
                        <img src="/Star.png" alt="Star" className="w-[45.7px] h-[63.17px]" />
                        <h3 className="text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                      </div>
                      <div className="flex gap-[20px] pl-[59px] mt-8">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[209px] h-[71px] rounded-[40px] border-[4px] border-[#F9FEFE] shadow-lg text-white text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bagian gambar yang gede */}
                  <div className="flex flex-row justify-center w-full xl:w-auto shrink-0 pt-0 xl:pt-2 order-2">
                    <div className="relative w-[300px] h-[250px] xl:w-[690px] xl:h-[500px]">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[280px] h-[210px] xl:w-[621px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A] shadow-md">
                        <img src="/Meow.jpg" alt="Workshop Speaker 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[70px] xl:w-[690px] xl:h-[122px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg flex flex-col justify-center items-center px-4 z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[18px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-2 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Wahyu Hidayat</h4>
                        <p className="text-white text-[12px] xl:text-[24px] font-normal leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>details details</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col xl:hidden w-full order-3 mt-8">
                    <div className="flex items-start gap-2 mb-4">
                      <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] mt-1" />
                      <h3 className="text-[20px] leading-[26px] max-w-[250px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                    </div>
                    <div className="flex justify-start gap-[15px] pl-[28px]">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[100px] h-[30px] rounded-[15px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Garis */}
                <div className="w-[90%] xl:w-full max-w-[1525px] mx-auto h-[3px] xl:h-[4px] bg-[#F9FEFE] my-10 xl:my-16 shadow-md opacity-50 rounded-full"></div>
              </div>

              {/* Bagian kedua Workshop */}
              <div className="w-full flex flex-col">
                <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                  <h2 className="text-[#FFFFFF] text-[32px] xl:text-[48px] font-normal leading-tight xl:leading-none tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                      style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                    Modern AI Deployment:<br className="xl:hidden"/> Build & Deploy ML Models
                  </h2>
                </div>
                
                <div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-6 xl:gap-8 text-[#0F4A6D]">
                  <div className="flex flex-col flex-1 max-w-[800px] w-full pt-0 xl:pt-4 order-1">
                    <div className="mb-2 xl:mb-8 relative pl-0 xl:pl-2">
                      <div className="flex items-center gap-2 xl:gap-4 mb-2 xl:mb-4">
                        <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] xl:w-[45.7px] xl:h-[63.17px]" />
                        <h3 className="text-[20px] xl:text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                      </div>
                      <p className="pl-[28px] xl:pl-[59px] pr-0 xl:pr-4 text-[#0F4A6D] text-[14px] leading-[20px] xl:text-[24px] xl:leading-[32px] font-light tracking-normal mb-6 xl:mb-8 max-w-[634px] w-full" style={{ fontFamily: "'Chivo', sans-serif" }}>
                        Discover how cloud computing powers modern Artificial Intelligence systems. Through interactive sessions, participants will learn how machine learning models are deployed, managed, and optimized in cloud environments.
                      </p>
                    </div>

                    <div className="hidden xl:block mt-8 mb-8 pl-2">
                      <div className="flex items-center gap-4">
                        <img src="/Star.png" alt="Star" className="w-[45.7px] h-[63.17px]" />
                        <h3 className="text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                      </div>
                      <div className="flex gap-[20px] pl-[59px] mt-8">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[209px] h-[71px] rounded-[40px] border-[4px] border-[#F9FEFE] shadow-lg text-white text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center w-full xl:w-auto shrink-0 pt-0 xl:pt-2 order-2">
                    <div className="relative w-[300px] h-[250px] xl:w-[690px] xl:h-[500px]">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[280px] h-[210px] xl:w-[621px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A] shadow-md">
                        <img src="/Meow.jpg" alt="Workshop Speaker 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[70px] xl:w-[690px] xl:h-[122px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] shadow-lg flex flex-col justify-center items-center px-4 z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[18px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-2 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Adrianus B. Kurnadi</h4>
                        <p className="text-white text-[12px] xl:text-[24px] font-normal leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>details details</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col xl:hidden w-full order-3 mt-8">
                    <div className="flex items-start gap-2 mb-4">
                      <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] mt-1" />
                      <h3 className="text-[20px] leading-[26px] max-w-[250px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Online Platform (via Zoom)</h3>
                    </div>
                    <div className="flex justify-start gap-[15px] pl-[28px]">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[100px] h-[30px] rounded-[15px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ======================= GLOBAL STUDY TOUR ======================= */}
          {activeTab === 'global' && (
            <div className="w-full flex flex-col gap-14 xl:gap-20">
              
              {/* Bagian pertama Global */}
              <div className="w-full flex flex-col">
                <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                  <h2 className="text-[#FFFFFF] text-[32px] xl:text-[48px] font-normal leading-tight xl:leading-none tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                      style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                    To be Announced
                  </h2>
                </div>
                
                <div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-6 xl:gap-8 text-[#0F4A6D]">
                  <div className="flex flex-col flex-1 max-w-[800px] w-full pt-0 xl:pt-4 order-1">
                    <div className="mb-2 xl:mb-8 relative pl-0 xl:pl-2">
                      <div className="flex items-center gap-2 xl:gap-4 mb-2 xl:mb-4">
                        <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] xl:w-[45.7px] xl:h-[63.17px]" />
                        <h3 className="text-[20px] xl:text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                      </div>
                      <p className="pl-[28px] xl:pl-[59px] pr-0 xl:pr-4 text-[#0F4A6D] text-[14px] leading-[20px] xl:text-[24px] xl:leading-[32px] font-light tracking-normal mb-6 xl:mb-8 max-w-[634px] w-full" style={{ fontFamily: "'Chivo', sans-serif" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mmm LOCATION dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud 
                      </p>
                    </div>

                    <div className="hidden xl:block mt-8 mb-8 pl-2">
                      <div className="flex items-center gap-4">
                        <img src="/Star.png" alt="Star" className="w-[45.7px] h-[63.17px]" />
                        <h3 className="text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Place Name + Details deatails</h3>
                      </div>
                      <div className="flex gap-[20px] pl-[59px] mt-8">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[209px] h-[71px] rounded-[40px] border-[4px] border-[#F9FEFE] shadow-lg text-white text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center gap-[15px] xl:gap-[30px] w-full xl:w-auto shrink-0 pt-0 xl:pt-2 order-2">
                    
                    {/* Place 1 */}
                    <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                        <img src="/Meow.jpg" alt="Place 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[14px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-3 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Place</h4>
                        <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB Job Job Job Job</p>
                      </div>
                    </div>

                    {/* Place 2 */}
                    <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                        <img src="/Meow.jpg" alt="Place 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[14px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-3 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Speaker</h4>
                        <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB Job Job Job Job</p>
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-col xl:hidden w-full order-3 mt-8">
                    <div className="flex items-start gap-2 mb-4">
                      <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] mt-1" />
                      <h3 className="text-[20px] leading-[26px] max-w-[250px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Place Name + Details deatails</h3>
                    </div>
                    <div className="flex justify-start gap-[15px] pl-[28px]">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[100px] h-[30px] rounded-[15px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Garis */}
                <div className="w-[90%] xl:w-full max-w-[1525px] mx-auto h-[3px] xl:h-[4px] bg-[#F9FEFE] my-10 xl:my-16 shadow-md opacity-50 rounded-full"></div>
              </div>

              {/* Bagian kedua Global */}
              <div className="w-full flex flex-col">
                <div className="w-full max-w-[1525px] mx-auto mb-6 xl:mb-10 px-0 xl:px-4 overflow-visible">
                  <h2 className="text-[#FFFFFF] text-[32px] xl:text-[48px] font-normal leading-tight xl:leading-none tracking-[0.12em] whitespace-normal break-words [text-shadow:3px_3px_2px_rgba(0,0,0,0.3),_0px_0px_10px_var(--glow)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3),_0px_0px_20.6px_var(--glow)]" 
                      style={{ fontFamily: "'Days One', sans-serif", WebkitTextStroke: '1px var(--glow)' }}>
                    To be Announced
                  </h2>
                </div>
                
                <div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-[1525px] mx-auto gap-6 xl:gap-8 text-[#0F4A6D]">
                  <div className="flex flex-col flex-1 max-w-[800px] w-full pt-0 xl:pt-4 order-1">
                    <div className="mb-2 xl:mb-8 relative pl-0 xl:pl-2">
                      <div className="flex items-center gap-2 xl:gap-4 mb-2 xl:mb-4">
                        <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] xl:w-[45.7px] xl:h-[63.17px]" />
                        <h3 className="text-[20px] xl:text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Details</h3>
                      </div>
                      <p className="pl-[28px] xl:pl-[59px] pr-0 xl:pr-4 text-[#0F4A6D] text-[14px] leading-[20px] xl:text-[24px] xl:leading-[32px] font-light tracking-normal mb-6 xl:mb-8 max-w-[634px] w-full" style={{ fontFamily: "'Chivo', sans-serif" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mmm LOCATION dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud 
                      </p>
                    </div>

                    <div className="hidden xl:block mt-8 mb-8 pl-2">
                      <div className="flex items-center gap-4">
                        <img src="/Star.png" alt="Star" className="w-[45.7px] h-[63.17px]" />
                        <h3 className="text-[36px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Place Name + Details deatails</h3>
                      </div>
                      <div className="flex gap-[20px] pl-[59px] mt-8">
                        {['More info', 'Guidebook'].map((text) => (
                          <button key={text} className="w-[209px] h-[71px] rounded-[40px] border-[4px] border-[#F9FEFE] shadow-lg text-white text-[24px] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center gap-[15px] xl:gap-[30px] w-full xl:w-auto shrink-0 pt-0 xl:pt-2 order-2">
                    
                    {/* Place */}
                    <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                        <img src="/Meow.jpg" alt="Place" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[14px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-3 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Place</h4>
                        <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB Job Job Job Job</p>
                      </div>
                    </div>

                    {/* Speaker */}
                    <div className="relative w-[150px] h-[230px] xl:w-[335px] xl:h-[514px]">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[135px] h-[190px] xl:w-[300px] xl:h-[420px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[5px] border-[#F9FEFE] overflow-hidden bg-[#8B898A]">
                        <img src="/Meow.jpg" alt="Speaker" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-[150px] h-[65px] xl:w-[335px] xl:h-[184px] rounded-[20px] xl:rounded-[40px] border-[3px] xl:border-[4px] border-[#F9FEFE] flex flex-col justify-center items-center px-1 xl:px-4 shadow-lg z-10" style={{ backgroundColor: currentTheme.color }}>
                        <h4 className="text-white text-[14px] xl:text-[36px] font-normal leading-none tracking-[0.12em] text-center mb-1 xl:mb-3 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Speaker</h4>
                        <p className="text-white text-[9px] xl:text-[24px] font-normal leading-tight xl:leading-none tracking-[0.12em] text-center [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] xl:[text-shadow:6px_6px_4.89px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Days One', sans-serif" }}>Job Job Job JOB JOB Job Job Job Job</p>
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-col xl:hidden w-full order-3 mt-8">
                    <div className="flex items-start gap-2 mb-4">
                      <img src="/Star.png" alt="Star" className="w-[20px] h-[28px] mt-1" />
                      <h3 className="text-[20px] leading-[26px] max-w-[250px]" style={{ fontFamily: "'Days One', sans-serif" }}>Location: Place Name + Details deatails</h3>
                    </div>
                    <div className="flex justify-start gap-[15px] pl-[28px]">
                      {['More info', 'Guidebook'].map((text) => (
                        <button key={text} className="w-[100px] h-[30px] rounded-[15px] border-[2px] border-[#F9FEFE] shadow-sm text-white text-[10px] transition-all duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: "'Days One', sans-serif", backgroundColor: currentTheme.color }}>{text}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Events;