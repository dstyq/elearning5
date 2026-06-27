'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar(){
    const menuNav = [
        { name: 'Beranda', href: '/beranda' },
        { name: 'Materi', href: '/beranda/materi' },
        { name: 'Leaderboard', href: '/beranda/leaderboard' },
        { name: 'Tentang Kami', href: '/beranda/tentang' },
    ];

    const [username, setUsername] = useState<string | null>('Siswa');
    
    useEffect(() => {
        setUsername(localStorage.getItem('session_username'));
        console.log(username || 'Siswa')
    },[]);

    return(
      <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
        <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-stone-200/50 rounded-2xl px-6 py-3 flex items-center justify-between">
          
          {/* Brand/Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#38302A] rounded-xl flex items-center justify-center text-white font-black italic">V</div>
            <span className="font-serif font-bold text-[#38302A] tracking-tight text-lg">CodeV</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {menuNav.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="px-4 py-2 text-sm font-bold text-[#8C8276] hover:text-[#38302A] hover:bg-[#F4F1EA] rounded-xl transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Profil & Action */}
          <div className="flex items-center gap-4 border-l border-[#EBE6DF] pl-4">
            <Link href="/beranda/profil" className="flex items-center gap-2 group">
            <span className="text-sm font-bold text-[#38302A] group-hover:underline">{username}</span>
              <div className="w-8 h-8 rounded-full bg-[#EBE6DF] border-2 border-white shadow-inner flex items-center justify-center font-bold text-[#8C8276] text-xs">
                {/* Bisa diganti <img> kalau udah ada foto profil */}
                H
              </div>
            </Link>
            <Link href="/" className="text-xs font-bold text-[#8C8276] hover:text-red-500 transition-colors">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    );
}