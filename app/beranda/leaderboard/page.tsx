'use client';
import { useEffect, useState } from 'react';

export default function Leaderboard() {
  interface Leaderboard {
    modul : string,
    skor : number,
  }
  const [list, setList] = useState<Leaderboard[]>([]);
  let totalSkor : number;
  useEffect(() => {
    // Kita ambil langsung di sini biar nggak ribet import-import
    let scores : Leaderboard[] = []; 
    try{
      const res = JSON.parse(localStorage.getItem('leaderboard')?.toString() || '[]');
      scores = res;
    }
    catch(err){
      console.error(err)
    }
    setList(scores);
  }, []);

  totalSkor = list.reduce((acc, item) => acc + item.skor, 0);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-[#38302A]">Leaderboard</h2>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EBE6DF]">
        {list.length === 0 ? (
          <p className="text-gray-400">Belum ada skor nih.</p>
        ) : (
          list.map((item, i) => (
            <div key={i} className="flex justify-between py-3 border-b font-semibold last:border-0">
              <h1 className='text-[#8C8276]'>{item.modul} </h1>
              <h2 className='text-[#8C8276]'>Skor : {item.skor}</h2>
            </div>
          ))
        )}
        <h1 className={`${list.length !== 0 ? 'block' : 'hidden'} text-black mt-3 font-bold`}>Total skor : {totalSkor}</h1>
      </div>
    </div>
  );
}