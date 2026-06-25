'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, User, Lock, ArrowRight, Sparkles } from 'lucide-react';

export default function PintuMasuk() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem('session_login') === 'true') {
      router.push('/beranda');
    }
  }, [router]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (usernameInput.trim() !== '' && passwordInput.trim() !== '') {
      setIsSubmitting(true);
      setTimeout(() => {
        localStorage.setItem('session_login', 'true');
        localStorage.setItem('session_username', usernameInput);
        localStorage.setItem('session_nim', usernameInput.match(/^\d+$/) ? usernameInput : '1502623004');
        router.push('/beranda');
      }, 800);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-[#4A4036] font-sans flex selection:bg-[#E3DAC9]">
      
      {/* Sisi Kiri - Visual / Branding (Sembunyi di HP, Muncul di Laptop) */}
      <div className="hidden lg:flex w-1/2 bg-[#F9F8F6] p-12 flex-col justify-between border-r border-[#EBE6DF] relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E3DAC9] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D4C3A3] rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-[#60554A] p-2.5 rounded-xl shadow-sm">
            <BookOpen className="w-6 h-6 text-[#F9F8F6]" />
          </div>
          <span className="font-serif font-bold text-2xl tracking-wide text-[#38302A]">EduJurnal.</span>
        </div>

        <div className="relative z-10 max-w-md">
          <Sparkles className="w-8 h-8 text-[#8B7355] mb-6" />
          <h1 className="font-serif text-5xl font-bold leading-tight text-[#38302A] mb-6">
            Pusat Belajar <br/> <span className="text-[#8B7355] italic">Interaktif.</span>
          </h1>
          <p className="text-[#8C8276] text-lg leading-relaxed mb-8">
            Platform pembelajaran modern yang dirancang khusus untuk mahasiswa Pendidikan Teknik Informatika dan Komputer (PTIK).
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-[#60554A]">
            <div className="w-10 h-10 rounded-full bg-[#EAF0E6] flex items-center justify-center border border-[#C4B7A6]">K6</div>
            <p>Dipersembahkan oleh Kelompok 6</p>
          </div>
        </div>
      </div>

      {/* Sisi Kanan - Form Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24 bg-white relative">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="bg-[#60554A] p-2 rounded-xl">
              <BookOpen className="w-5 h-5 text-[#F9F8F6]" />
            </div>
            <span className="font-serif font-bold text-xl tracking-wide text-[#38302A]">EduJurnal.</span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#38302A] mb-2">Selamat Datang</h2>
            <p className="text-[#8C8276]">Masuk untuk melanjutkan progres belajarmu.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8C8276] mb-2.5">Username / NIM</label>
              <div className="relative flex items-center group">
                <User className="w-5 h-5 text-[#A39B92] absolute left-4 group-focus-within:text-[#8B7355] transition-colors" />
                <input 
                  type="text" 
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Masukkan NIM atau Nama..." 
                  className="w-full bg-[#F9F8F6] border border-[#EBE6DF] rounded-2xl py-4 pl-12 pr-4 text-sm text-[#38302A] outline-none focus:border-[#8B7355] focus:bg-white transition-all shadow-sm focus:shadow-md placeholder:text-[#A39B92]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8C8276] mb-2.5">Password</label>
              <div className="relative flex items-center group">
                <Lock className="w-5 h-5 text-[#A39B92] absolute left-4 group-focus-within:text-[#8B7355] transition-colors" />
                <input 
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-[#F9F8F6] border border-[#EBE6DF] rounded-2xl py-4 pl-12 pr-4 text-sm text-[#38302A] outline-none focus:border-[#8B7355] focus:bg-white transition-all shadow-sm focus:shadow-md placeholder:text-[#A39B92]"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#38302A] hover:bg-[#60554A] text-white font-medium py-4 rounded-2xl transition-all shadow-lg shadow-[#38302A]/20 mt-4 text-sm tracking-wide flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>Masuk ke Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}