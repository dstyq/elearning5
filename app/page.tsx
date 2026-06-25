'use client';

import { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, ChevronLeft, Feather, Coffee, Clock, Bell, User, Menu, Search, ChevronDown, Flame } from 'lucide-react';

// Bank soal gabungan (Modul 1, 2, dan Modul 3 baru dari temenmu)
const bankSoal = [
  {
    id: 'modul-1',
    judul: 'Variabel dan Tipe Data',
    deskripsi: 'Memahami fondasi dasar bagaimana data disimpan dan dikelola dalam sebuah program.',
    waktu: '15 Menit',
    soal: [
      {
        pertanyaan: 'Tipe data apa yang paling tepat untuk menyimpan sebuah kalimat atau teks panjang?',
        pilihan: ['Integer', 'String', 'Boolean', 'Float'],
        jawabanBenar: 'String',
      },
      {
        pertanyaan: 'Manakah deklarasi variabel yang paling tepat dan umum digunakan di JavaScript modern?',
        pilihan: ['let nama = "Budi";', 'variable nama = "Budi";', 'v nama = "Budi";', 'string nama = "Budi";'],
        jawabanBenar: 'let nama = "Budi";',
      },
    ],
  },
  {
    id: 'modul-2',
    judul: 'Logika Percabangan (If-Else)',
    deskripsi: 'Mempelajari cara komputer mengambil keputusan berdasarkan kondisi benar atau salah.',
    waktu: '20 Menit',
    soal: [
      {
        pertanyaan: 'Sintaks apa yang digunakan untuk mengeksekusi blok kode jika kondisi sebelumnya tidak terpenuhi?',
        pilihan: ['if', 'else if', 'else', 'switch'],
        jawabanBenar: 'else',
      }
    ],
  },
  {
    id: 'modul-3',
    judul: 'Looping Statement',
    deskripsi: 'Mengulang-ulang sebuah blok kode secara terus menerus hingga suatu kondisi terpenuhi.',
    waktu: '15 Menit',
    soal: [
      {
        pertanyaan: 'Apa fungsi dari loop?',
        pilihan: ['Supaya program lain bisa menunggu', 'Untuk menambah error', 'Untuk mengulang sebuah blok kode', 'Untuk menangkap output program yang error.'],
        jawabanBenar: 'Untuk mengulang sebuah blok kode',
      },
      {
        pertanyaan: 'Jika loop diatur untuk menampilkan angka dari 1 ke 3, mana yang akan tampil di layar?',
        pilihan: ['1, 2, 3', '1, 3, 2', '3, 1, 2', '2, 1, 3'],
        jawabanBenar: '1, 2, 3',
      },
    ]
  }
];

const Kategori = [
  {
    id : 0,
    kategori : 'Category 1',
  },
  {
    id : 1,
    kategori : 'Category 2',
  },
  {
    id : 2,
    kategori : 'Category 3',
  }
];

export default function ElearningAesthetic() {
  const [modulAktif, setModulAktif] = useState<any>(null); 
  const [indeksSoal, setIndeksSoal] = useState(0); 
  const [skor, setSkor] = useState(0); 
  const [kuisSelesai, setKuisSelesai] = useState(false);
  const [progresSiswa, setProgresSiswa] = useState<any[]>([]); 
  const [mounted, setMounted] = useState(false);
  const [bukaKategori, setBukaKategori] = useState(false);

  useEffect(() => {
    setMounted(true);
    const progresTersimpan = localStorage.getItem('progres_elearning_aesthetic');
    if (progresTersimpan) {
      setProgresSiswa(JSON.parse(progresTersimpan));
    }
  }, []);

  const mulaiModul = (modul: any) => {
    setModulAktif(modul);
    setIndeksSoal(0);
    setSkor(0);
    setKuisSelesai(false);
  };

  const cekJawaban = (jawabanDipilih: any) => {
    const soalSekarang = modulAktif.soal[indeksSoal];
    if (jawabanDipilih === soalSekarang.jawabanBenar) {
      setSkor(skor + 1); 
    }
    const soalSelanjutnya = indeksSoal + 1;
    if (soalSelanjutnya < modulAktif.soal.length) {
      setIndeksSoal(soalSelanjutnya); 
    } else {
      setKuisSelesai(true);
      if (!progresSiswa.includes(modulAktif.id)) {
        const progresBaru = [...progresSiswa, modulAktif.id];
        setProgresSiswa(progresBaru);
        localStorage.setItem('progres_elearning_aesthetic', JSON.stringify(progresBaru));
      }
    }
  };

  const persentase = bankSoal.length > 0 ? Math.round((progresSiswa.length / bankSoal.length) * 100) : 0;

  if (!mounted) return null; 

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#4A4036] font-sans selection:bg-[#E3DAC9] selection:text-[#38302A]">
      {/* NAVBAR LENGKAP & PADAT FITUR (ULTIMATE VERSION) */}
      <nav className="sticky top-0 z-50 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#EBE6DF] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
          
          {/* 1. Logo & Judul */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0">
            <div className="bg-[#60554A] p-2 rounded-xl shadow-sm">
              <BookOpen className="w-5 h-5 text-[#F9F8F6]" />
            </div>
            <div>
              <span className="font-serif font-bold text-xl tracking-wide text-[#38302A] block leading-none">EduJurnal.</span>
              <span className="text-[10px] font-bold text-[#8B7355] tracking-widest uppercase">PTIK 124</span>
            </div>
          </div>

          {/* 2. Kolom Pencarian (Search Bar) */}
          <div className="hidden lg:flex items-center bg-[#F4F1EA] px-4 py-2.5 rounded-full flex-1 max-w-md border border-[#EBE6DF] focus-within:border-[#C4B7A6] transition-colors group">
            <Search className="w-4 h-4 text-[#A39B92] mr-3 group-focus-within:text-[#8B7355] transition-colors" />
            <input 
              type="text" 
              placeholder="Cari materi, kuis, atau diskusi..." 
              className="bg-transparent border-none outline-none text-sm text-[#38302A] w-full placeholder:text-[#A39B92]"
            />
          </div>

          {/* 3. Menu Navigasi Tengah */}
          <div className="hidden lg:flex items-center gap-7 shrink-0 relative">
            <button className="text-[#38302A] font-semibold text-sm border-b-2 border-[#8B7355] pb-1 cursor-pointer">Beranda</button>
            <div className='relative cursor-pointer'>
                <button className="text-[#8C8276] font-medium text-sm hover:text-[#8B7355] transition-colors flex items-center gap-1 cursor-pointer" onClick={() => { setBukaKategori(prev => !prev) }}>
                  Kategori <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`bg-white w-[120px] overflow-hidden px-5 ${bukaKategori === false ? 'h-0 px-0 py-0' : 'h-[85px] max-h-[160px]'} block absolute top-6 left-0 z-10 transition-[height] duration-700 rounded-lg`}>
                    <ul className='text-sm flex flex-col gap-1 my-2'>
                      {
                        Kategori.map((item) => (
                          <li key={item.id}>
                            {item.kategori}
                          </li>
                        ))
                      }
                    </ul>
                </div>
            </div>
            <button className="text-[#8C8276] font-medium text-sm hover:text-[#8B7355] transition-colors cursor-pointer">Forum Diskusi</button>
            <button className="text-[#8C8276] font-medium text-sm hover:text-[#8B7355] transition-colors cursor-pointer">Leaderboard</button>
          </div>

          {/* 4. Fitur Kanan (Streak, Notif, Profil) */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Streak Belajar */}
            <div className="hidden md:flex items-center gap-1.5 bg-[#FEF6EE] border border-[#FDE0C4] px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#FDE0C4] transition-colors">
              <Flame className="w-4 h-4 text-[#EA580C]" />
              <span className="text-xs font-bold text-[#EA580C]">12 Hari</span>
            </div>

            {/* Lonceng Notifikasi */}
            <button className="text-[#8C8276] hover:text-[#38302A] transition-colors relative hidden md:block">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#F9F8F6]"></span>
            </button>
            
            {/* Profil User */}
            <div className="flex items-center gap-3 border-l border-[#EBE6DF] pl-4 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-[#EAF0E6] flex items-center justify-center border border-[#C4B7A6] group-hover:border-[#8B7355] transition-colors overflow-hidden">
                <User className="w-4 h-4 text-[#6B8E5C]" />
              </div>
              <div className="hidden md:block">
                <span className="block text-sm font-semibold text-[#38302A] leading-tight">Siswa PTIK</span>
                <span className="block text-[10px] text-[#8C8276] font-medium">1,250 XP</span>
              </div>
              <ChevronDown className="hidden md:block w-4 h-4 text-[#8C8276] group-hover:text-[#38302A]" />
            </div>

            {/* Menu HP */}
            <button className="lg:hidden text-[#8C8276]">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* KONTEN UTAMA */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {!modulAktif ? (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* HERO & PROGRESS */}
            <section className="bg-[#4A4036] text-[#F9F8F6] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl shadow-[#4A4036]/10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#60554A] rounded-full blur-3xl opacity-50"></div>
              
              <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                  <h1 className="font-serif text-3xl md:text-5xl mb-4 leading-tight">
                    Ruang Belajar <br/> <span className="text-[#D4C3A3] italic">Pemrograman.</span>
                  </h1>
                  <p className="text-[#D5CFC7] text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                    Mari pelajari logika dasar dan struktur data dengan suasana yang lebih santai. Siapkan kopimu, dan mari mulai.
                  </p>
                </div>
                
                <div className="bg-[#F9F8F6] text-[#4A4036] rounded-2xl p-6 md:p-8 shadow-lg">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-[#8C8276] text-xs font-bold uppercase tracking-widest mb-1">Jejak Belajar</p>
                      <p className="font-serif text-4xl text-[#38302A]">{persentase}%</p>
                    </div>
                    <Coffee className={`w-8 h-8 ${persentase === 100 ? 'text-[#8B7355]' : 'text-[#D5CFC7]'}`} />
                  </div>
                  <div className="w-full bg-[#EBE6DF] rounded-full h-2 overflow-hidden mb-3">
                    <div className="bg-[#8B7355] h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${persentase}%` }}></div>
                  </div>
                  <p className="text-xs text-[#8C8276] font-medium">Kamu telah menyelesaikan {progresSiswa.length} dari {bankSoal.length} materi</p>
                </div>
              </div>
            </section>

            {/* MODULES LIST */}
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-[#EBE6DF] pb-4">
                <h2 className="font-serif text-2xl text-[#38302A]">Daftar Materi</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {bankSoal.map((modul) => {
                  const isSelesai = progresSiswa.includes(modul.id);
                  return (
                    <div key={modul.id} onClick={() => mulaiModul(modul)} className="group bg-white p-7 rounded-2xl border border-[#EBE6DF] hover:border-[#C4B7A6] hover:shadow-lg hover:shadow-[#4A4036]/5 transition-all duration-500 cursor-pointer flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-between items-start mb-5">
                          <div className={`p-2.5 rounded-full ${isSelesai ? 'bg-[#EAF0E6] text-[#6B8E5C]' : 'bg-[#F4F1EA] text-[#8C8276] group-hover:bg-[#EBE6DF] transition-colors'}`}>
                            {isSelesai ? <CheckCircle className="w-5 h-5" /> : <Feather className="w-5 h-5" />}
                          </div>
                          {isSelesai && <span className="text-[10px] font-bold text-[#6B8E5C] tracking-widest uppercase bg-[#EAF0E6] px-3 py-1 rounded-full">Selesai</span>}
                        </div>
                        <h3 className="font-serif text-xl text-[#38302A] mb-3 group-hover:text-[#8B7355] transition-colors">{modul.judul}</h3>
                        <p className="text-sm text-[#8C8276] leading-relaxed mb-8">{modul.deskripsi}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-5 border-t border-[#F4F1EA]">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#A39B92] uppercase tracking-wider">
                          <Clock className="w-4 h-4" /> {modul.waktu}
                        </div>
                        <span className={`text-sm font-semibold flex items-center gap-1 ${isSelesai ? 'text-[#6B8E5C]' : 'text-[#38302A] group-hover:text-[#8B7355] transition-colors'}`}>
                          {isSelesai ? 'Baca Ulang' : 'Mulai Sesi'} 
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
          /* QUIZ INTERFACE */
          <div className="max-w-2xl mx-auto mt-4 animate-in fade-in duration-700">
            <button onClick={() => setModulAktif(null)} className="group flex items-center gap-2 text-sm font-medium text-[#8C8276] hover:text-[#38302A] transition-colors mb-10">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
            </button>
            
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-[#4A4036]/5 border border-[#EBE6DF]">
              <div className="mb-10 text-center">
                <span className="text-[10px] font-bold tracking-widest text-[#8B7355] uppercase mb-3 block">Lembar Evaluasi</span>
                <h2 className="font-serif text-3xl text-[#38302A]">{modulAktif.judul}</h2>
              </div>

              {!kuisSelesai ? (
                <div>
                  <div className="flex justify-between items-center mb-8 border-b border-[#F4F1EA] pb-4">
                    <p className="text-sm font-medium text-[#8C8276]">Pertanyaan {indeksSoal + 1} dari {modulAktif.soal.length}</p>
                    <div className="text-xs font-semibold text-[#8B7355] bg-[#F4F1EA] px-3 py-1.5 rounded-full">{Math.round(((indeksSoal) / modulAktif.soal.length) * 100)}%</div>
                  </div>
                  
                  <h3 className="font-serif text-xl md:text-2xl mb-10 text-[#38302A] leading-normal text-center">"{modulAktif.soal[indeksSoal].pertanyaan}"</h3>
                  
                  <div className="space-y-4">
                    {modulAktif.soal[indeksSoal].pilihan.map((opsi: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => cekJawaban(opsi)}
                        className="w-full text-center p-5 rounded-2xl border border-[#EBE6DF] hover:border-[#8B7355] hover:bg-[#F9F8F6] transition-all duration-300 font-medium text-[#4A4036] hover:text-[#38302A]"
                      >
                        {opsi}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 animate-in zoom-in-95 duration-700">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F4F1EA] text-[#8B7355] rounded-full mb-8">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#38302A] mb-4">Sesi Selesai</h3>
                  <p className="text-[#8C8276] mb-10 text-lg leading-relaxed">
                    Kamu berhasil menjawab dengan benar <br/>
                    <span className="font-serif text-[#6B8E5C] text-3xl mx-1">{skor}</span> dari {modulAktif.soal.length} pertanyaan.
                  </p>
                  <button
                    onClick={() => setModulAktif(null)}
                    className="bg-[#4A4036] text-[#F9F8F6] px-8 py-4 rounded-full font-medium hover:bg-[#38302A] hover:shadow-lg hover:shadow-[#4A4036]/20 transition-all w-full md:w-auto"
                  >
                    Simpan & Lanjutkan
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}