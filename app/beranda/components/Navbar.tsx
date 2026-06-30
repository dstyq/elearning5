'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react'; // Tambahkan LogOut icon

export default function Navbar() {
  const menuNav = [
    { name: 'Beranda', href: '/beranda' },
    { name: 'Materi', href: '/beranda/materi' },
    { name: 'Leaderboard', href: '/beranda/leaderboard' },
    { name: 'Tentang Kami', href: '/beranda/tentang' },
  ];

  const [username, setUsername] = useState<string | null>('Siswa');
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setUsername(localStorage.getItem('session_username'));
  }, []);

  // Tambahkan fungsi logout untuk membersihkan session
  const handleLogout = () => {
    localStorage.removeItem('session_username');
    // Opsional: tambahkan localStorage.clear() jika ingin menghapus semua data kuis/leaderboard juga
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg shadow-stone-200/50 rounded-2xl px-6 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#38302A] rounded-xl flex items-center justify-center text-white font-black italic">V</div>
          <span className="font-serif font-bold text-[#38302A] tracking-tight text-lg">CodeV</span>
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-[#38302A]" /> : <Menu className="text-[#38302A]" />}
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {menuNav.map((item) => (
            <Link key={item.name} href={item.href} className="px-4 py-2 text-sm font-bold text-[#8C8276] hover:text-[#38302A] hover:bg-[#F4F1EA] rounded-xl transition-all">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Profil & Logout (Desktop) */}
        <div className="hidden md:flex items-center gap-4 border-l border-[#EBE6DF] pl-4">
          <Link href="/beranda/profil" className="flex items-center gap-2 group">
            <span className="text-sm font-bold text-[#38302A] group-hover:underline">{username}</span>
            <div className="w-8 h-8 rounded-full bg-[#EBE6DF] border-2 border-white shadow-inner flex items-center justify-center font-bold text-[#8C8276] text-xs">
              {username?.charAt(0) || 'H'}
            </div>
          </Link>
          {/* Tambahkan tombol logout di desktop */}
          <Link href="/" onClick={handleLogout} className="text-[#8C8276] hover:text-red-500 transition-colors">
            <LogOut size={18} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl p-4 border border-[#EBE6DF] shadow-xl animate-in slide-in-from-top-4">
          {menuNav.map((item) => (
            <Link key={item.name} href={item.href} className="block px-4 py-3 text-sm font-bold text-[#8C8276] hover:bg-[#F4F1EA] rounded-xl">
              {item.name}
            </Link>
          ))}
          <hr className="my-2 border-[#F4F1EA]" />
          <Link href="/beranda/profil" className="block px-4 py-3 text-sm font-bold text-[#38302A]">Profil: {username}</Link>
          <Link href="/" onClick={handleLogout} className="block px-4 py-3 text-sm font-bold text-red-500">Logout</Link>
        </div>
      )}
    </nav>
  );
}