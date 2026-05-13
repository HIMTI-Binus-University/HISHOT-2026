export default function Trailer(){
    return(
        <section className="flex flex-col lg:flex-row items-center md:p-10 gap-0">
            <div className="md:rounded-3xl md:p-4 sm:bg-card">
                <h1 className="text-3xl md:text-5xl p-4 pr-12 pb-2 sm:mb-4 font-days-one glow w-3/4 bg-card z-10 inverted-radius">What is HISHOT?</h1>
                <p className="font-chivo text-blue-info text-sm md:text-base bg-card p-4 -mt-2 border-2 border-[#F9FEFE] z-0">
                    HISHOT 2026 is an annual event organized by HIMTI BINUS University that focuses on Cloud Technology and Digital Infrastructure. With the theme “<b>ORBIT: Optimizing Resource for Building Infrastructure and Technology</b>”, HISHOT 2026 features a series of seminars, workshops, and study tours, offering both onsite and online experiences. This event highlights the importance of efficient resource management in today’s rapidly evolving digital era. HISHOT 2026 provides a platform to learn, collaborate, and grow in the field of digital infrastructure and emerging technologies.
                </p>
            </div>
            <div className="bg-card p-4 -mt-4 w-full flex justify-center flex-col border-b-2 border-[#F9FEFE]">
                <div className="self-center bg-[#F8A819] w-fit border-[1.8px] border-[#F9FEFE] pt-2 pb-2 pr-4 pl-4 rounded-2xl -mb-6.5 z-10 shadow-[0_1.8px_1.8px_rgba(0,0,0,0.25)] opacity-90">
                    <h2 className="font-days-one text-2xl text-white text-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.25)]">Trailer</h2>
                </div>
                {/* Masih dalam revisi */}
                <iframe src="" frameborder="0" className="w-full border-2 border-blue-950"></iframe>
            </div>
        </section>
    );
}