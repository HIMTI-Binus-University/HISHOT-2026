export default function Trailer(){ 
    return( 
        <section id="about" className="relative overflow-x-clip w-full max-w-full isolate"> 
            <section className="flex flex-col md:flex-row pt-10 pb-5 md:p-5 lg:p-22 gap-0 md:items-stretch"> 
                <div className=" rounded-2xl sm:rounded-3xl md:p-4 md:bg-[var(--color-card)] md:flex-1 md:border-2 border-[#F9FEFE] md:pb-20 md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] lg:pb-18 md:border-r-0 inverted-radius-card md:-mr-1 text-left">
                    <h1 className="text-3xl lg:text-4xl p-4 pr-12 pb-2 font-medium [font-family:var(--font-days-one)] glow w-3/4 md:w-fit bg-[var(--color-card)] z-10 inverted-radius">What is HISHOT?</h1>
                    <p className="[font-family:var(--font-work-sans)] text-[var(--color-blue-info)] text-sm lg:text-[18px] bg-[var(--color-card)] p-4 border-t-2 border-[#F9FEFE] z-10 -mt-1 md:border-0 text-justify"> HISHOT 2026 is an annual event organized by HIMTI BINUS University that focuses on Cloud Technology and Digital Infrastructure. With the theme “<b>ORBIT: Optimizing Resource for Building Infrastructure and Technology</b>”, HISHOT 2026 features a series of seminars, workshops, and study tours, offering both onsite and online experiences. This event highlights the importance of efficient resource management in today’s rapidly evolving digital era. HISHOT 2026 provides a platform to learn, collaborate, and grow in the field of digital infrastructure and emerging technologies. </p>
                </div> 
                <div className="bg-[var(--color-card)] p-4 md:px-6 lg:px-10 -mt-4 w-full flex justify-center items-center flex-col border-b-2 border-[#F9FEFE] md:flex-1 sm:mt-0 md:relative md:top-10 md:rounded-[2.25rem] md:border-2 md:border-l-0 pb-8 shadow-[0_4px_0_0_rgba(0,0,0,0.25)] md:-ml-0.5 ">
                    <h2 className="[font-family:var(--font-days-one)] text-2xl lg:text-4xl text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] self-center bg-[#F8A819]/90 w-fit border-[1.8px] border-[#F9FEFE] pt-4 pb-4 pr-4 pl-4 rounded-2xl md:rounded-3xl -mb-8 z-10 shadow-[0_4px_4x_rgba(0,0,0,0.25)]">Trailer</h2>
                    {/* Masih dalam revisi */} 
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O0ncW1yV3Co?si=ki8qLxE0CZXeChrP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-full aspect-video"></iframe>
                </div> 
            </section> 
            
            {/* Mascot */}
            <img 
            className="hidden absolute md:block md:bottom-[-2.5rem] md:left-[-0.5rem] lg:left-[1rem] md:w-[13rem]" 
            src="/Icons/Mascot1.svg" 
            alt="Mascot"
            /> 

            {/* Cloud Shadow */}
            <img 
            className="absolute bottom-[-4rem] left-[-2.5rem] w-[12rem] sm:w-[20rem] md:w-[32.5rem] md:left-[-5rem] md:bottom-[-7.5rem] lg:bottom-[-5rem] -z-10" 
            src="/Icons/Cloud3_Shadow.svg" 
            alt="Cloud Shadow"
            /> 

            {/* Planet 9 */}
            <img 
            className="absolute hidden md:block bottom-[-6.25rem] right-[-2.5rem] w-[17.5rem] md:w-[25rem] md:right-[-10rem] md:bottom-[-7.5rem] lg:bottom-[-5rem] lg:right-[-8rem] -z-10" 
            src="/Icons/Planet9.svg" 
            alt="Planet"
            /> 

            {/* Planet 3 */}
            <img 
            className="absolute hidden md:block left-[-2.5rem] w-[17.5rem] md:w-[24rem] md:left-[-10rem] md:bottom-[7.5rem] lg:bottom-[9rem] lg:left-[-9rem] -z-10" 
            src="/Icons/Planet3.svg" 
            alt="Planet" 
            />

            {/* Cloud Outline */}
            <img 
            className="absolute hidden md:block left-[-2.5rem] w-[17.5rem] md:w-[18rem] md:left-[7.5rem] md:bottom-[-5rem] lg:w-[20rem] lg:bottom-[-2.5rem] lg:left-[10rem] -z-10" 
            src="/Icons/Cloud1_Outline.svg" 
            alt="Cloud Outline" 
            />

            <img 
            className="absolute w-[3rem] left-1" 
            src="Star1.svg" 
            alt="Star" />
            <img 
            className="absolute w-[3rem] -bottom-[6rem] md:-bottom-[10rem] right-[0.2rem]" 
            src="Star1.svg" 
            alt="Star" />
        </section> 

    ); }