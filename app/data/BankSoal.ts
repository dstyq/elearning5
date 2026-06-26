export interface Soal {
    pertanyaan : string,
    pilihan : string[],
    jawabanBenar : string,
}

export interface Modul {
    id : string,
    judul : string,
    deskripsi : string,
    waktu : string,
    ringkasan : string,
    soal : Soal[],
}

export const bankSoal : Modul[] = [
  {
    id: 'modul-1',
    judul: 'Variabel dan Tipe Data',
    deskripsi: 'Memahami fondasi dasar penyimpanan data dalam program.',
    waktu: '15 Menit',
    ringkasan: 'Dalam pemrograman, variabel adalah sebuah "wadah" untuk menyimpan nilai data. Bayangkan seperti sebuah kotak yang kita beri label nama, dan di dalamnya kita bisa menaruh barang (data). Tipe data menentukan jenis barang apa yang bisa dimasukkan: String untuk teks, Integer untuk angka bulat, dan Boolean untuk nilai Benar/Salah.',
    soal: [
      {
        pertanyaan: 'Tipe data apa yang paling tepat untuk menyimpan sebuah kalimat atau teks panjang?',
        pilihan: ['Integer', 'String', 'Boolean', 'Float'],
        jawabanBenar: 'String'
      }
    ]
  },
  {
    id: 'modul-2',
    judul: 'Logika Percabangan (If-Else)',
    deskripsi: 'Mempelajari cara komputer mengambil keputusan.',
    waktu: '20 Menit',
    ringkasan: 'Logika percabangan memungkinkan program kita untuk membuat keputusan. Jika (IF) sebuah kondisi terpenuhi (bernilai benar), maka kerjakan perintah A. Jika tidak terpenuhi, maka kerjakan perintah lain (ELSE). Ini adalah dasar kecerdasan dari sebuah aplikasi.',
    soal: [
      {
        pertanyaan: 'Sintaks apa yang digunakan untuk mengeksekusi blok kode jika kondisi sebelumnya tidak terpenuhi?',
        pilihan: ['if', 'else if', 'else', 'switch'],
        jawabanBenar: 'else'
      }
    ]
  },
  {
    id: 'modul-3',
    judul: 'Looping Statement',
    deskripsi: 'Mengulang blok kode hingga kondisi terpenuhi.',
    waktu: '15 Menit',
    ringkasan: 'Looping (Perulangan) digunakan ketika kita ingin mengeksekusi baris kode yang sama berkali-kali tanpa harus menulisnya berulang-ulang secara manual. Contoh yang sering digunakan adalah "for loop" dan "while loop".',
    soal: [
      {
        pertanyaan: 'Apa fungsi utama dari proses loop dalam pemrograman?',
        pilihan: ['Supaya program menunggu', 'Untuk menambah error', 'Untuk mengulang sebuah blok kode', 'Untuk menangkap output error'],
        jawabanBenar: 'Untuk mengulang sebuah blok kode'
      },
      {
        pertanyaan: 'Jika loop diatur untuk menampilkan angka dari 1 ke 3 secara berurutan, mana yang akan tampil di layar?',
        pilihan: ['1, 2, 3', '1, 3, 2', '3, 1, 2', '2, 1, 3'],
        jawabanBenar: '1, 2, 3'
      }
    ]
  },
  // Modul 4
  { 
    id: 'modul-4', 
    judul: 'Pengantar Logika dan Algoritma', 
    deskripsi: 'Menguji pemahaman dasar mengenai definisi, sejarah, dan sifat-sifat algoritma.', 
    waktu: '30 Menit', 
    ringkasan: 'Algoritma adalah urutan langkah logis dan sistematis untuk menyelesaikan masalah secara efisien. Konsep ini bersifat independen dari bahasa pemrograman dan mengikuti alur Input-Proses-Output. Algoritma yang valid harus memenuhi syarat kepastian (definiteness), keterbatasan langkah (finiteness), serta optimal dalam penggunaan waktu dan memori untuk mencegah kesalahan logika sejak dini.',
    soal: [
      {
        pertanyaan: 'Kata "Algoritma" berasal dari nama ilmuwan Persia yang bernama...',
        pilihan: ['Al-Jabar', 'Al-Kharisma', 'Muhammad bin Musa Al-Khwarizmi', 'Al-Ghazali', 'Ibnu Sina'],
        jawabanBenar: 'Muhammad bin Musa Al-Khwarizmi'
      },
      {
        pertanyaan: 'Definisi algoritma yang paling tepat menurut konteks pemrograman adalah...',
        pilihan: ['Kumpulan data dalam memori komputer', 'Urutan langkah logis penyelesaian masalah yang disusun secara sistematis', 'Bahasa pemrograman yang digunakan untuk membuat aplikasi', 'Hasil akhir dari sebuah program komputer', 'Perangkat keras yang mengeksekusi instruksi'],
        jawabanBenar: 'Urutan langkah logis penyelesaian masalah yang disusun secara sistematis'
      },
      {
        pertanyaan: 'Penulisan algoritma yang menggunakan simbol-simbol grafis disebut...',
        pilihan: ['Pseudocode', 'Narasi', 'Flowchart', 'Sintaks', 'Deskripsi'],
        jawabanBenar: 'Flowchart'
      },
      {
        pertanyaan: 'Syarat utama sebuah urutan langkah disebut sebagai algoritma adalah...',
        pilihan: ['Harus menggunakan bahasa Inggris', 'Langkah-langkahnya harus logis', 'Harus bisa dijalankan di sistem operasi Windows', 'Memerlukan memori yang besar', 'Memiliki tampilan visual yang menarik'],
        jawabanBenar: 'Langkah-langkahnya harus logis'
      },
      {
        pertanyaan: 'Hubungan antara algoritma dan program yang benar adalah...',
        pilihan: ['Program = Algoritma + Bahasa Pemrograman', 'Algoritma = Program + Struktur Data', 'Program = Algoritma + Struktur Data', 'Algoritma = Program - Bahasa Pemrograman', 'Program = Algoritma × Struktur Data'],
        jawabanBenar: 'Program = Algoritma + Struktur Data'
      },
      {
        pertanyaan: 'Siapakah yang menyatakan bahwa "Program = Algorithm + Data Structures"?',
        pilihan: ['Donald Knuth', 'Rinaldi Munir', 'Niklaus Wirth', 'Bill Gates', 'Ada Lovelace'],
        jawabanBenar: 'Niklaus Wirth'
      },
      {
        pertanyaan: 'Aspek yang tidak dipelajari dalam algoritma adalah...',
        pilihan: ['Kebenaran algoritma', 'Efisiensi penggunaan memori', 'Efisiensi waktu eksekusi', 'Harga perangkat keras komputer', 'Logika pemecahan masalah'],
        jawabanBenar: 'Harga perangkat keras komputer'
      },
      {
        pertanyaan: 'Algoritma harus berhenti setelah mengerjakan sejumlah langkah terbatas. Hal ini berkaitan dengan aspek...',
        pilihan: ['Definiteness', 'Finiteness', 'Input', 'Output', 'Effectiveness'],
        jawabanBenar: 'Finiteness'
      },
      {
        pertanyaan: 'Dalam menyusun algoritma, langkah-langkah tidak boleh bermakna ganda. Sifat ini disebut...',
        pilihan: ['Definiteness', 'Finiteness', 'Effectiveness', 'Robustness', 'Generality'],
        jawabanBenar: 'Definiteness'
      },
      {
        pertanyaan: 'Algoritma dikatakan efektif jika...',
        pilihan: ['Memiliki instruksi yang sangat kompleks', 'Setiap langkah dapat dikerjakan dalam waktu yang wajar', 'Ditulis dalam bahasa pemrograman tingkat tinggi', 'Memiliki input yang sangat banyak', 'Tidak memiliki output sama sekali'],
        jawabanBenar: 'Setiap langkah dapat dikerjakan dalam waktu yang wajar'
      },
      {
        pertanyaan: 'Manakah dari berikut ini yang merupakan contoh algoritma dalam kehidupan sehari-hari?',
        pilihan: ['Menonton televisi', 'Resep masakan', 'Melamun di taman', 'Tidur siang', 'Mendengarkan musik'],
        jawabanBenar: 'Resep masakan'
      },
      {
        pertanyaan: 'Algoritma pemrograman tidak bergantung pada...',
        pilihan: ['Logika pemecah masalah', 'Struktur data yang digunakan', 'Bahasa pemrograman tertentu', 'Urutan instruksi', 'Input yang diberikan'],
        jawabanBenar: 'Bahasa pemrograman tertentu'
      },
      {
        pertanyaan: 'Pemrosesan algoritma oleh komputer secara garis besar terdiri dari tiga tahap, yaitu...',
        pilihan: ['Input - Proses - Output', 'Input - Edit - Hapus', 'Tulis - Baca - Simpan', 'Buka - Jalankan - Tutup', 'Mulai - Berhenti – Selesai'],
        jawabanBenar: 'Input - Proses - Output'
      },
      {
        pertanyaan: 'Apa perbedaan utama antara algoritma dan mekanisme?',
        pilihan: ['Mekanisme tidak memiliki instruksi', 'Algoritma bersifat abstrak, mekanisme adalah implementasi fisik', 'Algoritma hanya untuk matematika', 'Mekanisme selalu lebih cepat', 'Tidak ada perbedaan'],
        jawabanBenar: 'Algoritma bersifat abstrak, mekanisme adalah implementasi fisik'
      },
      {
        pertanyaan: 'Manfaat utama menggunakan algoritma sebelum membuat program adalah...',
        pilihan: ['Mempercepat koneksi internet', 'Menghindari kesalahan logika sejak dini', 'Membuat ukuran file menjadi kecil', 'Meningkatkan resolusi layar', 'Mempermudah pembelian lisensi software.'],
        jawabanBenar: 'Menghindari kesalahan logika sejak dini'
      },
      {
        pertanyaan: 'Tahapan dalam siklus hidup program setelah algoritma selesai dirancang adalah...',
        pilihan: ['Analisis masalah', 'Coding', 'Testing', 'Maintenance', 'Dokumentasi'],
        jawabanBenar: 'Coding'
      },
      {
        pertanyaan: 'Algoritma yang efisien adalah algoritma yang...',
        pilihan: ['Paling panjang baris kodenya', 'Menggunakan memori dan waktu yang minimum', 'Memiliki banyak variabel', 'Menggunakan bahasa yang sulit dimengerti', 'Hanya bisa dijalankan oleh superkomputer'],
        jawabanBenar: 'Menggunakan memori dan waktu yang minimum'
      },
      {
        pertanyaan: 'Mengapa algoritma harus independen terhadap bahasa pemrograman?',
        pilihan: ['Agar hanya bisa dibaca oleh mesin', 'Agar dapat diimplementasikan di berbagai bahasa pemrograman', 'Karena algoritma adalah bagian dari hardware', 'Agar tidak perlu diterjemahkan oleh compiler', 'Agar program lebih mahal harganya'],
        jawabanBenar: 'Agar dapat diimplementasikan di berbagai bahasa pemrograman'
      },
      {
        pertanyaan: 'Berikut adalah cara mengekspresikan algoritma, kecuali...',
        pilihan: ['Bahasa natural (Bahasa manusia)', 'Pseudocode', 'Flowchart', 'Video tutorial', 'Bahasa pemrograman'],
        jawabanBenar: 'Video tutorial'
      },
      {
        pertanyaan: 'Logika algoritma yang benar akan menghasilkan...',
        pilihan: ['Error pada compiler', 'Output yang konsisten dan benar sesuai input', 'Kerusakan pada hardware', 'Penurunan performa komputer', 'Tampilan grafis yang buruk'],
        jawabanBenar: 'Output yang konsisten dan benar sesuai input'
      }
    ]
  }
];