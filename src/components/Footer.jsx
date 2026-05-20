const Footer = () => {
    return (
        <footer 
            className="w-full rounded-t-[50px] border-[4px] border-b-0 border-[#F9FEFE] px-15 py-15 z-10 md:py-20 mt-auto px-5"
            style={{ 
                background: 'radial-gradient(276.97% 87.89% at 50% 114.85%, #F1E6CD 0%, #B2D9E7 65%)' 
            }}
        >            
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between py-5">
                
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                    <img
                        src="/logo/LOGOBINUS.svg"
                        alt="Binus University"
                        className="h-20 md:h-28 object-contain"
                    />
                    <img
                        src="/logo/LOGOHIMTI.svg"
                        alt="HIMTI"
                        className="h-24 md:h-32 object-contain"
                    />
                </div>

                <div className="mt-8 md:mt-0">
                    <img
                        src="/logo-title.jpeg"
                        alt="HISHOT 2026"
                        className="h-20 md:h-28 object-contain transition-transform duration-200 
                        ml-5 ease-in-out hover:scale-110"
                    />
                </div>

            </div>
        </footer>
    );
};

export default Footer;