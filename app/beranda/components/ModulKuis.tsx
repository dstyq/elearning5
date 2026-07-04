import { Star, CheckCircle2 } from 'lucide-react';
import { FlowchartSymbols } from '../../data/FlowchartSymbols';
export default function ModulKuis({

  modulAktif, warnaSaatIni, indeksSoal, skor, kuisSelesai, 
  jawaban, setJawaban, penjelasanAktif, cekJawaban, handleSoalSelanjutnya, setMode
}: any) {
  
  if (kuisSelesai) {
    return (
      <div className="max-w-2xl mx-auto px-6 pb-20 pt-10 animate-in fade-in slide-in-from-right-8 duration-500">
        <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[28px] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#F5F1E8] p-8 md:p-12 text-center py-10 animate-in zoom-in-95 duration-500">
          <div className="relative inline-flex items-center justify-center w-20 h-20 bg-[#6BCB77] border-[3px] border-black rounded-full mb-8 rotate-3">
            <Star className="w-4 h-4 text-black fill-black absolute -top-1 -right-1 rotate-12" />
            <CheckCircle2 className="w-10 h-10 text-black" />
          </div>
          <span className="font-black text-[11px] uppercase tracking-[0.2em] text-black/50 dark:text-[#F5F1E8]/50 block mb-2">
            Proses Selesai
          </span>
          <h3 className="font-black text-4xl mb-4 uppercase">Kuis Selesai!</h3>
          <p className="text-black/70 dark:text-[#F5F1E8]/70 font-bold mb-10 text-lg">
            Nilai benar: <span className="font-black text-black text-2xl bg-[#FFC700] border-[2px] border-black px-2 py-0.5 rounded-lg inline-block">{skor}</span> dari {modulAktif.soal.length} soal
          </p>
          <button
            onClick={() => setMode('pilih')}
            className="bg-[#FF6B9D] text-black border-[3px] border-black px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Tutup & Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 pb-20 pt-10 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[28px] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#F5F1E8] p-8 md:p-12">
        <div className="flex justify-between items-center mb-10 pb-6 border-b-[3px] border-black dark:border-[#F5F1E8]">
          <p className="font-black text-[11px] uppercase tracking-wider">
            Evaluasi {modulAktif.judul}
          </p>
          <div className="font-black text-[11px] border-[2px] border-black px-3 py-1.5 rounded-full" style={{ background: warnaSaatIni }}>
            {indeksSoal + 1} / {modulAktif.soal.length}
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative border-[3px] border-black rounded-[20px] px-8 py-6 max-w-md rotate-[-0.5deg] shadow-[5px_5px_0px_0px_#000]" style={{ background: warnaSaatIni }}>
            <Star className="w-4 h-4 text-black/20 absolute top-3 right-4 rotate-12" />
            <h3 className="font-black text-xl text-center leading-snug text-black uppercase">
              {modulAktif.soal[indeksSoal].pertanyaan}
            </h3>
          </div>
        </div>

        <div className="space-y-3">
          {modulAktif.soal[indeksSoal].pilihan.map(([opsi, penjelasan]: [string, string], index: number) => {
            const sep = opsi.indexOf(':');
            const possibleKey = sep !== -1 ? opsi.slice(0, sep) : null;
            const label = sep !== -1 ? opsi.slice(sep + 1) : opsi;
            const SymbolComponent = possibleKey && possibleKey in FlowchartSymbols
              ? FlowchartSymbols[possibleKey as keyof typeof FlowchartSymbols]
              : null;

            const benar = opsi === modulAktif.soal[indeksSoal].jawabanBenar;
            const dipilih = opsi === jawaban;
            let stateClass = 'bg-white dark:bg-[#1E1B24] hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#F5F1E8]';
            let borderClass = 'border-black dark:border-[#F5F1E8]';
            let styleBg: React.CSSProperties | undefined = undefined;

            if (penjelasanAktif) {
              if (benar) {
                stateClass = 'bg-[#6BCB77]'; borderClass = 'border-black';
              } else if (dipilih) {
                stateClass = 'bg-[#FF6B6B]'; borderClass = 'border-black';
              } else {
                stateClass = 'bg-white dark:bg-[#1E1B24] opacity-40';
              }
            } else if (dipilih) {
              stateClass = 'shadow-[4px_4px_0px_0px_#000]'; borderClass = 'border-black'; styleBg = { background: warnaSaatIni };
            }

            return (
              <button
                key={index}
                onClick={() => setJawaban(opsi)}
                style={styleBg}
                className={`${stateClass} ${borderClass} cursor-pointer w-full text-left p-4 rounded-2xl border-[3px] transition-all duration-150 font-black uppercase text-sm`}
              >
                <span className="flex items-center gap-3">
                  {SymbolComponent && <SymbolComponent className="w-5 h-5 flex-shrink-0" />}
                  <span>{label}</span>
                </span>
                {penjelasanAktif && (dipilih || benar) && (
                  <p className="mt-2 text-sm font-bold normal-case text-black/70">
                    {penjelasan}
                  </p>
                )}
              </button>
            );
          })}

          {!penjelasanAktif ? (
            <button
              disabled={!jawaban}
              onClick={() => cekJawaban(jawaban)}
              className="w-full text-center p-4 rounded-2xl bg-black dark:bg-[#FFC700] text-white dark:text-black border-[3px] border-white dark:border-black disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-[4px_4px_0px_0px_#FF6B9D] transition-all font-black text-xs uppercase tracking-wider"
            >
              Jawab
            </button>
          ) : (
            <button
              onClick={handleSoalSelanjutnya}
              className="w-full text-center p-4 rounded-2xl bg-black dark:bg-[#FFC700] text-white dark:text-black border-[3px] border-white dark:border-black hover:shadow-[4px_4px_0px_0px_#FF6B9D] transition-all font-black text-xs uppercase tracking-wider"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </div>
  );
}