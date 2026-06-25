'use client';

import { useState, useEffect } from 'react';
import { User, Award, BookOpen, GraduationCap, Building2, Calendar } from 'lucide-react';

export default function ProfilPage() {
  const [username, setUsername] = useState('Siswa');
  const [nim, setNim] = useState('1502623004');
  const [totalXP, setTotalXP] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    setUsername(localStorage.getItem('session_username') || 'Siswa');
    setNim(localStorage.getItem('session_nim') || '1502623004');
    
    const progres = localStorage.getItem('progres_elearning_aesthetic');
    if (progres) {
      const listSelesai = JSON.parse(progres);
      setCompletedCount(listSelesai.length);
      setTotalXP(listSelesai.length * 500); // 1 kuis bernilai 500 XP
    }
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-3xl border border-[#EBE6DF] p-8 md:p-10 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          
          {/* Avatar Lingkaran Gede */}
          <div className="w-24 h-24 rounded-full bg-[#EAF0E6] border-2 border-[#C4B7A6] flex items-center justify-center shrink-0 shadow-inner">
            <User className="w-12 h-12 text-[#6B8E5C]" />
          </div>

          {/* Info Utama Mahasiswa */}
          <div className="flex-1 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B7355] bg-[#F4F1EA] px-3 py-1 rounded-full">
              KARTU IDENTITAS DIGITAL
            </span>
            <h1 className="font-serif text-3xl text-[#38302A] font-bold">{username}</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-sm text-[#8C8276]">
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <GraduationCap className="w-4 h-4 text-[#60554A]" />
                <span>NIM: <strong className="text-[#38302A]">{nim}</strong></span>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Building2 className="w-4 h-4 text-[#60554A]" />
                <span>Prodi: <strong className="text-[#38302A]">Pendidikan Teknik Informatika dan Komputer</strong></span>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Building2 className="w-4 h-4 text-[#60554A]" />
                <span>Fakultas: <strong className="text-[#38302A]">Fakultas Teknik</strong></span>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Calendar className="w-4 h-4 text-[#60554A]" />
                <span>Universitas: <strong className="text-[#38302A]">Universitas Negeri Jakarta</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Statistik Pencapaian */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Kolom XP */}
        <div className="bg-[#4A4036] text-[#F9F8F6] p-6 rounded-2xl border border-[#4A4036] flex items-center gap-5 shadow-sm">
          <div className="p-3 bg-[#60554A] rounded-xl">
            <Award className="w-6 h-6 text-[#D4C3A3]" />
          </div>
          <div>
            <p className="text-[#D5CFC7] text-xs font-semibold uppercase tracking-wider">Total Skor Penghargaan</p>
            <p className="font-serif text-3xl font-bold mt-1 text-[#D4C3A3]">{totalXP} <span className="text-xs font-sans text-[#D5CFC7]">XP</span></p>
          </div>
        </div>

        {/* Kolom Modul Lulus */}
        <div className="bg-white p-6 rounded-2xl border border-[#EBE6DF] flex items-center gap-5 shadow-sm">
          <div className="p-3 bg-[#EAF0E6] rounded-xl text-[#6B8E5C]">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[#8C8276] text-xs font-semibold uppercase tracking-wider">Modul Diselesaikan</p>
            <p className="font-serif text-3xl font-bold mt-1 text-[#38302A]">{completedCount} <span className="text-xs font-sans text-[#8C8276]">dari 3 Modul</span></p>
          </div>
        </div>
      </div>
    </main>
  );
}