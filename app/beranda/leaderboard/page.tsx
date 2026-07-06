'use client';

import { useEffect, useState } from 'react';
import { Trophy, Medal, Star, Sparkles, UserCircle2 } from 'lucide-react';
import { supabase } from "@/app/supabaseClient";

export default function Leaderboard() {
  interface SkorUser {
    nama: string;
    skor: number;
    isCurrentUser: boolean;
  }

  const [list, setList] = useState<SkorUser[]>([]);

useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // 1. Get the current logged-in user's ID directly from Supabase Auth
        const { data: { user } } = await supabase.auth.getUser();
        const currentUserId = user?.id;

        // 2. Fetch top 10 players along with their IDs for precise identification
        const { data, error } = await supabase
          .from('users')
          .select('id, nama, skor')
          .order('skor', { ascending: false })
          .limit(10);
        
        if (error) {
          throw error;
        }

        // 3. Map data and compare IDs instead of names
        if (data) {
          const formattedData = data.map((item: any) => ({
            nama: item.nama,
            skor: item.skor || 0,
            isCurrentUser: item.id === currentUserId
          }));

          // 4. Update state 
          setList(formattedData);
        }
      } catch (err) {
        console.error("Gagal memuat leaderboard:", err);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans pt-10 pb-20 px-6 transition-colors duration-200">
      <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mb-10 text-center relative">
          <div className="relative inline-block mb-4">
            <Star className="w-6 h-6 text-[#FFC700] fill-[#FFC700] absolute -top-4 -left-4 -rotate-12 animate-pulse" />
            <Sparkles className="w-8 h-8 text-[#FF6B9D] absolute -bottom-2 -right-6 rotate-12" />
            <div className="bg-black text-white dark:bg-[#F5F1E8] dark:text-black p-4 rounded-full border-[4px] border-white dark:border-black shadow-[6px_6px_0px_0px_#FFC700]">
              <Trophy className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Global Rank
          </h1>
          <p className="font-bold text-black/60 dark:text-[#F5F1E8]/60 mt-2 uppercase tracking-wider text-sm">
            Siapa yang paling jago?
          </p>
        </div>

        {/* BOARD CONTAINER */}
        <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[28px] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#F5F1E8] p-6 md:p-10">
          
          <div className="flex justify-between items-center mb-6 px-4">
            <span className="font-black text-xs uppercase tracking-wider bg-black text-[#FFC700] px-3 py-1 rounded-full -rotate-1">
              Top Players
            </span>
            <span className="font-black text-xs uppercase tracking-wider text-black/50 dark:text-[#F5F1E8]/50">
              {list.length} Peserta
            </span>
          </div>

          <div className="space-y-4">
            {list.map((item, i) => {
              const isTop3 = i < 3;
              const isMe = item.isCurrentUser;
              
              // Styling khusus buat juara 1, 2, 3 dan user sendiri
              let bgClass = 'bg-white dark:bg-[#1E1B24]';
              if (isMe) bgClass = 'bg-[#FFC700]';
              else if (i === 0) bgClass = 'bg-[#4D96FF]';
              else if (i === 1) bgClass = 'bg-[#FF6B9D]';
              else if (i === 2) bgClass = 'bg-[#6BCB77]';

              const textClass = (isTop3 || isMe) ? 'text-black' : 'text-black dark:text-[#F5F1E8]';

              return (
                <div 
                  key={i} 
                  className={`flex justify-between items-center p-4 md:p-5 rounded-2xl border-[3px] border-black transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] ${
                    isMe ? 'shadow-[4px_4px_0px_0px_#000]' : ''
                  } ${bgClass}`}
                >
                  {/* Bagian Kiri: Rank & Nama */}
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center font-black text-lg border-[2px] border-black rounded-full bg-white text-black shrink-0 ${isTop3 ? 'rotate-[-6deg]' : ''}`}>
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-black text-lg uppercase truncate max-w-[150px] md:max-w-xs ${textClass}`}>
                          {item.nama}
                        </h3>
                        {isMe && (
                          <span className="bg-black text-white text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                            You
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bagian Kanan: Poin */}
                  <div className="flex flex-col items-end shrink-0 pl-2">
                    <div className="flex items-center gap-1.5 bg-white border-[2px] border-black px-3 py-1.5 rounded-xl">
                      <Star className={`w-4 h-4 ${i === 0 ? 'text-[#FFC700] fill-[#FFC700]' : 'text-black'}`} />
                      <span className="font-black text-black text-sm md:text-base">
                        {item.skor}
                      </span>
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider mt-1 ${textClass} opacity-70`}>
                      Points
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}