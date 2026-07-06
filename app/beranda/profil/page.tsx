'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Award, BookOpen, GraduationCap, Building2, Calendar, Edit2, Save, X, Camera, Loader2 } from 'lucide-react';
import { supabase } from '@/app/supabaseClient';

const BUCKET_NAME = 'Profile Pictures';

export default function ProfilPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState('Hadisty');
  const [nim, setNim] = useState('1502623004');
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [prodi, setProdi] = useState('');
  const [univ, setUniv] = useState('');
  const [fakultas, setFakultas] = useState('');

  const [totalXP, setTotalXP] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const TOTAL_MODUL = 7;

  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingPic, setIsUploadingPic] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [editUsername, setEditUsername] = useState('');
  const [editNim, setEditNim] = useState('');
  const [editProfilePic, setEditProfilePic] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadProfil = async () => {
      const sessionNim = localStorage.getItem('session_nim');
      const sessionRole = localStorage.getItem('session_role');

      if (sessionRole === 'admin') {
        setUsername(localStorage.getItem('session_username') || 'Admin');
        setNim(sessionNim || 'ADMIN-K5');
        setProfilePic(localStorage.getItem('session_profile_pic'));
        setIsLoading(false);
        return;
      }

      if (!sessionNim) {
        setUsername(localStorage.getItem('session_username') || 'Hadisty');
        setNim('1502623004');
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('users')
        .select('id, nama, identitas, token, role, prodi, universitas, fakultas')
        .or(`identitas.eq.${sessionNim},token.eq.${sessionNim}`)
        .maybeSingle();

      if (error || !data) {
        setErrorMsg('Gagal memuat data profil dari server.');
        setUsername(localStorage.getItem('session_username') || 'Hadisty');
        setNim(sessionNim);
        setIsLoading(false);
        return;
      }

      setUserId(data.id);
      setUsername(data.nama);
      setNim(data.role === 'mahasiswa' ? data.identitas : (data.token || data.identitas));
      setProdi(data.prodi);
      setUniv(data.universitas);
      setFakultas(data.fakultas);
      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(`${data.id}.png`);
      setProfilePic(`${publicUrlData.publicUrl}?t=${Date.now()}`);
      setIsLoading(false);
    };

    loadProfil();

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
    setErrorMsg('');
    setIsEditing(true);
  };

  const batalEdit = () => {
    setIsEditing(false);
    setErrorMsg('');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('File harus berupa gambar.');
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setErrorMsg('Ukuran gambar maksimal 3MB ya.');
      return;
    }

    setErrorMsg('');
    setIsUploadingPic(true);

    // Directly uses the userId as the filename at the root of the bucket
    const filePath = `${userId}.png`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '0',
        upsert: true,
      });

    if (uploadError) {
      setIsUploadingPic(false);
      setErrorMsg('Gagal upload foto: ' + uploadError.message);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    setEditProfilePic(`${publicUrlData.publicUrl}?t=${Date.now()}`);
    setIsUploadingPic(false);
  };

  const simpanProfil = async () => {
    setErrorMsg('');
    setIsSaving(true);

    const sessionRole = localStorage.getItem('session_role');

    if (sessionRole === 'admin' || !userId) {
      setUsername(editUsername);
      setProfilePic(editProfilePic);
      localStorage.setItem('session_username', editUsername);
      setIsSaving(false);
      setIsEditing(false);
      window.dispatchEvent(new Event('profilDiupdate'));
      return;
    }

    // Updated payload: removed profile_pic column
    const { error } = await supabase
      .from('users')
      .update({
        nama: editUsername,
      })
      .eq('id', userId);

    setIsSaving(false);

    if (error) {
      setErrorMsg('Gagal menyimpan profil: ' + error.message);
      return;
    }

    setUsername(editUsername);
    setProfilePic(editProfilePic);

    localStorage.setItem('session_username', editUsername);

    setIsEditing(false);
    window.dispatchEvent(new Event('profilDiupdate'));
  };

  const persentaseSelesai = Math.round((completedCount / TOTAL_MODUL) * 100);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F1E8] dark:bg-[#17151C]">
        <Loader2 className="w-8 h-8 animate-spin text-black dark:text-[#F5F1E8]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans pt-10 pb-20 px-4 md:px-6 transition-colors duration-200">
      <main className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8">

        {errorMsg && (
          <div className="p-4 bg-[#FF6B6B] border-[3px] border-black text-black rounded-xl text-sm font-bold shadow-[4px_4px_0px_0px_#000]">
            {errorMsg}
          </div>
        )}

        {/* KARTU PROFIL UTAMA */}
        <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[2rem] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FFC700] p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden">

          <div className="relative mb-6">
            <div
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FF6B9D] border-[4px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] overflow-hidden ${isEditing ? 'cursor-pointer hover:opacity-80' : ''} transition-all bg-white mx-auto relative`}
              onClick={() => isEditing && !isUploadingPic && fileInputRef.current?.click()}
            >
              <img 
                src={(isEditing ? editProfilePic : profilePic) as string} 
                alt="Foto Profil" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  // If image doesn't exist in bucket, hide broken image and trigger fallback
                  e.currentTarget.style.display = 'none';
                  if (isEditing) setEditProfilePic(null); else setProfilePic(null);
                }}
              />
            </div>

            {isEditing && !isUploadingPic && (
              <div
                className="absolute bottom-2 right-2 z-20 bg-[#FFC700] border-[3px] border-black p-2.5 rounded-full shadow-[2px_2px_0px_0px_#000] cursor-pointer hover:scale-110 transition-transform"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera size={18} className="text-black" />
              </div>
            )}
            <input 
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
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
                  disabled={isSaving}
                  className="w-1/3 flex justify-center items-center bg-white dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-3 rounded-xl font-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] transition-all disabled:opacity-50"
                >
                  <X size={18} />
                </button>
                <button
                  onClick={simpanProfil}
                  disabled={isSaving || isUploadingPic}
                  className="w-2/3 flex justify-center items-center gap-2 bg-[#6BCB77] border-[3px] border-black px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:-translate-y-[2px] transition-all disabled:opacity-50"
                >
                  {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                  {isSaving ? 'Menyimpan...' : 'Simpan'}
                </button>
              </>
            )}
          </div>
        </div>

        {/* DATA AKADEMIK */}
        <div className="bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[2rem] shadow-[8px_8px_0px_0px_#000] p-6 md:p-8">
          <h2 className="font-black uppercase text-lg mb-6 border-b-[3px] border-black dark:border-[#F5F1E8] pb-3 text-center md:text-left">
            Data Akademik
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#4D96FF] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Nomor Induk (NIM)</span>
                <span className="font-black uppercase text-sm md:text-base text-black dark:text-white">{nim}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#FFC700] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Program Studi</span>
                <span className="font-black uppercase text-sm md:text-base text-black dark:text-white line-clamp-1">{prodi}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#FF6B9D] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Fakultas</span>
                <span className="font-black uppercase text-sm md:text-base text-black dark:text-white line-clamp-1">{fakultas}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#F5F1E8] dark:bg-[#17151C] border-[3px] border-black dark:border-[#F5F1E8] p-4 rounded-2xl w-full">
              <div className="bg-[#6BCB77] w-12 h-12 rounded-xl border-[2px] border-black flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[10px] font-black uppercase tracking-wider opacity-60 mb-0.5">Universitas</span>
                <span className="font-black uppercase text-sm md:text-base text-black dark:text-white line-clamp-1">{univ}</span>
              </div>
            </div>
          </div>
        </div>

        {/* PENCAPAIAN */}
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