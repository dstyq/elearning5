'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Flame, LogOut, User } from 'lucide-react';

export default function BerandaLayout({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState('');
  const [streakCount, setStreakCount] = useState(0);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const session = localStorage.getItem('session_login');
    if (session !== 'true') {
      router.push('/');
    } else {
      setUsername(localStorage.getItem('session_username') || 'Siswa');
      setAuthorized(true);
      const progres = localStorage.getItem('progres_elearning_aesthetic');
      if (progres) {
        setStreakCount(JSON.parse(progres).length);
      }
    }
  }, [router, pathname]);

  const handleLogout = () => {
    localStorage.clear(); // Bersihkan semua sesi
    router.push('/');
  };

  if (!authorized) return <div className="min-h-screen bg-[#F9F8F6]"></div>;

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#4A4036] font-sans selection:bg-[#E3DAC9]">
      <nav className="sticky top-0 z-50 bg-[#F9F8F6]/80 backdrop-blur-xl border-b border-[#EBE6DF] px-6 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          <Link href="/beranda" className="flex items-center gap-3 cursor-pointer shrink-0 group">
            <div className="bg-[#38302A] p-2.5 rounded-xl shadow-md group-hover:bg-[#60554A] transition-colors">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif font-bold text-xl tracking-wide text-[#38302A] block leading-none">EduJurnal.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 bg-white px-8 py-2.5 rounded-full border border-[#EBE6DF] shadow-sm">
            <Link href="/beranda" className={`text-sm font-bold transition-all ${pathname === '/beranda' ? 'text-[#8B7355]' : 'text-[#8C8276] hover:text-[#38302A]'}`}>Beranda</Link>
            <Link href="/beranda/profil" className={`text-sm font-bold transition-all ${pathname === '/beranda/profil' ? 'text-[#8B7355]' : 'text-[#8C8276] hover:text-[#38302A]'}`}>Profil</Link>
            <Link href="/beranda/tentang" className={`text-sm font-bold transition-all ${pathname === '/beranda/tentang' ? 'text-[#8B7355]' : 'text-[#8C8276] hover:text-[#38302A]'}`}>Tentang Kami</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#FEF6EE] to-[#FDE0C4] px-4 py-2 rounded-full border border-[#FDCB9E] shadow-sm">
              <Flame className="w-4 h-4 text-[#EA580C] animate-pulse" />
              <span className="text-xs font-bold text-[#EA580C]">{streakCount} Modul Selesai</span>
            </div>
            
            <div className="flex items-center gap-3 border-l border-[#EBE6DF] pl-4">
              <Link href="/beranda/profil" className="w-9 h-9 rounded-full bg-white flex items-center justify-center border-2 border-[#EBE6DF] hover:border-[#8B7355] transition-all shadow-sm">
                <User className="w-4 h-4 text-[#38302A]" />
              </Link>
              <button onClick={handleLogout} className="w-9 h-9 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition-colors" title="Keluar">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}