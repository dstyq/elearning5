'use client';

import { useState, useEffect } from 'react';
import { Pengantar } from '../data/pengantar';
import { Struktur } from '../data/struktur';
import { Flowchart } from '../data/flowchart';
import { Percabangan } from '../data/percabangan';
import { Looping } from '../data/looping';



import ModulList from './components/ModulList'; 
import ModulDetail from './components/ModulDetail'; 
import ModulKuis from './components/ModulKuis'; 

const materi = [Pengantar, Struktur, Flowchart, Percabangan, Looping];
const warnaModul = ['#FFC700', '#FF6B9D', '#4D96FF'];

export default function DashboardModul() {
  const [modulAktif, setModulAktif] = useState<any>(null);
  const [modulIndex, setModulIndex] = useState(0);
  const [mode, setMode] = useState<'pilih' | 'materi' | 'kuis'>('pilih');
  const [indeksSoal, setIndeksSoal] = useState(0);
  const [skor, setSkor] = useState(0);
  const [kuisSelesai, setKuisSelesai] = useState(false);
  const [progresSiswa, setProgresSiswa] = useState<any[]>([]);
  const [jawaban, setJawaban] = useState<string | null>('');
  const [penjelasanAktif, setPenjelasanAktif] = useState(false);

  useEffect(() => {
    const p = localStorage.getItem('progres_elearning_aesthetic');
    if (p) setProgresSiswa(JSON.parse(p));
  }, []);

  const bukaMateri = (modul: any, idx: number) => {
    setModulAktif(modul);
    setModulIndex(idx);
    setMode('materi');
  };

  const mulaiKuis = () => {
    setIndeksSoal(0);
    setSkor(0);
    setKuisSelesai(false);
    setMode('kuis');
  };

  const handleSoalSelanjutnya = () => {
    const next = indeksSoal + 1;
    setPenjelasanAktif(false);
    setJawaban(null);
    if (next < modulAktif.soal.length) setIndeksSoal(next);
    else setKuisSelesai(true);
  };

  const cekJawaban = async (jawabanDipilih: any) => {
    let skorBaru = skor;
    if (jawabanDipilih === modulAktif.soal[indeksSoal].jawabanBenar) {
      skorBaru = skor + 1;
      setSkor(skorBaru);
    }
    setPenjelasanAktif(true);

    if (!progresSiswa.includes(modulAktif.id)) {
      const baru = [...progresSiswa, modulAktif.id];
      setProgresSiswa(baru);
      localStorage.setItem('progres_elearning_aesthetic', JSON.stringify(baru));
    }

    const hasilKuis = { modul: modulAktif.judul, skor: skorBaru };
    const board = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const idx = board.findIndex((item: any) => item.modul === hasilKuis.modul);
    if (idx !== -1) board[idx] = hasilKuis;
    else board.push(hasilKuis);
    localStorage.setItem('leaderboard', JSON.stringify(board));

    // Kirim ke database (PostgreSQL) pas soal terakhir
    if (indeksSoal === modulAktif.soal.length - 1) {
      const namaUser = localStorage.getItem('session_username') || 'Siswa';
      try {
        await fetch('/api/leaderboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nama: namaUser, skor: skorBaru }),
        });
      } catch (err) {
        console.error("Gagal simpan skor ke database", err);
      }
    }
  };

  const persentase = materi.length > 0
    ? Math.min(100, Math.round((progresSiswa.length / materi.length) * 100))
    : 0;
  const selesaiCount = Math.min(progresSiswa.length, materi.length);
  const warnaSaatIni = warnaModul[modulIndex % warnaModul.length];

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans transition-colors duration-200">
      
      {mode === 'pilih' && (
        <ModulList 
          materi={materi} 
          warnaModul={warnaModul} 
          progresSiswa={progresSiswa} 
          persentase={persentase} 
          selesaiCount={selesaiCount} 
          bukaMateri={bukaMateri} 
        />
      )}

      {mode === 'materi' && modulAktif && (
        <ModulDetail 
          modulAktif={modulAktif} 
          warnaSaatIni={warnaSaatIni} 
          setMode={setMode} 
          mulaiKuis={mulaiKuis} 
        />
      )}

      {mode === 'kuis' && modulAktif && (
        <ModulKuis 
          modulAktif={modulAktif} 
          warnaSaatIni={warnaSaatIni} 
          indeksSoal={indeksSoal} 
          skor={skor} 
          kuisSelesai={kuisSelesai} 
          jawaban={jawaban} 
          setJawaban={setJawaban} 
          penjelasanAktif={penjelasanAktif} 
          cekJawaban={cekJawaban} 
          handleSoalSelanjutnya={handleSoalSelanjutnya} 
          setMode={setMode} 
        />
      )}

    </div>
  );
}