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

export const Pseudocode : Modul = {
  "id": "modul-pseudocode",
  "judul": "Pengantar Pseudocode",
  "deskripsi": "Menguji pemahaman dasar mengenai pengertian, tujuan, karakteristik, struktur dasar, tipe data, serta operator dalam pseudocode.",
  "waktu": "45 Menit",
  "ringkasan": "Pseudocode adalah representasi algoritma menggunakan bahasa bebas yang mudah dipahami manusia tanpa terikat aturan sintaks pemrograman tertentu. Struktur dasarnya meliputi START, INPUT, PROCESS, OUTPUT, dan END. Modul ini mencakup pemahaman tipe data seperti BOOLEAN, REAL, serta penggunaan operator aritmatika dan relasional.",
  "soal": [
    {
      "pertanyaan": "Apa yang dimaksud dengan pseudocode?",
      "jawabanBenar": "Representasi algoritma dengan bahasa yang mudah dipahami manusia dan tidak terikat sintaks tertentu",
      "pilihan": [
        ["Bahasa pemrograman yang dapat dijalankan komputer", "Salah. Pseudocode bukan bahasa pemrograman yang bisa dieksekusi komputer."],
        ["Diagram alur menggunakan simbol", "Salah. Diagram alur menggunakan simbol disebut flowchart, bukan pseudocode."],
        ["Representasi algoritma dengan bahasa yang mudah dipahami manusia dan tidak terikat sintaks tertentu", "Benar. Pseudocode adalah representasi algoritma menggunakan bahasa yang mudah dipahami manusia tanpa terikat sintaks bahasa pemrograman tertentu."],
        ["Program untuk mengompilasi kode", "Salah. Program untuk mengompilasi kode disebut compiler."]
      ]
    },
    {
      "pertanyaan": "Tujuan utama penggunaan pseudocode adalah ....",
      "jawabanBenar": "Merancang logika program sebelum coding",
      "pilihan": [
        ["Menghias tampilan program", "Salah. Pseudocode tidak digunakan untuk menghias tampilan program."],
        ["Merancang logika program sebelum coding", "Benar. Tujuan utamanya adalah merancang logika dan alur program sebelum coding."],
        ["Mengganti bahasa pemrograman", "Salah. Pseudocode tidak menggantikan bahasa pemrograman."],
        ["Mempercepat komputer", "Salah. Pseudocode tidak memengaruhi kecepatan komputer."]
      ]
    },
    {
      "pertanyaan": "Salah satu fungsi pseudocode adalah ....",
      "jawabanBenar": "Membantu perencanaan algoritma",
      "pilihan": [
        ["Menghapus virus komputer", "Salah. Bukan fungsi pseudocode."],
        ["Membantu perencanaan algoritma", "Benar. Pseudocode membantu merancang langkah-langkah penyelesaian masalah."],
        ["Menambah RAM", "Salah. Tidak berkaitan dengan perangkat keras."],
        ["Membuat internet lebih cepat", "Salah. Tidak memengaruhi kecepatan internet."]
      ]
    },
    {
      "pertanyaan": "Apa peran utama pseudocode dalam perancangan algoritma?",
      "jawabanBenar": "Sebagai representasi awal algoritma sebelum diimplementasikan ke dalam bahasa pemrograman.",
      "pilihan": [
        ["Sebagai representasi awal algoritma sebelum diimplementasikan ke dalam bahasa pemrograman.", "Benar. Pseudocode digunakan untuk menggambarkan langkah-langkah algoritma secara sederhana sebelum ditulis dalam bahasa pemrograman."],
        ["Sebagai bahasa pemrograman yang langsung dapat dijalankan oleh komputer.", "Salah. Pseudocode bukan bahasa pemrograman sehingga tidak dapat dikompilasi atau dieksekusi oleh komputer."],
        ["Sebagai alat untuk mendesain tampilan antarmuka pengguna (UI).", "Salah. Pseudocode berfokus pada logika dan alur algoritma, bukan desain antarmuka."],
        ["Sebagai media penyimpanan data dalam program.", "Salah. Penyimpanan data dilakukan menggunakan variabel atau basis data, bukan pseudocode."]
      ]
    },
    {
      "pertanyaan": "Karakteristik pseudocode yang benar adalah ....",
      "jawabanBenar": "Menggunakan Kata-Kata Umum",
      "pilihan": [
        ["Harus menggunakan bahasa Inggris", "Salah. Pseudocode dapat ditulis dalam berbagai bahasa."],
        ["Terikat pada satu bahasa pemrograman", "Salah. Pseudocode tidak terikat bahasa pemrograman tertentu."],
        ["Menggunakan Kata-Kata Umum", "Benar. Pseudocode menggunakan frasa dan kata-kata umum daripada sintaksis spesifik bahasa pemrograman. Pendekatan ini membantu menyajikan algoritma secara intuitif dan dapat dipahami oleh berbagai orang."],
        ["Harus dapat dikompilasi", "Salah. Pseudocode tidak perlu dikompilasi."]
      ]
    },
    {
      "pertanyaan": "Mengapa pseudocode tidak terikat pada bahasa pemrograman tertentu?",
      "jawabanBenar": "Agar fokus pada logika program",
      "pilihan": [
        ["Agar fokus pada logika program", "Benar. Pseudocode menekankan logika tanpa memikirkan sintaks."],
        ["Agar program lebih berat", "Salah. Tidak ada hubungannya dengan beban program."],
        ["Agar komputer lebih panas", "Salah. Bukan tujuan pseudocode."],
        ["Agar hanya bisa dibaca programmer", "Salah. Pseudocode justru dibuat mudah dipahami banyak orang."]
      ]
    },
    {
      "pertanyaan": "Perbedaan yang tepat antara algoritma dan pseudocode adalah ....",
      "jawabanBenar": "Algoritma menggunakan langkah-langkah, pseudocode menggunakan bentuk yang menyerupai kode program.",
      "pilihan": [
        ["Algoritma menggunakan langkah-langkah, pseudocode menggunakan bentuk yang menyerupai kode program.", "Benar. Algoritma adalah urutan langkah penyelesaian masalah, sedangkan pseudocode adalah penulisan algoritma dalam bentuk yang menyerupai kode program."],
        ["Keduanya sama persis", "Salah. Ada perbedaan bentuk penyajiannya."],
        ["Pseudocode adalah flowchart", "Salah. Flowchart berbeda dengan pseudocode."],
        ["Algoritma harus menggunakan komputer", "Salah. Algoritma tidak harus menggunakan komputer."]
      ]
    },
    {
      "pertanyaan": "Mengapa pseudocode diperlukan dalam perancangan program?",
      "jawabanBenar": "Membantu programmer merencanakan solusi sebelum menulis kode program.",
      "pilihan": [
        ["Membantu programmer merencanakan solusi sebelum menulis kode program.", "Benar. Pseudocode membantu programmer menyusun dan merencanakan solusi sebelum mulai menulis kode sehingga alur program lebih jelas."],
        ["Digunakan untuk mempercantik tampilan antarmuka program.", "Salah. Pseudocode tidak digunakan untuk mendesain atau mempercantik tampilan antarmuka (user interface)."],
        ["Mengganti bahasa pemrograman saat membuat aplikasi.", "Salah. Pseudocode bukan pengganti bahasa pemrograman, melainkan panduan logika sebelum proses coding."],
        ["Hanya digunakan setelah proses coding selesai.", "Salah. Pseudocode dibuat sebelum implementasi program, bukan setelah proses coding selesai."]
      ]
    },
    {
      "pertanyaan": "Pseudocode paling tepat digunakan ....",
      "jawabanBenar": "Sebelum proses coding",
      "pilihan": [
        ["Setelah program selesai", "Salah. Biasanya digunakan sebelum coding."],
        ["Sebelum proses coding", "Benar. Pseudocode membantu merencanakan logika program terlebih dahulu."],
        ["Saat membeli komputer", "Salah. Tidak berkaitan dengan pembelian komputer."],
        ["Saat menginstal printer", "Salah. Tidak berkaitan dengan instalasi printer."]
      ]
    },
    {
      "pertanyaan": "Langkah pertama dalam membuat pseudocode adalah ....",
      "jawabanBenar": "Memahami masalah yang ingin diselesaikan",
      "pilihan": [
        ["Menginstal bahasa pemrograman", "Salah. Bukan langkah pertama."],
        ["Memahami masalah yang ingin diselesaikan", "Benar. Kita harus memahami tujuan dan masalah yang akan diselesaikan terlebih dahulu."],
        ["Membeli laptop baru", "Salah. Tidak berkaitan dengan penyusunan pseudocode."],
        ["Menghapus semua file", "Salah. Bukan bagian dari proses membuat pseudocode."]
      ]
    },
    {
      "pertanyaan": "Urutan struktur dasar pseudocode yang paling tepat adalah ....",
      "jawabanBenar": "START → INPUT → PROCESS → OUTPUT → END",
      "pilihan": [
        ["START → INPUT → PROCESS → OUTPUT → END", "Benar. Struktur dasar pseudocode umumnya dimulai dengan START, dilanjutkan INPUT, kemudian PROCESS, setelah itu OUTPUT, dan diakhiri dengan END. Urutan ini membuat alur algoritma menjadi jelas dan mudah dipahami."],
        ["INPUT → START → PROCESS → END → OUTPUT", "Salah. INPUT tidak dapat dilakukan sebelum program dimulai (START). Selain itu, OUTPUT seharusnya muncul sebelum END, bukan setelah program selesai."],
        ["PROCESS → OUTPUT → INPUT → START → END", "Salah. Urutan ini tidak logis karena proses dilakukan sebelum menerima input."],
        ["START → OUTPUT → INPUT → PROCESS → END", "Salah. Output tidak mungkin ditampilkan sebelum program menerima input dan melakukan proses."]
      ]
    },
    {
      "pertanyaan": "Dalam pseudocode, perintah INPUT digunakan untuk ....",
      "jawabanBenar": "Menerima data dari pengguna",
      "pilihan": [
        ["Menampilkan hasil ke layar", "Salah. Menampilkan hasil merupakan fungsi OUTPUT, bukan INPUT."],
        ["Mengakhiri program", "Salah. Program diakhiri menggunakan END."],
        ["Menerima data dari pengguna", "Benar. INPUT digunakan untuk menerima data yang dimasukkan pengguna sebelum diproses."],
        ["Melakukan perhitungan", "Salah. Perhitungan dilakukan pada bagian PROCESS, bukan INPUT."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut:\nSTART\nINPUT Nilai\nOUTPUT Nilai\nEND\n\nPerintah OUTPUT Nilai berfungsi untuk ....",
      "jawabanBenar": "Menampilkan nilai kepada pengguna",
      "pilihan": [
        ["Memasukkan nilai dari pengguna", "Salah. Memasukkan data merupakan fungsi INPUT."],
        ["Menampilkan nilai kepada pengguna", "Benar. OUTPUT digunakan untuk menampilkan hasil proses atau data kepada pengguna."],
        ["Menghapus nilai", "Salah. OUTPUT tidak menghapus data."],
        ["Memparalelkan nilai", "Salah. Perbandingan dilakukan menggunakan operator relasi, bukan OUTPUT."]
      ]
    },
    {
      "pertanyaan": "Struktur IF–ELSE dalam pseudocode digunakan untuk ....",
      "jawabanBenar": "Menentukan percabangan berdasarkan kondisi",
      "pilihan": [
        ["Mengulang perintah", "Salah. Perulangan dilakukan menggunakan FOR, WHILE, atau REPEAT."],
        ["Menentukan percabangan berdasarkan kondisi", "Benar. IF–ELSE digunakan ketika program harus memilih satu aksi berdasarkan kondisi yang bernilai benar atau salah."],
        ["Menampilkan hasil", "Salah. Menampilkan hasil adalah fungsi OUTPUT."],
        ["Menyimpan data", "Salah. IF–ELSE tidak digunakan untuk menyimpan data."]
      ]
    },
    {
      "pertanyaan": "Manakah struktur pseudocode berikut yang digunakan untuk melakukan perulangan?",
      "jawabanBenar": "FOR",
      "pilihan": [
        ["IF", "Salah. IF digunakan untuk percabangan, bukan perulangan."],
        ["OUTPUT", "Salah. OUTPUT hanya menampilkan hasil."],
        ["FOR", "Benar. FOR merupakan salah satu struktur yang digunakan untuk mengulang suatu proses sebanyak jumlah tertentu."],
        ["INPUT", "Salah. INPUT digunakan untuk menerima data dari pengguna."]
      ]
    },
    {
      "pertanyaan": "Bagian pseudocode yang berfungsi untuk mengakhiri suatu program adalah ....",
      "jawabanBenar": "END",
      "pilihan": [
        ["START", "Salah. START digunakan untuk menandai awal program, bukan mengakhirinya."],
        ["PROCESS", "Salah. PROCESS digunakan untuk mengolah data yang telah diterima dari pengguna."],
        ["END", "Benar. END digunakan untuk menandai bahwa seluruh proses dalam pseudocode telah selesai dijalankan."],
        ["OUTPUT", "Salah. OUTPUT digunakan untuk menampilkan hasil proses kepada pengguna."]
      ]
    },
    {
      "pertanyaan": "Manakah pasangan yang benar antara tipe data dan fungsinya?",
      "jawabanBenar": "BOOLEAN digunakan untuk menyimpan nilai logika TRUE dan FALSE.",
      "pilihan": [
        ["BOOLEAN digunakan untuk menyimpan nilai logika TRUE dan FALSE.", "Benar. BOOLEAN digunakan untuk menyimpan nilai logika, yaitu TRUE dan FALSE."],
        ["STRING digunakan untuk menyimpan satu karakter saja.", "Salah. STRING digunakan untuk menyimpan rangkaian nol atau lebih karakter, sedangkan satu karakter saja menggunakan tipe data CHAR."],
        ["REAL hanya dapat menyimpan bilangan bulat.", "Salah. REAL digunakan untuk menyimpan bilangan yang memiliki bagian pecahan (fractional part), bukan hanya bilangan bulat."],
        ["DATE digunakan untuk menyimpan kumpulan karakter.", "Salah. DATE digunakan untuk menyimpan data berupa tanggal yang valid, bukan kumpulan karakter."]
      ]
    },
    {
      "pertanyaan": "Manakah penulisan literal yang benar untuk tipe data REAL dalam pseudocode?",
      "jawabanBenar": "4.7",
      "pilihan": [
        ["4.7", "Benar. Literal bertipe REAL ditulis menggunakan bilangan yang memiliki bagian pecahan dengan minimal satu digit di kedua sisi titik desimal, misalnya 4.7, 0.3, -4.0, atau 0.0."],
        ["5", "Salah. Nilai 5 merupakan bilangan bulat sehingga termasuk literal bertipe INTEGER, bukan REAL."],
        ["'4.7'", "Salah. '4.7' ditulis menggunakan tanda petik tunggal sehingga menunjukkan CHAR, bukan REAL."],
        ["\"4.7\"", "Salah. \"4.7\" ditulis menggunakan tanda petik ganda sehingga merupakan STRING, bukan REAL."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\nNilai ← 85\n\nArti simbol ← pada pseudocode tersebut adalah ....",
      "jawabanBenar": "Memberikan atau mengisikan nilai ke dalam variabel",
      "pilihan": [
        ["Membandingkan nilai", "Salah. Operator untuk membandingkan nilai menggunakan simbol seperti =, >, <, >=, atau <=, bukan ←."],
        ["Memberikan atau mengisikan nilai ke dalam variabel", "Benar. Simbol ← disebut assignment operator, yaitu memberikan atau menyimpan suatu nilai ke dalam variabel. Pada contoh di atas, variabel Nilai diisi dengan angka 85."],
        ["Menjumlahkan dua bilangan", "Salah. Penjumlahan menggunakan operator +, bukan ←."],
        ["Menampilkan nilai ke layar", "Salah. Menampilkan data menggunakan perintah OUTPUT, bukan operator assignment."]
      ]
    },
    {
      "pertanyaan": "Standard arithmetic operator symbols terdiri dari ....",
      "jawabanBenar": "+, -, *, /, DIV, MOD",
      "pilihan": [
        ["+, -, *, /, DIV, MOD", "Benar. Operator aritmatika standar meliputi: +, -, *, /, DIV, MOD."],
        ["AND, OR, NOT, XOR", "Salah. AND, OR, NOT, dan XOR adalah operator logika, bukan operator aritmatika."],
        [">, <, =, <>", "Salah. >, <, =, dan <> adalah operator perbandingan (relasional), bukan operator aritmatika."],
        ["INPUT, OUTPUT, IF, ELSE", "Salah. INPUT, OUTPUT, IF, dan ELSE adalah perintah/struktur dalam algoritma, bukan operator aritmatika."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\nIF Angka MOD 2 = 0 THEN\n OUTPUT \"Genap\"\nENDIF\n\nFungsi operator MOD adalah ....",
      "jawabanBenar": "Menghasilkan sisa hasil pembagian",
      "pilihan": [
        ["Menghasilkan hasil pembagian", "Salah. Hasil pembagian biasa menggunakan operator /."],
        ["Menghasilkan sisa hasil pembagian", "Benar. MOD digunakan untuk memperoleh sisa hasil pembagian. Karena bilangan genap memiliki sisa pembagian 0 ketika dibagi 2, operator ini sering digunakan untuk menentukan bilangan ganjil atau genap."],
        ["Menghasilkan nilai terbesar", "Salah. MOD tidak digunakan untuk mencari nilai terbesar."],
        ["Menghasilkan nilai rata-rata", "Salah. MOD juga tidak digunakan untuk menghitung rata-rata."]
      ]
    },
    {
      "pertanyaan": "Perhatikan potongan pseudocode berikut.\nIF Nilai >= 75 THEN\n OUTPUT \"Lulus\"\nENDIF\n\nArti operator >= adalah ....",
      "jawabanBenar": "Lebih besar dari atau sama dengan",
      "pilihan": [
        ["Lebih kecil dari", "Salah. Operator lebih kecil dari ditulis menggunakan simbol <."],
        ["Lebih besar dari", "Salah. Operator lebih besar dari ditulis menggunakan simbol >."],
        ["Lebih besar dari atau sama dengan", "Benar. Simbol >= berarti lebih besar dari atau sama dengan. Jika nilai tepat 75 ataupun lebih tinggi, kondisi tetap bernilai benar sehingga peserta dinyatakan lulus."],
        ["Tidak sama dengan", "Salah. Tidak sama dengan ditulis menggunakan simbol <>."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\nSTART\nINPUT sisi\nluas ← sisi × sisi\nOUTPUT luas\nEND\n\nJika pengguna memasukkan nilai 8, maka output yang dihasilkan adalah ....",
      "jawabanBenar": "64",
      "pilihan": [
        ["16", "Salah. Jawaban 16 diperoleh jika inputnya 4 × 4."],
        ["32", "Salah. Jawaban 32 berasal dari 8 × 4."],
        ["64", "Benar. Rumus luas persegi adalah: Luas = sisi × sisi. Maka: 8 × 8 = 64. Sehingga output yang ditampilkan adalah 64."],
        ["88", "Salah. Angka 88 bukan hasil dari perhitungan luas persegi."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\nSTART\nINPUT angka\nIF angka MOD 2 = 0 THEN\n OUTPUT \"Genap\"\nELSE\n OUTPUT \"Ganjil\"\nENDIF\nEND\n\nJika pengguna memasukkan angka 17, maka output yang dihasilkan adalah ....",
      "jawabanBenar": "Ganjil",
      "pilihan": [
        ["Genap", "Salah. Bilangan genap memiliki sisa pembagian 0 ketika dibagi 2. Angka 17 tidak memenuhi kondisi tersebut."],
        ["Ganjil", "Benar. 17 MOD 2 = 1. Karena kondisi angka MOD 2 = 0 bernilai salah, program menjalankan bagian ELSE sehingga menghasilkan 'Ganjil'."],
        ["17", "Salah. Program tidak menampilkan angka yang dimasukkan, melainkan menampilkan hasil pemeriksaan."],
        ["Error", "Salah. Tidak ada kesalahan pada pseudocode tersebut."]
      ]
    },
    {
      "pertanyaan": "Perhatikan pseudocode berikut.\nSTART\nINPUT Nilai1\nINPUT Nilai2\nINPUT Nilai3\nRata ← (Nilai1 + Nilai2 + Nilai3) / 3\nOUTPUT Rata\nEND\n\nJika: Nilai1 = 1, Nilai2 = 2, Nilai3 = 3\nMaka output yang dihasilkan adalah ....",
      "jawabanBenar": "2",
      "pilihan": [
        ["2", "Benar. Rata-rata dihitung sebagai berikut: (1 + 2 + 3) / 3 = 6 / 3 = 2."],
        ["1", "Salah. 1 adalah nilai terkecil, bukan rata-rata."],
        ["0", "Salah. 0 bukan hasil pembagian rata-rata dari data di atas."],
        ["3", "Salah. 3 adalah nilai terbesar, bukan rata-rata."]
      ]
    }
  ]
}