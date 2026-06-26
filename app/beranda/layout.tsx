import Link from 'next/link';

export default function BerandaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* Navbar yang Konsisten */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-[#EBE6DF] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#38302A] rounded-lg flex items-center justify-center text-white font-bold text-xs">CV</div>
            <span className="font-serif font-bold text-[#38302A] tracking-tight">CodeV</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-[#8C8276]">
            <Link href="/beranda" className="hover:text-[#8B7355] transition-colors">Modul Belajar</Link>
            <Link href="/beranda/profil" className="hover:text-[#8B7355] transition-colors">Profil</Link>
            <Link href="/" className="px-4 py-1.5 bg-[#F4F1EA] rounded-full hover:bg-[#8B7355] hover:text-white transition-all">Keluar</Link>
          </div>
        </div>
      </nav>

      {/* Konten Halaman */}
      <main className="max-w-6xl mx-auto py-8">
        {children}
      </main>
      
      {/* Footer Minimalis */}
      <footer className="text-center py-10 text-[#A39B92] text-xs font-bold uppercase tracking-widest">
        Made with ❤️ by Kelompok 5
      </footer>
    </div>
  );
}