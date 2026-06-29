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

export const Pengantar: Modul = {
    id: 'modul-1',
    judul: 'Pengantar Algoritma',
    deskripsi: 'Memahami definisi, tujuan, dan sifat-sifat dasar algoritma.',
    waktu: '30 Menit',
    ringkasan: 'Algoritma adalah langkah logis untuk menyelesaikan masalah. Materi ini mencakup definisi, elemen dasar (Input, Proses, Output), hingga sifat-sifat algoritma (Definite, Finite, Effective).',
    soal: [
        {
            pertanyaan: 'Apa definisi paling tepat dari algoritma dalam konteks ilmu komputer?',
            pilihan: ['Kumpulan data acak', 'Langkah-langkah logis untuk menyelesaikan masalah', 'Bahasa pemrograman untuk membuat website', 'Hardware yang digunakan untuk komputasi'],
            jawabanBenar: 'Langkah-langkah logis untuk menyelesaikan masalah',
            pembahasan: 'Algoritma adalah urutan langkah logis untuk menyelesaikan masalah.'
        },
        {
            pertanyaan: 'Apa tujuan utama dari algoritma?',
            pilihan: ['Membuat program cepat', 'Menyelesaikan masalah secara sistematis', 'Membuat aplikasi terlihat bagus', 'Menyimpan data'],
            jawabanBenar: 'Menyelesaikan masalah secara sistematis',
            pembahasan: 'Tujuan utama adalah penyelesaian masalah secara terstruktur.'
        },
        {
            pertanyaan: 'Dalam algoritma, sifat \'definite\' berarti...',
            pilihan: ['Instruksi jelas dan tidak ambigu', 'Harus ada akhirnya', 'Bisa dijalankan', 'Harus efisien'],
            jawabanBenar: 'Instruksi jelas dan tidak ambigu',
            pembahasan: 'Definiteness berarti instruksi harus spesifik dan tidak menimbulkan makna ganda.'
        },
        {
            pertanyaan: 'Apa yang dimaksud dengan \'finiteness\'?',
            pilihan: ['Harus dimulai', 'Harus berhenti/memiliki akhir', 'Harus berulang', 'Harus rumit'],
            jawabanBenar: 'Harus berhenti/memiliki akhir',
            pembahasan: 'Finiteness menjamin algoritma tidak berjalan selamanya (looping tak terbatas).'
        },
        {
            pertanyaan: 'Apa yang dimaksud dengan \'input\' dalam algoritma?',
            pilihan: ['Hasil akhir', 'Data awal untuk diproses', 'Nama program', 'Bahasa pemrograman'],
            jawabanBenar: 'Data awal untuk diproses',
            pembahasan: 'Input adalah parameter atau data mentah yang diperlukan algoritma.'
        },
        {
            pertanyaan: 'Apa yang dimaksud dengan \'output\' dalam algoritma?',
            pilihan: ['Instruksi awal', 'Proses data', 'Hasil akhir/solusi', 'Kecepatan eksekusi'],
            jawabanBenar: 'Hasil akhir/solusi',
            pembahasan: 'Output adalah solusi atau hasil dari pemrosesan data.'
        },
        {
            pertanyaan: 'Sifat \'effectiveness\' dalam algoritma artinya...',
            pilihan: ['Instruksi dapat dikerjakan', 'Memerlukan biaya mahal', 'Sangat panjang', 'Hanya untuk matematika'],
            jawabanBenar: 'Instruksi dapat dikerjakan',
            pembahasan: 'Efektif berarti setiap langkah bisa dilakukan secara logis.'
        },
        {
            pertanyaan: 'Algoritma berasal dari nama ilmuwan...',
            pilihan: ['Al-Khawarizmi', 'Al-Battani', 'Isaac Newton', 'Bill Gates'],
            jawabanBenar: 'Al-Khawarizmi',
            pembahasan: 'Kata \'algoritma\' berasal dari latinisasi nama Muhammad ibn Musa alKhwarizmi.'
        },
        {
            pertanyaan: 'Algoritma harus disusun secara...',
            pilihan: ['Logis', 'Acak', 'Bebas', 'Sesuai selera'],
            jawabanBenar: 'Logis',
            pembahasan: 'Logika yang runtut adalah kunci utama algoritma.'
        },
        {
            pertanyaan: 'Algoritma dapat diaplikasikan dalam kehidupan sehari-hari, contohnya...',
            pilihan: ['Membaca komik', 'Memasak resep masakan', 'Menonton film', 'Tidur siang'],
            jawabanBenar: 'Memasak resep masakan',
            pembahasan: 'Resep adalah urutan langkah logis untuk mencapai hasil akhir.'
        },
        {
            pertanyaan: 'Apa yang terjadi jika algoritma tidak memiliki input?',
            pilihan: ['Pasti error', 'Tidak mungkin dibuat', 'Bisa saja (tergantung kasus)', 'Program akan berhenti'],
            jawabanBenar: 'Bisa saja (tergantung kasus)',
            pembahasan: 'Beberapa algoritma mungkin bekerja dengan konstanta yang sudah ada.'
        },
        {
            pertanyaan: 'Syarat utama algoritma yang baik adalah...',
            pilihan: ['Harus menggunakan komputer', 'Harus objektif', 'Harus sangat panjang', 'Harus memakai bahasa C'],
            jawabanBenar: 'Harus objektif',
            pembahasan: 'Algoritma harus bersifat objektif dan universal.'
        },
        {
            pertanyaan: 'Penyelesaian masalah dengan algoritma disebut...',
            pilihan: ['Computational Thinking', 'Coding', 'Debugging', 'Formatting'],
            jawabanBenar: 'Computational Thinking',
            pembahasan: 'Berpikir komputasional adalah proses merumuskan solusi.'
        },
        {
            pertanyaan: 'Algoritma adalah jantung dari...',
            pilihan: ['Ilmu komputer', 'Biologi', 'Geografi', 'Seni lukis'],
            jawabanBenar: 'Ilmu komputer',
            pembahasan: 'Algoritma adalah fondasi dasar semua perangkat lunak.'
        },
        {
            pertanyaan: 'Sifat algoritma yang berarti \'setiap langkah harus dapat dilaksanakan\' adalah...',
            pilihan: ['Effectiveness', 'Finiteness', 'Definiteness', 'Input'],
            jawabanBenar: 'Effectiveness',
            pembahasan: 'Efektif berarti langkah dapat dikerjakan dengan hasil yang pasti.'
        },
        {
            pertanyaan: 'Manakah yang bukan merupakan elemen dasar algoritma?',
            pilihan: ['Input', 'Proses', 'Output', 'Keuntungan'],
            jawabanBenar: 'Keuntungan',
            pembahasan: 'Keuntungan adalah hasil atau tujuan, bukan elemen dasar.'
        },
        {
            pertanyaan: 'Logika algoritma harus bersifat...',
            pilihan: ['Universally accepted', 'Personal', 'Rahasia', 'Rumit'],
            jawabanBenar: 'Universally accepted',
            pembahasan: 'Algoritma harus bisa dipahami dan dijalankan siapa saja.'
        },
        {
            pertanyaan: 'Apakah algoritma selalu berkaitan dengan angka?',
            pilihan: ['Ya', 'Tidak selalu', 'Hanya angka', 'Pasti ya'],
            jawabanBenar: 'Tidak selalu',
            pembahasan: 'Algoritma bisa mengolah apa saja, termasuk data logis atau string.'
        },
        {
            pertanyaan: 'Langkah pertama dalam membuat algoritma adalah...',
            pilihan: ['Analisis masalah', 'Coding', 'Testing', 'Marketing'],
            jawabanBenar: 'Analisis masalah',
            pembahasan: 'Kita harus memahami masalah sebelum merancang solusinya.'
        },
        {
            pertanyaan: 'Algoritma disebut \'efisien\' jika...',
            pilihan: ['Hemat sumber daya', 'Boros memori', 'Lambat', 'Terlalu rumit'],
            jawabanBenar: 'Hemat sumber daya',
            pembahasan: 'Algoritma efisien berarti menggunakan waktu/memori seminimal mungkin.'
        },
        {
            pertanyaan: 'Perbedaan algoritma dan program terletak pada...',
            pilihan: ['Sifatnya', 'Warna', 'Tahun dibuat', 'Harga'],
            jawabanBenar: 'Sifatnya',
            pembahasan: 'Algoritma bersifat konseptual (logika), program adalah teknis (kode).'
        },
        {
            pertanyaan: 'Jika algoritma salah, maka...',
            pilihan: ['Program error', 'Program benar', 'Hasil akan salah', 'Tidak ada masalah'],
            jawabanBenar: 'Hasil akan salah',
            pembahasan: 'Input yang benar dengan algoritma yang salah pasti menghasilkan output salah.'
        },
        {
            pertanyaan: 'Karakteristik penting algoritma adalah...',
            pilihan: ['Jelas', 'Samar', 'Rahasia', 'Panjang'],
            jawabanBenar: 'Jelas',
            pembahasan: 'Kejelasan adalah aspek terpenting agar instruksi bisa diikuti.'
        },
        {
            pertanyaan: 'Algoritma membantu dalam...',
            pilihan: ['Pemecahan masalah', 'Membuat masalah', 'Menghapus data', 'Bermain game'],
            jawabanBenar: 'Pemecahan masalah',
            pembahasan: 'Fungsi utama algoritma adalah menyediakan jalan keluar.'
        },
        {
            pertanyaan: 'Siapa yang mengeksekusi algoritma?',
            pilihan: ['Komputer/Manusia', 'Hanya robot', 'Hanya mesin', 'Hanya hewan'],
            jawabanBenar: 'Komputer/Manusia',
            pembahasan: 'Manusia bisa mengikuti instruksi resep, komputer mengikuti instruksi kode.'
        },
        {
            pertanyaan: 'Struktur penulisan algoritma yang paling dasar, yang menggunakan bahasa sehari-hari untuk mendeskripsikan langkah-langkah, disebut penyajian secara...',
            pilihan: ['Pseudocode', 'Flowchart', 'Bahasa Natural (Narasi)', 'Bahasa Pemrograman'],
            jawabanBenar: 'Bahasa Natural (Narasi)',
            pembahasan: 'Narasi adalah bentuk paling dasar dan mudah dipahami manusia.'
        },
        {
            pertanyaan: 'Bagian \'Deklarasi\' dalam struktur penulisan algoritma berfungsi untuk...',
            pilihan: ['Menuliskan proses perhitungan', 'Mendefinisikan variabel, konstanta, dan tipe data yang akan digunakan', 'Menuliskan input data', 'Mengakhiri jalannya algoritma'],
            jawabanBenar: 'Mendefinisikan variabel, konstanta, dan tipe data yang akan digunakan',
            pembahasan: 'Deklarasi adalah tempat mengenalkan semua elemen data di awal.'
        },
        {
            pertanyaan: 'Bagian \'Deskripsi\' dalam struktur penulisan algoritma berisi...',
            pilihan: ['Daftar variabel', 'Kumpulan instruksi atau langkah-langkah eksekusi', 'Judul algoritma saja', 'Komentar mengenai algoritma'],
            jawabanBenar: 'Kumpulan instruksi atau langkah-langkah eksekusi',
            pembahasan: 'Deskripsi adalah inti dari algoritma yang berisi urutan langkah kerja.'
        }
    ]
};