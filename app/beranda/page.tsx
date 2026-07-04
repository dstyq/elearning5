'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, Clock, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Pengantar } from '../data/pengantar';
import { Struktur } from '../data/struktur';
import { Flowchart } from '../data/flowchart';
import { FlowchartSymbols } from '../data/FlowchartSymbols';

const materi = [Pengantar, Struktur, Flowchart];
const warnaModul = ['#FFC700', '#FF6B9D', '#4D96FF'];

export default function DashboardModul() {
  const [modulAktif, setModulAktif] = useState<any>(null);
  const [modulIndex, setModulIndex] = useState(0);
  const [mode, setMode] = useState<'pilih' | 'materi' | 'kuis'>('pilih');
  const [indeksSoal, setIndeksSoal] = useState(0);
  const [skor, setSkor] = useState(0);
  const [kuisSelesai, setKuisSelesai] = useState(false);
  const [progresSiswa, setProgresSiswa] = useState<any[]>([]);
  const [jawaban, setJawaban] = useState<string | null>('');
  const [penjelasanAktif, setPenjelasanAktif] = useState(false);

  useEffect(() => {
    const p = localStorage.getItem('progres_elearning_aesthetic');
    if (p) setProgresSiswa(JSON.parse(p));
  }, []);

  const bukaMateri = (modul: any, idx: number) => {
    setModulAktif(modul);
    setModulIndex(idx);
    setMode('materi');
  };

  const mulaiKuis = () => {
    setIndeksSoal(0);
    setSkor(0);
    setKuisSelesai(false);
    setMode('kuis');
  };

  const handleSoalSelanjutnya = () => {
    const next = indeksSoal + 1;
    setPenjelasanAktif(false);
    setJawaban(null);
    if (next < modulAktif.soal.length) setIndeksSoal(next);
    else setKuisSelesai(true);
  };

  const cekJawaban = (jawabanDipilih: any) => {
    let skorBaru = skor;
    if (jawabanDipilih === modulAktif.soal[indeksSoal].jawabanBenar) {
      skorBaru = skor + 1;
      setSkor(skorBaru);
    }
    setPenjelasanAktif(true);

    if (!progresSiswa.includes(modulAktif.id)) {
      const baru = [...progresSiswa, modulAktif.id];
      setProgresSiswa(baru);
      localStorage.setItem('progres_elearning_aesthetic', JSON.stringify(baru));
    }

    const hasilKuis = { modul: modulAktif.judul, skor: skorBaru };
    const board = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const idx = board.findIndex((item: any) => item.modul === hasilKuis.modul);
    if (idx !== -1) board[idx] = hasilKuis;
    else board.push(hasilKuis);
    localStorage.setItem('leaderboard', JSON.stringify(board));
  };

  const persentase = materi.length > 0
    ? Math.min(100, Math.round((progresSiswa.length / materi.length) * 100))
    : 0;
  const selesaiCount = Math.min(progresSiswa.length, materi.length);
  const warnaSaatIni = warnaModul[modulIndex % warnaModul.length];

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans transition-colors duration-200">

      {/* ── PILIH MODUL ── */}
      {mode === 'pilih' && (
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
                Eksplorasi
                <br />
                <span className="bg-[#FFC700] px-2 -rotate-1 inline-block border-[3px] border-black rounded-lg">
                  Logika!
                </span>
              </h1>
              <p className="text-black/80 font-bold text-base leading-relaxed max-w-sm">
                Tiap modul = satu langkah alur. Baca, pahami, lalu gas kuisnya sebelum lanjut ke
                langkah berikutnya.
              </p>
            </div>

            {/* Status alur — diamond flowchart, stiker bintang */}
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
              <div
                className={`px-5 py-1.5 rounded-full border-[3px] font-black text-xs uppercase transition-colors rotate-1 ${
                  persentase >= 100
                    ? 'bg-[#6BCB77] border-black'
                    : 'bg-white dark:bg-[#1E1B24] border-black dark:border-[#F5F1E8]'
                }`}
              >
                Selesai
              </div>
            </div>
          </section>

          {/* DAFTAR MODUL — grid, biar tetep rapi walau modulnya nambah banyak */}
          <section>
            <h2 className="font-black text-sm uppercase tracking-wider mb-8 inline-block bg-black text-[#FFC700] px-4 py-2 rounded-full -rotate-1">
              Daftar Proses
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materi.map((modul, i) => {
                const isSelesai = progresSiswa.includes(modul.id);
                const warna = warnaModul[i % warnaModul.length];
                return (
                  <button
                    key={modul.id}
                    onClick={() => bukaMateri(modul, i)}
                    className="group relative text-left bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[24px] p-6 pt-8 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#F5F1E8] hover:shadow-[3px_3px_0px_0px_#000] dark:hover:shadow-[3px_3px_0px_0px_#F5F1E8] hover:-translate-y-[2px] hover:translate-x-[3px] hover:rotate-1 transition-all duration-150 flex flex-col justify-between"
                  >
                    {/* badge nomor nempel di pojok, kayak stiker */}
                    <div
                      className="absolute -top-4 -left-3 w-11 h-11 rounded-full border-[3px] border-black flex items-center justify-center font-black text-sm rotate-[-6deg] shadow-[3px_3px_0px_0px_#000]"
                      style={{ background: isSelesai ? '#6BCB77' : warna }}
                    >
                      {isSelesai ? <CheckCircle2 className="w-5 h-5 text-black" /> : `0${i + 1}`}
                    </div>

                    <div>
                      <span
                        className="inline-block font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border-[2px] border-black mb-3 rotate-1"
                        style={{ background: warna }}
                      >
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

              {/* kartu penutup — nambah pas semua kelar */}
              <div className="border-[3px] border-dashed border-black/30 dark:border-[#F5F1E8]/30 rounded-[24px] p-6 flex flex-col items-center justify-center text-center gap-2 min-h-[180px]">
                <Star className="w-6 h-6 text-black/20 dark:text-[#F5F1E8]/20" />
                <span className="font-black text-[11px] uppercase tracking-wider text-black/40 dark:text-[#F5F1E8]/40">
                  Modul baru nyusul di sini
                </span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ── MATERI ── */}
      {mode === 'materi' && modulAktif && (
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
      )}

      {/* ── KUIS ── */}
      {mode === 'kuis' && modulAktif && (
        <div className="max-w-2xl mx-auto px-6 pb-20 pt-10 animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[28px] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#F5F1E8] p-8 md:p-12">
            {!kuisSelesai ? (
              <div>
                <div className="flex justify-between items-center mb-10 pb-6 border-b-[3px] border-black dark:border-[#F5F1E8]">
                  <p className="font-black text-[11px] uppercase tracking-wider">
                    Evaluasi {modulAktif.judul}
                  </p>
                  <div
                    className="font-black text-[11px] border-[2px] border-black px-3 py-1.5 rounded-full"
                    style={{ background: warnaSaatIni }}
                  >
                    {indeksSoal + 1} / {modulAktif.soal.length}
                  </div>
                </div>

                <div className="flex justify-center mb-10">
                  <div
                    className="relative border-[3px] border-black rounded-[20px] px-8 py-6 max-w-md rotate-[-0.5deg] shadow-[5px_5px_0px_0px_#000]"
                    style={{ background: warnaSaatIni }}
                  >
                    <Star className="w-4 h-4 text-black/20 absolute top-3 right-4 rotate-12" />
                    <h3 className="font-black text-xl text-center leading-snug text-black uppercase">
                      {modulAktif.soal[indeksSoal].pertanyaan}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {modulAktif.soal[indeksSoal].pilihan.map(
                    ([opsi, penjelasan]: [opsi: string, penjelasan: string], index: number) => {
                      const sep = opsi.indexOf(':');
                      const possibleKey = sep !== -1 ? opsi.slice(0, sep) : null;
                      const label = sep !== -1 ? opsi.slice(sep + 1) : opsi;
                      const SymbolComponent =
                        possibleKey && possibleKey in FlowchartSymbols
                          ? FlowchartSymbols[possibleKey as keyof typeof FlowchartSymbols]
                          : null;

                      const benar = opsi === modulAktif.soal[indeksSoal].jawabanBenar;
                      const dipilih = opsi === jawaban;

                      let stateClass =
                        'bg-white dark:bg-[#1E1B24] hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#F5F1E8]';
                      let borderClass = 'border-black dark:border-[#F5F1E8]';
                      let styleBg: React.CSSProperties | undefined = undefined;

                      if (penjelasanAktif) {
                        if (benar) {
                          stateClass = 'bg-[#6BCB77]';
                          borderClass = 'border-black';
                        } else if (dipilih) {
                          stateClass = 'bg-[#FF6B6B]';
                          borderClass = 'border-black';
                        } else {
                          stateClass = 'bg-white dark:bg-[#1E1B24] opacity-40';
                        }
                      } else if (dipilih) {
                        stateClass = 'shadow-[4px_4px_0px_0px_#000]';
                        borderClass = 'border-black';
                        styleBg = { background: warnaSaatIni };
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
                    }
                  )}

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
            ) : (
              <div className="text-center py-10 animate-in zoom-in-95 duration-500">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-[#6BCB77] border-[3px] border-black rounded-full mb-8 rotate-3">
                  <Star className="w-4 h-4 text-black fill-black absolute -top-1 -right-1 rotate-12" />
                  <CheckCircle2 className="w-10 h-10 text-black" />
                </div>
                <span className="font-black text-[11px] uppercase tracking-[0.2em] text-black/50 dark:text-[#F5F1E8]/50 block mb-2">
                  Proses Selesai
                </span>
                <h3 className="font-black text-4xl mb-4 uppercase">Kuis Selesai!</h3>
                <p className="text-black/70 dark:text-[#F5F1E8]/70 font-bold mb-10 text-lg">
                  Nilai benar:{' '}
                  <span className="font-black text-black text-2xl bg-[#FFC700] border-[2px] border-black px-2 py-0.5 rounded-lg inline-block">
                    {skor}
                  </span>{' '}
                  dari {modulAktif.soal.length} soal
                </p>
                <button
                  onClick={() => setMode('pilih')}
                  className="bg-[#FF6B9D] text-black border-[3px] border-black px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Tutup &amp; Kembali
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
