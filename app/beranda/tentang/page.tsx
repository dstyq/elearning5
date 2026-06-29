import { Layout, Code, Search, Presentation, FileQuestion, ClipboardList, AtSign } from 'lucide-react';

export default function TentangKami() {
  const anggota = [
    { 
      nama: "Hadisty Qurratu'Ain", 
      peran: "UI/UX & Lead Developer", 
      ikon: <Layout className="w-5 h-5" />,
      deskripsi: "Membangun seluruh sistem dan tampilan web.",
      ig: "hadistyyy" 
    },
    { 
      nama: "Leonard Alfareno", 
      peran: "Programmer & Web Developer", 
      ikon: <Code className="w-5 h-5" />,
      deskripsi: "Menulis kode dan memastikan web berjalan lancar.",
      ig: "valuxore" 
    },
    { 
      nama: "Adzkiya Vidy Syawallanaa", 
      peran: "Materi & Riset Konten", 
      ikon: <Search className="w-5 h-5" />,
      deskripsi: "Mencari dan menyusun materi pembelajaran.",
      ig: "adzkiya.vidy" 
    },
    { 
      nama: "Nabilla Gaitsha Diandra", 
      peran: "Desain PowerPoint Presentation (PPT)", 
      ikon: <Presentation className="w-5 h-5" />,
      deskripsi: "Mendesain PPT sebagai media penyampaian materi pembelajaran yang menarik dan interaktif.",
      ig: "gaitshanabilla" 
    },
    { 
      nama: "Fadhiyah Syafiqah Ramadhani", 
      peran: "Penyusun Soal & Evaluasi", 
      ikon: <FileQuestion className="w-5 h-5" />,
      deskripsi: "Merancang kuis dan sistem evaluasi siswa.",
      ig: "ffiiqa_" 
    },
    { 
      nama: "Nayla Agusthia Mirda", 
      peran: "Project Manager & QA", 
      ikon: <ClipboardList className="w-5 h-5" />,
      deskripsi: "Mengatur progres tim dan menguji aplikasi.",
      ig: "naylamrda" 
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E3DAC9] rounded-full blur-3xl opacity-30 -z-10"></div>
        <h1 className="font-serif text-4xl md:text-5xl text-[#38302A] mb-4 font-bold">
          Tim Pengembang <br/><span className="text-[#8B7355] italic">CodeV.</span>
        </h1>
        <p className="text-[#8C8276] max-w-lg mx-auto leading-relaxed">
          Platform e-learning ini adalah project kelompok 5 mahasiswa Pendidikan Teknik Informatika dan Komputer (PTIK).
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {anggota.map((person, index) => (
          <a 
            key={index} 
            href={person.ig ? `https://instagram.com/${person.ig}` : '#'} 
            target={person.ig ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            className="bg-white p-7 rounded-3xl border border-[#EBE6DF] hover:border-[#8B7355] hover:shadow-xl hover:shadow-[#4A4036]/5 transition-all duration-500 group flex flex-col justify-between h-full cursor-pointer relative overflow-hidden block"
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F9F8F6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-[#F4F1EA] rounded-2xl flex items-center justify-center text-[#8B7355] group-hover:bg-[#8B7355] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  {person.ikon}
                </div>
                {/* Ikon AtSign yang muncul saat di-hover */}
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <AtSign className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="font-serif text-xl font-bold text-[#38302A] mb-2 group-hover:text-[#8B7355] transition-colors">{person.nama}</h3>
              
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8B7355] mb-4 bg-[#F4F1EA] inline-block px-3 py-1 rounded-full">
                {person.peran}
              </p>
              
              <p className="text-sm text-[#8C8276] leading-relaxed mb-6">
                {person.deskripsi}
              </p>
            </div>
            
            <div className="relative z-10 border-t border-[#F4F1EA] pt-5 mt-auto flex items-center justify-between">
              <span className="text-xs font-semibold text-[#A39B92] group-hover:text-[#38302A] transition-colors">Lihat Profil IG</span>
              <span className="text-xs font-bold text-[#A39B92] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                {person.ig ? `@${person.ig}` : '-'}
              </span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}