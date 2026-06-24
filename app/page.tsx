'use client';

import { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Play, ArrowLeft, Trophy, Clock, Code2 } from 'lucide-react';

const bankSoal = [
  {
    id: 'modul-1',
    judul: 'Variabel dan Tipe Data',
    deskripsi: 'Fondasi utama dalam menyimpan dan memanipulasi data pada memori.',
    waktu: '15 Menit',
    soal: [
      {
        pertanyaan: 'Tipe data apa yang paling tepat untuk menyimpan nilai teks panjang?',
        pilihan: ['Integer', 'String', 'Boolean', 'Float'],
        jawabanBenar: 'String',
      },
      {
        pertanyaan: 'Manakah deklarasi variabel yang paling tepat dan modern di JavaScript?',
        pilihan: ['let nama = "Budi";', 'variable nama = "Budi";', 'v nama = "Budi";', 'string nama = "Budi";'],
        jawabanBenar: 'let nama = "Budi";',
      },
    ],
  },
  {
    id: 'modul-2',
    judul: 'Logika Percabangan (If-Else)',
    deskripsi: 'Mengatur alur program berdasarkan kondisi tertentu yang bernilai benar atau salah.',
    waktu: '20 Menit',
    soal: [
      {
        pertanyaan: 'Sintaks apa yang digunakan untuk mengeksekusi blok kode jika kondisi salah?',
        pilihan: ['if', 'else if', 'else', 'switch'],
        jawabanBenar: 'else',
      }
    ],
  }
];

export default function ElearningDasarPro() {
  const [modulAktif, setModulAktif] = useState(null); 
  const [indeksSoal, setIndeksSoal] = useState(0); 
  const [skor, setSkor] = useState(0); 
  const [kuisSelesai, setKuisSelesai] = useState(false);
  const [progresSiswa, setProgresSiswa] = useState([]); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const progresTersimpan = localStorage.getItem('progres_elearning');
    if (progresTersimpan) {
      setProgresSiswa(JSON.parse(progresTersimpan));
    }
  }, []);

  const mulaiModul = (modul) => {
    setModulAktif(modul);
    setIndeksSoal(0);
    setSkor(0);
    setKuisSelesai(false);
  };

  const cekJawaban = (jawabanDipilih) => {
    const soalSekarang = modulAktif.soal[indeksSoal];
    if (jawabanDipilih === soalSekarang.jawabanBenar) {
      setSkor(skor + 1); 
    }
    const soalSelanjutnya = indeksSoal + 1;
    if (soalSelanjutnya < modulAktif.soal.length) {
      setIndeksSoal(soalSelanjutnya); 
    } else {
      setKuisSelesai(true);
      if (!progresSiswa.includes(modulAktif.id)) {
        const progresBaru = [...progresSiswa, modulAktif.id];
        setProgresSiswa(progresBaru);
        localStorage.setItem('progres_elearning', JSON.stringify(progresBaru));
      }
    }
  };

  const persentase = bankSoal.length > 0 ? Math.round((progresSiswa.length / bankSoal.length) * 100) : 0;

  if (!mounted) return null; // Mencegah hydration error

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 font-sans selection:bg-emerald-200">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-stone-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-800 p-2 rounded-lg"><Code2 className="w-5 h-5 text-emerald-50" /></div>
            <span className="font-bold text-lg tracking-tight text-stone-900">CodeCanvas.</span>
          </div>
          <div className="text-sm font-medium text-stone-500">PTIK E-Learning System</div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {!modulAktif ? (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* HERO & PROGRESS SECTION */}
            <section className="bg-stone-900 text-stone-50 rounded-3xl p-8 md:p-10 shadow-2xl shadow-stone-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Lanjutkan Perjalanan <br/><span className="text-emerald-400">Coding-mu</span> Hari Ini.</h1>
                  <p className="text-stone-400 text-sm md:text-base mb-6 max-w-md">Kuasai fondasi pemrograman dengan materi interaktif dan evaluasi langsung. Konsistensi adalah kunci.</p>
                </div>
                
                <div className="bg-stone-800/50 backdrop-blur-sm p-6 rounded-2xl border border-stone-700">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1">Progres Keseluruhan</p>
                      <p className="text-2xl font-bold text-white">{persentase}%</p>
                    </div>
                    <Trophy className={`w-8 h-8 ${persentase === 100 ? 'text-amber-400' : 'text-stone-600'}`} />
                  </div>
                  <div className="w-full bg-stone-700 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${persentase}%` }}></div>
                  </div>
                  <p className="text-xs text-stone-400 mt-3">{progresSiswa.length} dari {bankSoal.length} Modul Diselesaikan</p>
                </div>
              </div>
            </section>

            {/* MODULES GRID (BENTO STYLE) */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-stone-900">Modul Pembelajaran</h2>
                <span className="text-sm font-medium text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Semester 124</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                {bankSoal.map((modul) => {
                  const isSelesai = progresSiswa.includes(modul.id);
                  return (
                    <div key={modul.id} onClick={() => mulaiModul(modul)} className="group bg-white p-6 rounded-2xl border border-stone-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className={`p-3 rounded-xl ${isSelesai ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors'}`}>
                            <BookOpen className="w-6 h-6" />
                          </div>
                          {isSelesai && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">{modul.judul}</h3>
                        <p className="text-sm text-stone-500 leading-relaxed mb-6">{modul.deskripsi}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-stone-400">
                          <Clock className="w-4 h-4" /> {modul.waktu}
                        </div>
                        <span className={`text-sm font-bold flex items-center gap-1 ${isSelesai ? 'text-emerald-600' : 'text-stone-900'}`}>
                          {isSelesai ? 'Ulangi Kuis' : 'Mulai Belajar'} <Play className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
          /* QUIZ INTERFACE - FOCUS MODE */
          <div className="max-w-2xl mx-auto mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setModulAktif(null)} className="group flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Kembali ke Daftar Modul
            </button>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-stone-200/50 border border-stone-200">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-2 block">Modul Evaluasi</span>
                <h2 className="text-2xl font-bold text-stone-900">{modulAktif.judul}</h2>
              </div>

              {!kuisSelesai ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-sm font-semibold text-stone-400">Pertanyaan {indeksSoal + 1} dari {modulAktif.soal.length}</p>
                    <div className="text-xs font-medium bg-stone-100 text-stone-600 px-3 py-1 rounded-full">{Math.round(((indeksSoal) / modulAktif.soal.length) * 100)}% Selesai</div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-8 text-stone-800 leading-snug">{modulAktif.soal[indeksSoal].pertanyaan}</h3>
                  
                  <div className="space-y-3">
                    {modulAktif.soal[indeksSoal].pilihan.map((opsi, index) => (
                      <button
                        key={index}
                        onClick={() => cekJawaban(opsi)}
                        className="w-full text-left p-5 rounded-xl border-2 border-stone-100 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all font-medium text-stone-700 hover:text-emerald-900 group relative overflow-hidden"
                      >
                        <span className="inline-block w-6 text-stone-400 group-hover:text-emerald-500">{String.fromCharCode(65 + index)}.</span>
                        {opsi}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                    <Trophy className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-stone-900 mb-3">Luar Biasa!</h3>
                  <p className="text-stone-500 mb-8 text-lg">
                    Kamu berhasil menjawab dengan benar <br/>
                    <span className="text-emerald-600 font-black text-2xl">{skor}</span> dari {modulAktif.soal.length} pertanyaan.
                  </p>
                  <button
                    onClick={() => setModulAktif(null)}
                    className="bg-stone-900 text-stone-50 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/30 transition-all w-full md:w-auto"
                  >
                    Selesaikan & Simpan Progres
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}