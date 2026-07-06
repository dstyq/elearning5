import { supabase } from '@/app/supabaseClient';
import { CheckCircle2, Clock, ArrowRight, Star, Sparkles } from 'lucide-react';

export default function ModulList({ 
  materi, warnaModul, progresSiswa, persentase, selesaiCount, bukaMateri 
}: any) {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 pt-10 animate-in fade-in duration-500 space-y-14">
      {/* HERO */}
      <section className="grid md:grid-cols-[1.3fr_1fr] gap-6 items-stretch">
        <div className="relative flex flex-col justify-center bg-[#4D96FF] border-[4px] border-black rounded-[28px] shadow-[8px_8px_0px_0px_#000] p-10 md:p-12 overflow-hidden">
          <Star className="w-6 h-6 text-white/40 fill-white/40 absolute top-10 left-16 rotate-12" />
          <div className="absolute top-6 right-6 bg-[#FFC700] border-[3px] border-black rounded-full w-16 h-16 flex items-center justify-center rotate-12">
            <Sparkles className="w-7 h-7 text-black" />
          </div>
          <span className="font-black text-xs tracking-wider uppercase mb-5 inline-block bg-black text-[#FFC700] px-3 py-1.5 rounded-full w-fit -rotate-2">
            Semester 124
          </span>
          <h1 className="font-black text-[2.5rem] md:text-[3.25rem] leading-[1.02] mb-5 text-black uppercase">
            Eksplorasi<br />
            <span className="bg-[#FFC700] px-2 -rotate-1 inline-block border-[3px] border-black rounded-lg">
              Logika!
            </span>
          </h1>
          <p className="text-black/80 font-bold text-base leading-relaxed max-w-sm">
            Tiap modul = satu langkah alur. Baca, pahami, lalu gas kuisnya sebelum lanjut ke langkah berikutnya.
          </p>
        </div>

        {/* Status alur */}
        <div className="relative bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[28px] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#F5F1E8] p-6 flex flex-col items-center justify-center gap-3">
          <div className="font-black text-[10px] tracking-[0.2em] uppercase mb-1 bg-black text-white dark:bg-[#FFC700] dark:text-black px-2 py-1 rounded-full">
            Status Alur
          </div>
          <div className="px-5 py-1.5 rounded-full border-[3px] border-black font-black text-xs uppercase bg-[#FF6B9D] rotate-[-1deg]">
            Mulai
          </div>
          <div className="w-1 h-6 bg-black dark:bg-[#F5F1E8] rounded-full" />
          <div className="relative w-36 h-36 rotate-45 border-[4px] border-black rounded-[24px] flex items-center justify-center bg-[#FFC700]">
            <Star className="w-5 h-5 text-black fill-black absolute -top-3 -right-3 -rotate-45" />
            <div className="-rotate-45 text-center">
              <div className="font-black text-4xl text-black">{persentase}%</div>
              <div className="font-black text-[10px] uppercase tracking-wider text-black/70 mt-1">
                {selesaiCount}/{materi.length} modul
              </div>
            </div>
          </div>
          <div className="w-1 h-6 bg-black dark:bg-[#F5F1E8] rounded-full" />
          <div className={`px-5 py-1.5 rounded-full border-[3px] font-black text-xs uppercase transition-colors rotate-1 ${persentase >= 100 ? 'bg-[#6BCB77] border-black' : 'bg-white dark:bg-[#1E1B24] border-black dark:border-[#F5F1E8]'}`}>
            Selesai
          </div>
        </div>
      </section>

      {/* DAFTAR MODUL */}
      <section>
        <h2 className="font-black text-sm uppercase tracking-wider mb-8 inline-block bg-black text-[#FFC700] px-4 py-2 rounded-full -rotate-1">
          Daftar Proses
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materi.map((modul: any, i: number) => {
            const isSelesai = progresSiswa.includes(modul.id);
            const warna = warnaModul[i % warnaModul.length];
            return (
              <button
                key={modul.id}
                onClick={() => bukaMateri(modul, i)}
                className="group relative text-left bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[24px] p-6 pt-8 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#F5F1E8] hover:shadow-[3px_3px_0px_0px_#000] dark:hover:shadow-[3px_3px_0px_0px_#F5F1E8] hover:-translate-y-[2px] hover:translate-x-[3px] hover:rotate-1 transition-all duration-150 flex flex-col justify-between"
              >
                <div className="absolute -top-4 -left-3 w-11 h-11 rounded-full border-[3px] border-black flex items-center justify-center font-black text-sm rotate-[-6deg] shadow-[3px_3px_0px_0px_#000]" style={{ background: isSelesai ? '#6BCB77' : warna }}>
                  {isSelesai ? <CheckCircle2 className="w-5 h-5 text-black" /> : `0${i + 1}`}
                </div>
                <div>
                  <span className="inline-block font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border-[2px] border-black mb-3 rotate-1" style={{ background: warna }}>
                    Modul {i + 1}
                  </span>
                  <h3 className="font-black text-xl mb-1.5 uppercase leading-snug">{modul.judul}</h3>
                  <p className="text-sm font-bold text-black/60 dark:text-[#F5F1E8]/60 leading-relaxed mb-3">
                    {modul.deskripsi}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-black/50 dark:text-[#F5F1E8]/50">
                    <Clock className="w-3.5 h-3.5" /> {modul.waktu}
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            );
          })}
          <div className="border-[3px] border-dashed border-black/30 dark:border-[#F5F1E8]/30 rounded-[24px] p-6 flex flex-col items-center justify-center text-center gap-2 min-h-[180px]">
            <Star className="w-6 h-6 text-black/20 dark:text-[#F5F1E8]/20" />
            <span className="font-black text-[11px] uppercase tracking-wider text-black/40 dark:text-[#F5F1E8]/40">
              Modul baru nyusul di sini
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}