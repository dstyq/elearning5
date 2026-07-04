'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, LogOut, Star } from 'lucide-react';

export default function Navbar() {
  const menuNav = [
    { name: 'Beranda', href: '/beranda' },
    { name: 'Materi', href: '/beranda/materi' },
    { name: 'Leaderboard', href: '/beranda/leaderboard' },
    { name: 'Tentang Kami', href: '/beranda/tentang' },
  ];

  const pathname = usePathname();
  const [username, setUsername] = useState<string | null>('Siswa');
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Bikin fungsi buat muat data profil
  const loadProfileData = () => {
    setUsername(localStorage.getItem('session_username') || 'Siswa');
    setProfilePic(localStorage.getItem('session_profile_pic'));
  };

  useEffect(() => {
    // Panggil saat pertama kali load
    loadProfileData();

    // Dengerin 'sinyal' dari halaman profil kalau ada update
    window.addEventListener('profilDiupdate', loadProfileData);
    return () => window.removeEventListener('profilDiupdate', loadProfileData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('session_username');
    localStorage.removeItem('session_profile_pic');
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <div className="bg-[#F5F1E8] border-[3px] border-black shadow-[5px_5px_0px_0px_#000] rounded-2xl px-6 py-3 flex items-center justify-between transition-colors duration-200">

        {/* Brand */}
        <Link href="/beranda" className="flex items-center gap-2.5 relative">
          <div className="relative">
            <Star className="w-4 h-4 text-[#FFC700] fill-[#FFC700] absolute -top-2 -right-2 rotate-12" />
            <div className="w-9 h-9 bg-black border-[3px] border-white rounded-full flex items-center justify-center text-[#FFC700] font-black italic">
              V
            </div>
          </div>
          <span className="font-black text-black tracking-tight text-lg uppercase">
            CodeV
          </span>
        </Link>

        {/* Hamburger (mobile) */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2 border-[3px] border-black rounded-full bg-white active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
          </button>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {menuNav.map((item) => {
            const aktif = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-black uppercase rounded-full border-[3px] transition-all duration-150 ${
                  aktif
                    ? 'bg-[#FFC700] border-black text-black rotate-[-1deg] shadow-[3px_3px_0px_0px_#000]'
                    : 'text-black border-transparent hover:border-black hover:bg-[#FFC700] hover:text-black hover:rotate-1'
                }`}
              >
                {aktif && <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Profil & Logout */}
        <div className="hidden md:flex items-center gap-3 border-l-[3px] border-black pl-4">
          <Link href="/beranda/profil" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-full bg-[#FF6B9D] border-[3px] border-black flex items-center justify-center font-black text-black text-xs group-hover:rotate-6 transition-transform overflow-hidden">
              {profilePic ? (
                <img src={profilePic} alt="PP" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <span className="z-10">{username?.charAt(0)?.toUpperCase() || 'H'}</span>
              )}
            </div>
            <span className="text-sm font-black uppercase text-black group-hover:underline decoration-[3px]">
              {username}
            </span>
          </Link>

          <Link
            href="/"
            onClick={handleLogout}
            className="p-2 border-[3px] border-black rounded-full bg-white hover:bg-red-100 hover:shadow-[3px_3px_0px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
          >
            <LogOut size={16} className="text-black" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#F5F1E8] rounded-2xl p-4 border-[3px] border-black shadow-[5px_5px_0px_0px_#000] animate-in slide-in-from-top-4">
          {menuNav.map((item) => {
            const aktif = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-black uppercase rounded-xl mb-1 ${
                  aktif
                    ? 'bg-[#FFC700] text-black'
                    : 'text-black hover:bg-[#FFC700] hover:text-black'
                }`}
              >
                {aktif && <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />}
                {item.name}
              </Link>
            );
          })}
          <hr className="my-2 border-[3px] border-black" />
          <Link
            href="/beranda/profil"
            className="block px-4 py-3 text-sm font-black uppercase text-black"
          >
            Profil: {username}
          </Link>
          <Link href="/" onClick={handleLogout} className="block px-4 py-3 text-sm font-black uppercase text-red-600">
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}