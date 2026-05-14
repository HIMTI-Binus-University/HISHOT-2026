export default function SpecialThanks(){
  return (
    <div className="relative px-8 py-16">
      <div 
        id="special-thanks" 
        className="absolute top-20 left-30 px-8 py-4 flex flex-col items-center justify-center border-white border-[3px] rounded-[20px] z-10
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" 
        style={{background: '#198387E5'}}>
        <p className="font-days-one text-center text-[25px]
          drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white">
          Special Thanks To
        </p>
      </div>

      <div className="px-8 pt-16 pb-8 gap-7 flex flex-wrap items-center justify-center">
        <div className="bg-[rgba(195,228,232,1)] rounded-[30px] border-white border-[1px] w-60 h-60 flex-shrink-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105" />
        <div className="bg-[rgba(195,228,232,1)] rounded-[30px] border-white border-[1px] w-60 h-60 flex-shrink-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105" />
        <div className="bg-[rgba(195,228,232,1)] rounded-[30px] border-white border-[1px] w-60 h-60 flex-shrink-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105" />
        <div className="bg-[rgba(195,228,232,1)] rounded-[30px] border-white border-[1px] w-60 h-60 flex-shrink-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105" />
        <div className="bg-[rgba(195,228,232,1)] rounded-[30px] border-white border-[1px] w-60 h-60 flex-shrink-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105" />
      </div>
    </div>
  )
}