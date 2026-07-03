'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, LogOut, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const menuNav = [
    { name: 'Beranda', href: '/beranda' },
    { name: 'Materi', href: '/beranda/materi' },
    { name: 'Leaderboard', href: '/beranda/leaderboard' },
    { name: 'Tentang Kami', href: '/beranda/tentang' },
  ];

  const pathname = usePathname();
  const [username, setUsername] = useState<string | null>('Siswa');
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem('session_username'));
    const themeTersimpan = localStorage.getItem('theme_elearning');
    const isDark = themeTersimpan === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme_elearning', next ? 'dark' : 'light');
  };

  const handleLogout = () => {
    localStorage.removeItem('session_username');
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <div className="bg-[#F5F1E8] dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#FFC700] rounded-xl px-6 py-3 flex items-center justify-between transition-colors duration-200">

        {/* Brand — bentuk oval seperti simbol terminal flowchart (start/end) */}
        <Link href="/beranda" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black dark:bg-[#FFC700] border-[3px] border-white dark:border-black rounded-full flex items-center justify-center text-[#FFC700] dark:text-black font-black italic">
            V
          </div>
          <span className="font-black text-black dark:text-[#F5F1E8] tracking-tight text-lg uppercase">
            CodeV
          </span>
        </Link>

        {/* Hamburger + theme toggle (mobile) */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 border-[3px] border-black rounded-lg bg-[#FFC700]"
          >
            {darkMode ? <Sun size={16} className="text-black" /> : <Moon size={16} className="text-black" />}
          </button>
          <button
            className="p-2 border-[3px] border-black dark:border-[#F5F1E8] rounded-lg bg-white dark:bg-[#1E1B24]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-black dark:text-[#F5F1E8]" /> : <Menu className="text-black dark:text-[#F5F1E8]" />}
          </button>
        </div>

        {/* Nav Links (Desktop) — titik penanda "posisi di alur", senada sama dashboard */}
        <div className="hidden md:flex items-center gap-1">
          {menuNav.map((item) => {
            const aktif = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase border-[3px] rounded-lg transition-all ${
                  aktif
                    ? 'bg-[#FFC700] border-black text-black'
                    : 'text-black dark:text-[#F5F1E8] border-transparent hover:border-black hover:bg-[#FFC700] hover:text-black'
                }`}
              >
                {aktif && <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Profil, Tema, Logout (Desktop) */}
        <div className="hidden md:flex items-center gap-3 border-l-[3px] border-black dark:border-[#F5F1E8] pl-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 border-[3px] border-black rounded-lg bg-[#FFC700] hover:shadow-[3px_3px_0px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
          >
            {darkMode ? <Sun size={16} className="text-black" /> : <Moon size={16} className="text-black" />}
          </button>

          <Link href="/beranda/profil" className="flex items-center gap-2 group">
            <span className="text-sm font-bold uppercase text-black dark:text-[#F5F1E8] group-hover:underline decoration-[3px]">
              {username}
            </span>
            <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] flex items-center justify-center font-black text-black dark:text-[#F5F1E8] text-xs">
              {username?.charAt(0) || 'H'}
            </div>
          </Link>

          <Link
            href="/"
            onClick={handleLogout}
            className="p-2 border-[3px] border-black dark:border-[#F5F1E8] rounded-lg bg-white dark:bg-[#1E1B24] hover:bg-red-100 dark:hover:bg-red-900/30 hover:shadow-[3px_3px_0px_0px_#000] dark:hover:shadow-[3px_3px_0px_0px_#F5F1E8] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
          >
            <LogOut size={16} className="text-black dark:text-[#F5F1E8]" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#F5F1E8] dark:bg-[#1E1B24] rounded-xl p-4 border-[3px] border-black dark:border-[#F5F1E8] shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#FFC700] animate-in slide-in-from-top-4">
          {menuNav.map((item) => {
            const aktif = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-bold uppercase rounded-lg ${
                  aktif
                    ? 'bg-[#FFC700] text-black'
                    : 'text-black dark:text-[#F5F1E8] hover:bg-[#FFC700] hover:text-black'
                }`}
              >
                {aktif && <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />}
                {item.name}
              </Link>
            );
          })}
          <hr className="my-2 border-[3px] border-black dark:border-[#F5F1E8]" />
          <Link
            href="/beranda/profil"
            className="block px-4 py-3 text-sm font-bold uppercase text-black dark:text-[#F5F1E8]"
          >
            Profil: {username}
          </Link>
          <Link href="/" onClick={handleLogout} className="block px-4 py-3 text-sm font-bold uppercase text-red-600">
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}
