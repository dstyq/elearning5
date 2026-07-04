import { ChevronLeft, Star, ArrowRight } from 'lucide-react';

export default function ModulDetail({ modulAktif, warnaSaatIni, setMode, mulaiKuis }: any) {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20 pt-10 animate-in fade-in zoom-in-95 duration-500">
      <button
        onClick={() => setMode('pilih')}
        className="flex items-center gap-2 text-xs font-black uppercase tracking-wider mb-8 bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#F5F1E8] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali
      </button>

      <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[28px] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#F5F1E8] overflow-hidden">
        <div className="relative px-10 md:px-14 pt-10 pb-8 border-b-[4px] border-black" style={{ background: warnaSaatIni }}>
          <Star className="w-5 h-5 text-black/20 absolute top-6 right-8 rotate-12" />
          <span className="font-black text-[10px] uppercase tracking-[0.2em] text-black/70 mb-3 block">
            Ringkasan Materi
          </span>
          <h2 className="font-black text-3xl md:text-4xl uppercase text-black">{modulAktif.judul}</h2>
        </div>
        <div className="p-10 md:p-14">
          <p className="text-lg leading-relaxed font-bold text-black/80 dark:text-[#F5F1E8]/80">
            {modulAktif.ringkasan}
          </p>
          <div className="mt-12 flex justify-end">
            <button
              onClick={mulaiKuis}
              className="bg-[#FF6B9D] text-black border-[3px] border-black px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
            >
              Mulai Kuis <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}