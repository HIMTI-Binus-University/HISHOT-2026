export default function Trailer(){ 
    return( 
        <section className="relative overflow-x-clip w-full max-w-full"> 
            <section className="flex flex-col md:flex-row md:p-10 lg:p-22 gap-0 md:items-stretch"> 
                <div className=" rounded-2xl sm:rounded-3xl md:p-4 md:bg-card md:flex-1 md:border-2 border-[#F9FEFE] md:pb-20 md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] lg:pb-18 md:border-r-0 inverted-radius-card md:-mr-1">
                    <h1 className="text-3xl lg:text-4xl p-4 pr-12 pb-2 font-days-one glow w-3/4 md:w-fit bg-card z-10 inverted-radius">What is HISHOT?</h1>
                    <p className="font-chivo text-blue-info text-sm lg:text-xl bg-card p-4 border-t-2 border-[#F9FEFE] z-10 -mt-1 md:border-0"> HISHOT 2026 is an annual event organized by HIMTI BINUS University that focuses on Cloud Technology and Digital Infrastructure. With the theme “<b>ORBIT: Optimizing Resource for Building Infrastructure and Technology</b>”, HISHOT 2026 features a series of seminars, workshops, and study tours, offering both onsite and online experiences. This event highlights the importance of efficient resource management in today’s rapidly evolving digital era. HISHOT 2026 provides a platform to learn, collaborate, and grow in the field of digital infrastructure and emerging technologies. </p>
                </div> 
                <div className="bg-card p-4 md:p-6 lg:p-10 -mt-4 w-full flex justify-center flex-col border-b-2 border-[#F9FEFE] md:flex-1 sm:mt-0 md:relative md:top-10 md:rounded-4xl md:border-2 md:border-l-0 pb-8 shadow-[0_4px_0_0_rgba(0,0,0,0.25)] -ml-0.5">
                    <h2 className="font-days-one text-2xl lg:text-4xl text-white text-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.25)] self-center bg-[#F8A819]/90 w-fit border-[1.8px] border-[#F9FEFE] pt-4 pb-4 pr-4 pl-4 rounded-2xl md:rounded-3xl -mb-8 z-10 shadow-[0_1.8px_1.8px_rgba(0,0,0,0.25)]">Trailer</h2>
                    {/* Masih dalam revisi */} 
                    <iframe src="" frameborder="0" className="w-full border-2 border-blue-950 bg-white aspect-video max-w-3xl"></iframe> 
                </div> 
            </section> 
            <img className="hidden absolute md:block md:-bottom-5 lg:bottom-6 md:-left-2 lg:left-4 md:w-52" src="/Icons/Mascot1.svg" alt="Mascot"/> 

            <img className="absolute -bottom-25 -left-10 w-70 sm:w-80 sm: md:w-130 md:-left-20 md:-bottom-30 lg:-bottom-20 -z-10" src="/Icons/Cloud3_Shadow.svg" alt="Cloud Shadow"/> 

            <img className="absolute hidden -bottom-25 -right-10 w-70 md:block md:w-100 md:-right-40 md:-bottom-30 lg:-bottom-20 lg:-right-32 -z-10" src="/Icons/Planet9.svg" alt="Planet"/> 

            <img className="absolute hidden -left-10 w-70 md:block md:w-96 md:-left-40 md:bottom-30 lg:bottom-36 lg:-left-36 -z-10" src="/Icons/Planet3.svg" alt="Planet" />

            <img className="absolute hidden -left-10 w-70 md:block md:w-72 md:left-30 md:-bottom-20 lg:w-80 lg:-bottom-10 lg:left-40 -z-10" src="/Icons/Cloud1_Outline.svg" alt="Cloud Outline" />
        </section> 

    ); }