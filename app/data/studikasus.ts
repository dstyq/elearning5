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

export const StudiKasus = {
  "id": "modul-studi-kasus-algoritma",
  "judul": "Studi Kasus Algoritma: Flowchart, Percabangan, dan Perulangan",
  "deskripsi": "Menguji kemampuan analisis alur logika program melalui studi kasus flowchart, struktur percabangan bertingkat (nested selection), dan pelacakan nilai variabel pada perulangan (looping).",
  "waktu": "45 Menit",
  "ringkasan": "Modul ini berisi kumpulan studi kasus konkret untuk menguji pemahaman operasional algoritma. Fokus utama meliputi urutan logis flowchart (Input-Proses-Output), evaluasi kondisi pada percabangan tunggal maupun bersarang (Nested IF), serta mekanisme kontrol perulangan (For, While, Do-While) beserta dampak dari modifikasi variabel counter.",
  "soal": [
    {
      "pertanyaan": "Diberikan algoritma berikut:\n1. Hitung L = p × l\n2. Input panjang\n3. Input lebar\n4. Tampilkan luas\n\nKesalahan pada algoritma tersebut adalah ....",
      "jawabanBenar": "Proses perhitungan dilakukan sebelum data diinput.",
      "pilihan": [
        ["Rumus luas salah.", "Salah. Rumus L = p × l sudah benar untuk menghitung luas persegi panjang."],
        ["Output seharusnya ditampilkan sebelum input.", "Salah. Output tidak boleh ditampilkan sebelum data diinput dan diproses."],
        ["Proses perhitungan dilakukan sebelum data diinput.", "Benar. Algoritma salah karena menghitung luas sebelum nilai panjang dan lebar dimasukkan. Seharusnya urutannya adalah Input → Proses → Output."],
        ["Program tidak memiliki output.", "Salah. Algoritma sudah memiliki output yaitu Tampilkan luas."]
      ]
    },
    {
      "pertanyaan": "Pada flowchart Menentukan Bilangan Ganjil atau Genap, keputusan diambil setelah suatu operasi dilakukan. Operasi tersebut adalah ....",
      "jawabanBenar": "Menghitung sisa hasil bagi bilangan dengan 2",
      "pilihan": [
        ["Mengurangi bilangan dengan 2", "Salah. Mengurangi bilangan dengan 2 tidak dapat menentukan apakah suatu bilangan ganjil atau genap."],
        ["Membagi bilangan dengan 10", "Salah. Pembagian dengan 10 tidak digunakan dalam algoritma untuk menentukan ganjil atau genap."],
        ["Menghitung sisa hasil bagi bilangan dengan 2", "Benar. Algoritma menentukan ganjil atau genap dengan memeriksa sisa hasil pembagian bilangan dengan 2 (operasi MOD). Jika sisanya 0 maka genap, jika tidak maka ganjil."],
        ["Mengalikan bilangan dengan 2", "Salah. Mengalikan bilangan dengan 2 bukan proses yang digunakan untuk menentukan jenis bilangan."]
      ]
    },
    {
      "pertanyaan": "Pada flowchart Mengirim Surat, apabila pengirim tidak mengingat alamat tujuan, langkah berikutnya yang benar adalah ....",
      "jawabanBenar": "Mencari alamat tujuan terlebih dahulu",
      "pilihan": [
        ["Langsung membeli perangko", "Salah. Perangko ditempel setelah alamat tujuan sudah ditulis pada amplop."],
        ["Pergi ke kantor pos untuk bertanya alamat", "Salah. Flowchart tidak menjelaskan bahwa alamat dicari di kantor pos."],
        ["Mencari alamat tujuan terlebih dahulu", "Benar. Jika alamat tidak diingat, langkah yang dilakukan adalah mencari alamat tujuan terlebih dahulu sebelum menuliskannya pada amplop."],
        ["Memasukkan surat ke amplop kembali", "Salah. Surat sudah dimasukkan ke dalam amplop pada langkah sebelumnya sehingga tidak perlu diulang."]
      ]
    },
    {
      "pertanyaan": "Pada algoritma Menentukan Kelulusan Mahasiswa, data apa saja yang ditampilkan sebagai output?",
      "jawabanBenar": "Nama mahasiswa, nilai, dan keterangan lulus/tidak lulus",
      "pilihan": [
        ["Nama mahasiswa dan jurusan", "Salah. Jurusan tidak termasuk data yang ditampilkan pada output algoritma."],
        ["Nilai dan IPK", "Salah. IPK tidak digunakan maupun ditampilkan dalam algoritma."],
        ["Nama mahasiswa, nilai, dan keterangan lulus/tidak lulus", "Benar. Output algoritma adalah nama mahasiswa, nilai, serta keterangan lulus atau tidak lulus."],
        ["Nama mahasiswa dan nomor induk", "Salah. Nomor induk mahasiswa tidak disebutkan sebagai bagian dari output."]
      ]
    },
    {
      "pertanyaan": "Pada flowchart Penerimaan Mahasiswa Baru, apabila persyaratan belum lengkap, proses berikutnya adalah ....",
      "jawabanBenar": "Mengulang proses mengumpulkan persyaratan",
      "pilihan": [
        ["Langsung mengikuti orientasi", "Salah. Orientasi hanya dilakukan setelah seluruh proses pendaftaran selesai."],
        ["Mengulang proses mengumpulkan persyaratan", "Benar. Jika persyaratan belum lengkap, flowchart mengarahkan proses kembali ke tahap mengumpulkan persyaratan hingga lengkap."],
        ["Langsung menerima kartu mahasiswa", "Salah. Kartu mahasiswa diberikan setelah persyaratan dinyatakan lengkap."],
        ["Membayar uang kuliah lagi", "Salah. Tidak ada proses membayar ulang apabila persyaratan belum lengkap."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nInput nilai\nIF nilai >= 80 THEN\n    Tampilkan \"A\"\nELSE\n    IF nilai >= 70 THEN\n        Tampilkan \"B\"\n    ELSE\n        Tampilkan \"C\"\n    ENDIF\nENDIF\n\nJika pengguna memasukkan nilai 75, output yang dihasilkan adalah ....",
      "jawabanBenar": "B",
      "pilihan": [
        ["A", "Salah. Nilai 75 tidak memenuhi syarat nilai ≥ 80."],
        ["B", "Benar. Karena nilai 75 tidak memenuhi syarat pertama, program memeriksa kondisi kedua (kondisi ELSE). Nilai 75 ≥ 70 sehingga outputnya adalah B."],
        ["C", "Salah. Output C hanya muncul jika nilai kurang dari 70."],
        ["Tidak ada output", "Salah. Algoritma tetap menghasilkan output yang valid sesuai kondisi nilai."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nInput umur\nInput memiliki_KTP\nIF umur >= 17 THEN\n    IF memiliki_KTP = \"Ya\" THEN\n        Tampilkan \"Boleh Membuka Rekening\"\n    ELSE\n        Tampilkan \"Lengkapi KTP\"\n    ENDIF\nELSE\n    Tampilkan \"Belum Memenuhi Syarat\"\nENDIF\n\nJika umur = 18 dan memiliki_KTP = \"Tidak\", output yang dihasilkan adalah ....",
      "jawabanBenar": "Lengkapi KTP",
      "pilihan": [
        ["Boleh Membuka Rekening", "Salah. Rekening hanya dapat dibuka jika umur memenuhi syarat dan status memiliki_KTP bernilai \"Ya\"."],
        ["Lengkapi KTP", "Benar. Umur sudah memenuhi syarat (18 >= 17), tetapi pengguna belum memiliki KTP sehingga program masuk ke blok ELSE dalam dan menampilkan \"Lengkapi KTP\"."],
        ["Belum Memenuhi Syarat", "Salah. Pesan tersebut hanya muncul di blok ELSE luar jika umur kurang dari 17 tahun."],
        ["Program berhenti", "Salah. Program mengeksekusi instruksi keluaran terlebih dahulu sebelum berhenti secara normal."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nInput x\nIF x MOD 3 = 0 THEN\n    IF x MOD 2 = 0 THEN\n        Tampilkan \"Kelipatan 6\"\n    ELSE\n        Tampilkan \"Kelipatan 3\"\n    ENDIF\nELSE\n    Tampilkan \"Bukan Kelipatan 3\"\nENDIF\n\nJika nilai x = 18, output yang dihasilkan adalah ....",
      "jawabanBenar": "Kelipatan 6",
      "pilihan": [
        ["Kelipatan 3", "Salah. Output tersebut hanya muncul jika bilangan habis dibagi 3 tetapi tidak habis dibagi 2 (ganjil)."],
        ["Kelipatan 6", "Benar. Angka 18 habis dibagi 3 (18 MOD 3 = 0) dan juga habis dibagi 2 (18 MOD 2 = 0) sehingga program menampilkan \"Kelipatan 6\"."],
        ["Bukan Kelipatan 3", "Salah. Angka 18 jelas merupakan bilangan kelipatan 3."],
        ["Tidak ada output", "Salah. Algoritma dipastikan menghasilkan salah satu output berdasarkan evaluasi nilai logika."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nInput nilai\nIF nilai > 75 THEN\n    Tampilkan \"Lulus\"\nELSE\n    Tampilkan \"Remedial\"\nENDIF\n\nJika pengguna memasukkan nilai 75, output yang dihasilkan adalah ....",
      "jawabanBenar": "Remedial",
      "pilihan": [
        ["Lulus", "Salah. Kondisi menggunakan operator lebih besar murni (>), bukan lebih besar sama dengan (≥), sehingga nilai 75 tidak memenuhi syarat."],
        ["Remedial", "Benar. Karena nilai 75 tidak lebih besar dari 75 (bernilai False), program langsung menjalankan instruksi di dalam blok ELSE."],
        ["Lulus Bersyarat", "Salah. Opsi atau output tersebut tidak dideklarasikan di dalam struktur algoritma."],
        ["Tidak ada output", "Salah. Aliran kontrol algoritma tetap akan mengeksekusi blok ELSE."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nInput umur\nInput tinggi\nIF umur >= 17 AND tinggi >= 160 THEN\n    Tampilkan \"Lolos\"\nELSE\n    Tampilkan \"Tidak Lolos\"\nENDIF\n\nManakah data berikut yang menghasilkan output \"Lolos\"?",
      "jawabanBenar": "Umur = 18, Tinggi = 165",
      "pilihan": [
        ["Umur = 16, Tinggi = 170", "Salah. Tinggi memenuhi syarat, tetapi variabel umur (16) belum memenuhi syarat minimal 17 tahun."],
        ["Umur = 17, Tinggi = 155", "Salah. Umur memenuhi syarat, tetapi variabel tinggi (155) belum mencapai batas minimal 160 cm."],
        ["Umur = 18, Tinggi = 165", "Benar. Operator AND menuntut kedua kondisi bernilai benar. Umur (18 >= 17) dan tinggi (165 >= 160) sama-sama memenuhi syarat."],
        ["Umur = 15, Tinggi = 150", "Salah. Variabel umur dan tinggi sama-sama tidak memenuhi kriteria minimal yang ditentukan."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nFOR i ← 1 TO 5 DO\n    Tampilkan \"SMK\"\nENDFOR\n\nBerdasarkan pseudocode tersebut, berapa kali kata \"SMK\" akan ditampilkan?",
      "jawabanBenar": "5 kali",
      "pilihan": [
        ["4 kali", "Salah. Perulangan dihitung inklusif dari indeks angka 1 hingga angka 5."],
        ["5 kali", "Benar. Nilai counter berjalan dari 1, 2, 3, 4, hingga 5, sehingga badan perulangan dijalankan sebanyak 5 kali iterasi."],
        ["6 kali", "Salah. Nilai iterasi dibatasi secara kaku dan berhenti tepat saat nilai counter melampaui angka 5."],
        ["Bergantung pada isi variabel i", "Salah. Jumlah iterasi sudah ditentukan secara pasti oleh batas awal dan batas akhir pada deklarasi For."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nFOR i ← 5 TO 3 DO\n    Tampilkan i\nENDFOR\n\nApa yang terjadi ketika pseudocode tersebut dijalankan?",
      "jawabanBenar": "Tidak menampilkan apa pun",
      "pilihan": [
        ["Menampilkan 5 4 3", "Salah. Konstruksi perulangan naik (TO) tidak dapat berjalan mundur secara otomatis jika nilai awal lebih besar dari nilai akhir."],
        ["Menampilkan 5 4", "Salah. Kode perulangan ini tidak mengeksekusi iterasi pengurangan."],
        ["Tidak menampilkan apa pun", "Benar. Karena parameter nilai awal (5) sudah melebihi batas nilai akhir (3) pada perulangan naik, blok kode di dalamnya tidak dijalankan sama sekali (0 kali iterasi)."],
        ["Terjadi infinite loop", "Salah. Kondisi batas yang tidak terpenuhi di awal langsung melompati perulangan, bukan menjebak program ke dalam putaran tak berujung."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\ni ← 1\nWHILE i <= 3 DO\n    Tampilkan i\nENDWHILE\n\nApa yang akan terjadi jika pseudocode tersebut dijalankan?",
      "jawabanBenar": "Menampilkan angka 1 terus-menerus",
      "pilihan": [
        ["Menampilkan 1 2 3 lalu berhenti", "Salah. Kondisi berhenti tidak akan pernah dicapai karena variabel i tidak pernah mengalami perubahan."],
        ["Menampilkan angka 1 terus-menerus", "Benar. Karena tidak ada operasi update nilai variabel i (seperti i ← i + 1) di dalam badan perulangan, nilai i tetap 1 dan kondisi 1 <= 3 selalu bernilai True (Infinite Loop)."],
        ["Tidak menghasilkan output", "Salah. Program tetap aktif menghasilkan keluaran angka 1 ke layar tanpa henti."],
        ["Menampilkan 1 2 3 4", "Salah. Variabel counter tidak pernah bertambah nilainya."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\nFOR i ← 1 TO 3 DO\n    FOR j ← 1 TO 2 DO\n        Tampilkan \"*\"\n    ENDFOR\nENDFOR\n\nBerapakah jumlah karakter \"*\" yang ditampilkan?",
      "jawabanBenar": "6",
      "pilihan": [
        ["3", "Salah. Angka 3 hanya menghitung jumlah total iterasi dari perulangan baris luar saja."],
        ["5", "Salah. Kalkulasi total iterasi pada nested loop menggunakan operasi perkalian, bukan penjumlahan."],
        ["6", "Benar. Ini merupakan perulangan bersarang (nested loop). Setiap 1 kali putaran loop luar akan mengeksekusi 2 kali putaran loop dalam, sehingga total karakter yang dicetak adalah 3 × 2 = 6."],
        ["9", "Salah. Loop bagian dalam hanya dikonfigurasi untuk berputar sebanyak 2 kali, bukan 3 kali."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\n\ni ← 1\nDO\n    Tampilkan i\n    i ← i + 1\nWHILE i <= 0\n\nApa output yang dihasilkan?",
      "jawabanBenar": "1",
      "pilihan": [
        ["Tidak ada output", "Salah. Pada arsitektur Do-While, badan perulangan dijamin akan selalu dieksekusi minimal satu kali di awal."],
        ["0", "Salah. Inisialisasi awal variabel i bernilai 1, sehingga angka 0 tidak pernah dicetak."],
        ["1", "Benar. Karakteristik Do-While menjalankan perintah dahulu baru mengecek kondisi. Angka 1 dicetak, lalu nilai i berubah menjadi 2. Saat kondisi dicek (2 <= 0) bernilai salah, perulangan langsung dihentikan."],
        ["Infinite loop", "Salah. Kondisi evaluasi langsung menghasilkan nilai salah pada putaran pertama sehingga alur perulangan langsung patah."]
      ]
    }
  ]
}