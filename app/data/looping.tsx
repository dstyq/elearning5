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

export const Looping: Modul = {
  id: 'modul-4',
  judul: 'Perulangan (Looping)',
  deskripsi: 'Menguji pemahaman tentang konsep perulangan dalam algoritma, termasuk penggunaan For, While, Do-While, Nested Loop, serta fungsi Break dan Continue.',
  waktu: '45 Menit',
  ringkasan: 'Looping adalah struktur kontrol untuk mengeksekusi instruksi secara berulang selama kondisi terpenuhi. Terdapat perulangan For (untuk iterasi yang pasti), While (pengecekan kondisi di awal), dan Do-While (pengecekan kondisi di akhir sehingga minimal berjalan satu kali).',
  soal: [
    {
      pertanyaan: 'Apa yang dimaksud dengan perulangan (looping) dalam algoritma?',
      jawabanBenar: 'Proses mengeksekusi sekumpulan instruksi secara berulang selama kondisi terpenuhi',
      pilihan: [
        ['Proses penghentian program secara paksa', 'Salah. Looping justru menjalankan program.'],
        ['Proses mengeksekusi sekumpulan instruksi secara berulang selama kondisi terpenuhi', 'Benar. Looping merupakan struktur kontrol yang digunakan untuk mengulang proses selama syarat tertentu masih bernilai benar.'],
        ['Proses memindahkan data ke memori', 'Salah. Memindahkan data ke memori merupakan proses pengelolaan data, bukan perulangan.'],
        ['Proses memilih alur berdasarkan kondisi', 'Salah. Ini adalah definisi struktur Selection.']
      ]
    },
    {
      pertanyaan: 'Struktur perulangan yang kondisinya diperiksa di awal adalah...',
      jawabanBenar: 'While',
      pilihan: [
        ['Do-While', 'Salah. Do-While memeriksa di akhir.'],
        ['While', 'Benar. While memeriksa kondisi di awal (pre-test).'],
        ['Sequence', 'Salah. Sequence bukan perulangan.'],
        ['If-Then', 'Salah. If-Then adalah percabangan.']
      ]
    },
    {
      pertanyaan: "Apa perbedaan utama antara struktur 'While' dan 'Do-While'?",
      jawabanBenar: 'Do-While pasti dijalankan minimal sekali, While false',
      pilihan: [
        ['While pasti dijalankan minimal sekali, Do-While false', 'Salah. Justru While bisa tidak dijalankan sama sekali jika kondisi awal bernilai False.'],
        ['Do-While pasti dijalankan minimal sekali, While false', 'Benar. Do-While menjalankan blok instruksi terlebih dahulu sebelum mengecek kondisi.'],
        ['Tidak ada perbedaan', 'Salah. Keduanya berbeda pada letak pemeriksaan kondisi.'],
        ['While untuk angka, Do-While untuk teks', 'Salah. Keduanya dapat digunakan untuk berbagai jenis data sesuai kebutuhan.']
      ]
    },
    {
      pertanyaan: 'Struktur perulangan yang biasanya digunakan jika jumlah iterasi sudah diketahui secara pasti adalah...',
      jawabanBenar: 'For',
      pilihan: [
        ['For', 'Benar. For paling sesuai ketika jumlah pengulangan sudah diketahui sejak awal.'],
        ['While', 'Salah. While untuk kondisi yang tidak pasti.'],
        ['Do-While', 'Salah. Do-While digunakan ketika proses harus dijalankan minimal satu kali.'],
        ['If', 'Salah. If adalah struktur percabangan, bukan perulangan.']
      ]
    },
    {
      pertanyaan: 'Kondisi yang menyebabkan perulangan tidak pernah berhenti disebut...',
      jawabanBenar: 'Infinite Loop',
      pilihan: [
        ['Infinite Loop', 'Benar. Infinite loop terjadi jika kondisi berhenti tidak pernah dicapai.'],
        ['Dead Lock', 'Salah. Deadlock adalah kondisi saling menunggu pada sistem atau proses, bukan loop tak berujung.'],
        ['Nested Loop', 'Salah. Nested loop adalah loop di dalam loop.'],
        ['Termination', 'Salah. Termination berarti penghentian proses, bukan kondisi loop tanpa akhir.']
      ]
    },
    {
      pertanyaan: 'Apa sebutan untuk perulangan yang berada di dalam perulangan lainnya?',
      jawabanBenar: 'Nested Loop',
      pilihan: [
        ['Infinite Loop', 'Salah. Infinite Loop berarti perulangan tanpa akhir.'],
        ['Nested Loop', 'Benar. Nested Loop adalah perulangan yang berada di dalam perulangan lain.'],
        ['While Loop', 'Salah. While Loop hanyalah salah satu jenis perulangan.'],
        ['Counter Loop', 'Salah. Counter Loop mengacu pada perulangan yang menggunakan penghitung, bukan perulangan bersarang.']
      ]
    },
    {
      pertanyaan: 'Komponen apa yang wajib ada agar perulangan While dapat berhenti?',
      jawabanBenar: 'Mekanisme pengubah kondisi (update condition)',
      pilihan: [
        ['Counter yang tidak berubah', 'Salah. Counter harus berubah agar kondisi akhirnya dapat tercapai.'],
        ['Kondisi yang selalu bernilai True', 'Salah. Kondisi yang selalu True justru menyebabkan Infinite Loop.'],
        ['Mekanisme pengubah kondisi (update condition)', 'Benar. Variabel yang digunakan dalam kondisi harus diperbarui agar loop dapat berhenti.'],
        ["Pernyataan 'Start'", 'Salah. Start hanya menandai awal algoritma, bukan penghenti loop.']
      ]
    },
    {
      pertanyaan: "Berapakah minimal iterasi yang dilakukan oleh struktur perulangan 'For'?",
      jawabanBenar: 'Nol kali (jika kondisi awal tidak terpenuhi)',
      pilihan: [
        ['Satu kali', 'Salah. Tidak selalu dijalankan jika kondisi awal tidak memenuhi syarat.'],
        ['Nol kali (jika kondisi awal tidak terpenuhi)', 'Benar. Jika nilai awal sudah melampaui batas akhir, loop tidak jalan.'],
        ['Dua kali', 'Salah. Jumlah iterasi bergantung pada kondisi.'],
        ['Tidak menentu', 'Salah. Jumlah minimalnya tetap bisa nol.']
      ]
    },
    {
      pertanyaan: "Pada perulangan 'For', bagian manakah yang berfungsi sebagai inisialisasi awal?",
      jawabanBenar: 'Initialization',
      pilihan: [
        ['Initialization', 'Benar. Initialization memberi nilai awal pada variabel kontrol.'],
        ['Condition', 'Salah. Condition menentukan apakah loop tetap berjalan.'],
        ['Increment/Decrement', 'Salah. Bagian ini memperbarui nilai variabel kontrol setiap iterasi.'],
        ['Body', 'Salah. Body berisi instruksi yang dijalankan berulang.']
      ]
    },
    {
      pertanyaan: "Instruksi 'Break' di dalam loop berfungsi untuk...",
      jawabanBenar: 'Melompati sisa instruksi dan keluar dari loop secara paksa',
      pilihan: [
        ['Mengulang loop dari awal', 'Salah. Break tidak mengulang loop.'],
        ['Melompati sisa instruksi dan keluar dari loop secara paksa', 'Benar. Break menghentikan eksekusi perulangan seketika tanpa menunggu kondisi akhir.'],
        ['Menjeda program', 'Salah. Break tidak berfungsi sebagai jeda program.'],
        ['Mengubah kondisi menjadi true', 'Salah. Break tidak mengubah nilai kondisi.']
      ]
    },
    {
      pertanyaan: "Instruksi 'Continue' di dalam loop berfungsi untuk...",
      jawabanBenar: 'Melompati sisa instruksi pada iterasi saat ini dan lanjut ke iterasi berikutnya',
      pilihan: [
        ['Menghentikan seluruh loop', 'Salah. Menghentikan loop adalah fungsi Break.'],
        ['Melompati sisa instruksi pada iterasi saat ini dan lanjut ke iterasi berikutnya', 'Benar. Continue melewatkan sisa kode di dalam loop.'],
        ['Mengulang loop dari awal', 'Salah. Continue melanjutkan ke iterasi berikutnya, bukan kembali ke awal.'],
        ['Menghapus variabel counter', 'Salah. Continue tidak mengubah atau menghapus variabel.']
      ]
    },
    {
      pertanyaan: 'Mana di bawah ini yang merupakan bagian dari struktur perulangan For?',
      jawabanBenar: 'Nilai awal, kondisi, penambahan/pengurangan (update)',
      pilihan: [
        ['Nilai awal, kondisi, penambahan/pengurangan (update)', 'Benar. For mencakup ketiganya.'],
        ['Hanya kondisi', 'Salah. For tidak hanya terdiri dari kondisi.'],
        ['Hanya nilai awal', 'Salah. Nilai awal saja tidak cukup untuk menjalankan perulangan.'],
        ['Hanya perintah print', 'Salah. Print hanyalah salah satu instruksi yang dapat ditempatkan di dalam loop.']
      ]
    },
    {
      pertanyaan: 'Dalam perulangan Do-While, kondisi diperiksa di mana?',
      jawabanBenar: 'Di akhir loop',
      pilihan: [
        ['Di awal loop', 'Salah. Pemeriksaan kondisi dilakukan setelah badan loop selesai dijalankan.'],
        ['Di tengah loop', 'Salah. Tidak ada pemeriksaan kondisi di tengah loop.'],
        ['Di akhir loop', 'Benar. Kondisi diperiksa setelah eksekusi badan loop. Inilah ciri utama Do-While.'],
        ['Tidak diperiksa', 'Salah. Do-While tetap menggunakan kondisi.']
      ]
    },
    {
      pertanyaan: 'Jika kita ingin melakukan perulangan berdasarkan kondisi boolean, struktur apa yang paling tepat?',
      jawabanBenar: 'While',
      pilihan: [
        ['For', 'Salah. For lebih cocok untuk jumlah iterasi yang sudah diketahui.'],
        ['While', 'Benar. While mengulang selama kondisi Boolean bernilai True.'],
        ['Sequence', 'Salah. Sequence bukan perulangan.'],
        ['Assignment', 'Salah. Assignment hanya memberikan nilai pada variabel.']
      ]
    },
    {
      pertanyaan: 'Apa sebutan untuk variabel yang digunakan untuk mengontrol perulangan?',
      jawabanBenar: 'Variabel counter/loop control',
      pilihan: [
        ['Variabel counter/loop control', 'Benar. Variabel ini digunakan untuk mengendalikan jalannya perulangan.'],
        ['Variabel konstanta', 'Salah. Konstanta nilainya tidak berubah.'],
        ['Variabel static', 'Salah. Static berkaitan dengan ruang lingkup atau masa hidup variabel.'],
        ['Variabel global', 'Salah. Global menunjukkan cakupan variabel, bukan fungsi pengendali loop']
      ]
    },
    {
      pertanyaan: 'Apakah perulangan bisa memanggil fungsi di dalamnya?',
      jawabanBenar: 'Bisa',
      pilihan: [
        ['Tidak bisa', 'Salah. Fungsi dapat dipanggil di dalam perulangan.'],
        ['Bisa', 'Benar. Perulangan bisa menjalankan fungsi sesuai kebutuhan.'],
        ['Hanya jika fungsi itu void', 'Salah. Semua jenis fungsi dapat dipanggil selama sesuai dengan sintaks bahasa pemrograman.'],
        ['Hanya jika di luar loop', 'Salah. Fungsi justru sering dipanggil di dalam loop.']
      ]
    },
    {
      pertanyaan: 'Pada perulangan For, kenaikan nilai counter disebut dengan...',
      jawabanBenar: 'Increment',
      pilihan: [
        ['Increment', 'Benar. Increment berarti menambah nilai counter, biasanya sebesar satu.'],
        ['Decrement', 'Salah. Decrement berarti mengurangi nilai counter.'],
        ['Inisialisasi', 'Salah. Inisialisasi hanya memberikan nilai awal.'],
        ['Conditioning', 'Salah. Conditioning bukan istilah untuk menaikkan nilai counter.']
      ]
    },
    {
      pertanyaan: 'Apa hasil dari perulangan For i = 1 to 3 jika badan loop mencetak nilai i?',
      jawabanBenar: '1 2 3',
      pilihan: [
        ['1 2 3', 'Benar. Nilai i 1, 2, 3.'],
        ['1 2', 'Salah. Nilai 3 juga ikut dicetak karena masih memenuhi batas perulangan.'],
        ['0 1 2', 'Salah. Nilai awal dimulai dari 1, bukan 0.'],
        ['3 2 1', 'Salah. Urutan tersebut hanya terjadi jika perulangan menurun.']
      ]
    },
    {
      pertanyaan: 'Perulangan yang tidak menggunakan counter numerik namun berdasarkan kondisi tertentu disebut...',
      jawabanBenar: 'Condition-controlled loop',
      pilihan: [
        ['Counter-controlled loop', 'Salah. Counter-controlled menggunakan variabel penghitung.'],
        ['Condition-controlled loop', 'Benar. Loop dijalankan berdasarkan hasil evaluasi suatu kondisi.'],
        ['Infinite loop', 'Salah. Infinite loop tidak pernah berhenti.'],
        ['Fixed loop', 'Salah. Fixed loop menunjukkan jumlah iterasi tetap.']
      ]
    },
    {
      pertanyaan: 'Apa yang terjadi jika kondisi pada loop While bernilai False sejak awal?',
      jawabanBenar: 'Loop dilewati sama sekali',
      pilihan: [
        ['Program crash', 'Salah. Program tetap berjalan normal.'],
        ['Loop dilewati sama sekali', 'Benar. Karena kondisi awal False, badan loop tidak dijalankan.'],
        ['Loop tetap berjalan sekali', 'Salah. Hal ini hanya berlaku pada Do-While.'],
        ['Error sintaks', 'Salah. Kondisi False bukan kesalahan sintaks.']
      ]
    },
    {
      pertanyaan: 'Berapa banyak blok instruksi yang bisa dimasukkan ke dalam satu perulangan?',
      jawabanBenar: 'Tergantung kebutuhan',
      pilihan: [
        ['Hanya satu', 'Salah. Satu loop dapat berisi banyak instruksi.'],
        ['Tergantung kebutuhan', 'Benar. Bisa berjumlah tak terbatas selama masih sesuai kebutuhan program.'],
        ['Maksimal sepuluh', 'Salah. Tidak ada batasan seperti itu.'],
        ['Tidak boleh ada instruksi', 'Salah. Justru tujuan loop adalah menjalankan instruksi berulang.']
      ]
    },
    {
      pertanyaan: 'Dalam nested loop, perulangan mana yang diselesaikan lebih dahulu?',
      jawabanBenar: 'Loop dalam',
      pilihan: [
        ['Loop luar', 'Salah. Loop luar menunggu loop dalam selesai.'],
        ['Loop dalam', 'Benar. Pada setiap iterasi loop luar, loop dalam akan dijalankan hingga selesai terlebih dahulu.'],
        ['Keduanya bersamaan', 'Salah. Eksekusi dilakukan secara berurutan, bukan bersamaan.'],
        ['Loop luar selalu', 'Salah. Loop luar baru melanjutkan setelah loop dalam selesai.']
      ]
    },
    {
      pertanyaan: 'Penggunaan perulangan yang tidak efisien dapat menyebabkan...',
      jawabanBenar: 'Program menjadi lambat',
      pilihan: [
        ['Program menjadi lambat', 'Benar. Membebani CPU.'],
        ['Program menjadi aman', 'Salah. Efisiensi loop tidak berkaitan langsung dengan keamanan program.'],
        ['Program menjadi murah', 'Salah. Biaya program tidak ditentukan oleh penggunaan loop.'],
        ['Program menjadi cantik', 'Salah. Tampilan program tidak dipengaruhi oleh efisiensi perulangan.']
      ]
    },
    {
      pertanyaan: 'Apakah kita bisa menghentikan perulangan For di tengah jalan sebelum mencapai batas akhir?',
      jawabanBenar: 'Bisa dengan instruksi Break',
      pilihan: [
        ['Tidak bisa', 'Salah. Perulangan For dapat dihentikan sebelum selesai.'],
        ['Bisa dengan instruksi Break', 'Benar. Break digunakan untuk keluar dari loop sebelum mencapai kondisi akhirnya.'],
        ['Bisa dengan menghapus counter', 'Salah. Menghapus counter bukan cara yang benar dan dapat menyebabkan kesalahan.'],
        ['Bisa dengan mengganti bahasa', 'Salah. Bahasa pemrograman tidak memengaruhi fungsi Break.']
      ]
    },
    {
      pertanyaan: 'Apa yang menjadi ciri khas dari struktur Do-While dibandingkan struktur perulangan lainnya?',
      jawabanBenar: 'Eksekusi body loop dilakukan minimal satu kali',
      pilihan: [
        ['Kondisi di awal', 'Salah. Pemeriksaan kondisi di awal merupakan ciri While.'],
        ['Eksekusi body loop dilakukan minimal satu kali', 'Benar. Do-While selalu menjalankan badan loop terlebih dahulu sebelum memeriksa kondisi.'],
        ['Hanya bisa digunakan untuk counter', 'Salah. Do-While dapat digunakan untuk berbagai jenis kondisi, tidak hanya counter.'],
        ['Hanya bisa untuk input data', 'Salah. Do-While dapat digunakan pada berbagai proses yang memerlukan pengulangan, tidak terbatas pada input data.']
      ]
    }
  ]
};