'use client';
import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Kita ambil langsung di sini biar nggak ribet import-import
    const scores = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const sorted = scores.sort((a, b) => b.score - a.score);
    setList(sorted);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-[#38302A]">Leaderboard</h2>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EBE6DF]">
        {list.length === 0 ? (
          <p className="text-gray-400">Belum ada skor nih.</p>
        ) : (
          list.map((item, i) => (
            <div key={i} className="flex justify-between py-3 border-b last:border-0">
              <span className="font-bold">{i + 1}. {item.name}</span>
              <span className="text-[#8B7355] font-mono">{item.score} XP</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}