import Navbar from "./components/Navbar";

export default function BerandaLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Navbar />
      {/* Konten Utama */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {children}
      </main>
      
      {/* Footer Minimalist */}
      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-[#EBE6DF] flex justify-between items-center text-[#A39B92] text-xs font-bold">
        <span>© 2026 CodeV Project</span>
        <span>Kelompok 5 • UNJ</span>
      </footer>
    </div>
  );
}