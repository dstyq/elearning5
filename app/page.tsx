'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, User, Lock, ArrowRight, Sparkles, AlertCircle, KeyRound, Mail, UserPlus, LogIn, Copy, Check, Terminal } from 'lucide-react';
import { supabase } from './supabaseClient';
import bcrypt from 'bcryptjs';

type AuthMode = 'login' | 'register';
type UserRole = 'mahasiswa' | 'siswa_sekolah' | 'admin';

export default function PintuMasuk() {
  const [mode, setMode] = useState<AuthMode>('login');

  // State Register
  const [regRole, setRegRole] = useState<UserRole>('mahasiswa');
  const [regNama, setRegNama] = useState('');
  const [regId, setRegId] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regProdi, setRegProdi] = useState('');
  const [ regUniv, setRegUniv ] = useState('');

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
  }, []);

  const handleCopyToken = () => {
    if (generatedToken) {
      navigator.clipboard.writeText(generatedToken);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // FUNGSI DAFTAR AKUN — sekarang pakai Supabase
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors('');
    setSuccessMsg('');
    setGeneratedToken('');
    setIsCopied(false);

    if (!regNama || !regId || !regPass) {
      setErrors('Oops, jangan ada form yang dikosongin ya!');
      return;
    }

    if (regPass.length < 6) {
      setErrors('Biar aman, bikin password minimal 6 karakter.');
      return;
    }

    setIsSubmitting(true);

    const { data: existing, error: checkError } = await supabase
      .from('users')
      .select('id')
      .eq('identitas', regId.trim())
      .maybeSingle();

    if (checkError) {
      setIsSubmitting(false);
      setErrors('Gagal memeriksa data ke server. Coba lagi ya.');
      return;
    }

    if (existing) {
      setIsSubmitting(false);
      setErrors('NIM atau Email ini udah terdaftar di sistem.');
      return;
    }

    const tokenResult = regRole === 'siswa_sekolah'
      ? `TKN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      : null;

    // Hash password sebelum disimpan ke Supabase
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(regPass, salt);

    const { error: insertError } = await supabase.from('users').insert({
      nama: regNama,
      role: regRole,
      identitas: regId.trim(),
      password: hashedPassword,
      token: tokenResult,
    });

    setIsSubmitting(false);

    if (insertError) {
      setErrors('Gagal membuat akun, coba lagi ya. (' + insertError.message + ')');
      return;
    }

    if (regRole === 'siswa_sekolah' && tokenResult) {
      setGeneratedToken(tokenResult);
      setSuccessMsg('Akun berhasil dibuat! Ini Token rahasia kamu. Salin dan simpan baik-baik ya sebelum login.');
    } else {
      setSuccessMsg('Akun Mahasiswa berhasil dibuat! Langsung aja login pakai NIM kamu.');
    }

    setRegNama('');
    setRegId('');
    setRegPass('');
  };

  // FUNGSI LOGIN — sekarang pakai Supabase
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors('');

    const cleanId = loginId.trim().toLowerCase();
    const cleanPass = loginPass.trim().toLowerCase();

    // Admin tetap hardcoded, tidak lewat Supabase
    if (cleanId === 'admin' && cleanPass === 'admin') {
      setIsSubmitting(true);
      localStorage.setItem('session_login', 'true');
      localStorage.setItem('session_username', 'Admin Kelompok 5');
      localStorage.setItem('session_nim', 'ADMIN-K5');
      localStorage.setItem('session_role', 'admin');
      router.push('/beranda');
      return;
    }

    if (!loginId || !loginPass) {
      setErrors('Masukkan NIM/Token dan password-nya dulu!');
      return;
    }

    setIsSubmitting(true);

    const idTrimmed = loginId.trim();

    const { data: candidate, error } = await supabase
      .from('users')
      .select('*')
      .or(`identitas.eq.${idTrimmed},token.eq.${idTrimmed}`)
      .maybeSingle();

    if (error || !candidate) {
      setIsSubmitting(false);
      setErrors('Hmm, NIM/Token atau password salah. Coba dicek lagi ya.');
      return;
    }

    // Bandingkan password yang diketik dengan hash yang tersimpan
    const passwordMatches = await bcrypt.compare(loginPass, candidate.password);

    setIsSubmitting(false);

    if (!passwordMatches) {
      setErrors('Hmm, NIM/Token atau password salah. Coba dicek lagi ya.');
      return;
    }

    localStorage.setItem('session_login', 'true');
    localStorage.setItem('session_username', candidate.nama);
    localStorage.setItem(
      'session_nim',
      candidate.role === 'mahasiswa' ? candidate.identitas : candidate.token
    );
    localStorage.setItem('session_role', candidate.role);
    router.push('/beranda');
  };

  if (!mounted) return null;

  return (
        <div className="min-h-screen text-black dark:text-[#F5F1E8] font-sans flex bg-[#F5F1E8] dark:bg-[#17151C] selection:bg-[#FFC700] selection:text-black transition-colors duration-200">
      
      {/* SISI KIRI: BRANDING */}
      <div className="hidden lg:flex w-1/2 bg-[#4D96FF] p-12 flex-col justify-between border-r-[4px] border-black relative overflow-hidden">
        <div className="absolute top-8 right-8 bg-[#FFC700] border-[3px] border-black rounded-full w-16 h-16 flex items-center justify-center rotate-12">
          <Sparkles className="w-7 h-7 text-black" />
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-black p-2.5 rounded-xl border-[3px] border-white">
            <Terminal className="w-6 h-6 text-[#FFC700]" />
          </div>
          <span className="font-black text-2xl tracking-tight text-black uppercase">CodeV.</span>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="font-black text-5xl leading-[1.05] text-black uppercase mb-6">
            Code <br/>
            <span className="bg-[#FFC700] px-2 -rotate-1 inline-block border-[3px] border-black">
              Learn, Grow.
            </span>
          </h1>
          <p className="text-black/80 text-lg leading-relaxed font-bold mb-8">
            Platform e-learning pemrograman yang dirancang untuk siswa dan mahasiswa mempelajari konsep coding melalui materi terstruktur dan kuis interaktif.
          </p>
          <div className="flex items-center gap-4 text-sm font-black text-black bg-white px-5 py-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] inline-flex">
            <div className="w-8 h-8 rounded-full bg-[#6BCB77] flex items-center justify-center border-[2px] border-black text-xs font-black text-black">K5</div>
            <p>by Kelompok 5</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-20 bg-[#F5F1E8] dark:bg-[#17151C] relative">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-6 duration-500">
          
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="bg-black p-2 rounded-xl border-[3px] border-white dark:border-black">
              <Terminal className="w-5 h-5 text-[#FFC700]" />
            </div>
            <span className="font-black text-xl tracking-tight text-black dark:text-[#F5F1E8] uppercase">CodeV.</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-black dark:text-[#F5F1E8] mb-2 uppercase tracking-tight">
              {mode === 'login' ? 'Masuk ke CodeV' : 'Mulai Perjalananmu'}
            </h2>
            <p className="text-sm font-bold text-black/60 dark:text-[#F5F1E8]/60">
              {mode === 'login' ? 'Lanjutkan progres coding dan selesaikan modulmu hari ini.' : 'Daftar akun sekarang buat akses semua materi pemrograman.'}
            </p>
          </div>

          {/* TAB SWITCHER */}
          <div className="grid grid-cols-2 p-1.5 gap-1.5 bg-white dark:bg-[#1E1B24] rounded-xl border-[3px] border-black dark:border-[#F5F1E8] mb-8">
            <button
              onClick={() => { setMode('login'); setErrors(''); setSuccessMsg(''); setGeneratedToken(''); }}
              className={`py-2.5 flex justify-center items-center gap-2 text-xs font-black uppercase rounded-lg transition-all border-[3px] ${mode === 'login' ? 'bg-[#FFC700] text-black border-black shadow-[3px_3px_0px_0px_#000]' : 'text-black/60 dark:text-[#F5F1E8]/60 border-transparent hover:text-black dark:hover:text-[#F5F1E8]'}`}
            >
              <LogIn className="w-4 h-4" /> Masuk
            </button>
            <button
              onClick={() => { setMode('register'); setErrors(''); setSuccessMsg(''); setGeneratedToken(''); }}
              className={`py-2.5 flex justify-center items-center gap-2 text-xs font-black uppercase rounded-lg transition-all border-[3px] ${mode === 'register' ? 'bg-[#FFC700] text-black border-black shadow-[3px_3px_0px_0px_#000]' : 'text-black/60 dark:text-[#F5F1E8]/60 border-transparent hover:text-black dark:hover:text-[#F5F1E8]'}`}
            >
              <UserPlus className="w-4 h-4" /> Daftar Akun
            </button>
          </div>

          {/* ERROR BOX */}
          {errors && (
            <div className="mb-6 p-4 bg-[#FF6B6B] border-[3px] border-black text-black rounded-xl text-sm font-bold flex gap-3 items-start animate-in zoom-in-95 shadow-[4px_4px_0px_0px_#000]">
              <AlertCircle className="w-5 h-5 shrink-0" /> {errors}
            </div>
          )}

          {/* SUCCESS & TOKEN DISPLAY BOX */}
          {successMsg && (
            <div className="mb-6 p-5 bg-[#6BCB77] border-[3px] border-black text-black rounded-2xl text-sm font-bold space-y-4 animate-in zoom-in-95 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex gap-3 items-start">
                <Sparkles className="w-5 h-5 shrink-0 mt-0.5" /> 
                <p className="leading-relaxed">{successMsg}</p>
              </div>
              
              {/* Box Tampilan Token Spesifik dengan Tombol Salin */}
              {generatedToken && (
                <div className="bg-white border-[3px] border-black rounded-xl p-3 flex items-center justify-between animate-in fade-in duration-500">
                  <div className="font-mono text-base font-black tracking-wider text-black px-2 select-all">
                    {generatedToken}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyToken}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase border-[2px] border-black transition-all ${isCopied ? 'bg-black text-[#6BCB77]' : 'bg-[#FFC700] text-black hover:shadow-[2px_2px_0px_0px_#000]'}`}
                  >
                    {isCopied ? (
                      <><Check className="w-3.5 h-3.5" /> Tersalin!</>
                    ) : (
                      <><Copy className="w-3.5 h-3.5" /> Salin</>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* FORM LOGIN */}
          {mode === 'login' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-[#F5F1E8]/60 mb-2">NIM / Token Akses</label>
                  <div className="relative flex items-center">
                    <User className="w-5 h-5 text-black/50 dark:text-[#F5F1E8]/50 absolute left-4" />
                    <input 
                      type="text" 
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                      placeholder="Masukkan NIM, Token, atau 'admin'..." 
                      className="w-full bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] focus:border-[#4D96FF] dark:focus:border-[#4D96FF] rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-black dark:text-[#F5F1E8] outline-none transition-all placeholder:text-black/40 dark:placeholder:text-[#F5F1E8]/40"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-[#F5F1E8]/60 mb-2">Password</label>
                  <div className="relative flex items-center">
                    <Lock className="w-5 h-5 text-black/50 dark:text-[#F5F1E8]/50 absolute left-4" />
                    <input 
                      type="password" 
                      value={loginPass}
                      onChange={(e) => setLoginPass(e.target.value)}
                      placeholder="••••••••" 
                      className="w-full bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] focus:border-[#4D96FF] dark:focus:border-[#4D96FF] rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-black dark:text-[#F5F1E8] outline-none transition-all placeholder:text-black/40 dark:placeholder:text-[#F5F1E8]/40"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4D96FF] text-black font-black py-4 rounded-xl transition-all border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 mt-4 text-sm uppercase tracking-wide flex items-center justify-center gap-3 disabled:opacity-60 disabled:hover:shadow-[5px_5px_0px_0px_#000] disabled:hover:translate-x-0 disabled:hover:translate-y-0 group"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>Masuk ke CodeV <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* FORM REGISTER */}
          {mode === 'register' && (
            <form onSubmit={handleRegister} className="space-y-4 animate-in fade-in duration-300">
              <div className="flex gap-2 p-1.5 bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] rounded-xl">
                <label className={`flex-1 flex items-center justify-center gap-2 cursor-pointer py-2.5 rounded-lg border-[3px] transition-all ${regRole === 'mahasiswa' ? 'bg-[#FFC700] border-black' : 'border-transparent'}`}>
                  <input type="radio" checked={regRole === 'mahasiswa'} onChange={() => setRegRole('mahasiswa')} className="accent-black w-4 h-4" />
                  <span className="text-sm font-black uppercase text-black dark:text-[#F5F1E8]">Mahasiswa</span>
                </label>
                <label className={`flex-1 flex items-center justify-center gap-2 cursor-pointer py-2.5 rounded-lg border-[3px] transition-all ${regRole === 'siswa_sekolah' ? 'bg-[#FFC700] border-black' : 'border-transparent'}`}>
                  <input type="radio" checked={regRole === 'siswa_sekolah'} onChange={() => setRegRole('siswa_sekolah')} className="accent-black w-4 h-4" />
                  <span className="text-sm font-black uppercase text-black dark:text-[#F5F1E8]">Siswa / Umum</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-[#F5F1E8]/60 mb-1.5">Nama Lengkap</label>
                <div className="relative flex items-center">
                  <User className="w-5 h-5 text-black/50 dark:text-[#F5F1E8]/50 absolute left-4" />
                  <input type="text" value={regNama} onChange={(e) => setRegNama(e.target.value)} placeholder="Ketik nama lengkapmu..." className="w-full bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] focus:border-[#FF6B9D] rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-black dark:text-[#F5F1E8] outline-none transition-all placeholder:text-black/40 dark:placeholder:text-[#F5F1E8]/40" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-[#F5F1E8]/60 mb-1.5">{regRole === 'mahasiswa' ? 'NIM Mahasiswa' : 'Alamat Email'}</label>
                <div className="relative flex items-center">
                  {regRole === 'mahasiswa' ? <BookOpen className="w-5 h-5 text-black/50 dark:text-[#F5F1E8]/50 absolute left-4" /> : <Mail className="w-5 h-5 text-black/50 dark:text-[#F5F1E8]/50 absolute left-4" />}
                  <input type={regRole === 'mahasiswa' ? 'number' : 'email'} value={regId} onChange={(e) => setRegId(e.target.value)} placeholder={regRole === 'mahasiswa' ? 'Contoh: 150262...' : 'Email aktif kamu...'} className="w-full bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] focus:border-[#FF6B9D] rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-black dark:text-[#F5F1E8] outline-none transition-all placeholder:text-black/40 dark:placeholder:text-[#F5F1E8]/40" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-black/60 dark:text-[#F5F1E8]/60 mb-1.5">Buat Password</label>
                <div className="relative flex items-center">
                  <KeyRound className="w-5 h-5 text-black/50 dark:text-[#F5F1E8]/50 absolute left-4" />
                  <input type="password" value={regPass} onChange={(e) => setRegPass(e.target.value)} placeholder="Minimal 6 karakter..." className="w-full bg-white dark:bg-[#1E1B24] border-[3px] border-black dark:border-[#F5F1E8] focus:border-[#FF6B9D] rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-black dark:text-[#F5F1E8] outline-none transition-all placeholder:text-black/40 dark:placeholder:text-[#F5F1E8]/40" required />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6B9D] text-black font-black py-3.5 rounded-xl transition-all border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 mt-2 text-sm uppercase tracking-wide flex items-center justify-center gap-3 disabled:opacity-60 disabled:hover:shadow-[5px_5px_0px_0px_#000] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                ) : "Daftar Sekarang"}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}