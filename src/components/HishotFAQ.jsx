import { useState } from "react";

const faqs = [
  {
    question: "What is HISHOT?",
    answer:
      "HISHOT stands for HIMTI seminar, workshop, and study tour, an annual event organized by HIMTI BINUS University aimed at expanding knowledge and experience through technology-focused activities.\n\nIn 2026, HISHOT carries the theme:\n“ORBIT: Optimizing Resource for Building Infrastructure and Technology”, which focuses on how cloud technology and digital infrastructure can be optimized to build efficient, scalable, and sustainable digital infrastructure.",
  },
  {
    question: "What events are in HISHOT 2026?",
    answer:
      "HISHOT 2026 brings a series of exciting activities, including onsite seminar that explore the latest trends in cloud technology and digital infrastructure, as well as interactive online workshops that provide hands-on learning experiences. Participants can also join domestic and international study tours to gain real-world insights into the tech industry. These events are open to the public and are designed to inspire learning, collaboration, and growth in today’s evolving digital landscape.",
  },
  {
    question: "When will the events be held?",
    answer:
      "The series of events will be held from June to December 2026, with details as follows.\n\nSeminar (onsite):\n1. First Session: Rising Through Interactions for The Future  - June 12th 2026\n2. Second Session: From Cloud to Crowd: Creating Technopreneurs of Tomorrow - June 12th 2026\n\nWorkshop (online):\n1. Defending the Sky: AI-Driven Cloud Security & Leaky Buckets  - July 27th 2026 \n2. Modern AI Deployment: Build & Deploy ML Models on Cloud  - August 10th 2026\n\nStudy Tour:\n1. STDN - October 10th, 2026\n2. STLN - December 3rd – 6th, 2026",
  },
  {
    question: "Is HISHOT open for public?",
    answer:
      "Yes! HISHOT 2026 is open to the public, allowing, professionals, and anyone interested in technology to participate. As a hybrid event, it offers both onsite seminars at BINUS University and online workshops, making it accessible for everyone to learn, connect, and explore the world of cloud technology and digital infrastructure.",
  },
  {
    question: "How to register for HISHOT 2026?",
    answer:
      "Ready to explore the ORBIT? 🚀\nTo register for HISHOT 2026, simply visit the registration link [link] and fill in the required details. Once your registration is complete, you will gain access to a wide range of exciting events, including insightful seminar, interactive workshops, and exclusive study tours.\n\nParticipants will also receive further information through the official guidebook, which provides step-by-step instructions, event details, and everything you need to prepare for the experience. Don’t miss this opportunity to learn, connect, and grow in the world of cloud technology and digital infrastructure!",
  },
  {
    question: "What are the benefits of joining HISHOT 2026?",
    answer:
      "HISHOT 2026 offers an exciting opportunity to explore cloud technology and digital infrastructure through interactive sessions and practical experiences. Throughout the event, you’ll have the chance to learn from industry professionals, connect with others who share the same interests, and gain valuable knowledge to support your future in tech.\n\nOn top of that, participants will receive an e-certificate, and BINUS students can earn SAT points making HISHOT 2026 not just a learning experience, but a valuable step toward your digital future.",
  },
];

export default function HishotFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="min-h-screen overflow-hidden flex items-center justify-center px-4 pt-24 pb-32 font-['Chivo']"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Days+One&family=Chivo:wght@300;400;700&display=swap');

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

        /* title badge */
        .faq-badge {
          background: linear-gradient(135deg, #cc3d8f, #b82d80);
          border-radius: 9999px;
          padding: 0.55rem 2.2rem;
          display: inline-block;
          box-shadow: 0 4px 22px rgba(180,40,120,0.45);
          font-family: 'Days One', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          color: white;
          letter-spacing: 0.02em;
          text-shadow: 0 1px 8px rgba(140,30,90,0.3);
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
      className="absolute bottom-[12%] md:top-[26%] lg:top-[36%] left-[-8%] md:left-[-1%] w-[220px] sm:w-[280px] md:w-[clamp(340px,30vw,320px)] z-[2] pointer-events-none"
    />

    {/* Cloud3_Blue — kiri tengah-bawah */}
    <img
      src="/Cloud2_Blue.png"
      alt=""
      aria-hidden="true"
      className="absolute bottom-[8%] md:bottom-[12%] lg:bottom-[12%] left-[-12%] sm:left-[-6%] md:left-[0%] w-[260px] sm:w-[360px] md:w-[clamp(530px,28vw,200px)] z-[2] pointer-events-none"
    />

    {/* Moon — kiri tengah-bawah */}
    <img
      src="/Moon.png"
      alt=""
      aria-hidden="true"
      className="absolute bottom-[20%] md:bottom-[38%] lg:bottom-[38%] left-[2%] w-[70px] sm:w-[100px] md:w-[clamp(130px,28vw,100px)] z-[2] pointer-events-none"
    />

    <img
      src="/Star.png"
      alt=""
      aria-hidden="true"
      className="tw-1 absolute top-[32%] md:top-[35%] left-[18%] md:left-[20%] w-[18px] sm:w-[22px] md:w-[26px] pointer-events-none z-[3]"
    />

    {/* ══════ RIGHT ══════ */}
    {/* ── Decoration: top cloud right ── */}
    <img
      src="/Cloud2_Shadow.png"
      alt=""
      aria-hidden="true"
      className="absolute top-[14%] md:top-[18%] right-[0%] w-[240px] sm:w-[320px] md:w-[clamp(430px,30vw,320px)] z-[2] pointer-events-none"
    />

    {/* ── Decoration: bottom cloud right ── */}
    <img
      src="/Cloud2_Yellow-2.png"
      alt=""
      aria-hidden="true"
      className="absolute top-[10%] md:top-[12%] right-[0%] w-[140px] sm:w-[180px] md:w-[clamp(230px,28vw,200px)] z-[2] pointer-events-none"
    />

    <img
      src="/Beurt_Float.png"
      alt="HiShot mascot"
      className="absolute right-[2%] sm:right-[8%] md:right-[18%] bottom-[1%] md:bottom-[3%] w-[180px] sm:w-[240px] md:w-[clamp(330px,47vw,130px)] z-[5] pointer-events-none select-none"
    />

    <img
      src="/Star.png"
      alt=""
      aria-hidden="true"
      className="tw-2 absolute top-[10%] md:top-[12%] right-[16%] md:right-[22%] w-[16px] sm:w-[20px] md:w-[22px] pointer-events-none z-[3]"
    />

      {/* ══════════ FAQ CARD ══════════ */}
      <div
        className="relative z-[10] max-w-[min(680px,92vw)] mx-auto"
      >
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="faq-badge">Frequently Asked Questions</span>
        </div>

        {/* Card */}
          <div
            className="faq-card bg-[rgba(178,217,231,1)] backdrop-blur-[18px] border-2 border-[rgba(249,254,254,1)] rounded-[32px] px-[2.4rem] pt-[2.2rem] pb-[2.4rem] shadow-[0_0px_4px_rgba(0,0,0,0.25)]"
          >

          <div className="flex flex-col gap-[0.6rem]">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="faq-item-hshot border-b border-[#0F4A6D]/20"
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-4 bg-none border-none cursor-pointer text-left"
                  >
                    <span
                      className="font-['Chivo'] font-bold text-[clamp(0.85rem,1.8vw,0.97rem)] text-[rgba(15,74,109,1)] leading-[1.4] tracking-[0.01em] drop-shadow-[0_0px_4px_rgba(0,0,0,0.25)]"
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

                  {/* Answer */}
                  <div className={`faq-answer-hshot${isOpen ? " open" : ""}`}>
                    <div className="faq-answer-inner whitespace-pre-line">
                      <p
                        className="font-['Chivo'] font-light text-[clamp(0.82rem,1.6vw,0.92rem)] text-[rgba(15,74,109,1)] leading-[1.4] pb-4 m-0 text-justify"
                      >
                        {faq.answer}
                      </p>
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