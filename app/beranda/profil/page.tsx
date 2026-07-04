'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Award, BookOpen, GraduationCap, Building2, Calendar, Star, Sparkles, Edit2, Save, X, Camera } from 'lucide-react';

export default function ProfilPage() {
  const [username, setUsername] = useState('Siswa');
  const [nim, setNim] = useState('1502623004');
  const [profilePic, setProfilePic] = useState<string | null>(null);
  
  const [totalXP, setTotalXP] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  // State buat ngatur mode edit
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState('');
  const [editNim, setEditNim] = useState('');
  const [editProfilePic, setEditProfilePic] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUsername(localStorage.getItem('session_username') || 'Siswa');
    setNim(localStorage.getItem('session_nim') || '1502623004');
    setProfilePic(localStorage.getItem('session_profile_pic'));
    
    const progres = localStorage.getItem('progres_elearning_aesthetic');
    if (progres) {
      const listSelesai = JSON.parse(progres);
      setCompletedCount(listSelesai.length);
      setTotalXP(listSelesai.length * 500);
    }
  }, []);

  const mulaiEdit = () => {
    setEditUsername(username);
    setEditNim(nim);
    setEditProfilePic(profilePic);
    setIsEditing(true);
  };

  const batalEdit = () => {
    setIsEditing(false);
  };

  // Fungsi buat ngubah gambar jadi teks (Base64) biar gampang disimpen di lokal
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const simpanProfil = () => {
    setUsername(editUsername);
    setNim(editNim);
    setProfilePic(editProfilePic);
    
    localStorage.setItem('session_username', editUsername);
    localStorage.setItem('session_nim', editNim);
    if (editProfilePic) {
      localStorage.setItem('session_profile_pic', editProfilePic);
    }

    setIsEditing(false);

    // KASIH SINYAL KE NAVBAR BIAR DIA REFRESH OTOMATIS
    window.dispatchEvent(new Event('profilDiupdate'));
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans pt-10 pb-20 px-6 transition-colors duration-200">
      <main className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
        
        {/* KARTU IDENTITAS UTAMA */}
        <div className="relative bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[28px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FFC700] mb-10 overflow-hidden">
          
          {/* Tombol Edit / Simpan di Pojok Kanan Atas */}
          <div className="absolute top-6 right-6 z-20 flex gap-2">
            {!isEditing ? (
              <button 
                onClick={mulaiEdit}
                className="flex items-center gap-2 bg-[#FFC700] border-[3px] border-black px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
              >
                <Edit2 size={14} /> Edit
              </button>
            ) : (
              <>
                <button 
                  onClick={batalEdit}
                  className="flex items-center gap-2 bg-white dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
                >
                  <X size={14} /> Batal
                </button>
                <button 
                  onClick={simpanProfil}
                  className="flex items-center gap-2 bg-[#6BCB77] border-[3px] border-black px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
                >
                  <Save size={14} /> Simpan
                </button>
              </>
            )}
          </div>

          <Star className="w-12 h-12 text-[#F5F1E8] dark:text-[#17151C] fill-current absolute top-6 right-32 rotate-12" />
          <Sparkles className="w-20 h-20 text-[#F5F1E8] dark:text-[#17151C] absolute -bottom-4 -left-4 -rotate-12" />

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left relative z-10 mt-6 md:mt-0">
            
            {/* Avatar Lingkaran (Bisa di-klik pas mode edit) */}
            <div className="relative shrink-0">
              <div 
                className={`relative w-28 h-28 rounded-full bg-[#FF6B9D] border-[4px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] rotate-[-4deg] overflow-hidden ${isEditing ? 'cursor-pointer hover:opacity-80' : 'group hover:rotate-12 hover:scale-105'} transition-all`}
                onClick={() => isEditing && fileInputRef.current?.click()}
              >
                {(isEditing ? editProfilePic : profilePic) ? (
                  <img src={(isEditing ? editProfilePic : profilePic) as string} alt="Foto Profil" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-black z-10" />
                )}
              </div>
              
              {/* Badge Camera Muncul Pas Mode Edit */}
              {isEditing && (
                <div 
                  className="absolute -bottom-2 -right-2 z-20 bg-[#FFC700] border-[3px] border-black p-2 rounded-full shadow-[2px_2px_0px_0px_#000] cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Camera size={16} className="text-black" />
                </div>
              )}
              {/* Input file disembunyiin */}
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
            </div>

            {/* Info Utama Mahasiswa */}
            <div className="flex-1 space-y-3 w-full">
              <span className="inline-block bg-black text-[#FFC700] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full rotate-1 border-[2px] border-transparent">
                Kartu Identitas Digital
              </span>
              
              {/* Input Nama (Tampil kalau lagi mode edit) */}
              {isEditing ? (
                <div className="w-full">
                  <span className="block text-[10px] font-black uppercase tracking-wider mb-1 opacity-70">Nama Lengkap</span>
                  <input 
                    type="text" 
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value)}
                    className="w-full md:w-3/4 bg-white dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] px-4 py-2 rounded-xl font-black text-2xl uppercase tracking-tight text-black dark:text-[#F5F1E8] focus:outline-none focus:border-[#4D96FF] focus:shadow-[4px_4px_0px_0px_#4D96FF] transition-all"
                  />
                </div>
              ) : (
                <h1 className="font-black text-4xl md:text-5xl text-black dark:text-[#F5F1E8] uppercase tracking-tight break-words">
                  {username}
                </h1>
              )}
              
              {/* Grid Detail Identitas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 w-full">
                
                {/* NIM (Bisa diedit) */}
                <div className="flex items-center gap-3 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-3 rounded-2xl shadow-[3px_3px_0px_0px_#000]">
                  <div className="bg-[#4D96FF] p-2 rounded-xl border-[2px] border-black shrink-0">
                    <GraduationCap className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden w-full">
                    <span className="text-[9px] font-black uppercase tracking-wider opacity-60">Nomor Induk</span>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editNim}
                        onChange={(e) => setEditNim(e.target.value)}
                        className="w-full bg-transparent border-b-[2px] border-black dark:border-[#F5F1E8] font-bold uppercase text-black dark:text-white focus:outline-none focus:border-[#FF6B9D]"
                      />
                    ) : (
                      <span className="text-black dark:text-white font-bold uppercase truncate">{nim}</span>
                    )}
                  </div>
                </div>

                {/* Prodi */}
                <div className="flex items-center gap-3 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-3 rounded-2xl shadow-[3px_3px_0px_0px_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <div className="bg-[#FFC700] p-2 rounded-xl border-[2px] border-black shrink-0">
                    <BookOpen className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-[9px] font-black uppercase tracking-wider opacity-60">Program Studi</span>
                    <span className="text-black dark:text-white font-bold uppercase truncate text-[11px] leading-tight">Pend. Teknik Informatika</span>
                  </div>
                </div>

                {/* Fakultas */}
                <div className="flex items-center gap-3 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-3 rounded-2xl shadow-[3px_3px_0px_0px_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <div className="bg-[#FF6B9D] p-2 rounded-xl border-[2px] border-black shrink-0">
                    <Building2 className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-[9px] font-black uppercase tracking-wider opacity-60">Fakultas</span>
                    <span className="text-black dark:text-white font-bold uppercase truncate">Fakultas Teknik</span>
                  </div>
                </div>

                {/* Universitas */}
                <div className="flex items-center gap-3 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-3 rounded-2xl shadow-[3px_3px_0px_0px_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <div className="bg-[#6BCB77] p-2 rounded-xl border-[2px] border-black shrink-0">
                    <Calendar className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-[9px] font-black uppercase tracking-wider opacity-60">Universitas</span>
                    <span className="text-black dark:text-white font-bold uppercase truncate">Univ. Negeri Jakarta</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* GRID STATISTIK PENCAPAIAN */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          
          <div className="bg-[#FFC700] border-[4px] border-black rounded-[24px] p-6 md:p-8 flex items-center gap-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0px_0px_#000] transition-all">
            <div className="p-4 bg-white border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_#000] rotate-[-8deg]">
              <Award className="w-8 h-8 text-black" />
            </div>
            <div>
              <p className="text-black/80 text-[10px] font-black uppercase tracking-widest mb-1">
                Total Skor
              </p>
              <p className="font-black text-4xl text-black uppercase">
                {totalXP} <span className="text-sm">XP</span>
              </p>
            </div>
          </div>

          <div className="bg-[#6BCB77] border-[4px] border-black rounded-[24px] p-6 md:p-8 flex items-center gap-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0px_0px_#000] transition-all">
            <div className="p-4 bg-white border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_#000] rotate-[8deg]">
              <BookOpen className="w-8 h-8 text-black" />
            </div>
            <div>
              <p className="text-black/80 text-[10px] font-black uppercase tracking-widest mb-1">
                Modul Diselesaikan
              </p>
              <p className="font-black text-4xl text-black uppercase">
                {completedCount} <span className="text-sm">/ 3</span>
              </p>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}