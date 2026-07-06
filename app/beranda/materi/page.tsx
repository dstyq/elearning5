'use client';

import { useState } from 'react';
import { BookOpen, X, Download, Star, Sparkles, Play, FileText, PlayCircle } from 'lucide-react';

export default function MateriPage() {
  const [materiAktif, setMateriAktif] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'pdf'>('video');

  const materiBab = [
    {
      id: 1,
      title: 'Pengantar Algoritma',
      desc: 'Memahami apa itu algoritma, tujuan, dan elemen dasar penyusunnya.',
      isi: 'Algoritma adalah urutan langkah-langkah logis, sistematis, dan terstruktur yang digunakan untuk menyelesaikan suatu masalah hingga menghasilkan solusi.',
      file: 'Pengantar Algoritma.pdf',
      ytId: 'dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Konsep Dasar Pseudocode',
      desc: 'Fase perantara antara algoritma manusia dan kode pemrograman.',
      isi: 'Pseudocode merupakan penjelasan langkah-demi-langkah dari sebuah algoritma yang ditulis menggunakan bahasa manusia yang dikombinasikan dengan struktur mirip kode pemrograman.',
      file: 'PSEUDOCODE.pdf',
      ytId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Perancangan Flowchart',
      desc: 'Visualisasi alur logika program menggunakan simbol-simbol standar ISO.',
      isi: 'Flowchart adalah alat bantu visual yang digunakan untuk memvisualisasikan alur logika dari suatu algoritma atau mendokumentasikan proses bisnis.',
      file: 'Perancangan Algoritma Menggunakan Flowchart.pdf',
      ytId: 'dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Percabangan (Selection)',
      desc: 'Struktur kontrol untuk memilih jalur eksekusi berdasarkan kondisi logika.',
      isi: 'Selection atau percabangan adalah struktur kontrol dalam pemrograman yang digunakan untuk memilih jalur eksekusi program berdasarkan hasil evaluasi suatu kondisi.',
      file: 'Percabangan.pdf',
      ytId: 'dQw4w9WgXcQ'
    },
    {
      id: 5,
      title: 'Perulangan (Looping)',
      desc: 'Mengeksekusi sekumpulan instruksi secara berulang selama kondisi terpenuhi.',
      isi: 'Perulangan adalah proses mengeksekusi sekumpulan instruksi atau blok kode secara berulang selama kondisi tertentu masih terpenuhi.',
      file: 'Struktur Kontrol Perulangan (Looping).pdf',
      ytId: 'dQw4w9WgXcQ'
    }
  ];

  const aksenWarna = ['#FFC700', '#FF6B9D', '#4D96FF', '#6BCB77', '#CD84F1', '#FF9F43'];

  const bukaMateri = (m: any) => {
    setMateriAktif(m);
    setActiveTab('video'); 
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans pt-10 pb-20 px-6 transition-colors duration-200">
      <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mb-16 text-center relative mt-4">
          <div className="relative inline-block mb-4">
            <Star className="w-6 h-6 text-[#FF6B9D] fill-[#FF6B9D] absolute -top-4 -left-6 -rotate-12 animate-pulse" />
            <Sparkles className="w-8 h-8 text-[#4D96FF] absolute -bottom-2 -right-8 rotate-12" />
            <div className="bg-black text-white dark:bg-[#F5F1E8] dark:text-black p-4 rounded-full border-[4px] border-white dark:border-black shadow-[6px_6px_0px_0px_#FFC700] rotate-[-2deg]">
              <BookOpen className="w-10 h-10" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-black uppercase tracking-tight mt-4">
            Materi
            <br />
            <span className="bg-[#6BCB77] px-3 rotate-1 inline-block border-[4px] border-black rounded-xl text-black mt-2">
              Pembelajaran
            </span>
          </h1>
          
          <p className="font-bold text-black/70 dark:text-[#F5F1E8]/70 mt-6 max-w-lg mx-auto leading-relaxed border-[3px] border-black border-dashed rounded-2xl p-4 bg-white dark:bg-[#1E1B24]">
            Eksplorasi modul logika pemrograman. Baca PDF atau tonton videonya biar makin paham!
          </p>
        </div>

        {/* LIST MATERI (GRID SYSTEM) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {materiBab.map((m, i) => {
            const warna = aksenWarna[i % aksenWarna.length];
            return (
              <div 
                key={m.id}
                onClick={() => bukaMateri(m)}
                className="group relative bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] p-6 rounded-[24px] transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#F5F1E8] cursor-pointer flex flex-col h-full"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <span 
                      className="inline-block font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border-[2px] border-black mb-3 rotate-[-2deg] text-black"
                      style={{ background: warna }}
                    >
                      Bab {m.id}
                    </span>
                    <h3 className="text-xl font-black text-black dark:text-[#F5F1E8] uppercase leading-snug line-clamp-2">
                      {m.title}
                    </h3>
                  </div>
                  
                  <p className="text-black/70 dark:text-[#F5F1E8]/70 font-bold text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {m.desc}
                  </p>
                  
                  <div className="border-t-[3px] border-black dark:border-[#F5F1E8] pt-4 mt-auto flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider">
                      Buka Modul
                    </span>
                    <div className="w-8 h-8 rounded-full border-[2px] border-black bg-[#F5F1E8] dark:bg-[#17151C] flex items-center justify-center group-hover:bg-[#FFC700] group-hover:text-black transition-colors">
                      <PlayCircle size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL MATERI */}
        {materiAktif && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FFC700] p-5 md:p-8 rounded-[28px] max-w-4xl w-full relative h-[90vh] md:h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
              
              {/* Tombol Close */}
              <button 
                onClick={() => setMateriAktif(null)} 
                className="absolute top-5 right-5 p-2 bg-[#FF6B9D] text-black border-[3px] border-black rounded-full hover:scale-90 active:scale-95 transition-transform z-20 shadow-[3px_3px_0px_0px_#000]"
              >
                <X size={20} className="font-bold" />
              </button>
              
              {/* Bagian Teks */}
              <div className="pr-12 mb-4 overflow-y-auto shrink-0 max-h-[25vh]">
                <span className="font-black text-[10px] uppercase tracking-wider bg-black text-[#FFC700] px-2 py-1 rounded-md mb-2 inline-block">
                  Bab {materiAktif.id}
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-black dark:text-[#F5F1E8] leading-tight">
                  {materiAktif.title}
                </h2>
                <p className="text-black/70 dark:text-[#F5F1E8]/70 text-sm font-bold mt-2 pb-2">
                  {materiAktif.isi}
                </p>
              </div>

              {/* TABS: Video vs PDF */}
              <div className="flex gap-2 mb-4 p-1.5 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] rounded-2xl w-fit shrink-0">
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                    activeTab === 'video' 
                      ? 'bg-[#FFC700] text-black border-[2px] border-black shadow-[3px_3px_0px_0px_#000]' 
                      : 'text-black/50 dark:text-[#F5F1E8]/50 hover:text-black dark:hover:text-white border-[2px] border-transparent'
                  }`}
                >
                  <Play size={16} /> Video
                </button>
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                    activeTab === 'pdf' 
                      ? 'bg-[#4D96FF] text-black border-[2px] border-black shadow-[3px_3px_0px_0px_#000]' 
                      : 'text-black/50 dark:text-[#F5F1E8]/50 hover:text-black dark:hover:text-white border-[2px] border-transparent'
                  }`}
                >
                  <FileText size={16} /> PDF
                </button>
              </div>
              
              {/* KONTEN AKTIF */}
              <div className="flex-1 w-full bg-[#F5F1E8] dark:bg-[#17151C] rounded-2xl overflow-hidden mb-4 border-[4px] border-black dark:border-[#F5F1E8] relative min-h-0">
                {activeTab === 'video' ? (
                  <iframe 
                    src={`https://www.youtube.com/embed/${materiAktif.ytId}`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <iframe 
                    src={`/modul/${materiAktif.file}`} 
                    className="absolute inset-0 w-full h-full"
                    title="Materi PDF"
                  />
                )}
              </div>

              {/* FOOTER ACTIONS */}
              <div className="flex flex-wrap gap-4 mt-auto shrink-0 pt-2">
                <a 
                  href={`/modul/${materiAktif.file}`} 
                  download
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-[#6BCB77] text-black border-[3px] border-black shadow-[4px_4px_0px_0px_#000] rounded-full text-xs font-black uppercase tracking-wider hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
                >
                  <Download size={16} /> Unduh Materi
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}