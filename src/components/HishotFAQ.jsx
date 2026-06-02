import { useState } from "react";

{/* ══════ TIMELINE EVENTS ══════ */}
const timelineEvents = [
  { id: 1, label: "Onsite Seminar",    date: "June 12th 2026",           position: "top",    filled: true  },
  { id: 2, label: "Online Workshop 1", date: "July 27th 2026",           position: "bottom", filled: false },
  { id: 3, label: "Online Workshop 2", date: "August 10th 2026",         position: "top",    filled: false },
  { id: 4, label: "Local Study Tour",  date: "October 10th, 2026",       position: "bottom", filled: false },
  { id: 5, label: "Global Study Tour", date: "December 3rd – 6th, 2026", position: "top",    filled: false },
];

{/* ══════ FAQ ══════ */}
const faqs = [
  {
    question: "What is HISHOT?",
    answer: (
      <>
        HISHOT stands for HIMTI Seminar, Workshop, and Study Tour. It’s the ultimate annual flagship event hosted by HIMTI BINUS Univesity designed to bridge the gap between classroom theory and real-world tech mastery. {"\n\n"}For 2026, we’re going big with our theme: “<strong>ORBIT: Optimizing Resource for Building Infrastructure and Technology.</strong>” 🌌 We’re diving deep into how cloud technology is the secret sauce behind the next generation of efficient, scalable, and sustainable digital infrastructure.
      </>
    ),
  },
  {
    question: "What events are in HISHOT 2026?",
    type: "events",
    events: [
      {
        title: "Onsite Seminar",
        desc: "Get face-to-face insights on the latest cloud trends.",
      },
      {
        title: "Interactive Online Workshops",
        desc: "Get your hands dirty with practical, skill-building sessions.",
      },
      {
        title: "Study Tours",
        desc: "Join our domestic (STDN) and international (STLN) tours to see how the tech industry really works behind the scenes.",
      },
    ],
  },
  {
    question: "When will the events be held?",
    answer: null,
  },
  {
    question: "Is HISHOT open for public?",
    answer:
      "YES! HISHOT 2026 is open to the public. Whether you're a student, a professional, or just a curious tech enthusiast, you’re welcome to join. It’s a hybrid event, so you can join us on-campus or plug in from anywhere in the world! 🌏",
  },
  {
    question: "How to register for HISHOT 2026?",
    answer:
      "Ready to enter the ORBIT? Just hit the “Register Now” button, pick your preferred category from the dropdown menu, and follow the link to complete your registration form. Keep an eye on your inbox, the official guidebook with all the prep details will be coming your way soon! 📩",
  },
  {
    question: "What are the benefits of joining HISHOT 2026?",
    type: "benefits",
    intro: "Beyond the bragging rights, you’ll get:",
    benefits: [
      {
        title: "Expert Insights",
        desc: "Learn directly from industry pros.",
        emoji: "💡",
      },
      {
        title: "Networking",
        desc: "Connect with like-minded peers and future collaborators.",
        emoji: "🤝",
      },
      {
        title: "Recognition",
        desc: "Get an official e-certificate to level up your portfolio.",
        emoji: "📜",
      },
      {
        title: "SAT Points",
        desc: "Exclusive for BINUS students. Don't miss out on boosting your records!",
        emoji: "📈",
      },
    ],
  },
];

{/* ══════ TIMELINE COMPONENT ══════ */}
function EventTimeline() {
  return (
    <div className="w-full pt-1 pb-3">
      {/* Intro sentence */}
      <p className="[font-family:var(--font-body)] font-normal text-[clamp(0.78rem,1.5vw,0.88rem)] text-[rgba(15,74,109,1)] leading-[1.6] mb-[1.4rem]">
        The series of events will be held from June to December 2026, with details as follows :
      </p>

      {/* ── DESKTOP / TABLET (≥ 520 px) ── */}
      <div className="hidden sm:block select-none">

        {/* TOP labels */}
        <div className="flex mb-[6px]">
          {timelineEvents.map((ev) =>
            ev.position === "top" ? (
              <div
                key={ev.id}
                className="flex-1 flex flex-col items-center text-center min-w-0 px-2"
              >
                <span className="[font-family:var(--font-body)] font-bold text-[clamp(0.68rem,1.3vw,0.82rem)] text-[rgba(15,74,109,1)] leading-[1.25]">
                  {ev.label}
                </span>

                <span className="[font-family:var(--font-body)] text-[clamp(0.62rem,1.1vw,0.75rem)] text-[rgba(15,74,109,0.82)] mt-[2px]">
                  {ev.date}
                </span>
              </div>
            ) : (
              <div key={ev.id} className="flex-1" />
            )
          )}
        </div>

        {/* LINE + DOTS */}
        <div className="relative flex items-center h-[28px]">

          {/* horizontal rule */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-[rgba(15,74,109,0.8)] rounded-[2px]" />

          {/* dots */}
          <div className="relative flex w-full">
            {timelineEvents.map((ev) => (
              <div
                key={ev.id}
                className="flex-1 flex justify-center items-center"
              >
                <div
                  className={`
                    rounded-full
                    border-[2.5px]
                    border-[rgba(15,74,109,1)]
                    relative
                    z-[2]
                    shrink-0
                    ${ev.filled
                      ? "w-[22px] h-[22px] bg-[rgba(15,74,109,1)]"
                      : "w-[18px] h-[18px] bg-transparent"}
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM labels */}
        <div className="flex mt-[6px]">
          {timelineEvents.map((ev) =>
            ev.position === "bottom" ? (
              <div
                key={ev.id}
                className="flex-1 flex flex-col items-center text-center px-1"
              >
                <span className="[font-family:var(--font-body)] font-bold text-[clamp(0.68rem,1.3vw,0.82rem)] text-[rgba(15,74,109,1)] leading-[1.25]">
                  {ev.label}
                </span>

                <span className="[font-family:var(--font-body)] font-normal text-[clamp(0.62rem,1.1vw,0.75rem)] text-[rgba(15,74,109,0.82)] mt-[2px]">
                  {ev.date}
                </span>
              </div>
            ) : (
              <div key={ev.id} className="flex-1" />
            )
          )}
        </div>
      </div>

      {/* ── MOBILE vertical timeline (< 520 px) ── */}
      <div className="sm:hidden relative pl-8">

        {/* vertical line */}
        <div className="absolute left-[13px] top-1 bottom-1 w-[2.5px] bg-[rgba(15,74,109,0.75)] rounded-[2px]" />

        {timelineEvents.map((ev) => (
          <div
            key={ev.id}
            className="relative flex items-start py-1.5"
          >

            {/* dot */}
            <div
              className={`
                absolute
                top-[14px]
                rounded-full
                border-[2.5px]
                border-[rgba(15,74,109,1)]
                z-[2]
                box-border
                shrink-0
                ${ev.filled
                  ? "left-[-9px] w-[22px] h-[22px] bg-[rgba(15,74,109,1)]"
                  : "left-[-7px] w-[17px] h-[17px] bg-transparent"}
              `}
            />

            {/* text */}
            <div className="ml-4 text-left">
              <p className="[font-family:var(--font-body)] font-bold text-[0.82rem] text-[rgba(15,74,109,1)] m-0 leading-[1.3]">
                {ev.label}
              </p>

              <p className="[font-family:var(--font-body)] font-normal text-[0.74rem] text-[rgba(15,74,109,0.85)] mt-[-3px] mb-0">
                {ev.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HishotFAQ() {
  const [openSet, setOpenSet] = useState(new Set());
 
  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section
      id="faq"
      className="mb-[4rem] sm:mb-[8rem] h-fit overflow-x-clip relative items-center justify-center md:px-4 pt-24 [font-family:var(--font-body)]"
    >
      <style>{`
        .faq-item-hshot {
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .faq-item-hshot:hover {
          background: rgba(195, 228, 232, 0.14) !important;
        }
        .faq-answer-hshot {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.38s cubic-bezier(.4,0,.2,1),
                      opacity 0.32s ease,
                      padding 0.3s ease;
          opacity: 0;
        }
        .faq-answer-hshot.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-answer-inner { overflow: hidden; }

        .faq-chevron {
          transition: transform 0.32s cubic-bezier(.4,0,.2,1);
          flex-shrink: 0;
        }
        .faq-chevron.open {
          transform: rotate(180deg);
        }

        .faq-question-text {
          color: #0F4A6D;
          transition: color 0.25s ease, text-shadow 0.25s ease;
          text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        }
        .faq-question-text.active {
          color: #f4f8fb;
          font-weight: 600;
          -webkit-text-stroke: 2px #0F4A6D;
          paint-order: stroke fill;
          text-shadow:
              0 4px 4px rgba(0,0,0,0.25),
              0 0 20px #0F4A6DBF;
          paint-order: stroke fill
        }
 
        .faq-chevron-path {
          transition: stroke 0.25s ease;
        }

        /* title badge */
        .faq-badge {
          background-color: #CC61A5E5;
          border-radius: 20px;
          padding: 0.55rem 2.2rem;
          display: inline-block;
          border: 2px solid #F9FEFE;
          box-shadow: 0 4px 4px rgba(0,0,0,0.25);
          font-family: 'Days One', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          color: white;
          letter-spacing: 0.02em;
          text-shadow: 0 4px 4px rgba(0,0,0,0.25);
        }

        /* sparkle twinkle */
        @keyframes twinkle {
          0%   { opacity: 0.25; transform: scale(0.75); }
          100% { opacity: 1;    transform: scale(1.25); }
        }
        .tw-1 { animation: twinkle 2.1s 0.0s infinite alternate; }
        .tw-2 { animation: twinkle 1.8s 0.5s infinite alternate; }
        .tw-3 { animation: twinkle 2.5s 1.0s infinite alternate; }
        .tw-4 { animation: twinkle 1.6s 0.3s infinite alternate; }

        @media (max-width: 768px) {
          .faq-deco-hide { display: none !important; }
          .faq-card {
            padding: 1.5rem 1.2rem !important;
            border-radius: 20px !important;
          }
        }
      `}</style>

    {/* ══════ LEFT ══════ */}
    {/* Cloud3_Shadow — kiri atas */}
    <img
      src="/Cloud3_Shadow.png"
      alt=""
      aria-hidden="true"
      className="absolute hidden md:block top-[10rem] -left-[3rem] pointer-events-none w-[25rem]"
      // className="absolute bottom-[12%] md:top-[26%] lg:top-[36%] left-[-8%] md:left-[-1%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2] pointer-events-none"
    />

    {/* Cloud3_Blue — kiri tengah-bawah */}
    <img
      src="/Cloud2_Blue.png"
      alt=""
      aria-hidden="true"
      className="absolute hidden md:block top-[19rem] -left-[2rem] pointer-events-none w-[25rem]"
      // className="absolute bottom-[8%] md:bottom-[12%] lg:bottom-[12%] left-[-12%] sm:left-[-6%] md:left-[0%] w-[260px] sm:w-[360px] md:w-[clamp(530px,28vw,200px)] z-[2] pointer-events-none"
    />

    {/* Moon — kiri tengah-bawah */}
    <img
      src="/Moon.png"
      alt=""
      aria-hidden="true"
      className=" w-[8rem] absolute hidden md:block top-[18rem] left-[4rem] pointer-events-none"
      // className="absolute bottom-[20%] md:bottom-[38%] lg:bottom-[38%] left-[2%] w-[70px] sm:w-[100px] md:w-[clamp(130px,28vw,100px)] z-[2] pointer-events-none"
    />

    <img
      src="/Star.png"
      alt=""
      aria-hidden="true"
      className="tw-1 absolute top-[32%] md:top-[35%] left-[13%] md:left-[15%] w-[18px] sm:w-[22px] md:w-[26px] pointer-events-none z-[3]"
    />

    {/* ══════ RIGHT ══════ */}
    {/* ── Decoration: top cloud right ── */}
    <img
      src="/Cloud2_Shadow.png"
      alt=""
      aria-hidden="true"
      className=" w-[23rem] absolute hidden md:block top-[2rem] right-0 pointer-events-none"
      // className="absolute top-[14%] md:top-[18%] right-[0%] w-[240px] sm:w-[320px] md:w-[clamp(430px,30vw,320px)] z-[2] pointer-events-none"
    />

    {/* ── Decoration: bottom cloud right ── */}
    <img
      src="/Cloud2_Yellow-2.png"
      alt=""
      aria-hidden="true"
      className=" w-[12rem] absolute hidden md:block top-0 right-0 pointer-events-none"
      // className="absolute top-[10%] md:top-[12%] right-[0%] w-[140px] sm:w-[180px] md:w-[clamp(230px,28vw,200px)] z-[2] pointer-events-none"
    />

    <img
      src="/Star.png"
      alt=""
      aria-hidden="true"
      className="tw-2 absolute top-[10%] md:top-[12%] right-[16%] md:right-[22%] w-[16px] sm:w-[20px] md:w-[22px] pointer-events-none z-[3]"
    />

    <img 
      className="hidden md:block absolute w-[3rem] left-1 -bottom-[5rem]" 
      src="Star1.svg" 
      alt="Star" />
    <img 
      className="hidden md:block absolute w-[3rem] -bottom-[7rem] right-[0.2rem]" 
      src="Star1.svg" 
      alt="Star" />

      {/* ══════════ FAQ CARD ══════════ */}
      <div id="faq"
        className="relative z-[10] md:max-w-[min(800px,80vw)] max-lg:max-w-[min(900px,100vw)] w-full md:mx-auto"
      >
        {/* Badge */}
        <div className="flex w-full justify-center">
          <div className="absolute self-center text-center pb z-10">
            <span className="faq-badge">Frequently Asked Questions</span>
          </div>
        </div>

        {/* Card */}
          <div
            className="faq-card bg-[#B2D9E7] border-2 rounded-[32px] px-[2.4rem] pt-[2.2rem] pb-[4rem] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[650px] sm:h-[500px] md:h-[490px] lg:h-[550px] relative"
          >
            <img
            src="/Beurt_Float.png"
            alt="HiShot mascot"
            className=" w-[10rem] absolute hidden md:block top-[15rem] md:-right-[6rem] lg:w-[15rem] lg:-right-[10rem] pointer-events-none -z-10"
            // className="absolute right-[2%] sm:right-[8%] md:right-[18%] bottom-[1%] md:bottom-[3%] w-[180px] sm:w-[240px] md:w-[clamp(330px,47vw,130px)] z-[5] pointer-events-none select-none"
          />

          <div className="flex pt-6 md:pt-0 flex-col gap-[0.6rem] overflow-y-scroll scrollbar h-full">
            {faqs.map((faq, i) => {
              const isOpen = openSet.has(i);
              const isTimeline = faq.answer === null;

              return (
                <div
                  key={i}
                  className="faq-item-hshot border-b border-[#0F4A6D]/20"
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-4 bg-none cursor-pointer border-0 text-left bg-transparent"
                  >
                    <span
                      className={`faq-question-text [font-family:var(--font-body)] font-semibold text-[clamp(1.2rem,2vw,1.7rem)] leading-[1.4] tracking-[0.01em]${isOpen ? " active" : ""}`}
                      style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    >
                      {faq.question}
                    </span>

                    <svg
                      className={`faq-chevron${isOpen ? " open" : ""}`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="rgba(15, 74, 109, 1)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="w-full bg-[#0F4A6D] h-[2px] -mt-4 mb-[1.5px]"></div>

                  {/* Answer */}
                  <div className={`faq-answer-hshot${isOpen ? " open" : ""}`}>
                    <div className="faq-answer-inner whitespace-pre-line">

                      {/* EVENTS & BENEFITS */}
                      {faq.type === "events" || faq.type === "benefits" ? (
                        <div className="pb-4 pt-3">

                          {/* Intro */}
                          {faq.intro && (
                            <p
                              className="
                                [font-family:var(--font-body)]
                                text-[rgba(15,74,109,1)]
                                text-[0.9rem]
                                sm:text-[1rem]
                                md:text-[1.05rem]
                                leading-[1.6]
                                mb-5
                              "
                            >
                              {faq.intro}
                            </p>
                          )}

                          {/* Timeline Bullet UI */}
                          <div
                            className="
                              relative
                              px-[24px]
                              sm:px-[35px]
                              md:px-[45px]
                              flex
                              flex-col
                              gap-5
                              py-1
                              w-full
                              text-[#0F4A6D]
                            "
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {(faq.events || faq.benefits).map((item, idx, arr) => (
                              <div
                                key={idx}
                                className="relative w-full flex items-start"
                              >

                                {/* Circle */}
                                <div
                                  className="
                                    absolute
                                    -left-[22px]
                                    sm:-left-[30px]
                                    md:-left-[38px]
                                    top-[4px]
                                    w-[16px]
                                    h-[16px]
                                    sm:w-[20px]
                                    sm:h-[20px]
                                    md:w-[24px]
                                    md:h-[24px]
                                    rounded-full
                                    border-[3px]
                                    border-[#0F4A6D]
                                    bg-[#B2D9E7]
                                    z-10
                                  "
                                />

                                {/* Vertical Line */}
                                {idx !== arr.length - 1 && (
                                  <div
                                    className="
                                      absolute
                                      -left-[15px]
                                      sm:-left-[21px]
                                      md:-left-[27px]
                                      top-[18px]
                                      sm:top-[22px]
                                      md:top-[28px]
                                      w-[2px]
                                      h-[calc(100%+20px)]
                                      bg-[#0F4A6D]
                                    "
                                  />
                                )}

                                {/* Text */}
                                <p
                                  className="
                                    text-[0.9rem]
                                    sm:text-[1rem]
                                    md:text-[1.08rem]
                                    font-normal
                                    leading-[1.7]
                                    tracking-normal
                                    text-left
                                    text-[#0F4A6D]
                                  "
                                >
                                  <span className="font-bold">
                                    {item.title}:
                                  </span>{" "}
                                  {item.desc}{" "}
                                  {item.emoji && (
                                    <span>{item.emoji}</span>
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                      ) : isTimeline ? (

                        <div className="pb-2">
                          <EventTimeline />
                        </div>

                      ) : (

                        <p className="[font-family:var(--font-body)] font-normal text-[clamp(0.82rem,1.6vw,0.92rem)] text-[rgba(15,74,109,1)] leading-[1.4] pb-4 text-justify whitespace-pre-line mt-2">
                          {faq.answer}
                        </p>

                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}