'use client';

import { useEffect, useState } from 'react';
import { Trophy, Award } from 'lucide-react';

export default function Leaderboard() {
  // 1. Rename interface agar tidak ambigu
  interface SkorModul {
    modul: string;
    skor: number;
  }

  const [list, setList] = useState<SkorModul[]>([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem('leaderboard');
      const scores: SkorModul[] = data ? JSON.parse(data) : [];
      
      // 2. Sorting: Skor tertinggi muncul di atas
      const sortedScores = scores.sort((a, b) => b.skor - a.skor);
      setList(sortedScores);
    } catch (err) {
      console.error("Gagal memuat leaderboard:", err);
    }
  }, []);

  const totalSkor = list.reduce((acc, item) => acc + item.skor, 0);

  return (
    <div className="max-w-2xl mx-auto mt-10 animate-in fade-in duration-700">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-[#8B7355]" />
        <h2 className="text-2xl font-serif font-bold text-[#38302A]">Leaderboard Kuis</h2>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-[#EBE6DF]">
        {list.length === 0 ? (
          <div className="text-center py-10 text-[#A39B92] italic">
            Belum ada data kuis. Selesaikan modul dulu yuk!
          </div>
        ) : (
          <div className="space-y-2">
            {list.map((item, i) => (
              <div 
                key={i} 
                className={`flex justify-between items-center p-4 rounded-2xl ${i === 0 ? 'bg-[#F4F1EA]' : 'bg-transparent'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-bold ${i === 0 ? 'text-[#8B7355]' : 'text-[#A39B92]'}`}>#{i + 1}</span>
                  <h3 className="font-medium text-[#4A4036]">{item.modul}</h3>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#8B7355]">
                  <Award size={16} />
                  <span>{item.skor} Poin</span>
                </div>
              </div>
            ))}
            
            <div className="mt-8 pt-6 border-t-2 border-[#F4F1EA] flex justify-between items-center px-4">
              <span className="font-bold text-[#38302A]">Total Skor Keseluruhan</span>
              <span className="text-2xl font-serif font-bold text-[#8B7355]">{totalSkor}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}