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

export const Flowchart: Modul = {
    id: 'modul-3',
    judul: 'Flowchart & Representasi Logika',
    deskripsi: 'Memahami simbol grafis dan alur logika pemrograman melalui flowchart.',
    waktu: '40 Menit',
    ringkasan: 'Flowchart adalah representasi visual dari alur algoritma. Menggunakan simbol standar ISO, flowchart membantu programmer merancang logika, percabangan, dan perulangan sebelum diimplementasikan ke dalam kode program.',
    soal: [
        {
            pertanyaan: 'Apa tujuan utama dari penggunaan flowchart dalam perancangan algoritma?',
            pilihan: ['Menuliskan kode program secara langsung', 'Memvisualisasikan alur logika algoritma', 'Menyimpan data hasil pemrosesan', 'Menggantikan bahasa pemrograman'],
            jawabanBenar: 'Memvisualisasikan alur logika algoritma',
            pembahasan: 'Flowchart berfungsi sebagai alat bantu visual untuk memahami alur logika.'
        },
        {
            pertanyaan: 'Simbol manakah yang digunakan untuk menunjukkan awal atau akhir dari suatu flowchart?',
            pilihan: ['Terminator (Oval)', 'Decision (Belah Ketupat)', 'Process (Persegi Panjang)', 'Input/Output (Jajar Genjang)'],
            jawabanBenar: 'Terminator (Oval)',
            pembahasan: 'Terminator adalah simbol standar untuk titik mulai (Start) dan selesai (End).'
        },
        {
            pertanyaan: 'Dalam flowchart, simbol apakah yang digunakan untuk merepresentasikan operasi perhitungan atau proses?',
            pilihan: ['Jajar genjang', 'Belah ketupat', 'Persegi panjang', 'Oval'],
            jawabanBenar: 'Persegi panjang',
            pembahasan: 'Persegi panjang adalah simbol baku untuk proses atau transformasi data.'
        },
        {
            pertanyaan: 'Simbol belah ketupat dalam flowchart digunakan untuk...',
            pilihan: ['Menandai awal program', 'Membuat keputusan atau percabangan', 'Menampilkan hasil ke layar', 'Menuliskan rumus matematika'],
            jawabanBenar: 'Membuat keputusan atau percabangan',
            pembahasan: 'Belah ketupat mengandung kondisi yang menentukan alur program berikutnya.'
        },
        {
            pertanyaan: 'Garis alur (Flow Lines) dalam flowchart berfungsi untuk...',
            pilihan: ['Menghubungkan simbol dan menunjukkan arah aliran logika', 'Memberi warna pada flowchart', 'Menuliskan komentar programmer', 'Menyimpan data sementara'],
            jawabanBenar: 'Menghubungkan simbol dan menunjukkan arah aliran logika',
            pembahasan: 'Garis alur menunjukkan urutan eksekusi antar simbol.'
        },
        {
            pertanyaan: 'Simbol Jajar Genjang digunakan untuk...',
            pilihan: ['Proses data', 'Input dan Output data', 'Kondisi logika', 'Menghubungkan halaman'],
            jawabanBenar: 'Input dan Output data',
            pembahasan: 'Digunakan untuk merepresentasikan pengambilan input atau penampilan output.'
        },
        {
            pertanyaan: 'Manakah aturan penulisan flowchart yang benar?',
            pilihan: ['Aliran harus dimulai dari kiri ke kanan saja', 'Aliran harus mengalir dari atas ke bawah atau kiri ke kanan', 'Boleh berantakan asal simbolnya benar', 'Hanya boleh menggunakan satu jenis simbol'],
            jawabanBenar: 'Aliran harus mengalir dari atas ke bawah atau kiri ke kanan',
            pembahasan: 'Standar flowchart adalah aliran dari atas ke bawah atau kiri ke kanan.'
        },
        {
            pertanyaan: 'Simbol lingkaran kecil digunakan untuk...',
            pilihan: ['Menghubungkan alur di halaman yang sama', 'Menghubungkan alur ke halaman yang berbeda', 'Mengakhiri flowchart', 'Memberikan input'],
            jawabanBenar: 'Menghubungkan alur di halaman yang sama',
            pembahasan: 'Connector lingkaran digunakan untuk menyambung alur di halaman yang sama.'
        },
        {
            pertanyaan: 'Jika dalam flowchart terdapat proses yang sangat kompleks, kita bisa menggunakan simbol...',
            pilihan: ['Predefined Process (Sub-program)', 'Manual Input', 'Off-page Connector', 'Display'],
            jawabanBenar: 'Predefined Process (Sub-program)',
            pembahasan: 'Simbol ini digunakan untuk modul atau sub-program.'
        },
        {
            pertanyaan: 'Mengapa flowchart dianggap sebagai bahasa universal dalam pemrograman?',
            pilihan: ['Karena bisa dijalankan oleh komputer', 'Karena menggunakan simbol standar yang dipahami secara luas', 'Karena tidak memerlukan logika', 'Karena ditulis dengan bahasa Inggris saja'],
            jawabanBenar: 'Karena menggunakan simbol standar yang dipahami secara luas',
            pembahasan: 'Simbol-simbolnya adalah standar ISO yang diakui secara global.'
        },
        {
            pertanyaan: 'Simbol apakah yang melambangkan kegiatan input data secara manual oleh pengguna?',
            pilihan: ['Manual Input (Trapesium)', 'Process', 'Decision', 'Preparation'],
            jawabanBenar: 'Manual Input (Trapesium)',
            pembahasan: 'Simbol Manual Input berbentuk trapesium miring untuk data dari keyboard.'
        },
        {
            pertanyaan: 'Apa yang dimaksud dengan \'Off-page Connector\'?',
            pilihan: ['Simbol untuk menghubungkan alur ke halaman berikutnya', 'Simbol untuk mematikan komputer', 'Simbol untuk memproses data', 'Simbol untuk awal program'],
            jawabanBenar: 'Simbol untuk menghubungkan alur ke halaman berikutnya',
            pembahasan: 'Off-page connector (pentagon) digunakan saat alur pindah ke halaman lain.'
        },
        {
            pertanyaan: 'Manakah yang benar tentang simbol \'Preparation\'?',
            pilihan: ['Digunakan untuk melakukan inisialisasi variabel', 'Digunakan untuk mencetak data', 'Digunakan untuk percabangan', 'Digunakan untuk akhir flowchart'],
            jawabanBenar: 'Digunakan untuk melakukan inisialisasi variabel',
            pembahasan: 'Preparation sering dipakai untuk inisialisasi nilai awal variabel.'
        },
        {
            pertanyaan: 'Simbol \'Display\' berfungsi untuk...',
            pilihan: ['Menampilkan data di monitor', 'Input data', 'Perhitungan', 'Keputusan'],
            jawabanBenar: 'Menampilkan data di monitor',
            pembahasan: 'Display khusus digunakan untuk output ke layar monitor.'
        },
        {
            pertanyaan: 'Apa kegunaan simbol \'Annotation\' dalam flowchart?',
            pilihan: ['Menulis catatan tambahan atau penjelasan alur', 'Melakukan proses', 'Memulai program', 'Input data'],
            jawabanBenar: 'Menulis catatan tambahan atau penjelasan alur',
            pembahasan: 'Annotation digunakan untuk memberi komentar pada bagian flowchart.'
        },
        {
            pertanyaan: 'Dalam flowchart, apa yang terjadi jika ada dua garis alur yang bertemu?',
            pilihan: ['Harus menggunakan simbol Connector', 'Boleh dibiarkan saja', 'Program akan error', 'Tidak diperbolehkan'],
            jawabanBenar: 'Harus menggunakan simbol Connector',
            pembahasan: 'Pertemuan alur harus diperjelas dengan simbol connector.'
        },
        {
            pertanyaan: 'Simbol \'Database\' (silinder) dalam flowchart melambangkan...',
            pilihan: ['Penyimpanan data permanen', 'Input dari user', 'Proses logika', 'Awal program'],
            jawabanBenar: 'Penyimpanan data permanen',
            pembahasan: 'Simbol database menunjukkan interaksi dengan penyimpanan data.'
        },
        {
            pertanyaan: 'Mengapa arah panah pada garis alur (flow lines) sangat penting?',
            pilihan: ['Untuk mempercantik tampilan', 'Untuk menunjukkan arah urutan eksekusi langkah', 'Untuk memisahkan variabel', 'Tidak ada gunanya'],
            jawabanBenar: 'Untuk menunjukkan arah urutan eksekusi langkah',
            pembahasan: 'Tanpa panah, pembaca tidak tahu langkah mana yang harus dikerjakan setelahnya.'
        },
        {
            pertanyaan: 'Manakah pernyataan yang tepat mengenai penggunaan flowchart?',
            pilihan: ['Flowchart bisa digunakan untuk mendokumentasikan proses bisnis', 'Flowchart hanya digunakan untuk tugas sekolah saja', 'Flowchart sudah tidak digunakan lagi', 'Flowchart hanya untuk ahli komputer saja'],
            jawabanBenar: 'Flowchart bisa digunakan untuk mendokumentasikan proses bisnis',
            pembahasan: 'Flowchart sangat berguna untuk memetakan alur kerja dalam berbagai bidang.'
        },
        {
            pertanyaan: 'Jika flowchart memiliki arah alur yang berputar kembali ke atas, artinya...',
            pilihan: ['Terjadi perulangan (looping)', 'Ada kesalahan fatal', 'Proses selesai', 'Tidak ada input'],
            jawabanBenar: 'Terjadi perulangan (looping)',
            pembahasan: 'Alur yang kembali ke atas adalah indikasi visual adanya perulangan.'
        },
        {
            pertanyaan: 'Apa fungsi simbol \'Terminator\' pada flowchart?',
            pilihan: ['Mulai dan Akhir', 'Proses', 'Input', 'Keputusan'],
            jawabanBenar: 'Mulai dan Akhir',
            pembahasan: 'Terminator adalah titik mulai dan titik akhir program.'
        },
        {
            pertanyaan: 'Apa perbedaan utama antara simbol \'Display\' dan \'Output\' (printer)?',
            pilihan: ['Display untuk layar monitor, Output (Printer) untuk dokumen cetak', 'Keduanya sama saja', 'Display untuk input', 'Sama sekali berbeda fungsi'],
            jawabanBenar: 'Display untuk layar monitor, Output (Printer) untuk dokumen cetak',
            pembahasan: 'Simbol khusus ada untuk membedakan output layar dan output cetak.'
        },
        {
            pertanyaan: 'Simbol trapesium dalam flowchart melambangkan...',
            pilihan: ['Manual Input', 'Output', 'Decision', 'Process'],
            jawabanBenar: 'Manual Input',
            pembahasan: 'Simbol trapesium menunjukkan data yang dimasukkan manual oleh pengguna.'
        },
        {
            pertanyaan: 'Mengapa flowchart harus dibuat sesederhana mungkin?',
            pilihan: ['Agar mudah dipahami oleh programmer lain', 'Agar hemat kertas', 'Agar tidak perlu dibaca', 'Agar sulit dimengerti orang lain'],
            jawabanBenar: 'Agar mudah dipahami oleh programmer lain',
            pembahasan: 'Flowchart yang sederhana memudahkan pemahaman logika program.'
        },
        {
            pertanyaan: 'Setelah membuat flowchart, langkah selanjutnya adalah...',
            pilihan: ['Menulis kode program (coding)', 'Langsung menjual program', 'Menghapus flowchart', 'Melupakan masalah'],
            jawabanBenar: 'Menulis kode program (coding)',
            pembahasan: 'Flowchart menjadi pedoman atau rancangan sebelum ditulis dalam bahasa pemrograman.'
        }
    ]
};