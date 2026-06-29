export interface Soal {
    pertanyaan: string;
    pilihan: string[];
    jawabanBenar: string;
    pembahasan?: string;
}

export interface Modul {
    id: string;
    judul: string;
    deskripsi: string;
    waktu: string;
    ringkasan: string;
    soal: Soal[];
}

export const Struktur: Modul = {
    id: 'modul-2',
    judul: 'Struktur Dasar Algoritma',
    deskripsi: 'Memahami tiga pilar utama algoritma: Runtunan, Pemilihan, dan Perulangan.',
    waktu: '45 Menit',
    ringkasan: 'Algoritma disusun berdasarkan tiga struktur dasar: Sequence (runtunan), Selection (pemilihan), dan Iteration (perulangan). Ketiganya dapat dikombinasikan (nested) untuk menyelesaikan masalah kompleks secara sistematis dan dinamis.',
    soal: [
        {
            pertanyaan: 'Apa tiga struktur dasar yang membentuk algoritma?',
            pilihan: ['Input, Proses, Output', 'Sequence, Selection, Iteration', 'Variabel, Konstanta, Tipe Data', 'Deklarasi, Deskripsi, Eksekusi'],
            jawabanBenar: 'Sequence, Selection, Iteration',
            pembahasan: 'Tiga struktur dasar algoritma adalah Sequence (Runtunan), Selection (Pemilihan), dan Iteration (Perulangan).'
        },
        {
            pertanyaan: 'Struktur \'Sequence\' dalam algoritma berarti...',
            pilihan: ['Instruksi dijalankan secara berurutan', 'Instruksi dijalankan jika kondisi terpenuhi', 'Instruksi dijalankan berulang-ulang', 'Instruksi dijalankan secara melompat'],
            jawabanBenar: 'Instruksi dijalankan secara berurutan',
            pembahasan: 'Sequence menjamin instruksi dikerjakan urut dari atas ke bawah sesuai penulisan.'
        },
        {
            pertanyaan: 'Struktur \'Selection\' digunakan untuk...',
            pilihan: ['Melakukan perhitungan matematika', 'Memilih tindakan berdasarkan kondisi tertentu', 'Menyimpan nilai ke dalam variabel', 'Mengulang blok instruksi'],
            jawabanBenar: 'Memilih tindakan berdasarkan kondisi tertentu',
            pembahasan: 'Selection menggunakan kondisi seperti IF-THEN untuk memilih alur kerja.'
        },
        {
            pertanyaan: 'Struktur \'Iteration\' atau \'Looping\' bertujuan untuk...',
            pilihan: ['Mengambil keputusan', 'Menghentikan program secara mendadak', 'Menjalankan instruksi yang sama berkali-kali', 'Mendeklarasikan variabel baru'],
            jawabanBenar: 'Menjalankan instruksi yang sama berkali-kali',
            pembahasan: 'Iteration mengulang blok kode selama syarat kondisi terpenuhi.'
        },
        {
            pertanyaan: 'Dalam struktur Selection, jika kondisi bernilai SALAH, maka...',
            pilihan: ['Program langsung error', 'Program akan menjalankan blok Else', 'Program akan mengulang ke atas', 'Program akan berhenti total'],
            jawabanBenar: 'Program akan menjalankan blok Else',
            pembahasan: 'Jika kondisi False, program mencari blok alternatif yaitu Else.'
        },
        {
            pertanyaan: 'Manakah contoh penerapan struktur Selection?',
            pilihan: ['Menghitung luas lingkaran', 'Menentukan bilangan ganjil atau genap', 'Menampilkan teks 10 kali', 'Membaca data dari keyboard'],
            jawabanBenar: 'Menentukan bilangan ganjil atau genap',
            pembahasan: 'Penentuan ganjil/genap memerlukan kondisi (IF) untuk memilih output'
        },
        {
            pertanyaan: 'Apa nama lain dari struktur Runtunan?',
            pilihan: ['Branching', 'Looping', 'Sequence', 'Variable'],
            jawabanBenar: 'Sequence',
            pembahasan: 'Sequence adalah istilah standar untuk struktur Runtunan.'
        },
        {
            pertanyaan: 'Kondisi \'WHILE\' dalam algoritma digunakan untuk struktur...',
            pilihan: ['Sequence', 'Selection', 'Iteration', 'Declaration'],
            jawabanBenar: 'Iteration',
            pembahasan: 'WHILE adalah bentuk umum untuk Iterasi selama kondisi True.'
        },
        {
            pertanyaan: 'Jika ingin mencetak angka 1 sampai 100, struktur apa yang paling efektif?',
            pilihan: ['Sequence', 'Selection', 'Iteration', 'Assignment'],
            jawabanBenar: 'Iteration',
            pembahasan: 'Iteration memungkinkan kita mencetak banyak angka dengan sedikit baris kode.'
        },
        {
            pertanyaan: 'Struktur algoritma bersifat hierarkis, artinya...',
            pilihan: ['Algoritma saling melengkapi', 'Satu struktur bisa berada di dalam struktur lain', 'Hanya bisa menggunakan satu jenis struktur', 'Urutan tidak berpengaruh'],
            jawabanBenar: 'Satu struktur bisa berada di dalam struktur lain',
            pembahasan: 'Kita bisa menaruh Selection di dalam Iteration (nested).'
        },
        {
            pertanyaan: 'Apa yang dimaksud dengan \'Nested Selection\'?',
            pilihan: ['Percabangan di dalam percabangan', 'Perulangan tanpa akhir', 'Instruksi yang berurutan', 'Variabel yang diubah nilainya'],
            jawabanBenar: 'Percabangan di dalam percabangan',
            pembahasan: 'Nested berarti bersarang, seperti IF di dalam IF.'
        },
        {
            pertanyaan: 'Jika ada banyak kondisi (lebih dari dua), kita bisa menggunakan...',
            pilihan: ['IF-THEN saja', 'IF-ELSE-IF', 'WHILE saja', 'Hanya Sequence'],
            jawabanBenar: 'IF-ELSE-IF',
            pembahasan: 'IF-ELSE-IF memungkinkan pengecekan banyak kondisi secara berantai.'
        },
        {
            pertanyaan: 'Apa karakteristik utama struktur Sequence?',
            pilihan: ['Punya kondisi', 'Punya pengulangan', 'Instruksi dieksekusi satu per satu sesuai urutan', 'Bisa melompat ke baris manapun'],
            jawabanBenar: 'Instruksi dieksekusi satu per satu sesuai urutan',
            pembahasan: 'Ini adalah prinsip dasar Runtunan.'
        },
        {
            pertanyaan: 'Contoh penggunaan Iteration dalam kehidupan sehari-hari?',
            pilihan: ['Membeli baju', 'Berjalan menaiki anak tangga satu per satu', 'Membaca daftar belanja', 'Menulis nama'],
            jawabanBenar: 'Berjalan menaiki anak tangga satu per satu',
            pembahasan: 'Aksi naik tangga diulang sampai kondisi puncak tercapai.'
        },
        {
            pertanyaan: 'Jika algoritma tidak memiliki Iteration, apakah tetap sah?',
            pilihan: ['Ya, bisa hanya Sequence dan Selection', 'Tidak, wajib punya Iteration', 'Tidak, harus punya Selection', 'Tidak bisa berjalan'],
            jawabanBenar: 'Ya, bisa hanya Sequence dan Selection',
            pembahasan: 'Tidak semua masalah memerlukan perulangan (misal hitung luas persegi)[cite: 384].'
        },
        {
            pertanyaan: 'Istilah tepat untuk menggambarkan struktur kontrol algoritma adalah...',
            pilihan: ['Sintaks', 'Control flow', 'Data structure', 'Variable'],
            jawabanBenar: 'Control flow',
            pembahasan: 'Control flow menentukan arah jalannya algoritma[cite: 395].'
        },
        {
            pertanyaan: 'Apa yang dimaksud dengan kondisi dalam Selection?',
            pilihan: ['Nilai yang akan diolah', 'Pernyataan bernilai logika', 'Nama algoritma', 'Jumlah baris instruksi'],
            jawabanBenar: 'Pernyataan bernilai logika',
            pembahasan: 'Kondisi harus menghasilkan nilai logis True/False[cite: 404].'
        },
        {
            pertanyaan: 'Pada WHILE, apa yang terjadi jika kondisi awal bernilai FALSE?',
            pilihan: ['Loop berjalan sekali', 'Loop tidak pernah dijalankan', 'Loop error', 'Loop dipaksa TRUE'],
            jawabanBenar: 'Loop tidak pernah dijalankan',
            pembahasan: 'Pada pre-test loop seperti WHILE, kondisi False di awal menyebabkan loop dilewati[cite: 414].'
        },
        {
            pertanyaan: 'Struktur Sequence menjamin...',
            pilihan: ['Kecepatan eksekusi', 'Prediktabilitas alur (berurutan)', 'Keamanan data', 'Hasil selalu benar'],
            jawabanBenar: 'Prediktabilitas alur (berurutan)',
            pembahasan: 'Kita tahu pasti instruksi mana yang dikerjakan lebih dulu[cite: 423].'
        },
        {
            pertanyaan: 'Berapa banyak jumlah struktur dasar dalam satu algoritma?',
            pilihan: ['Hanya satu', 'Kombinasi ketiganya sesuai kebutuhan', 'Maksimal tiga', 'Harus genap'],
            jawabanBenar: 'Kombinasi ketiganya sesuai kebutuhan',
            pembahasan: 'Kita bisa menggabungkan Sequence, Selection, dan Iteration sesuai kebutuhan[cite: 432].'
        },
        {
            pertanyaan: 'Mengapa struktur kontrol (Control Flow) penting?',
            pilihan: ['Agar terlihat kompleks', 'Agar dinamis dan menyelesaikan masalah bervariasi', 'Agar tidak perlu input', 'Agar tidak perlu variabel'],
            jawabanBenar: 'Agar dinamis dan menyelesaikan masalah bervariasi',
            pembahasan: 'Algoritma butuh percabangan dan perulangan agar fleksibel[cite: 441].'
        },
        {
            pertanyaan: 'Menjalankan kode jika kondisi terpenuhi, cukup menggunakan...',
            pilihan: ['IF-THEN', 'WHILE', 'Sequence', 'For loop'],
            jawabanBenar: 'IF-THEN',
            pembahasan: 'IF-THEN cukup untuk aksi bersyarat tunggal[cite: 448].'
        },
        {
            pertanyaan: 'Apa nama lain dari struktur perulangan?',
            pilihan: ['Selection', 'Sequence', 'Iteration', 'Assignment'],
            jawabanBenar: 'Iteration',
            pembahasan: 'Iteration adalah istilah standar untuk pengulangan[cite: 461].'
        },
        {
            pertanyaan: 'Manakah yang benar mengenai struktur algoritma?',
            pilihan: ['Satu struktur tidak boleh berada dalam struktur lain', 'Selection harus selalu di akhir', 'Sequence adalah struktur paling dasar', 'Iteration tidak butuh kondisi'],
            jawabanBenar: 'Sequence adalah struktur paling dasar',
            pembahasan: 'Sequence adalah fondasi dasar dari semua algoritma[cite: 470].'
        },
        {
            pertanyaan: 'Kunci utama pembuatan algoritma yang baik adalah...',
            pilihan: ['Menggunakan banyak Selection', 'Memilih struktur tepat untuk masalah', 'Menghindari Iteration', 'Menulis kode panjang'],
            jawabanBenar: 'Memilih struktur tepat untuk masalah',
            pembahasan: 'Pemilihan struktur yang tepat akan membuat algoritma efektif.'
        }
    ]
};