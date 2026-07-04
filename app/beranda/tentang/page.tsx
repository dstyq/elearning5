'use client';

import { Layout, Code, Search, Presentation, FileQuestion, ClipboardList, AtSign, Star, Sparkles } from 'lucide-react';

export default function TentangKami() {
  const anggota = [
    { 
      nama: "Hadisty Qurratu'Ain", 
      peran: "UI/UX & Lead Dev", 
      ikon: <Layout className="w-5 h-5 text-black" />,
      deskripsi: "Membangun seluruh sistem dan tampilan web.",
      ig: "hadistyyy" 
    },
    { 
      nama: "Leonard Alfareno", 
      peran: "Programmer & Web Dev", 
      ikon: <Code className="w-5 h-5 text-black" />,
      deskripsi: "Menulis kode dan memastikan web berjalan lancar.",
      ig: "valuxore" 
    },
    { 
      nama: "Adzkiya Vidy Syawallanaa", 
      peran: "Materi & Riset Konten", 
      ikon: <Search className="w-5 h-5 text-black" />,
      deskripsi: "Mencari dan menyusun materi pembelajaran.",
      ig: "adzkiya.vidy" 
    },
    { 
      nama: "Nabilla Gaitsha Diandra", 
      peran: "Desain PPT", 
      ikon: <Presentation className="w-5 h-5 text-black" />,
      deskripsi: "Mendesain presentasi interaktif dan menarik.",
      ig: "gaitshanabilla" 
    },
    { 
      nama: "Fadhiyah Syafiqah R.", 
      peran: "Penyusun Soal", 
      ikon: <FileQuestion className="w-5 h-5 text-black" />,
      deskripsi: "Merancang kuis dan sistem evaluasi siswa.",
      ig: "ffiiqa_" 
    },
    { 
      nama: "Nayla Agusthia Mirda", 
      peran: "Project Manager & QA", 
      ikon: <ClipboardList className="w-5 h-5 text-black" />,
      deskripsi: "Riset materi dan menguji aplikasi secara utuh.",
      ig: "naylamrda" 
    }
  ];

  // Palet warna cerah khas neobrutalism buat selang-seling kartu
  const aksenWarna = ['#FFC700', '#FF6B9D', '#4D96FF', '#6BCB77', '#FF9F43', '#CD84F1'];

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] text-black dark:text-[#F5F1E8] font-sans pt-10 pb-20 px-6 transition-colors duration-200">
      <main className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mb-16 text-center relative mt-4">
          <div className="relative inline-block mb-4">
            <Star className="w-6 h-6 text-[#4D96FF] fill-[#4D96FF] absolute -top-4 -left-6 -rotate-12 animate-pulse" />
            <Sparkles className="w-8 h-8 text-[#FFC700] absolute -bottom-2 -right-8 rotate-12" />
            <div className="bg-black text-white dark:bg-[#F5F1E8] dark:text-black px-6 py-2 rounded-full border-[4px] border-white dark:border-black shadow-[6px_6px_0px_0px_#FF6B9D] rotate-[-2deg]">
              <h2 className="font-black text-sm uppercase tracking-widest">Kelompok 5</h2>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-black uppercase tracking-tight mt-4">
            Tim Pengembang
            <br />
            <span className="bg-[#FFC700] px-3 rotate-1 inline-block border-[4px] border-black rounded-xl text-black mt-2">
              CodeV.
            </span>
          </h1>
          
          <p className="font-bold text-black/70 dark:text-[#F5F1E8]/70 mt-6 max-w-lg mx-auto leading-relaxed border-[3px] border-black border-dashed rounded-2xl p-4 bg-white dark:bg-[#1E1B24]">
            Platform e-learning eksplorasi logika ini adalah *project* karya mahasiswa Pendidikan Teknik Informatika dan Komputer (PTIK).
          </p>
        </div>

        {/* DAFTAR ANGGOTA GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {anggota.map((person, index) => {
            const warna = aksenWarna[index % aksenWarna.length];
            
            return (
              <a 
                key={index} 
                href={person.ig ? `https://instagram.com/${person.ig}` : '#'} 
                target={person.ig ? "_blank" : "_self"} 
                rel="noopener noreferrer"
                className="group relative text-left bg-white dark:bg-[#1E1B24] border-[4px] border-black dark:border-[#F5F1E8] rounded-[24px] p-6 pt-8 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#F5F1E8] hover:shadow-[3px_3px_0px_0px_#000] dark:hover:shadow-[3px_3px_0px_0px_#F5F1E8] hover:-translate-y-[2px] hover:translate-x-[3px] hover:rotate-1 transition-all duration-150 flex flex-col justify-between"
              >
                {/* Ikon floating ala stiker */}
                <div 
                  className="absolute -top-4 -right-3 w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center rotate-[8deg] shadow-[3px_3px_0px_0px_#000] group-hover:rotate-[15deg] group-hover:scale-110 transition-all"
                  style={{ background: warna }}
                >
                  {person.ikon}
                </div>

                <div>
                  <span 
                    className="inline-block font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border-[2px] border-black mb-4 rotate-[-1deg] text-black"
                    style={{ background: warna }}
                  >
                    {person.peran}
                  </span>
                  
                  <h3 className="font-black text-2xl mb-2 uppercase leading-snug">
                    {person.nama}
                  </h3>
                  
                  <p className="text-sm font-bold text-black/60 dark:text-[#F5F1E8]/60 leading-relaxed mb-6">
                    {person.deskripsi}
                  </p>
                </div>

                {/* Bagian Bawah: Instagram Link */}
                <div className="border-t-[3px] border-black dark:border-[#F5F1E8] pt-4 mt-auto flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Instagram
                  </span>
                  <div className="flex items-center gap-2 bg-[#F5F1E8] dark:bg-[#17151C] border-[2px] border-black dark:border-[#F5F1E8] px-3 py-1.5 rounded-xl group-hover:bg-[#FFC700] group-hover:text-black transition-colors">
<AtSign className="w-3.5 h-3.5" />                    <span className="text-[11px] font-black tracking-wider uppercase">
                      {person.ig ? `@${person.ig}` : '-'}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
      </main>
    </div>
  );
}