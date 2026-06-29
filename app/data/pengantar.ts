export interface Soal {
    pertanyaan: string;
    pilihan: [string, string][];
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

export const Pengantar : Modul = { 
  id: 'modul-5', 
  judul: 'Karakteristik dan Struktur Dasar Algoritma', 
  deskripsi: 'Menguji pemahaman mendalam mengenai sifat, karakteristik, elemen dasar, dan struktur penulisan algoritma.', 
  waktu: '45 Menit', 
  ringkasan: 'Algoritma harus memenuhi lima sifat utama: definiteness (jelas), finiteness (terbatas), effectiveness (efektif), serta memiliki input dan output. Penyusunan komponennya terbagi menjadi bagian Header, Deklarasi variabel/konstanta, dan Deskripsi proses inti.',
  soal: [
    {
      pertanyaan: 'Apa definisi paling tepat dari algoritma dalam konteks ilmu komputer?',
      jawabanBenar: 'Langkah-langkah logis untuk menyelesaikan masalah',
      pilihan: [
        ['Kumpulan data acak', 'Salah. Algoritma harus terstruktur dan tidak acak.'],
        ['Langkah-langkah logis untuk menyelesaikan masalah', 'Benar. Algoritma adalah urutan langkah logis untuk menyelesaikan masalah.'],
        ['Bahasa pemrograman untuk membuat website', 'Salah. Bahasa pemrograman adalah alat implementasi, bukan algoritma itu sendiri.'],
        ['Hardware yang digunakan untuk komputasi', 'Salah. Hardware adalah perangkat keras fisik, bukan logika instruksi.']
      ]
    },
    {
      pertanyaan: 'Apa tujuan utama dari algoritma?',
      jawabanBenar: 'Menyelesaikan masalah secara sistematis',
      pilihan: [
        ['Membuat program cepat', 'Salah. Efisiensi itu hasil sampingan, bukan tujuan desain dasar.'],
        ['Menyelesaikan masalah secara sistematis', 'Benar. Tujuan utama adalah penyelesaian masalah secara terstruktur.'],
        ['Membuat aplikasi terlihat bagus', 'Salah. Tampilan aplikasi adalah tugas desain antarmuka (UI).'],
        ['Menyimpan data', 'Salah. Penyimpanan data adalah tugas sistem basis data.']
      ]
    },
    {
      pertanyaan: "Dalam algoritma, sifat 'definite' berarti...",
      jawabanBenar: 'Instruksi jelas dan tidak ambigu',
      pilihan: [
        ['Instruksi jelas dan tidak ambigu', 'Benar. Definiteness berarti instruksi harus spesifik dan tidak menimbulkan makna ganda.'],
        ['Harus ada akhirnya', "Salah. Itu adalah definisi dari sifat 'finiteness'."],
        ['Bisa dijalankan', "Salah. Itu adalah definisi dari sifat 'effectiveness'."],
        ['Harus efisien', 'Salah. Efisiensi adalah kriteria tambahan, bukan makna definite.']
      ]
    },
    {
      pertanyaan: "Apa yang dimaksud dengan 'finiteness'?",
      jawabanBenar: 'Harus berhenti/memiliki akhir',
      pilihan: [
        ['Harus dimulai', 'Salah. Setiap algoritma pasti dimulai, tapi finiteness adalah tentang kepastian berhenti.'],
        ['Harus berhenti/memiliki akhir', 'Benar. Finiteness menjamin algoritma tidak berjalan selamanya (looping tak terbatas).'],
        ['Harus berulang', 'Salah. Pengulangan tanpa batas justru melanggar sifat ini.'],
        ['Harus rumit', 'Salah. Algoritma justru harus diusahakan sederhana, bukan rumit.']
      ]
    },
    {
      pertanyaan: "Apa yang dimaksud dengan 'input' dalam algoritma?",
      jawabanBenar: 'Data awal untuk diproses',
      pilihan: [
        ['Hasil akhir', 'Salah. Hasil akhir adalah output.'],
        ['Data awal untuk diproses', 'Benar. Input adalah parameter atau data mentah yang diperlukan algoritma.'],
        ['Nama program', 'Salah. Nama program tidak relevan dengan logika algoritma.'],
        ['Bahasa pemrograman', 'Salah. Bahasa pemrograman hanyalah alat tulis instruksi.']
      ]
    },
    {
      pertanyaan: "Apa yang dimaksud dengan 'output' dalam algoritma?",
      jawabanBenar: 'Hasil akhir/solusi',
      pilihan: [
        ['Instruksi awal', 'Salah. Instruksi awal adalah bagian dari definisi algoritma, bukan output.'],
        ['Proses data', 'Salah. Proses adalah tahap pengolahan data.'],
        ['Hasil akhir/solusi', 'Benar. Output adalah solusi atau hasil dari pemrosesan data.'],
        ['Kecepatan eksekusi', 'Salah. Kecepatan adalah ukuran performa, bukan definisi output.']
      ]
    },
    {
      pertanyaan: "Sifat 'effectiveness' dalam algoritma artinya...",
      jawabanBenar: 'Instruksi dapat dikerjakan',
      pilihan: [
        ['Instruksi dapat dikerjakan', 'Benar. Efektif berarti setiap langkah bisa dilakukan secara logis.'],
        ['Memerlukan biaya mahal', 'Salah. Algoritma harus sebisa mungkin hemat biaya/sumber daya.'],
        ['Sangat panjang', 'Salah. Semakin pendek dan padat justru semakin baik.'],
        ['Hanya untuk matematika', 'Salah. Algoritma digunakan di semua bidang ilmu, bukan hanya matematika.']
      ]
    },
    {
      pertanyaan: 'Algoritma berasal dari nama ilmuwan...',
      jawabanBenar: 'Al-Khawarizmi',
      pilihan: [
        ['Al-Khawarizmi', "Benar. Kata 'algoritma' berasal dari latinisasi nama Muhammad ibn Musa al-Khwarizmi."],
        ['Al-Battani', 'Salah. Al-Battani adalah ilmuwan di bidang astronomi.'],
        ['Isaac Newton', 'Salah. Isaac Newton adalah fisikawan dan matematikawan Inggris.'],
        ['Bill Gates', 'Salah. Bill Gates adalah pendiri Microsoft.']
      ]
    },
    {
      pertanyaan: 'Algoritma harus disusun secara...',
      jawabanBenar: 'Logis',
      pilihan: [
        ['Logis', 'Benar. Logika yang runtut adalah kunci utama algoritma.'],
        ['Acak', 'Salah. Jika disusun acak, instruksi tidak akan menghasilkan solusi.'],
        ['Bebas', 'Salah. Algoritma harus mengikuti aturan penulisan yang baku/urutan tertentu.'],
        ['Sesuai selera', 'Salah. Algoritma harus bersifat objektif, bukan berdasarkan selera pribadi.']
      ]
    },
    {
      pertanyaan: 'Algoritma dapat diaplikasikan dalam kehidupan sehari-hari, contohnya...',
      jawabanBenar: 'Memasak resep masakan',
      pilihan: [
        ['Membaca komik', 'Salah. Membaca komik adalah aktivitas pasif.'],
        ['Memasak resep masakan', 'Benar. Resep adalah urutan langkah logis untuk mencapai hasil akhir.'],
        ['Menonton film', 'Salah. Menonton film tidak melibatkan proses penyelesaian masalah.'],
        ['Tidur siang', 'Salah. Tidur siang adalah kondisi biologis, bukan algoritma.']
      ]
    },
    {
      pertanyaan: 'Apa yang terjadi jika algoritma tidak memiliki input?',
      jawabanBenar: 'Bisa saja (tergantung kasus)',
      pilihan: [
        ['Pasti error', 'Salah. Tidak semua algoritma memerlukan input eksternal.'],
        ['Tidak mungkin dibuat', 'Salah. Algoritma sederhana (misal cetak teks) tidak butuh input.'],
        ['Bisa saja (tergantung kasus)', 'Benar. Beberapa algoritma mungkin bekerja dengan konstanta yang sudah ada.'],
        ['Program akan berhenti', 'Salah. Algoritma tetap bisa berjalan tanpa input.']
      ]
    },
    {
      pertanyaan: 'Syarat utama algoritma yang baik adalah...',
      jawabanBenar: 'Harus objektif',
      pilihan: [
        ['Harus menggunakan komputer', 'Salah. Algoritma bisa dikerjakan manual (manusia).'],
        ['Harus objektif', 'Benar. Algoritma harus bersifat objektif dan universal.'],
        ['Harus sangat panjang', 'Salah. Algoritma justru harus ringkas.'],
        ['Harus memakai bahasa C', 'Salah. Algoritma bersifat independen dari bahasa pemrograman.']
      ]
    },
    {
      pertanyaan: 'Penyelesaian masalah dengan algoritma disebut...',
      jawabanBenar: 'Computational Thinking',
      pilihan: [
        ['Computational Thinking', 'Benar. Berpikir komputasional adalah proses merumuskan solusi.'],
        ['Coding', 'Salah. Coding adalah proses menuliskan ke bahasa pemrograman.'],
        ['Debugging', 'Salah. Debugging adalah mencari kesalahan pada program.'],
        ['Formatting', 'Salah. Formatting adalah pengaturan tampilan.']
      ]
    },
    {
      pertanyaan: 'Algoritma adalah jantung dari...',
      jawabanBenar: 'Ilmu komputer',
      pilihan: [
        ['Ilmu komputer', 'Benar. Algoritma adalah fondasi dasar semua perangkat lunak.'],
        ['Biologi', 'Salah. Biologi mempelajari makhluk hidup.'],
        ['Geografi', 'Salah. Geografi mempelajari bumi.'],
        ['Seni lukis', 'Salah. Seni lukis adalah ekspresi visual.']
      ]
    },
    {
      pertanyaan: "Sifat algoritma yang berarti 'setiap langkah harus dapat dilaksanakan' adalah...",
      jawabanBenar: 'Effectiveness',
      pilihan: [
        ['Effectiveness', 'Benar. Efektif berarti langkah dapat dikerjakan dengan hasil yang pasti.'],
        ['Finiteness', 'Salah. Finiteness adalah sifat kepastian berhenti.'],
        ['Definiteness', 'Salah. Definiteness adalah sifat kejelasan instruksi.'],
        ['Input', 'Salah. Input adalah elemen dasar, bukan sifat.']
      ]
    },
    {
      pertanyaan: 'Manakah yang bukan merupakan elemen dasar algoritma?',
      jawabanBenar: 'Keuntungan',
      pilihan: [
        ['Input', 'Salah. Input adalah bagian wajib.'],
        ['Proses', 'Salah. Proses adalah bagian wajib.'],
        ['Output', 'Salah. Output adalah bagian wajib.'],
        ['Keuntungan', 'Benar. Keuntungan adalah hasil atau tujuan, bukan elemen dasar.']
      ]
    },
    {
      pertanyaan: 'Logika algoritma harus bersifat...',
      jawabanBenar: 'Universally accepted',
      pilihan: [
        ['Universally accepted', 'Benar. Algoritma harus bisa dipahami dan dijalankan siapa saja.'],
        ['Personal', 'Salah. Algoritma tidak boleh bergantung pada preferensi pribadi.'],
        ['Rahasia', 'Salah. Algoritma yang baik bersifat terbuka untuk ditinjau.'],
        ['Rumit', 'Semakin sederhana logika, semakin baik algoritma tersebut.']
      ]
    },
    {
      pertanyaan: 'Apakah algoritma selalu berkaitan dengan angka?',
      jawabanBenar: 'Tidak selalu',
      pilihan: [
        ['Ya', 'Salah. Algoritma bisa berupa instruksi berbasis teks atau kondisi.'],
        ['Tidak selalu', 'Benar. Algoritma bisa mengolah apa saja, termasuk data logis atau string.'],
        ['Hanya angka', 'Salah. Angka hanyalah salah satu bentuk data.'],
        ['Pasti ya', 'Salah. Angka hanyalah salah satu bentuk data.']
      ]
    },
    {
      pertanyaan: 'Langkah pertama dalam membuat algoritma adalah...',
      jawabanBenar: 'Analisis masalah',
      pilihan: [
        ['Analisis masalah', 'Benar. Kita harus memahami masalah sebelum merancang solusinya.'],
        ['Coding', 'Salah. Coding dilakukan setelah algoritma selesai.'],
        ['Testing', 'Salah. Testing dilakukan setelah program jadi.'],
        ['Marketing', 'Salah. Marketing adalah aktivitas bisnis.']
      ]
    },
    {
      pertanyaan: "Algoritma disebut 'efisien' jika...",
      jawabanBenar: 'Hemat sumber daya',
      pilihan: [
        ['Hemat sumber daya', 'Benar. Algoritma efisien berarti menggunakan waktu/memori seminimal mungkin.'],
        ['Boros memori', 'Salah. Boros memori adalah kebalikan dari efisien.'],
        ['Lambat', 'Salah. Lambat menunjukkan performa yang buruk.'],
        ['Terlalu rumit', 'Salah. Kerumitan berlebihan adalah tanda algoritma yang buruk.']
      ]
    },
    {
      pertanyaan: 'Perbedaan algoritma dan program terletak pada...',
      jawabanBenar: 'Sifatnya',
      pilihan: [
        ['Sifatnya', 'Benar. Algoritma bersifat konseptual (logika), program adalah teknis (kode).'],
        ['Warna', 'Salah. Warna tidak relevan.'],
        ['Tahun dibuat', 'Salah. Tahun pembuatan tidak menunjukkan perbedaan jenis.'],
        ['Harga', 'Salah. Harga tidak menunjukkan perbedaan nilai konseptual.']
      ]
    },
    {
      pertanyaan: 'Jika algoritma salah, maka...',
      jawabanBenar: 'Hasil akan salah',
      pilihan: [
        ['Program error', 'Salah. Belum tentu error, tapi outputnya tidak akurat.'],
        ['Program benar', 'Salah. Logika yang salah menghasilkan perilaku yang salah.'],
        ['Hasil akan salah', 'Benar. Input yang benar dengan algoritma yang salah pasti menghasilkan output salah.'],
        ['Tidak ada masalah', 'Salah. Hasil salah adalah masalah besar.']
      ]
    },
    {
      pertanyaan: 'Karakteristik penting algoritma adalah...',
      jawabanBenar: 'Jelas',
      pilihan: [
        ['Jelas', 'Benar. Kejelasan adalah aspek terpenting agar instruksi bisa diikuti.'],
        ['Samar', 'Salah. Samar justru membingungkan.'],
        ['Rahasia', 'Salah. Algoritma tidak boleh bersifat rahasia.'],
        ['Panjang', 'Salah. Pendek dan tepat sasaran lebih diutamakan.']
      ]
    },
    {
      pertanyaan: 'Algoritma membantu dalam...',
      jawabanBenar: 'Pemecahan masalah',
      pilihan: [
        ['Pemecahan masalah', 'Benar. Fungsi utama algoritma adalah menyediakan jalan keluar.'],
        ['Membuat masalah', 'Salah. Algoritma justru bertujuan menyelesaikan masalah.'],
        ['Menghapus data', 'Salah. Menghapus data hanyalah salah satu tindakan spesifik.'],
        ['Bermain game', 'Salah. Bermain game adalah penggunaan algoritma, bukan tujuan utamanya.']
      ]
    },
    {
      pertanyaan: 'Siapa yang mengeksekusi algoritma?',
      jawabanBenar: 'Komputer/Manusia',
      pilihan: [
        ['Komputer/Manusia', 'Benar. Manusia bisa mengikuti instruksi resep, komputer mengikuti instruksi kode.'],
        ['Hanya robot', 'Salah. Terlalu membatasi.'],
        ['Hanya mesin', 'Salah. Algoritma bisa dijalankan secara manual.'],
        ['Hanya hewan', 'Salah. Hewan tidak memiliki kemampuan menjalankan algoritma yang kompleks.']
      ]
    },
    {
      pertanyaan: 'Struktur penulisan algoritma yang paling dasar, yang menggunakan bahasa sehari-hari untuk mendeskripsikan langkah-langkah, disebut penyajian secara...',
      jawabanBenar: 'Bahasa Natural (Narasi)',
      pilihan: [
        ['Pseudocode', 'Salah. Pseudocode menggunakan notasi menyerupai kode pemrograman.'],
        ['Flowchart', 'Salah. Flowchart adalah penyajian grafis/simbol.'],
        ['Bahasa Natural (Narasi)', 'Benar. Narasi adalah bentuk paling dasar dan mudah dipahami manusia.'],
        ['Bahasa Pemrograman', 'Salah. Ini adalah langkah implementasi, bukan penyajian algoritma.']
      ]
    },
    {
      pertanyaan: "Bagian 'Deklarasi' dalam struktur penulisan algoritma berfungsi untuk...",
      jawabanBenar: 'Mendefinisikan variabel, konstanta, dan tipe data yang akan digunakan',
      pilihan: [
        ['Menuliskan proses perhitungan', 'Salah. Perhitungan masuk dalam bagian Deskripsi/Proses.'],
        ['Mendefinisikan variabel, konstanta, dan tipe data yang akan digunakan', 'Benar. Deklarasi adalah tempat mengenalkan semua elemen data di awal.'],
        ['Menuliskan input data', 'Salah. Input masuk dalam bagian Deskripsi/Proses.'],
        ['Mengakhiri jalannya algoritma', 'Salah. Ini fungsi Terminator.']
      ]
    },
    {
      pertanyaan: "Bagian 'Deskripsi' dalam struktur penulisan algoritma berisi...",
      jawabanBenar: 'Kumpulan instruksi atau langkah-langkah eksekusi',
      pilihan: [
        ['Daftar variabel', 'Salah. Daftar variabel ada di bagian Deklarasi.'],
        ['Kumpulan instruksi atau langkah-langkah eksekusi', 'Benar. Deskripsi adalah inti dari algoritma yang berisi urutan langkah kerja.'],
        ['Judul algoritma saja', 'Salah. Judul algoritma terletak di bagian Header.'],
        ['Komentar mengenai algoritma', 'Salah. Komentar hanyalah pelengkap.']
      ]
    }
  ]
}