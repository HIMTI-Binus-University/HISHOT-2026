import { useState, useEffect, useRef, useCallback } from "react";

export default function SpecialThanks() {
  //Add the sponsors here
  const sponsors = [
    { id: 0, name: "Sponsor One", logo: "/sponsors/sponsor1.png" },
    { id: 1, name: "Sponsor Two", logo: "/sponsors/sponsor2.png" },
    { id: 2, name: "Sponsor Three", logo: "/sponsors/sponsor3.png" },
    { id: 3, name: "Sponsor Four", logo: "/sponsors/sponsor4.png" },
    { id: 4, name: "Sponsor Five", logo: "/sponsors/sponsor5.png" },
  ];

  const totalBoxes = sponsors.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  const GAP = 28;

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.offsetWidth;
      setVisibleCount(getVisibleCount());
      const vc = getVisibleCount();
      setItemWidth((trackW - GAP * (vc - 1)) / vc);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = totalBoxes - visibleCount;

  const goTo = useCallback(
    (idx) => setCurrentIndex(Math.max(0, Math.min(idx, maxIndex))),
    [maxIndex]
  );

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const startAutoPlay = useCallback(() => {
    autoPlayRef.current = setInterval(next, 3000);
  }, [next]);

  const stopAutoPlay = () => clearInterval(autoPlayRef.current);

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    return stopAutoPlay;
  }, [isPaused, startAutoPlay]);

  const commitDrag = useCallback(() => {
    const threshold = 60;
    if (dragOffset < -threshold) next();
    else if (dragOffset > threshold)
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsPaused(false), 4000);
  }, [dragOffset, maxIndex, next]);

  const onMouseDown = (e) => { setIsDragging(true); setDragStartX(e.clientX); setDragOffset(0); setIsPaused(true); stopAutoPlay(); };
  const onMouseMove = (e) => { if (!isDragging) return; setDragOffset(e.clientX - dragStartX); };
  const onMouseUp = () => { if (!isDragging) return; commitDrag(); };
  const onTouchStart = (e) => { setIsDragging(true); setDragStartX(e.touches[0].clientX); setDragOffset(0); setIsPaused(true); stopAutoPlay(); };
  const onTouchMove = (e) => { if (!isDragging) return; setDragOffset(e.touches[0].clientX - dragStartX); };
  const onTouchEnd = () => commitDrag();

  const pauseAndResume = () => { setIsPaused(true); setTimeout(() => setIsPaused(false), 4000); };

  const translateX = itemWidth
    ? -(currentIndex * (itemWidth + GAP)) + dragOffset
    : 0;

  return (
    <div className="relative px-8 py-16 flex flex-col items-center w-full select-none">

      <div
        id="special-thanks"
        className="mb-12 px-8 py-4 flex flex-col items-center justify-center border-white border-[3px] rounded-[20px] z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ background: "#198387E5" }}
      >
        <p className="font-days-one text-center text-[25px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white">
          Special Thanks To
        </p>
      </div>

      <div className="w-full max-w-5xl flex items-center gap-3">

        <button
          onClick={() => { goTo(currentIndex - 1); pauseAndResume(); }}
          disabled={currentIndex === 0}
          className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white/50 bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center text-white text-xl"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left h-4 w-4"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
        </button>

        <div
          ref={trackRef}
          className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={() => isDragging && commitDrag()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex flex-row"
            style={{
              gap: GAP,
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.25,1,0.5,1)",
              willChange: "transform",
            }}
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="h-60 flex-shrink-0 bg-[rgba(195,228,232,1)] rounded-[30px] border-white border-[1px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300 flex items-center justify-center p-6"
                style={{
                  width: itemWidth || 0,
                  pointerEvents: isDragging ? "none" : "auto",
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => { goTo(currentIndex + 1); pauseAndResume(); }}
          disabled={currentIndex >= maxIndex}
          className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white/50 bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center text-white text-xl"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => { goTo(idx); pauseAndResume(); }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-[#18A18C]" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

    </div>
  );
}