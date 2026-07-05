import { useState, useEffect, useRef, useCallback } from "react";

export default function SpecialThanks() {
  const sponsors = [
    { id: 0, name: "Indonesia Block Chain Center", logo: "/Sponsor/IndonesiaBlockChainCenter.png" },
    { id: 1, name: "Dewaweb", logo: "/Sponsor/dewaweb-square-logo-rgb.png" },
    // { id: 2, name: "Sponsor Three", logo: "/sponsors/sponsor3.png" },
    // { id: 3, name: "Sponsor Four", logo: "/sponsors/sponsor4.png" },
    // { id: 4, name: "Sponsor Five", logo: "/sponsors/sponsor5.png" },
  ];

  const GAP = 15;
  const BLEED = 10;

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const isMobile = () => typeof window !== "undefined" && window.innerWidth < 640;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [itemWidth, setItemWidth] = useState(0);
  const [mobilePad, setMobilePad] = useState(0);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const vc = getVisibleCount();
      setVisibleCount(vc);
      const hPad = isMobile() ? trackRef.current.clientWidth * 0.2 : BLEED;
      setMobilePad(hPad);
      const usable = trackRef.current.clientWidth - hPad * 2;
      setItemWidth((usable - GAP * (vc - 1)) / vc);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const totalBoxes = sponsors.length;
  const maxIndex = Math.max(0, totalBoxes - visibleCount);
  // If all sponsors fit within the visible area, just center them — no carousel needed
  const isCentered = totalBoxes <= visibleCount;

  const goTo = useCallback(
    (idx) => setCurrentIndex(Math.max(0, Math.min(idx, maxIndex))),
    [maxIndex]
  );

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(next, 3000);
  }, [next]);

  useEffect(() => {
    if (!isPaused && !isCentered) startAutoPlay();
    return stopAutoPlay;
  }, [isPaused, startAutoPlay, isCentered]);

  const commitDrag = useCallback(() => {
    if (dragOffset < -60) next();
    else if (dragOffset > 60)
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsPaused(false), 4000);
  }, [dragOffset, maxIndex, next]);

  const onMouseDown = (e) => { if (isCentered) return; setIsDragging(true); setDragStartX(e.clientX); setDragOffset(0); setIsPaused(true); stopAutoPlay(); };
  const onMouseMove = (e) => { if (!isDragging) return; setDragOffset(e.clientX - dragStartX); };
  const onMouseUp = () => { if (!isDragging) return; commitDrag(); };
  const onTouchStart = (e) => { if (isCentered) return; setIsDragging(true); setDragStartX(e.touches[0].clientX); setDragOffset(0); setIsPaused(true); stopAutoPlay(); };
  const onTouchMove = (e) => { if (!isDragging) return; setDragOffset(e.touches[0].clientX - dragStartX); };
  const onTouchEnd = () => { if (!isDragging) return; commitDrag(); };

  const pauseAndResume = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const translateX = itemWidth
    ? mobilePad - currentIndex * (itemWidth + GAP) + dragOffset
    : mobilePad;

  return (
    <div className="relative py-1 pb-12 flex flex-col items-center w-full select-none">

      {/* Badge */}
      <div
        id="special-thanks"
        className="mb-12 px-8 py-4 flex flex-col items-center justify-center border-white border-[3px] rounded-[20px] z-10 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ background: "#198387E5" }}
      >
        <p className="[font-family:var(--font-days-one)] text-center text-[25px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white">
          Special Thanks To
        </p>
      </div>

      <div className="w-full max-w-5xl px-4 sm:px-8 flex items-center gap-2 sm:gap-3">
        <div
          ref={trackRef}
          className={`flex-1 overflow-hidden`}
          style={{
            paddingTop: BLEED,
            paddingBottom: BLEED,
            paddingLeft: mobilePad || BLEED,
            paddingRight: mobilePad || BLEED,
            boxSizing: "border-box",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={() => isDragging && commitDrag()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
            <div
              className="flex flex-row justify-center flex-wrap  gap-4 md:gap-6 lg:gap-10"
            >
              {sponsors.map((sponsor) => 
                sponsor.name == "Dewaweb" ? (
                  <div
                    key={sponsor.id}
                    className="min-w-[100px] aspect-square flex-shrink-0 bg-[#ffffff] rounded-[20px] sm:rounded-[30px] border-white border-[1px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:scale-95 transition-transform duration-300 flex items-center justify-center p-4 sm:p-6"
                    style={{ width: itemWidth || 0 }}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full min-w-[82px] min-h-[82px] object-contain"
                      draggable={false}
                    />
                  </div>
                ) : (
                  <div
                    key={sponsor.id}
                    className="min-w-[100px] aspect-square flex-shrink-0 bg-[#ffffff] rounded-[20px] sm:rounded-[30px] border-white border-[1px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:scale-95 transition-transform duration-300 flex items-center justify-center p-4 sm:p-6"
                    style={{ width: itemWidth || 0 }}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full min-w-[100px] min-h-[100px] object-contain"
                      draggable={false}
                    />
                  </div>
                )
              )}
            </div>
          {/* ) : (
            
          )} */}
        </div>
      </div>
    </div>
  );
}