'use client';

import { useEffect, useState } from 'react';
import { Trophy, Award } from 'lucide-react';

export default function Leaderboard() {
  interface SkorModul {
    modul: string;
    skor: number;
  }

  const [list, setList] = useState<SkorModul[]>([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem('leaderboard');
      const scores: SkorModul[] = data ? JSON.parse(data) : [];
      
      const daftarModulResmi = [
        "Konsep Dasar & Pseudocode", 
        "Perancangan Flowchart", 
        "Struktur Kontrol Perulangan"
      ];
      
      const filteredScores = scores.filter(item => daftarModulResmi.includes(item.modul));

      // 2. Sorting: Skor tertinggi ke terendah
      const sortedScores = filteredScores.sort((a, b) => b.skor - a.skor);
      setList(sortedScores);
    } catch (err) {
      console.error("Gagal memuat leaderboard:", err);
    }
  }, []);

  const totalSkor = list.reduce((acc, item) => acc + item.skor, 0);

  return (
    <div className="max-w-2xl mx-auto py-10 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="text-[#8B7355] animate-pulse" />
        <h2 className="text-3xl font-serif font-bold text-[#38302A]">Leaderboard</h2>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-lg border border-[#EBE6DF]">
        {list.length === 0 ? (
          <div className="text-center py-12 text-[#A39B92] italic">
            Belum ada data kuis. Selesaikan modul dulu yuk!
          </div>
        ) : (
          <div className="space-y-3">
            {list.map((item, i) => (
              <div 
                key={i} 
                className={`flex justify-between items-center p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  i === 0 ? 'bg-[#F4F1EA] shadow-inner' : 'hover:bg-[#F9F8F6]'
                }`}
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <span className={`font-bold text-lg ${i === 0 ? 'text-[#8B7355]' : 'text-[#A39B92]'}`}>#{i + 1}</span>
                  <h3 className="font-medium text-[#4A4036] truncate">{item.modul}</h3>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#8B7355] shrink-0 ml-4">
                  <Award size={16} />
                  <span>{item.skor} Pts</span>
                </div>
              </div>
            ))}
            
            <div className="mt-8 pt-6 border-t-2 border-[#F4F1EA] flex justify-between items-center px-4">
              <span className="font-bold text-[#38302A]">Total Skor</span>
              <span className="text-3xl font-serif font-bold text-[#8B7355]">{totalSkor}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}