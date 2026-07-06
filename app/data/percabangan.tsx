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
export const Percabangan: Modul = {
  id: 'modul-6',
  judul: 'Percabangan (Selection)',
  deskripsi: 'Menguji pemahaman tentang konsep percabangan, penggunaan IF, ELSE, ELIF, CASE, Nested Selection, serta penerapan operator logika (AND, OR, NOT) dalam algoritma.',
  waktu: '45 Menit',
  ringkasan: 'Selection (Percabangan) adalah proses memilih jalur eksekusi program berdasarkan evaluasi kondisi (TRUE atau FALSE). Implementasinya dapat menggunakan IF...ELIF...ELSE atau CASE statement. Percabangan juga dapat dibuat bersarang (Nested Selection) dan kondisinya dapat diperluas menggunakan operator logika AND, OR, dan NOT.',
  soal: [
    {
      pertanyaan: 'Apa yang dimaksud dengan Selection (Percabangan) dalam pemrograman?',
      jawabanBenar: 'Proses memilih jalur eksekusi program berdasarkan suatu kondisi.',
      pilihan: [
        ['Proses menjalankan perintah secara berulang.', 'Salah. Pengulangan menggunakan iterasi (loop).'],
        ['Proses memilih jalur eksekusi program berdasarkan suatu kondisi.', 'Benar. Selection digunakan untuk menentukan jalur program berdasarkan hasil evaluasi kondisi TRUE atau FALSE.'],
        ['Proses menyimpan data ke dalam variabel.', 'Salah. Itu adalah assignment.'],
        ['Proses mengurutkan data.', 'Salah. Pengurutan menggunakan algoritma sorting.']
      ]
    },
    {
      pertanyaan: 'Manakah yang BUKAN tujuan penggunaan Selection?',
      jawabanBenar: 'Repeating instructions.',
      pilihan: [
        ['Validation.', 'Salah. Selection digunakan untuk validation.'],
        ['Calculation.', 'Salah. Selection juga digunakan untuk calculation.'],
        ["Making sense of a user's choices.", 'Salah. Selection digunakan untuk memahami atau menentukan tindakan berdasarkan pilihan pengguna.'],
        ['Repeating instructions.', 'Benar. Mengulang instruksi merupakan fungsi iterasi (loop), bukan selection.']
      ]
    },
    {
      pertanyaan: 'Selection menyediakan....',
      jawabanBenar: 'Alternatif atau percabangan menggunakan IF, ELIF, dan ELSE.',
      pilihan: [
        ['Pengulangan program.', 'Salah. Itu merupakan fungsi iteration.'],
        ['Alternatif atau percabangan menggunakan IF, ELIF, dan ELSE.', 'Benar. Selection menyediakan alternatif atau branching menggunakan IF...ELIF...ELSE.'],
        ['Penyimpanan data.', 'Salah. Bukan fungsi selection.'],
        ['Pengurutan data.', 'Salah. Bukan fungsi selection.']
      ]
    },
    {
      pertanyaan: 'Pada pseudocode, pasangan yang benar antara Python dan pseudocode untuk percabangan adalah....',
      jawabanBenar: 'elif → ELSEIF...THEN',
      pilihan: [
        ['if → WHILE', 'Salah. if setara dengan IF...THEN.'],
        ['elif → ELSEIF...THEN', 'Benar. Pada tabel Python–Pseudocode, elif ditulis sebagai ELSEIF...THEN.'],
        ['else → CASE', 'Salah. else setara dengan ELSE.'],
        ['True → YES', 'Salah. True ditulis sebagai TRUE, bukan YES.']
      ]
    },
    {
      pertanyaan: 'Kondisi pada IF Statement harus menghasilkan nilai....',
      jawabanBenar: 'TRUE atau FALSE',
      pilihan: [
        ['Integer', 'Salah. Angka bukan hasil evaluasi kondisi.'],
        ['String', 'Salah. String bukan hasil logika.'],
        ['TRUE atau FALSE', 'Benar. Kondisi IF selalu dievaluasi menjadi TRUE atau FALSE.'],
        ['Character', 'Salah. Karakter bukan hasil kondisi.']
      ]
    },
    {
      pertanyaan: 'Kapan pernyataan pada blok IF akan dijalankan?',
      jawabanBenar: 'Saat kondisi bernilai TRUE.',
      pilihan: [
        ['Saat kondisi bernilai FALSE.', 'Salah. Jika kondisi FALSE maka blok IF tidak dijalankan.'],
        ['Saat kondisi bernilai TRUE.', 'Benar. Instruksi di dalam IF dijalankan ketika kondisi bernilai TRUE.'],
        ['Saat program selesai dijalankan.', 'Salah. Tidak bergantung pada akhir program.'],
        ['Setiap kali program dimulai.', 'Salah. Bergantung pada hasil evaluasi kondisi.']
      ]
    },
    {
      pertanyaan: 'Apa yang dimaksud dengan Nested Selection?',
      jawabanBenar: 'Selection statement yang berada di dalam selection statement lainnya.',
      pilihan: [
        ['Perulangan yang berada di dalam perulangan.', 'Salah. Itu disebut nested loop.'],
        ['Selection statement yang berada di dalam selection statement lainnya.', 'Benar. Nested Selection adalah selection statement di dalam selection statement lainnya, misalnya IF di dalam IF.'],
        ['CASE statement yang berada di dalam FOR.', 'Salah. Bukan definisi nested selection.'],
        ['IF statement yang berada di dalam CASE statement.', 'Salah. Contoh pada sumber menunjukkan IF di dalam IF.']
      ]
    },
    {
      pertanyaan: 'Kata nested berarti....',
      jawabanBenar: 'Stored inside another',
      pilihan: [
        ['Repeated', 'Salah. Nested tidak berarti diulang.'],
        ['Stored inside another', 'Benar. Nested berarti "stored inside the other", yaitu suatu selection berada di dalam selection lainnya.'],
        ['Moved into a variable', 'Salah. Nested tidak berkaitan dengan pemindahan variabel.'],
        ['Executed simultaneously', 'Salah. Nested tidak berarti dijalankan secara bersamaan.']
      ]
    },
    {
      pertanyaan: 'Perhatikan pseudocode berikut.\nIF Nilai >= 75 THEN\n  IF Kehadiran >= 80 THEN\n    OUTPUT "Lulus"\n  ENDIF\nENDIF\nStruktur percabangan di atas merupakan contoh ....',
      jawabanBenar: 'Nested Selection',
      pilihan: [
        ['CASE Statement', 'Salah. Tidak menggunakan CASE.'],
        ['Looping', 'Salah. Tidak terdapat perulangan.'],
        ['Nested Selection', 'Benar. Terdapat IF di dalam IF sehingga termasuk Nested Selection.'],
        ['Procedure', 'Salah. Procedure merupakan subprogram, bukan percabangan.']
      ]
    },
    {
      pertanyaan: 'Kapan CASE Statement lebih tepat digunakan dibandingkan IF?',
      jawabanBenar: 'Ketika membandingkan banyak nilai dari variabel yang sama.',
      pilihan: [
        ['Ketika membandingkan banyak nilai dari variabel yang sama.', 'Benar. CASE lebih sederhana jika membandingkan beberapa kemungkinan nilai dari satu variabel.'],
        ['Ketika membuat perulangan.', 'Salah. Perulangan menggunakan FOR atau WHILE.'],
        ['Ketika membaca input pengguna.', 'Salah. Membaca input menggunakan INPUT.'],
        ['Ketika menyimpan data ke variabel.', 'Salah. Penyimpanan data menggunakan assignment.']
      ]
    },
    {
      pertanyaan: 'Operator logika yang digunakan untuk menambah pilihan dalam pengujian kondisi adalah....',
      jawabanBenar: 'AND, OR, dan NOT.',
      pilihan: [
        ['INPUT dan OUTPUT.', 'Salah. Digunakan untuk masukan dan keluaran.'],
        ['FOR dan WHILE.', 'Salah. Merupakan perulangan.'],
        ['AND, OR, dan NOT.', 'Benar. Operator logika AND, OR, dan NOT digunakan untuk memperluas pengujian kondisi.'],
        ['CASE dan OTHERWISE.', 'Salah. Bukan operator logika.']
      ]
    },
    {
      pertanyaan: 'Kapan operator AND menghasilkan nilai TRUE?',
      jawabanBenar: 'Jika semua kondisi TRUE.',
      pilihan: [
        ['Jika salah satu kondisi TRUE.', 'Salah. Itu adalah karakteristik OR.'],
        ['Jika semua kondisi TRUE.', 'Benar. AND menghasilkan TRUE jika semua pernyataan bernilai TRUE.'],
        ['Jika semua kondisi FALSE.', 'Salah. Hasilnya FALSE.'],
        ['Jika minimal satu kondisi FALSE.', 'Salah. Jika ada satu kondisi FALSE maka hasil AND adalah FALSE.']
      ]
    },
    {
      pertanyaan: 'Kapan operator OR menghasilkan nilai TRUE?',
      jawabanBenar: 'Jika salah satu kondisi TRUE.',
      pilihan: [
        ['Jika semua kondisi TRUE.', 'Salah. Semua kondisi TRUE memang menghasilkan TRUE, tetapi operator OR tidak mengharuskan semua kondisi bernilai TRUE.'],
        ['Jika salah satu kondisi TRUE.', 'Benar. Operator OR menghasilkan TRUE jika salah satu (either) kondisi bernilai TRUE.'],
        ['Jika semua kondisi FALSE.', 'Salah. Jika semua kondisi FALSE maka hasil OR adalah FALSE.'],
        ['Jika kedua kondisi FALSE.', 'Salah. Jika kedua kondisi FALSE maka hasil OR adalah FALSE.']
      ]
    },
    {
      pertanyaan: 'Apa fungsi operator NOT?',
      jawabanBenar: 'Membalik nilai logika TRUE menjadi FALSE dan FALSE menjadi TRUE.',
      pilihan: [
        ['Menggabungkan dua kondisi.', 'Salah. Fungsi tersebut dimiliki oleh AND atau OR.'],
        ['Membalik nilai logika TRUE menjadi FALSE dan FALSE menjadi TRUE.', 'Benar. NOT mengubah TRUE menjadi FALSE dan FALSE menjadi TRUE.'],
        ['Membandingkan dua nilai.', 'Salah. NOT tidak digunakan untuk membandingkan nilai.'],
        ['Mengakhiri percabangan.', 'Salah. Percabangan diakhiri dengan ENDIF.']
      ]
    },
    {
      pertanyaan: 'Perhatikan pseudocode berikut.\nIF Nilai >= 75 THEN\n  OUTPUT "Lulus"\nENDIF\nJika Nilai = 80, maka output yang dihasilkan adalah ....',
      jawabanBenar: 'Lulus',
      pilihan: [
        ['Tidak ada output', 'Salah. Kondisi terpenuhi sehingga output akan ditampilkan.'],
        ['Lulus', 'Benar. Karena 80 >= 75, maka program menampilkan "Lulus".'],
        ['Gagal', 'Salah. Program tidak memiliki output "Gagal".'],
        ['Error', 'Salah. Sintaks pseudocode tersebut sudah benar.']
      ]
    }
  ]
};