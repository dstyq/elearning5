'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Award, BookOpen, GraduationCap, Building2, Calendar, Edit2, Save, X, Camera } from 'lucide-react';

export default function ProfilPage() {
  const [username, setUsername] = useState('Hadisty');
  const [nim, setNim] = useState('1502623004');
  const [profilePic, setProfilePic] = useState<string | null>(null);
  
  const [totalXP, setTotalXP] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  
  const TOTAL_MODUL = 7;

  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState('');
  const [editNim, setEditNim] = useState('');
  const [editProfilePic, setEditProfilePic] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUsername(localStorage.getItem('session_username') || 'Hadisty');
    setNim(localStorage.getItem('session_nim') || '1502623004');
    setProfilePic(localStorage.getItem('session_profile_pic'));
    
    const progres = localStorage.getItem('progres_elearning_aesthetic');
    if (progres) {
      const listSelesai = JSON.parse(progres);
      const validCount = Math.min(listSelesai.length, TOTAL_MODUL);
      setCompletedCount(validCount);
      setTotalXP(validCount * 500);
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
    window.dispatchEvent(new Event('profilDiupdate'));
  };

  const persentaseSelesai = Math.round((completedCount / TOTAL_MODUL) * 100);

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans pt-10 pb-20 px-4 md:px-6 transition-colors duration-200">
      <main className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">
        
        {/* KARTU PROFIL UTAMA */}
        <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[2rem] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FFC700] p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
          
          <div className="relative mb-6">
            <div 
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FF6B9D] border-[4px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] overflow-hidden ${isEditing ? 'cursor-pointer hover:opacity-80' : ''} transition-all bg-white mx-auto`}
              onClick={() => isEditing && fileInputRef.current?.click()}
            >
              {(isEditing ? editProfilePic : profilePic) ? (
                <img src={(isEditing ? editProfilePic : profilePic) as string} alt="Foto Profil" className="w-full h-full object-cover" />
              ) : (
                <User className="w-16 h-16 text-black" />
              )}
            </div>
            
            {isEditing && (
              <div 
                className="absolute bottom-2 right-2 z-20 bg-[#FFC700] border-[3px] border-black p-2.5 rounded-full shadow-[2px_2px_0px_0px_#000] cursor-pointer hover:scale-110 transition-transform"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera size={18} className="text-black" />
              </div>
            )}
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
          </div>

          <div className="mb-6 w-full flex flex-col items-center">
            <span className="bg-[#4D96FF] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-[2px] border-black mb-4 inline-block">
              Mahasiswa Aktif - Semester 124
            </span>

            {isEditing ? (
              <div className="w-full max-w-sm mx-auto">
                <span className="block text-[10px] font-black uppercase tracking-wider mb-1 opacity-70">Edit Nama Lengkap</span>
                <input 
                  type="text" 
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  className="w-full bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] px-4 py-3 rounded-xl font-black text-2xl uppercase text-center text-black dark:text-[#F5F1E8] focus:outline-none focus:border-[#4D96FF]"
                />
              </div>
            ) : (
              <h1 className="font-black text-3xl md:text-4xl text-black dark:text-[#F5F1E8] uppercase tracking-tight break-words w-full">
                {username}
              </h1>
            )}
          </div>

          <div className="flex gap-3 justify-center w-full max-w-sm mx-auto">
            {!isEditing ? (
              <button 
                onClick={mulaiEdit}
                className="w-full flex justify-center items-center gap-2 bg-[#FFC700] border-[3px] border-black px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] transition-all"
              >
                <Edit2 size={16} /> Edit Profil
              </button>
            ) : (
              <>
                <button 
                  onClick={batalEdit}
                  className="w-1/3 flex justify-center items-center bg-white dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-3 rounded-xl font-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] transition-all"
                >
                  <X size={18} />
                </button>
                <button 
                  onClick={simpanProfil}
                  className="w-2/3 flex justify-center items-center gap-2 bg-[#6BCB77] border-[3px] border-black px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] transition-all"
                >
                  <Save size={16} /> Simpan
                </button>
              </>
            )}
          </div>
        </div>

        {/* DATA AKADEMIK (DIUBAH JADI LIST VERTIKAL BIAR 100% RAPI) */}
        <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[2rem] shadow-[8px_8px_0px_0px_#000] p-6 md:p-8">
          <h2 className="font-black uppercase text-lg mb-6 border-b-[3px] border-black dark:border-[#F5F1E8] pb-3 text-center md:text-left">
            Data Akademik
          </h2>
          
          <div className="flex flex-col gap-4">
            
            {/* NIM */}
            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#4D96FF] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Nomor Induk (NIM)</span>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={editNim}
                    onChange={(e) => setEditNim(e.target.value)}
                    className="w-full bg-transparent border-b-[2px] border-black dark:border-[#F5F1E8] font-black uppercase text-sm md:text-base text-black dark:text-white focus:outline-none focus:border-[#FF6B9D] px-1"
                  />
                ) : (
                  <span className="font-black uppercase text-sm md:text-base text-black dark:text-white">{nim}</span>
                )}
              </div>
            </div>

            {/* Prodi */}
            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#FFC700] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Program Studi</span>
                <span className="font-black uppercase text-sm md:text-base text-black dark:text-white line-clamp-1">Pendidikan Teknik Informatika dan Komputer</span>
              </div>
            </div>

            {/* Fakultas */}
            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#FF6B9D] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Fakultas</span>
                <span className="font-black uppercase text-sm md:text-base text-black dark:text-white line-clamp-1">Fakultas Teknik</span>
              </div>
            </div>

            {/* Universitas */}
            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#6BCB77] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Universitas</span>
                <span className="font-black uppercase text-sm md:text-base text-black dark:text-white line-clamp-1">Universitas Negeri Jakarta</span>
              </div>
            </div>

          </div>
        </div>

        {/* PENCAPAIAN (GRID 2 KOTAK) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          
          <div className="bg-[#FFC700] border-[4px] border-black rounded-[2rem] p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center text-center items-center">
            <div className="w-16 h-16 bg-white border-[3px] border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000] mb-4">
              <Award className="w-8 h-8 text-black" />
            </div>
            <p className="text-black text-[10px] font-black uppercase tracking-widest mb-1">Total XP Didapat</p>
            <p className="font-black text-4xl md:text-5xl text-black uppercase">
              {totalXP} <span className="text-xl">XP</span>
            </p>
          </div>

          <div className="bg-[#6BCB77] border-[4px] border-black rounded-[2rem] p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center text-center items-center">
            <div className="w-16 h-16 bg-white border-[3px] border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000] mb-4">
              <BookOpen className="w-8 h-8 text-black" />
            </div>
            <p className="text-black text-[10px] font-black uppercase tracking-widest mb-1">Modul Tuntas</p>
            <p className="font-black text-3xl md:text-4xl text-black uppercase mb-4">
              {completedCount} <span className="text-xl opacity-60">/ {TOTAL_MODUL}</span>
            </p>
            
            <div className="w-full bg-black/20 h-4 rounded-full border-[3px] border-black overflow-hidden relative">
              <div 
                className="bg-white h-full transition-all duration-1000 ease-out border-r-[3px] border-black"
                style={{ width: `${persentaseSelesai}%` }}
              ></div>
            </div>
            <p className="text-[10px] font-black uppercase mt-2 text-black tracking-wider">
              {persentaseSelesai}% Selesai
            </p>
          </div>
          
        </div>
      </main>
    </div>
  );
}