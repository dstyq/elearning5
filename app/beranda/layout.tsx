'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, User, Lock, ArrowRight, Sparkles, AlertCircle, KeyRound, Mail, UserPlus, LogIn, Copy, Check } from 'lucide-react';

type AuthMode = 'login' | 'register';
type UserRole = 'mahasiswa' | 'siswa_sekolah';

export default function PintuMasuk() {
  const [mode, setMode] = useState<AuthMode>('login');
  
  // State Register
  const [regRole, setRegRole] = useState<UserRole>('mahasiswa');
  const [regNama, setRegNama] = useState('');
  const [regId, setRegId] = useState(''); 
  const [regPass, setRegPass] = useState('');
  
  // State Login
  const [loginId, setLoginId] = useState(''); 
  const [loginPass, setLoginPass] = useState('');

  // State Global
  const [errors, setErrors] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [generatedToken, setGeneratedToken] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem('session_login') === 'true') {
      router.push('/beranda');
    }
    if (!localStorage.getItem('db_users')) {
      localStorage.setItem('db_users', JSON.stringify([]));
    }
  }, [router]);

  const handleCopyToken = () => {
    if (generatedToken) {
      navigator.clipboard.writeText(generatedToken);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors('');
    setSuccessMsg('');
    setGeneratedToken('');
    setIsCopied(false);

    if (!regNama || !regId || !regPass) {
      setErrors('Eits, jangan ada yang dikosongin ya!');
      return;
    }

    if (regPass.length < 6) {
      setErrors('Password-nya minimal 6 karakter dong biar aman.');
      return;
    }

    const usersDB = JSON.parse(localStorage.getItem('db_users') || '[]');
    
    const isExist = usersDB.find((u: any) => u.identitas === regId);
    if (isExist) {
      setErrors('Oops, NIM/Email ini udah pernah dipakai daftar.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const tokenResult = regRole === 'siswa_sekolah' 
        ? `TKN-${Math.random().toString(36).substring(2, 8).toUpperCase()}` 
        : null;

      const newUser = {
        nama: regNama,
        role: regRole,
        identitas: regId, 
        password: regPass,
        token: tokenResult 
      };

      usersDB.push(newUser);
      localStorage.setItem('db_users', JSON.stringify(usersDB));

      setIsSubmitting(false);
      
      if (regRole === 'siswa_sekolah' && tokenResult) {
        setGeneratedToken(tokenResult);
        setSuccessMsg(`Yeay, akun berhasil dibuat! Ini Token kamu.`);
      } else {
        setSuccessMsg('Yey, akun udah aktif!');
      }
      
      setRegNama(''); setRegId(''); setRegPass('');
    }, 800);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors('');

    if (!loginId || !loginPass) {
      setErrors('Tulis dulu dong NIM dan Password-nya!');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const usersDB = JSON.parse(localStorage.getItem('db_users') || '[]');
      
      const validUser = usersDB.find((u: any) => 
        (u.identitas === loginId || u.token === loginId) && u.password === loginPass
      );

      if (validUser) {
        localStorage.setItem('session_login', 'true');
        localStorage.setItem('session_username', validUser.nama);
        localStorage.setItem('session_nim', validUser.role === 'mahasiswa' ? validUser.identitas : validUser.token);
        localStorage.setItem('session_role', validUser.role);
        router.push('/beranda');
      } else {
        setIsSubmitting(false);
        setErrors('Yah, NIM/Token atau Password salah nih. Coba dicek lagi.');
      }
    }, 800);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-[#4A4036] font-sans flex selection:bg-[#E3DAC9]">
      
      {/* SISI KIRI: BRANDING */}
      <div className="hidden lg:flex w-1/2 bg-[#F9F8F6] p-12 flex-col justify-between border-r border-[#EBE6DF] relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E3DAC9] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D4C3A3] rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-[#38302A] p-2.5 rounded-xl shadow-md">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="font-serif font-bold text-2xl tracking-wide text-[#38302A]">CodeV.</span>
        </div>

        <div className="relative z-10 max-w-md">
          <Sparkles className="w-8 h-8 text-[#8B7355] mb-6" />
          <h1 className="font-serif text-5xl font-bold leading-tight text-[#38302A] mb-6">
            Belajar Ngoding, <br/> <span className="text-[#8B7355] italic">Makin Asik.</span>
          </h1>
          <p className="text-[#8C8276] text-lg leading-relaxed mb-8">
            Platform belajar yang dibikin khusus buat anak PTIK dan anak sekolah yang pengen belajar dari nol tanpa pusing.
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-[#60554A] bg-white px-5 py-3 rounded-2xl border border-[#EBE6DF] shadow-sm inline-flex">
            <div className="w-8 h-8 rounded-full bg-[#EAF0E6] flex items-center justify-center border border-[#C4B7A6] text-xs font-bold text-[#6B8E5C]">K5</div>
            <p>Made with ❤️ by Kelompok 5</p>
          </div>
        </div>
      </div>

      {/* SISI KANAN: FORM AUTENTIKASI */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-20 bg-white relative">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-6 duration-500">
          
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="bg-[#38302A] p-2 rounded-xl">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-bold text-xl tracking-wide text-[#38302A]">EduJurnal.</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#38302A] mb-2 tracking-tight">
              {mode === 'login' ? 'Masuk Dulu, Yuk' : 'Bikin Akun Baru'}
            </h2>
            <p className="text-sm text-[#8C8276]">
              {mode === 'login' ? 'Masukin akun yang udah kamu bikin sebelumnya.' : 'Belum punya akun? Bikin dulu, gampang kok.'}
            </p>
          </div>

          {/* TAB SWITCHER */}
          <div className="grid grid-cols-2 p-1 bg-[#F9F8F6] rounded-xl border border-[#EBE6DF] mb-8">
            <button
              onClick={() => { setMode('login'); setErrors(''); setSuccessMsg(''); setGeneratedToken(''); }}
              className={`py-2.5 flex justify-center items-center gap-2 text-xs font-bold rounded-lg transition-all ${mode === 'login' ? 'bg-white text-[#38302A] shadow-sm border border-[#EBE6DF]' : 'text-[#8C8276] hover:text-[#38302A]'}`}
            >
              <LogIn className="w-4 h-4" /> Masuk
            </button>
            <button
              onClick={() => { setMode('register'); setErrors(''); setSuccessMsg(''); setGeneratedToken(''); }}
              className={`py-2.5 flex justify-center items-center gap-2 text-xs font-bold rounded-lg transition-all ${mode === 'register' ? 'bg-white text-[#38302A] shadow-sm border border-[#EBE6DF]' : 'text-[#8C8276] hover:text-[#38302A]'}`}
            >
              <UserPlus className="w-4 h-4" /> Daftar Akun
            </button>
          </div>

          {/* ERROR BOX */}
          {errors && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium flex gap-3 items-start animate-in zoom-in-95">
              <AlertCircle className="w-5 h-5 shrink-0" /> {errors}
            </div>
          )}

          {/* SUCCESS & TOKEN DISPLAY BOX */}
          {successMsg && (
            <div className="mb-6 p-5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm font-medium space-y-4 animate-in zoom-in-95">
              <div className="flex gap-3 items-start">
                <Sparkles className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" /> 
                <p className="leading-relaxed">{successMsg}</p>
              </div>
              
              {generatedToken && (
                <div className="bg-white border border-emerald-200 rounded-xl p-3 flex items-center justify-between shadow-sm animate-in fade-in duration-500">
                  <div className="font-mono text-base font-bold tracking-wider text-[#38302A] px-2 select-all">
                    {generatedToken}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyToken}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${isCopied ? 'bg-emerald-600 text-white' : 'bg-[#F4F1EA] text-[#4A4036] hover:bg-[#EBE6DF]'}`}
                  >
                    {isCopied ? (
                      <><Check className="w-3.5 h-3.5" /> Berhasil!</>
                    ) : (
                      <><Copy className="w-3.5 h-3.5" /> Copy</>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* FORM LOGIN */}
          {mode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-5 animate-in fade-in duration-300">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8C8276] mb-2">NIM / Token Belajar</label>
                <div className="relative flex items-center">
                  <User className="w-5 h-5 text-[#A39B92] absolute left-4" />
                  <input 
                    type="text" 
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="Ketik NIM atau Token kamu di sini..." 
                    className="w-full bg-[#F9F8F6] border border-[#EBE6DF] focus:border-[#8B7355] focus:bg-white rounded-2xl py-3.5 pl-12 pr-4 text-sm text-[#38302A] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8C8276] mb-2">Password</label>
                <div className="relative flex items-center">
                  <Lock className="w-5 h-5 text-[#A39B92] absolute left-4" />
                  <input 
                    type="password" 
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    placeholder="••••••••" 
                    className="w-full bg-[#F9F8F6] border border-[#EBE6DF] focus:border-[#8B7355] focus:bg-white rounded-2xl py-3.5 pl-12 pr-4 text-sm text-[#38302A] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#38302A] hover:bg-[#60554A] text-white font-bold py-4 rounded-2xl transition-all shadow-md mt-4 text-sm tracking-wide flex items-center justify-center gap-3 disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>Masuk Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          )}

          {/* FORM REGISTER */}
          {mode === 'register' && (
            <form onSubmit={handleRegister} className="space-y-4 animate-in fade-in duration-300">
              <div className="flex gap-4 p-3 bg-[#F9F8F6] border border-[#EBE6DF] rounded-2xl">
                <label className="flex-1 flex items-center gap-2 cursor-pointer">
                  <input type="radio" checked={regRole === 'mahasiswa'} onChange={() => setRegRole('mahasiswa')} className="accent-[#8B7355] w-4 h-4" />
                  <span className="text-sm font-bold text-[#38302A]">Mahasiswa PTIK</span>
                </label>
                <label className="flex-1 flex items-center gap-2 cursor-pointer">
                  <input type="radio" checked={regRole === 'siswa_sekolah'} onChange={() => setRegRole('siswa_sekolah')} className="accent-[#8B7355] w-4 h-4" />
                  <span className="text-sm font-bold text-[#38302A]">Pelajar Umum</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8C8276] mb-1.5">Nama Panggilan / Lengkap</label>
                <div className="relative flex items-center">
                  <User className="w-5 h-5 text-[#A39B92] absolute left-4" />
                  <input type="text" value={regNama} onChange={(e) => setRegNama(e.target.value)} placeholder="Nama kamu..." className="w-full bg-white border border-[#EBE6DF] focus:border-[#8B7355] rounded-xl py-3 pl-12 pr-4 text-sm text-[#38302A] outline-none transition-all shadow-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8C8276] mb-1.5">{regRole === 'mahasiswa' ? 'NIM Mahasiswa' : 'Alamat Email'}</label>
                <div className="relative flex items-center">
                  {regRole === 'mahasiswa' ? <BookOpen className="w-5 h-5 text-[#A39B92] absolute left-4" /> : <Mail className="w-5 h-5 text-[#A39B92] absolute left-4" />}
                  <input type={regRole === 'mahasiswa' ? 'number' : 'email'} value={regId} onChange={(e) => setRegId(e.target.value)} placeholder={regRole === 'mahasiswa' ? 'Contoh: 150262...' : 'Email aktif kamu...'} className="w-full bg-white border border-[#EBE6DF] focus:border-[#8B7355] rounded-xl py-3 pl-12 pr-4 text-sm text-[#38302A] outline-none transition-all shadow-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8C8276] mb-1.5">Bikin Password Baru</label>
                <div className="relative flex items-center">
                  <KeyRound className="w-5 h-5 text-[#A39B92] absolute left-4" />
                  <input type="password" value={regPass} onChange={(e) => setRegPass(e.target.value)} placeholder="Bikin password minimal 6 huruf..." className="w-full bg-white border border-[#EBE6DF] focus:border-[#8B7355] rounded-xl py-3 pl-12 pr-4 text-sm text-[#38302A] outline-none transition-all shadow-sm" />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B7355] hover:bg-[#60554A] text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-2 text-sm tracking-wide flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : "Bikin Akun Sekarang"}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}