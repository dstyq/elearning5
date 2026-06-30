'use client';

import { useState } from 'react';
import { BookOpen, FileText, X, Download, Eye } from 'lucide-react';

export default function MateriPage() {
  const [materiAktif, setMateriAktif] = useState<any>(null);

  const materiBab = [
    {
      id: 1,
      title: 'Konsep Dasar Algoritma',
      desc: 'Memahami definisi dasar, karakteristik, dan fase perantara (pseudocode) sebelum coding.',
      isi: 'Algoritma adalah langkah logis untuk menyelesaikan masalah. Pseudocode berfungsi sebagai jembatan antara ide manusia dan kode pemrograman karena tidak terikat sintaks tertentu.',
      file: 'PSEUDOCODE.pdf' 
    },
    {
      id: 2,
      title: 'Flowchart & Representasi',
      desc: 'Mempelajari simbol standar ISO untuk memvisualisasikan alur logika program.',
      isi: 'Flowchart menggunakan simbol standar (Terminator, Process, Decision, Input/Output) untuk mendokumentasikan logika secara visual agar mudah dipahami secara universal.',
      file: 'Perancangan Algoritma Menggunakan Flowchart.pdf' 
    },
    {
      id: 3,
      title: 'Struktur Kontrol Perulangan',
      desc: 'Implementasi For Loop, While, dan Do-While untuk eksekusi instruksi berulang.',
      isi: 'Perulangan memungkinkan eksekusi blok kode berulang selama kondisi terpenuhi. Terdapat dua jenis utama: Counter-controlled (For) dan Condition-controlled (While/Do-While).',
      file: 'Struktur Kontrol Perulangan (Looping).pdf' 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 animate-in fade-in duration-700">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#38302A] mb-3">Materi Pembelajaran</h1>
        <p className="text-[#8C8276]">Eksplorasi modul logika pemrograman. Klik untuk baca atau unduh materi.</p>
      </div>

      <div className="space-y-4">
        {materiBab.map((m) => (
          <div 
            key={m.id}
            onClick={() => setMateriAktif(m)}
            className="group bg-white border border-[#EBE6DF] p-6 rounded-3xl transition-all hover:border-[#8B7355] hover:shadow-lg cursor-pointer flex justify-between items-center"
          >
            <div>
              <span className="text-[#8B7355] text-xs font-bold uppercase tracking-widest">Bab {m.id}</span>
              <h3 className="text-xl font-bold text-[#38302A] mt-1 group-hover:text-[#8B7355]">{m.title}</h3>
              <p className="text-[#8C8276] text-sm mt-2">{m.desc}</p>
            </div>
            <BookOpen className="text-[#8B7355] opacity-50 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* Modal Materi */}
      {materiAktif && (
        <div className="fixed inset-0 bg-[#38302A]/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-[2rem] max-w-3xl w-full relative h-[90vh] flex flex-col">
            <button onClick={() => setMateriAktif(null)} className="absolute top-4 right-4 p-2 bg-[#F4F1EA] rounded-full hover:bg-[#EBE6DF] z-10">
              <X size={20} />
            </button>
            
            <h2 className="text-2xl font-serif font-bold mb-2">{materiAktif.title}</h2>
            <p className="text-[#8C8276] text-sm mb-6">{materiAktif.isi}</p>
            
            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-gray-100 rounded-2xl overflow-hidden mb-6 border border-[#EBE6DF]">
              <iframe 
                src={`/modul/${materiAktif.file}`} 
                className="w-full h-full"
                title="Materi PDF"
              />
            </div>

            <div className="flex gap-4">
              <a 
                href={`/modul/${materiAktif.file}`} 
                download
                className="flex items-center gap-2 px-6 py-3 bg-[#8B7355] text-white rounded-full text-sm font-bold hover:bg-[#60554A] transition-colors"
              >
                <Download size={16} /> Unduh PDF
              </a>
              <button 
                onClick={() => setMateriAktif(null)}
                className="flex items-center gap-2 px-6 py-3 bg-[#F4F1EA] text-[#38302A] rounded-full text-sm font-bold hover:bg-[#EBE6DF] transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}