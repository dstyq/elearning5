'use client';
import { useState } from 'react';

export default function MateriPage() {
  const materiBab = [
    {
      id: 1,
      title: 'Konsep Dasar Algoritma',
      desc: 'Mengenal pondasi pemrograman: apa itu algoritma dan karakteristiknya.',
      file: 'BAB_1_Konsep_Dasar.pptx'
    },
    {
      id: 2,
      title: 'Cara Menulis Algoritma',
      desc: 'Belajar cara menulis logika pake Pseudocode dan bikin Flowchart.',
      file: 'BAB_2_Cara_Menulis.pptx'
    },
    {
      id: 3,
      title: 'Logika Pemrograman',
      desc: 'Implementasi Percabangan (If-Else) dan Perulangan (Looping).',
      file: 'BAB_3_Logika.pptx'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in duration-700">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-[#38302A] mb-3">Materi Pembelajaran</h1>
        <p className="text-[#8C8276] max-w-lg mx-auto">Pilih bab yang mau dipelajari. Pastikan paham atau dikasih paham!</p>
      </div>

      <div className="space-y-4">
        {materiBab.map((materi) => (
          <div 
            key={materi.id}
            className="group bg-white border border-[#EBE6DF] p-6 rounded-3xl transition-all hover:border-[#D1C7BB] hover:shadow-md flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div>
              <span className="text-[#8B7355] text-xs font-bold uppercase tracking-widest">Bab {materi.id}</span>
              <h3 className="text-xl font-bold text-[#38302A] mt-1">{materi.title}</h3>
              <p className="text-[#8C8276] text-sm mt-2">{materi.desc}</p>
            </div>
            
            <a 
              href={`/downloads/${materi.file}`} 
              className="px-6 py-3 bg-[#38302A] text-white rounded-xl text-sm font-bold hover:bg-[#5C554D] transition-colors whitespace-nowrap"
            >
              Download PPT
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}