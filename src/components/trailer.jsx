export default function Trailer() {
  return (
    /*
      ✅ FIX: Section ini sekarang berada di flow normal di luar HiShotHero,
      sehingga tidak ada stacking context conflict dengan dekorasi hero.

      - overflow-x-clip diganti overflow-x-hidden agar kompatibel lebih luas
      - Posisi relatif & z-index dekorasi internal Trailer tidak lagi bertabrakan
        dengan z-index dari cloud/planet di HiShotHero
      - Tambahan: isolation: isolate pada section utama agar stacking context bersih
    */
    <section
      className="relative overflow-x-hidden w-full max-w-full"
      style={{ isolation: "isolate" }}         /* ✅ isolate stacking context */
    >
      <section className="flex flex-col md:flex-row md:p-10 lg:p-22 gap-0 md:items-stretch">

        {/* ── Card Kiri: What is HISHOT? ── */}
        <div className="rounded-2xl sm:rounded-3xl md:p-4 md:bg-card md:flex-1 md:border-2 border-[#F9FEFE] md:pb-20 lg:pb-0 md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <h1 className="text-3xl lg:text-4xl p-4 pr-12 pb-2 font-days-one glow w-3/4 md:w-fit bg-card z-10 inverted-radius">
            What is HISHOT?
          </h1>
          <p className="font-chivo text-blue-info text-sm lg:text-xl bg-card p-4 border-t-2 border-[#F9FEFE] z-0 md:border-0">
            HISHOT 2026 is an annual event organized by HIMTI BINUS University that focuses on Cloud Technology
            and Digital Infrastructure. With the theme "
            <b>ORBIT: Optimizing Resource for Building Infrastructure and Technology</b>
            ", HISHOT 2026 features a series of seminars, workshops, and study tours, offering both onsite and
            online experiences. This event highlights the importance of efficient resource management in today's
            rapidly evolving digital era. HISHOT 2026 provides a platform to learn, collaborate, and grow in
            the field of digital infrastructure and emerging technologies.
          </p>
        </div>

        {/* ── Card Kanan: Trailer ── */}
        <div className="bg-card p-4 md:p-6 lg:p-10 -mt-4 w-full flex justify-center flex-col border-b-2 border-[#F9FEFE] md:flex-1 sm:mt-0 md:relative md:top-10 md:rounded-4xl md:border-2 pb-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <h2 className="font-days-one text-2xl lg:text-4xl text-white text-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.25)] self-center bg-[#F8A819]/90 w-fit border-[1.8px] border-[#F9FEFE] pt-4 pb-4 pr-4 pl-4 rounded-2xl md:rounded-3xl -mb-8 z-10 shadow-[0_1.8px_1.8px_rgba(0,0,0,0.25)]">
            Trailer
          </h2>

          {/*
            ✅ FIX: iframe wrapper pakai relative + z-0 agar badge "Trailer"
            (z-10) bisa overlap ke atas iframe tanpa iframe bocor ke section lain.
            aspect-video memastikan rasio 16:9 responsif tanpa height hardcoded.
          */}
          <div className="relative w-full max-w-3xl self-center">
            {/* Masih dalam revisi — ganti src dengan URL YouTube embed / video */}
            <iframe
              src=""
              title="HISHOT 2026 Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="relative z-0 w-full border-2 border-blue-950 bg-white aspect-video rounded-b-xl"
              style={{ display: "block" }}   /* hapus inline-block gap bawah iframe */
            />
          </div>
        </div>

      </section>

      {/* ── Dekorasi: Mascot & Cloud ── */}
      {/*
        ✅ FIX: Semua img dekorasi di Trailer pakai z-index lokal (z-10, -z-10).
        Karena parent section sudah isolation:isolate, z-index ini tidak
        akan bersaing dengan dekorasi di HiShotHero sama sekali.
      */}
      <img
        className="hidden absolute md:block md:-bottom-5 lg:bottom-6 md:-left-2 lg:left-4 md:w-52"
        src="/Icons/Mascot1.svg"
        alt="Mascot"
      />
      <img
        className="absolute -bottom-25 -left-10 w-70 sm:w-80 md:w-130 md:-left-20 md:-bottom-30 lg:-bottom-20 -z-10"
        src="/Icons/Cloud3_Shadow.svg"
        alt="Cloud Shadow"
      />
      <img
        className="absolute hidden -bottom-25 -right-10 w-70 md:block md:w-100 md:-right-40 md:-bottom-30 lg:-bottom-20 lg:-right-32 -z-10"
        src="/Icons/Planet9.svg"
        alt="Planet"
      />
    </section>
  );
}
