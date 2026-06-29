'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, ChevronLeft, Feather, Coffee, Clock, BookText, ArrowRight } from 'lucide-react';
import { Pengantar } from '../data/pengantar';
import { Struktur } from '../data/struktur';
import { Flowchart } from '../data/flowchart';
import Navbar from './components/Navbar';

const materi = [Pengantar, Struktur, Flowchart];

export default function DashboardModul() {
  const [modulAktif, setModulAktif] = useState<any>(null);
  const [mode, setMode] = useState<'pilih' | 'materi' | 'kuis'>('pilih');
  const [indeksSoal, setIndeksSoal] = useState(0); 
  const [skor, setSkor] = useState(0); 
  const [kuisSelesai, setKuisSelesai] = useState(false);
  const [progresSiswa, setProgresSiswa] = useState<any[]>([]); 
  const [jawaban, setJawaban] = useState<string | null>('');
  const [penjelasanAktif, setPenjelasanAktif] = useState(false);

  useEffect(() => {
    const progresTersimpan = localStorage.getItem('progres_elearning_aesthetic');
    if (progresTersimpan) setProgresSiswa(JSON.parse(progresTersimpan));
  }, []);

  const bukaMateri = (modul: any) => { 
    setModulAktif(modul); 
    setMode('materi'); 
  };

  const mulaiKuis = () => {
    setIndeksSoal(0); 
    setSkor(0); 
    setKuisSelesai(false);
    setMode('kuis');
  }

  const handleSoalSelanjutnya = () => {
    const soalSelanjutnya = indeksSoal + 1;
    setPenjelasanAktif(false);
    setJawaban(null);
    if (soalSelanjutnya < modulAktif.soal.length) {
      setIndeksSoal(soalSelanjutnya); 
    } else {
      setKuisSelesai(true);
    }
  }

  const cekJawaban = (jawabanDipilih: any) => {
    let skorBaru = skor;
    if (jawabanDipilih === modulAktif.soal[indeksSoal].jawabanBenar){
      skorBaru = skor + 1;
      setSkor(skorBaru)
    }; 

    setPenjelasanAktif(true);

    if (!progresSiswa.includes(modulAktif.id)) {
      const progresBaru = [...progresSiswa, modulAktif.id];
      setProgresSiswa(progresBaru);
      localStorage.setItem('progres_elearning_aesthetic', JSON.stringify(progresBaru));
    }
    const hasilKuis: { modul: number, skor: number } = {
      modul: modulAktif.judul,
      skor: skorBaru,
    };
    const pastLeaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const existingIndex = pastLeaderboard.findIndex((item: any) => item.modul === hasilKuis.modul);
    if (existingIndex !== -1) {
      pastLeaderboard[existingIndex] = hasilKuis;
    }
    else {
      pastLeaderboard.push(hasilKuis);
    }
    localStorage.setItem('leaderboard', JSON.stringify(pastLeaderboard));
  };
  

  const persentase = materi.length > 0 ? Math.round((progresSiswa.length / materi.length) * 100) : 0;

  return (
    <main className="bg-[#FAF9F6]">
      <Navbar />
      {/* 1. TAMPILAN DASHBOARD (Pilih Modul) */}
      {mode === 'pilih' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-6xl mx-auto px-6 py-10">
          <section className="bg-linear-to-br from-[#38302A] to-[#60554A] text-[#F9F8F6] rounded-[2rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="bg-[#8B7355] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 inline-block">Semester 124</span>
                <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                  Eksplorasi <span className="text-[#D4C3A3] italic">Logika</span><br/>Pemrograman.
                </h1>
                <p className="text-[#D5CFC7] text-sm md:text-base leading-relaxed mb-0 max-w-sm">
                  Pilih modul di bawah ini, pelajari ringkasannya, dan buktikan pemahamanmu melalui kuis interaktif.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[#D5CFC7] text-xs font-bold uppercase tracking-widest mb-1">Total Progres</p>
                    <p className="font-serif text-5xl text-white">{persentase}%</p>
                  </div>
                  <Coffee className={`w-10 h-10 ${persentase === 100 ? 'text-[#D4C3A3]' : 'text-white/40'}`} />
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden mb-3">
                  <div className="bg-[#D4C3A3] h-2.5 rounded-full transition-all duration-1000" style={{ width: `${persentase}%` }}></div>
                </div>
                <p className="text-xs text-[#D5CFC7]">Menyelesaikan {progresSiswa.length} dari {materi.length} Modul Pembelajaran</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#38302A] mb-8">Daftar Modul Pembelajaran</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {materi.map((modul) => {
                const isSelesai = progresSiswa.includes(modul.id);
                return (
                  <div key={modul.id} onClick={() => bukaMateri(modul)} className="group bg-white p-7 rounded-3xl border border-[#EBE6DF] hover:border-[#8B7355] hover:shadow-xl hover:shadow-[#8B7355]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-3 rounded-2xl ${isSelesai ? 'bg-emerald-50 text-emerald-600' : 'bg-[#F4F1EA] text-[#8C8276] group-hover:bg-[#8B7355] group-hover:text-white transition-colors'}`}>
                          {isSelesai ? <CheckCircle className="w-6 h-6" /> : <BookText className="w-6 h-6" />}
                        </div>
                        {isSelesai && <span className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">Selesai</span>}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#38302A] mb-3 group-hover:text-[#8B7355] transition-colors">{modul.judul}</h3>
                      <p className="text-sm text-[#8C8276] leading-relaxed mb-8">{modul.deskripsi}</p>
                    </div>
                    <div className="flex items-center justify-between pt-5 border-t border-[#F4F1EA]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#A39B92]">
                        <Clock className="w-4 h-4" /> {modul.waktu}
                      </div>
                      <ArrowRight className={`w-5 h-5 ${isSelesai ? 'text-emerald-500' : 'text-[#A39B92] group-hover:text-[#8B7355] group-hover:translate-x-1 transition-all'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* 2. TAMPILAN MATERI (Baca Dulu) */}
      {mode === 'materi' && modulAktif && (
        <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-500">
          <button onClick={() => setMode('pilih')} className="flex items-center gap-2 text-sm font-bold text-[#8C8276] hover:text-[#38302A] transition-colors mb-8 bg-white px-4 py-2 rounded-full shadow-sm border border-[#EBE6DF]">
            <ChevronLeft className="w-4 h-4" /> Kembali
          </button>
          <div className="bg-white rounded-[2rem] shadow-lg border border-[#EBE6DF] overflow-hidden">
            <div className="bg-[#60554A] p-10 text-center">
              <span className="text-xs font-bold tracking-widest text-[#D4C3A3] uppercase mb-3 block">RINGKASAN MATERI</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white">{modulAktif.judul}</h2>
            </div>
            <div className="p-10 md:p-14">
              <div className="prose prose-stone max-w-none">
                <p className="text-lg leading-relaxed text-[#4A4036] font-medium">{modulAktif.ringkasan}</p>
              </div>
              <div className="mt-12 flex justify-end pt-8 border-t border-[#F4F1EA]">
                <button onClick={mulaiKuis} className="bg-[#8B7355] text-white px-8 py-4 rounded-full font-bold hover:bg-[#60554A] transition-all shadow-md flex items-center gap-2">
                  Sudah Paham, Mulai Kuis <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. TAMPILAN KUIS (Soal) */}
      {mode === 'kuis' && modulAktif && (
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-[#EBE6DF]">
            {!kuisSelesai ? (
              <div>
                <div className="flex justify-between items-center mb-10 pb-6 border-b border-[#F4F1EA]">
                  <p className="text-sm font-bold text-[#8C8276] uppercase tracking-wider">Evaluasi {modulAktif.judul}</p>
                  <div className="text-xs font-bold text-[#8B7355] bg-[#F4F1EA] px-4 py-2 rounded-full">Soal {indeksSoal + 1} / {modulAktif.soal.length}</div>
                </div>
                <h3 className="font-serif text-2xl mb-10 text-[#38302A] leading-normal text-center">"{modulAktif.soal[indeksSoal].pertanyaan}"</h3>
                <div className="space-y-4">
                  {modulAktif.soal[indeksSoal].pilihan.map((opsi: any, index: number) => (
                    <div key={index}>
                      <button onClick={() => setJawaban(opsi)} className={`${penjelasanAktif === true ? opsi === modulAktif.soal[indeksSoal].jawabanBenar ? 'bg-green-400/20' : opsi === jawaban ? 'bg-red-600/20' : 'border-[#4A4036] bg-[#F9F8F6] opacity-60 text-[#4A4036]' : opsi === jawaban ? "bg-[#8B7355] text-white" : "border-[#8B7355] bg-[#F9F8F6] "} text-[#4A4036] cursor-pointer w-full text-center p-5 rounded-2xl border-2 transition-all duration-200 font-bold`}>
                        {opsi}
                        <p className={`${opsi === modulAktif.soal[indeksSoal].jawabanBenar && penjelasanAktif === true ? "block" : "hidden"} w-full text-center p-2 mt-2 rounded-2xl transition-all duration-200 font-bold text-[#4A4036]`}>
                          {modulAktif.soal[indeksSoal].pembahasan}
                        </p>
                      </button>
                    </div>
                  ))}
                  <button disabled={jawaban ? false : true} onClick={() => cekJawaban(jawaban)} className={`${penjelasanAktif === true ? 'hidden' : 'block'} cursor-pointer w-full text-center p-5 rounded-2xl border-2 hover:border-[#8B7355] hover:bg-[#F9F8F6] bg-[#ba902e] transition-all duration-200 font-bold text-white hover:text-black`}>
                    Jawab
                  </button>
                  <button onClick={handleSoalSelanjutnya} className={`${penjelasanAktif === false ? 'hidden' : 'block'} cursor-pointer w-full text-center p-5 rounded-2xl border-2 hover:border-[#8B7355] hover:bg-[#F9F8F6] bg-[#ba902e] transition-all duration-200 font-bold text-white hover:text-black`}>
                    Selanjutnya
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 animate-in zoom-in-95 duration-500">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full mb-8">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-4xl text-[#38302A] mb-4 font-bold">Kuis Selesai!</h3>
                <p className="text-[#8C8276] mb-10 text-lg">
                  Nilai Benar: <span className="font-bold text-emerald-600 text-2xl ml-1">{skor}</span> dari {modulAktif.soal.length} soal
                </p>
                <button onClick={() => setMode('pilih')} className="bg-[#38302A] text-white px-10 py-4 rounded-full font-bold hover:bg-[#60554A] shadow-lg transition-all">
                  Tutup & Kembali
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
    </main>
  );
}