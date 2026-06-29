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

export const Struktur: Modul = { 
  id: 'modul-6', 
  judul: 'Struktur Dasar Algoritma', 
  deskripsi: 'Menguji pemahaman mengenai tiga struktur kontrol utama dalam algoritma: Sequence, Selection, dan Iteration.', 
  waktu: '45 Menit', 
  ringkasan: 'Algoritma disusun menggunakan tiga struktur kendali dasar yaitu runtunan (sequence) yang berjalan linear, pemilihan (selection) yang mengarahkan alur berdasarkan kondisi logika, dan perulangan (iteration) yang mengeksekusi instruksi berulang kali.',
  soal: [
    {
      pertanyaan: 'Apa tiga struktur dasar yang membentuk algoritma?',
      jawabanBenar: 'Sequence, Selection, Iteration',
      pilihan: [
        ['Input, Proses, Output', 'Salah. Ini adalah elemen fungsional, bukan struktur kontrol algoritma.'],
        ['Sequence, Selection, Iteration', 'Benar. Tiga struktur dasar adalah Sequence (Runtunan), Selection (Pemilihan), dan Iteration (Perulangan).'],
        ['Variabel, Konstanta, Tipe Data', 'Salah. Ini adalah komponen dasar data dalam pemrograman.'],
        ['Deklarasi, Deskripsi, Eksekusi', 'Salah. Ini adalah bagian dari penulisan algoritma secara umum.']
      ]
    },
    {
      pertanyaan: "Struktur 'Sequence' dalam algoritma berarti...",
      jawabanBenar: 'Instruksi dijalankan secara berurutan dari atas ke bawah',
      pilihan: [
        ['Instruksi dijalankan secara berurutan dari atas ke bawah', 'Benar. Sequence menjamin instruksi dikerjakan urut sesuai penulisan.'],
        ['Instruksi dijalankan jika kondisi terpenuhi', 'Salah. Ini adalah ciri struktur Selection.'],
        ['Instruksi dijalankan berulang-ulang', 'Salah. Ini adalah ciri struktur Iteration.'],
        ['Instruksi dijalankan secara melompat', 'Salah. Algoritma harus terstruktur, tidak boleh melompat acak.']
      ]
    },
    {
      pertanyaan: "Struktur 'Selection' digunakan untuk...",
      jawabanBenar: 'Memilih tindakan berdasarkan kondisi tertentu',
      pilihan: [
        ['Melakukan perhitungan matematika', 'Salah. Perhitungan dilakukan di dalam struktur Sequence.'],
        ['Memilih tindakan berdasarkan kondisi tertentu', 'Benar. Selection menggunakan kondisi (seperti IF-THEN) untuk memilih alur.'],
        ['Menyimpan nilai ke dalam variabel', 'Salah. Ini adalah operasi penugasan (assignment).'],
        ['Mengulang blok instruksi', 'Salah. Ini adalah ciri struktur Iteration.']
      ]
    },
    {
      pertanyaan: "Struktur 'Iteration' atau 'Looping' bertujuan untuk...",
      jawabanBenar: 'Menjalankan instruksi yang sama berkali-kali selama kondisi terpenuhi',
      pilihan: [
        ['Mengambil keputusan', 'Salah. Keputusan adalah tugas struktur Selection.'],
        ['Menghentikan program secara mendadak', 'Salah. Penghentian program biasanya diatur oleh kondisi akhir loop.'],
        ['Menjalankan instruksi yang sama berkali-kali selama kondisi terpenuhi', 'Benar. Iteration mengulang blok kode selama syarat terpenuhi.'],
        ['Mendeklarasikan variabel baru', 'Salah. Deklarasi dilakukan di bagian awal algoritma.']
      ]
    },
    {
      pertanyaan: 'Dalam struktur Selection, jika kondisi bernilai SALAH, maka...',
      jawabanBenar: "Program akan menjalankan blok 'Else' (jika ada)",
      pilihan: [
        ['Program langsung error', 'Salah. Program tidak harus error.'],
        ["Program akan menjalankan blok 'Else' (jika ada)", 'Benar. Jika kondisi False, program mencari blok alternatif (Else).'],
        ['Program akan mengulang ke atas', 'Salah. Pengulangan terjadi di struktur Iteration.'],
        ['Program akan berhenti total', 'Salah. Program bisa lanjut ke instruksi berikutnya.']
      ]
    },
    {
      pertanyaan: 'Manakah yang merupakan contoh penerapan struktur Selection?',
      jawabanBenar: 'Menentukan apakah sebuah bilangan ganjil atau genap',
      pilihan: [
        ['Menghitung luas lingkaran', 'Salah. Ini adalah perhitungan sekuensial.'],
        ['Menentukan apakah sebuah bilangan ganjil atau genap', 'Benar. Memerlukan kondisi (IF bil % 2 == 0) untuk memilih output.'],
        ["Menampilkan teks 'Halo' sebanyak 10 kali", 'Salah. Ini adalah contoh struktur Iteration.'],
        ['Membaca data dari keyboard', 'Salah. Ini adalah instruksi Input.']
      ]
    },
    {
      pertanyaan: 'Apa nama lain dari struktur Runtunan?',
      jawabanBenar: 'Sequence',
      pilihan: [
        ['Branching', 'Salah. Branching adalah nama lain Selection.'],
        ['Looping', 'Salah. Looping adalah nama lain Iteration.'],
        ['Sequence', 'Benar. Sequence adalah istilah standar untuk Runtunan.'],
        ['Variable', 'Salah. Variabel adalah tempat penyimpanan data.']
      ]
    },
    {
      pertanyaan: "Kondisi 'WHILE' dalam algoritma biasanya digunakan untuk struktur...",
      jawabanBenar: 'Iteration',
      pilihan: [
        ['Sequence', 'Salah. Sequence tidak menggunakan kondisi WHILE.'],
        ['Selection', 'Salah. Selection menggunakan IF, bukan WHILE.'],
        ['Iteration', 'Benar. WHILE adalah bentuk umum untuk Iterasi (selama kondisi True).'],
        ['Declaration', 'Salah. Deklarasi tidak menggunakan kondisi.']
      ]
    },
    {
      pertanyaan: 'Jika kita ingin membuat program yang mencetak angka 1 sampai 100, struktur dasar apa yang paling efektif?',
      jawabanBenar: 'Iteration',
      pilihan: [
        ['Sequence', 'Salah. Sequence akan membuat kode terlalu panjang (100 baris cetak).'],
        ['Selection', 'Salah. Selection tidak digunakan untuk mengulang.'],
        ['Iteration', 'Benar. Iteration memungkinkan kita mencetak banyak angka dengan sedikit baris kode.'],
        ['Assignment', 'Salah. Assignment adalah pemberian nilai.']
      ]
    },
    {
      pertanyaan: 'Struktur algoritma dasar bersifat hierarkis, artinya...',
      jawabanBenar: 'Satu struktur bisa berada di dalam struktur lain (nested)',
      pilihan: [
        ['Algoritma bisa saling melengkapi', 'Salah. Bukan definisi hierarkis.'],
        ['Satu struktur bisa berada di dalam struktur lain (nested)', 'Benar. Seringkali kita menaruh Selection di dalam Iteration (misal IF di dalam WHILE).'],
        ['Hanya bisa menggunakan satu jenis struktur saja', 'Salah. Algoritma kompleks biasanya gabungan ketiganya.'],
        ['Urutan tidak berpengaruh', 'Salah. Urutan sangat berpengaruh.']
      ]
    },
    {
      pertanyaan: "Apa yang dimaksud dengan 'Nested Selection'?",
      jawabanBenar: 'Percabangan di dalam percabangan',
      pilihan: [
        ['Percabangan di dalam percabangan', 'Benar. Nested berarti bersarang (IF di dalam IF).'],
        ['Perulangan yang tidak ada akhirnya', 'Salah. Perulangan tanpa akhir disebut Infinite Loop.'],
        ['Instruksi yang berurutan', 'Salah. Ini adalah Sequence.'],
        ['Variabel yang diubah nilainya', 'Salah. Ini adalah Assignment.']
      ]
    },
    {
      pertanyaan: 'Dalam struktur Selection, jika terdapat banyak kondisi (lebih dari dua), kita bisa menggunakan...',
      jawabanBenar: 'IF-ELSE-IF',
      pilihan: [
        ['IF-THEN saja', 'Salah. IF-THEN hanya menangani satu kondisi.'],
        ['IF-ELSE-IF', 'Benar. IF-ELSE-IF memungkinkan pengecekan banyak kondisi secara berantai.'],
        ['WHILE saja', 'Salah. WHILE untuk perulangan.'],
        ['Hanya Sequence', 'Salah. Sequence tidak untuk pemilihan.']
      ]
    },
    {
      pertanyaan: 'Apa karakteristik utama dari struktur Sequence?',
      jawabanBenar: 'Instruksi dieksekusi satu persatu sesuai urutan',
      pilihan: [
        ['Punya kondisi', 'Salah. Tidak ada kondisi di Sequence murni.'],
        ['Punya pengulangan', 'Salah. Tidak ada pengulangan di Sequence murni.'],
        ['Instruksi dieksekusi satu persatu sesuai urutan', 'Benar. Inilah prinsip dasar Runtunan.'],
        ['Bisa melompat ke baris manapun', 'Salah. Melompat acak adalah gaya pemrograman yang buruk (spaghetti code).']
      ]
    },
    {
      pertanyaan: 'Contoh penggunaan struktur Iteration dalam kehidupan sehari-hari adalah...',
      jawabanBenar: 'Berjalan menaiki anak tangga satu per satu sampai puncak',
      pilihan: [
        ['Membuat keputusan membeli baju', 'Salah. Ini adalah Selection.'],
        ['Berjalan menaiki anak tangga satu per satu sampai puncak', "Benar. Aksi 'naik tangga' diulang sampai kondisi 'puncak' tercapai."],
        ['Membaca daftar belanja', 'Salah. Ini adalah Sequence.'],
        ['Menulis nama di buku', 'Salah. Ini adalah Sequence.']
      ]
    },
    {
      pertanyaan: 'Jika sebuah algoritma tidak memiliki bagian Iteration, apakah algoritma tersebut tetap sah?',
      jawabanBenar: 'Ya, algoritma bisa hanya terdiri dari Sequence dan Selection',
      pilihan: [
        ['Ya, algoritma bisa hanya terdiri dari Sequence dan Selection', 'Benar. Tidak semua masalah memerlukan perulangan (contoh: hitung luas persegi).'],
        ['Tidak, algoritma wajib punya Iteration', 'Salah. Iteration tidak wajib ada.'],
        ['Tidak, harus punya Selection', 'Salah. Selection juga tidak wajib ada.'],
        ['Tidak bisa berjalan sama sekali', 'Salah. Program tanpa loop tetap bisa berjalan.']
      ]
    },
    {
      pertanyaan: 'Manakah istilah yang paling tepat untuk menggambarkan struktur kontrol algoritma?',
      jawabanBenar: 'Control flow',
      pilihan: [
        ['Sintaks', 'Salah. Sintaks adalah aturan penulisan.'],
        ['Control flow', 'Benar. Control flow (alur kontrol) menentukan arah jalannya algoritma.'],
        ['Data structure', 'Salah. Data structure adalah cara menyimpan data.'],
        ['Variable', 'Salah. Variabel adalah data.']
      ]
    },
    {
      pertanyaan: 'Apa yang dimaksud dengan kondisi dalam struktur Selection?',
      jawabanBenar: 'Pernyataan bernilai logika (Boolean: True/False)',
      pilihan: [
        ['Nilai yang akan diolah', 'Salah. Itu variabel.'],
        ['Pernyataan bernilai logika (Boolean: True/False)', 'Benar. Kondisi harus menghasilkan nilai logis untuk menentukan arah.'],
        ['Nama algoritma', 'Salah. Nama algoritma hanya berfungsi sebagai identitas, bukan sebagai kondisi.'],
        ['Jumlah baris instruksi', 'Salah. Banyaknya baris instruksi tidak memengaruhi kondisi dalam struktur Selection.']
      ]
    },
    {
      pertanyaan: 'Dalam struktur Iteration, apa yang terjadi jika kondisi awal sudah bernilai FALSE?',
      jawabanBenar: 'Loop tidak akan pernah dijalankan',
      pilihan: [
        ['Loop tetap berjalan sekali', 'Salah. Ini terjadi pada DO-WHILE.'],
        ['Loop tidak akan pernah dijalankan', 'Benar. Pada WHILE (pre-test loop), jika kondisi false sejak awal, badan loop dilewati.'],
        ['Loop akan error', 'Salah. Kondisi False bukan kesalahan (error), melainkan kondisi normal yang menyebabkan loop dilewati.'],
        ['Loop akan dipaksa TRUE', 'Salah. Program tidak mengubah kondisi secara otomatis. Nilai kondisi tetap sesuai hasil evaluasinya.']
      ]
    },
    {
      pertanyaan: 'Struktur Sequence memberikan jaminan apa dalam algoritma?',
      jawabanBenar: 'Prediktabilitas alur (berurutan)',
      pilihan: [
        ['Kecepatan eksekusi', 'Salah. Sequence tidak menjamin program berjalan lebih cepat, tetapi mengatur urutan eksekusi instruksi.'],
        ['Prediktabilitas alur (berurutan)', 'Benar. Kita tahu pasti instruksi mana yang dikerjakan lebih dulu.'],
        ['Keamanan data', 'Salah. Keamanan data bergantung pada mekanisme lain, bukan pada struktur Sequence.'],
        ['Hasil selalu benar', 'Salah. Urutan benar tidak menjamin logika benar.']
      ]
    },
    {
      pertanyaan: 'Berapa banyak jumlah struktur dasar dalam satu algoritma?',
      jawabanBenar: 'Bisa kombinasi ketiganya sebanyak yang diperlukan',
      pilihan: [
        ['Hanya satu', 'Salah. Sebuah algoritma tidak dibatasi hanya menggunakan satu jenis struktur.'],
        ['Bisa kombinasi ketiganya sebanyak yang diperlukan', 'Benar. Kita bisa menggabungkan Sequence, Selection, dan Iteration sesuai kebutuhan.'],
        ['Maksimal tiga', 'Salah. Walaupun hanya ada tiga jenis struktur dasar, penggunaannya dapat diulang dan dikombinasikan berkali-kali.'],
        ['Harus genap', 'Salah. Tidak ada aturan bahwa jumlah struktur yang digunakan harus genap.']
      ]
    },
    {
      pertanyaan: 'Mengapa struktur kontrol (Control Flow) sangat penting?',
      jawabanBenar: 'Agar algoritma bisa dinamis dan menyelesaikan masalah yang bervariasi',
      pilihan: [
        ['Agar program terlihat kompleks', 'Salah. Tujuan control flow bukan membuat program tampak rumit, melainkan mengatur jalannya program.'],
        ['Agar algoritma bisa dinamis dan menyelesaikan masalah yang bervariasi', 'Benar. Algoritma butuh percabangan dan perulangan agar fleksibel.'],
        ['Agar algoritma tidak perlu input', 'Salah. Banyak algoritma tetap membutuhkan input dari pengguna atau sumber data lain.'],
        ['Agar tidak perlu variabel', 'Salah. Variabel tetap diperlukan untuk menyimpan dan mengolah data dalam algoritma.']
      ]
    },
    {
      pertanyaan: 'Dalam struktur Selection, jika kita ingin menjalankan blok kode tertentu hanya jika kondisi terpenuhi, kita cukup menggunakan...',
      jawabanBenar: 'IF-THEN',
      pilihan: [
        ['IF-THEN', 'Benar. IF-THEN cukup untuk aksi bersyarat tunggal.'],
        ['WHILE', 'Salah. WHILE untuk looping.'],
        ['Sequence', 'Salah. Sequence menjalankan instruksi secara berurutan tanpa memeriksa kondisi.'],
        ['For loop', 'Salah. FOR digunakan untuk perulangan dengan jumlah iterasi tertentu, bukan untuk percabangan.']
      ]
    },
    {
      pertanyaan: 'Apa nama lain dari struktur Perulangan?',
      jawabanBenar: 'Iteration',
      pilihan: [
        ['Selection', 'Salah. Selection adalah struktur pemilihan atau percabangan.'],
        ['Sequence', 'Salah. Sequence adalah struktur runtunan.'],
        ['Iteration', 'Benar. Iteration adalah istilah standar untuk pengulangan.'],
        ['Assignment', 'Salah. Assignment adalah proses pemberian nilai ke dalam variabel.']
      ]
    },
    {
      pertanyaan: 'Mana yang benar mengenai struktur algoritma?',
      jawabanBenar: 'Sequence adalah struktur yang paling dasar',
      pilihan: [
        ['Satu struktur tidak boleh berada dalam struktur lain', 'Salah. Boleh bersarang.'],
        ['Selection harus selalu berada di akhir', 'Salah. Selection dapat ditempatkan di mana saja sesuai kebutuhan logika program.'],
        ['Sequence adalah struktur yang paling dasar', 'Benar. Sequence adalah fondasi dasar.'],
        ['Iteration tidak membutuhkan kondisi', 'Salah. Iteration pasti butuh kondisi penghenti.']
      ]
    },
    {
      pertanyaan: 'Kunci utama pembuatan algoritma yang baik adalah...',
      jawabanBenar: 'Memahami dan memilih struktur yang tepat untuk masalah yang ada',
      pilihan: [
        ['Menggunakan banyak struktur Selection', 'Salah. Banyaknya Selection tidak menentukan kualitas algoritma.'],
        ['Memahami dan memilih struktur yang tepat untuk masalah yang ada', 'Benar. Pemilihan struktur yang tepat akan membuat algoritma efektif.'],
        ['Menghindari struktur Iteration', 'Salah. Iteration sangat penting untuk menyelesaikan masalah yang membutuhkan pengulangan.'],
        ['Menulis kode yang panjang', 'Salah. Algoritma yang baik justru mengutamakan logika yang jelas, efisien, dan mudah dipelihara, bukan panjangnya kode.']
      ]
    }
  ]
}