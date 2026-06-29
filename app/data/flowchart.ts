import { FlowchartSymbols } from './FlowchartSymbols';

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

export const Flowchart: Modul = {
  id: 'modul-7',
  judul: 'Flowchart dalam Perancangan Algoritma',
  deskripsi: 'Menguji pemahaman mengenai simbol-simbol standar ISO flowchart dan perannya dalam memvisualisasikan alur logika algoritma.',
  waktu: '45 Menit',
  ringkasan: 'Flowchart adalah representasi grafis dari langkah-langkah eksekusi algoritma menggunakan simbol standar seperti Terminator, Proses, Keputusan, dan Input/Output untuk mempermudah dokumentasi dan pemrograman.',
  soal: [
    {
      pertanyaan: 'Apa tujuan utama dari penggunaan flowchart dalam perancangan algoritma?',
      jawabanBenar: 'Memvisualisasikan alur logika algoritma',
      pilihan: [
        ['Menuliskan kode program secara langsung', 'Salah. Flowchart bukan kode program.'],
        ['Memvisualisasikan alur logika algoritma', 'Benar. Flowchart berfungsi sebagai alat bantu visual untuk memahami alur logika.'],
        ['Menyimpan data hasil pemrosesan', 'Salah. Flowchart tidak menyimpan data.'],
        ['Menggantikan bahasa pemrograman', 'Salah. Flowchart adalah alat perancangan, bukan bahasa pemrograman.']
      ]
    },
    {
      pertanyaan: 'Simbol manakah yang digunakan untuk menunjukkan awal atau akhir dari suatu flowchart?',
      jawabanBenar: 'Terminator:Terminator',
      pilihan: [
        ['Terminator:Terminator', 'Benar. Terminator adalah simbol standar untuk titik mulai (Start) dan selesai (End).'],
        ['Decision:Decision', 'Salah. Decision digunakan untuk percabangan.'],
        ['Process:Process', 'Salah. Process digunakan untuk perhitungan.'],
        ['Input:Input/Output', 'Salah. Input/Output digunakan untuk pengambilan/penampilan data.']
      ]
    },
    {
      pertanyaan: 'Dalam flowchart, simbol apakah yang digunakan untuk merepresentasikan operasi perhitungan atau proses?',
      jawabanBenar: 'Process:Persegi panjang',
      pilihan: [
        ['Input:Jajar genjang', 'Salah. Jajar genjang untuk Input/Output.'],
        ['Decision:Belah ketupat', 'Salah. Belah ketupat untuk Decision.'],
        ['Process:Persegi panjang', 'Benar. Persegi panjang adalah simbol baku untuk proses atau transformasi data.'],
        ['Terminator:Oval', 'Salah. Oval untuk Terminator.']
      ]
    },
    {
      pertanyaan: 'Simbol belah ketupat dalam flowchart digunakan untuk...',
      jawabanBenar: 'Decision:Membuat keputusan atau percabangan',
      pilihan: [
        ['Terminator:Menandai awal program', 'Salah. Awal program memakai Terminator.'],
        ['Decision:Membuat keputusan atau percabangan', 'Benar. Belah ketupat mengandung kondisi yang menentukan alur program berikutnya.'],
        ['Display:Menampilkan hasil ke layar', 'Salah. Menampilkan hasil memakai Jajar genjang.'],
        ['Process:Menuliskan rumus matematika', 'Salah. Menulis rumus memakai Persegi panjang.']
      ]
    },
    {
      pertanyaan: 'Garis alur (Flow Lines) dalam flowchart berfungsi untuk...',
      jawabanBenar: 'LineDown:Menghubungkan simbol dan menunjukkan arah aliran logika',
      pilihan: [
        ['LineDown:Menghubungkan simbol dan menunjukkan arah aliran logika', 'Benar. Garis alur menunjukkan urutan eksekusi antar simbol.'],
        ['LineRight:Memberi warna pada flowchart', 'Salah. Flowchart bukan alat untuk mewarnai.'],
        ['LineLeft:Menuliskan komentar programmer', 'Salah. Komentar tidak menggunakan garis alur.'],
        ['LineUp:Menyimpan data sementara', 'Salah. Flowchart tidak memiliki fungsi penyimpanan data.']
      ]
    },
    {
      pertanyaan: 'Simbol Jajar Genjang digunakan untuk...',
      jawabanBenar: 'Input:Input dan Output data',
      pilihan: [
        ['Process:Proses data', 'Salah. Proses data menggunakan Persegi panjang.'],
        ['Input:Input dan Output data', 'Benar. Digunakan untuk merepresentasikan pengambilan input atau penampilan output.'],
        ['Decision:Kondisi logika', 'Salah. Kondisi menggunakan Belah ketupat.'],
        ['LineRight:Menghubungkan halaman', 'Salah. Menghubungkan halaman menggunakan simbol On-page Connector (Lingkaran).']
      ]
    },
    {
      pertanyaan: 'Manakah aturan penulisan flowchart yang benar?',
      jawabanBenar: 'Aliran harus mengalir dari atas ke bawah atau kiri ke kanan',
      pilihan: [
        ['Aliran harus dimulai dari kiri ke kanan saja', 'Salah. Bisa dari atas ke bawah.'],
        ['Aliran harus mengalir dari atas ke bawah atau kiri ke kanan', 'Benar. Standar flowchart adalah aliran dari atas ke bawah atau kiri ke kanan.'],
        ['Boleh berantakan asal simbolnya benar', 'Salah. Kerapian adalah kunci kemudahan pemahaman.'],
        ['Hanya boleh menggunakan satu jenis simbol', 'Salah. Flowchart memerlukan kombinasi simbol agar bermakna.']
      ]
    },
    {
      pertanyaan: 'Simbol lingkaran kecil digunakan untuk...',
      jawabanBenar: 'Menghubungkan alur di halaman yang sama',
      pilihan: [
        ['Menghubungkan alur di halaman yang sama', 'Benar. Connector lingkaran digunakan untuk menyambung alur di halaman yang sama.'],
        ['OffPageConnector:Menghubungkan alur ke halaman yang berbeda', 'Salah. Halaman berbeda menggunakan simbol Pentagon (Off-page connector).'],
        ['Terminator:Mengakhiri flowchart', 'Salah. Mengakhiri menggunakan Terminator.'],
        ['Input:Memberikan input', 'Salah. Input menggunakan Jajar genjang.']
      ]
    },
    {
      pertanyaan: 'Jika dalam flowchart terdapat sebuah proses yang sangat kompleks, kita bisa menggunakan simbol...',
      jawabanBenar: 'PredefinedProcess:Predefined Process (Sub-program)',
      pilihan: [
        ['PredefinedProcess:Predefined Process (Sub-program)', 'Benar. Simbol Predefined Process (persegi panjang dengan dua garis samping) digunakan untuk modul/sub-program.'],
        ['ManualInput:Manual Input', 'Salah. Manual input untuk data dari keyboard.'],
        ['OffPageConnector:Off-page Connector', 'Salah. Untuk koneksi antar halaman.'],
        ['Display:Display', 'Salah. Display untuk menampilkan di layar.']
      ]
    },
    {
      pertanyaan: 'Mengapa flowchart dianggap sebagai bahasa universal dalam pemrograman?',
      jawabanBenar: 'Karena menggunakan simbol standar yang dipahami secara luas',
      pilihan: [
        ['Karena bisa dijalankan oleh komputer', 'Salah. Komputer tidak menjalankan flowchart.'],
        ['Karena menggunakan simbol standar yang dipahami secara luas', 'Benar. Simbol-simbolnya adalah standar ISO yang diakui secara global.'],
        ['Karena tidak memerlukan logika', 'Salah. Justru flowchart adalah bentuk logika.'],
        ['Karena ditulis dengan bahasa Inggris saja', 'Salah. Flowchart bisa ditulis dengan bahasa apa saja.']
      ]
    },
    {
      pertanyaan: 'Simbol apakah yang melambangkan kegiatan input data secara manual oleh pengguna?',
      jawabanBenar: 'ManualInput:Manual Input',
      pilihan: [
        ['ManualInput:Manual Input', 'Benar. Simbol Manual Input berbentuk trapesium miring.'],
        ['Process:Process', 'Salah. Process berbentuk persegi panjang.'],
        ['Decision:Decision', 'Salah. Decision berbentuk belah ketupat.'],
        ['Preparation:Preparation', 'Salah. Preparation berbentuk segienam.']
      ]
    },
    {
      pertanyaan: "Apa yang dimaksud dengan 'Off-page Connector'?",
      jawabanBenar: 'OffPageConnector:Simbol untuk menghubungkan alur ke halaman berikutnya',
      pilihan: [
        ['OffPageConnector:Simbol untuk menghubungkan alur ke halaman berikutnya', 'Benar. Off-page connector (pentagon) digunakan saat alur pindah ke halaman lain.'],
        ['Simbol untuk mematikan komputer', 'Salah. Tidak ada simbol untuk mematikan komputer.'],
        ['Process:Simbol untuk memproses data', 'Salah. Memproses data memakai persegi panjang.'],
        ['Terminator:Simbol untuk awal program', 'Salah. Awal memakai Terminator.']
      ]
    },
    {
      pertanyaan: "Manakah yang benar tentang simbol 'Preparation'?",
      jawabanBenar: 'Preparation:Digunakan untuk melakukan inisialisasi variabel',
      pilihan: [
        ['Preparation:Digunakan untuk melakukan inisialisasi variabel', 'Benar. Preparation sering dipakai untuk inisialisasi nilai awal.'],
        ['Input:Digunakan untuk mencetak data', 'Salah. Mencetak data memakai Jajar genjang/Display.'],
        ['Decision:Digunakan untuk percabangan', 'Salah. Percabangan memakai belah ketupat.'],
        ['Terminator:Digunakan untuk akhir flowchart', 'Salah. Akhir memakai Terminator.']
      ]
    },
    {
      pertanyaan: "Simbol 'Display' berfungsi untuk...",
      jawabanBenar: 'Display:Menampilkan data di monitor',
      pilihan: [
        ['Display:Menampilkan data di monitor', 'Benar. Display khusus digunakan untuk output ke layar monitor.'],
        ['Input:Input data', 'Salah. Input menggunakan Jajar genjang.'],
        ['Process:Perhitungan', 'Salah. Perhitungan memakai persegi panjang.'],
        ['Decision:Keputusan', 'Salah. Keputusan memakai belah ketupat.']
      ]
    },
    {
      pertanyaan: "Apa kegunaan simbol 'Annotation' dalam flowchart?",
      jawabanBenar: 'Annotation:Menulis catatan tambahan atau penjelasan alur',
      pilihan: [
        ['Annotation:Menulis catatan tambahan atau penjelasan alur', 'Benar. Annotation (kurung kurawal) digunakan untuk memberi komentar pada bagian flowchart.'],
        ['Process:Melakukan proses', 'Salah. Itu memakai persegi panjang.'],
        ['Terminator:Memulai program', 'Salah. Itu memakai Terminator.'],
        ['Input:Input data', 'Salah. Itu memakai Jajar genjang.']
      ]
    },
    {
      pertanyaan: 'Dalam flowchart, apa yang terjadi jika ada dua garis alur yang bertemu?',
      jawabanBenar: 'Harus menggunakan simbol Connector',
      pilihan: [
        ['Harus menggunakan simbol Connector', 'Benar. Pertemuan alur harus diperjelas dengan simbol connector agar tidak membingungkan.'],
        ['Boleh dibiarkan saja', 'Salah. Harus diperjelas.'],
        ['Program akan error', 'Salah. Tidak menyebabkan error secara langsung.'],
        ['Tidak diperbolehkan', 'Salah. Boleh terjadi asalkan mengikuti aturan flowchart.']
      ]
    },
    {
      pertanyaan: "Simbol 'Database' (seperti silinder) dalam flowchart melambangkan...",
      jawabanBenar: 'Penyimpanan data permanen',
      pilihan: [
        ['Penyimpanan data permanen', 'Benar. Simbol database menunjukkan interaksi dengan penyimpanan data.'],
        ['ManualInput:Input dari user', 'Salah. User input memakai jajar genjang/manual input.'],
        ['Process:Proses logika', 'Salah. Itu memakai persegi panjang.'],
        ['Terminator:Awal program', 'Salah. Itu memakai Terminator.']
      ]
    },
    {
      pertanyaan: 'Mengapa arah panah pada garis alur (flow lines) sangat penting?',
      jawabanBenar: 'Untuk menunjukkan arah urutan eksekusi langkah',
      pilihan: [
        ['Untuk mempercantik tampilan', 'Salah. Panah bukan elemen dekorasi, melainkan simbol yang memiliki fungsi penting dalam menunjukkan alur proses.'],
        ['Untuk menunjukkan arah urutan eksekusi langkah', 'Benar. Tanpa panah, pembaca tidak tahu langkah mana yang harus dikerjakan setelah langkah sebelumnya.'],
        ['Untuk memisahkan variabel', 'Salah. Variabel tidak dipisahkan menggunakan panah, melainkan dituliskan sesuai kebutuhan pada simbol flowchart.'],
        ['Tidak ada gunanya', 'Salah. Panah sangat penting karena menghubungkan setiap simbol dan menunjukkan arah jalannya proses.']
      ]
    },
    {
      pertanyaan: 'Manakah pernyataan yang tepat mengenai penggunaan flowchart?',
      jawabanBenar: 'Flowchart bisa digunakan untuk mendokumentasikan proses bisnis',
      pilihan: [
        ['Flowchart bisa digunakan untuk mendokumentasikan proses bisnis', 'Benar. Flowchart sangat berguna untuk memetakan alur kerja dalam berbagai bidang.'],
        ['Flowchart hanya digunakan untuk tugas sekolah saja', 'Salah. Industri menggunakan flowchart untuk sistem.'],
        ['Flowchart sudah tidak digunakan lagi', 'Salah. Masih sangat relevan.'],
        ['Flowchart hanya untuk ahli komputer saja', 'Salah. Siapa saja bisa menggunakan flowchart.']
      ]
    },
    {
      pertanyaan: 'Jika flowchart memiliki arah alur yang berputar kembali ke atas, artinya...',
      jawabanBenar: 'Terjadi perulangan (looping)',
      pilihan: [
        ['Terjadi perulangan (looping)', 'Benar. Alur yang kembali ke atas adalah indikasi visual adanya perulangan.'],
        ['Ada kesalahan fatal', 'Salah. Alur yang kembali ke atas belum tentu merupakan kesalahan, tetapi biasanya menunjukkan proses perulangan.'],
        ['Terminator:Proses selesai', 'Salah. Proses yang selesai ditunjukkan menggunakan simbol Terminator (End), bukan dengan alur yang kembali ke atas.'],
        ['Tidak ada input', 'Salah. Arah panah yang kembali ke atas tidak berhubungan dengan ada atau tidaknya proses input.']
      ]
    },
    {
      pertanyaan: "Apa fungsi simbol 'Terminator' pada flowchart?",
      jawabanBenar: 'Terminator:Mulai dan Akhir',
      pilihan: [
        ['Terminator:Mulai dan Akhir', 'Benar. Terminator adalah titik mulai dan titik akhir program.'],
        ['Process:Proses', 'Salah. Simbol Process berbentuk persegi panjang, bukan Terminator.'],
        ['Input:Input', 'Salah. Input menggunakan simbol Input/Output atau Manual Input, bukan Terminator.'],
        ['Decision:Keputusan', 'Salah. Keputusan menggunakan simbol Decision berbentuk belah ketupat.']
      ]
    },
    {
      pertanyaan: "Apa perbedaan utama antara simbol 'Display' dan 'Output' (pada printer)?",
      jawabanBenar: 'Display:Display untuk layar monitor, Output (Printer) untuk dokumen cetak',
      pilihan: [
        ['Display:Display untuk layar monitor, Output (Printer) untuk dokumen cetak', 'Benar. Simbol khusus ada untuk membedakan output layar dan output cetak.'],
        ['Keduanya sama saja', 'Salah. Kedua simbol memiliki fungsi yang berbeda sesuai media output yang digunakan.'],
        ['Display:Display untuk input, Printer untuk output', 'Salah. Display bukan simbol input, melainkan simbol untuk menampilkan hasil di layar.'],
        ['Sama sekali berbeda fungsi', 'Salah. Keduanya sama-sama merupakan simbol output, hanya berbeda pada media yang digunakan.']
      ]
    },
    {
      pertanyaan: 'Simbol trapesium dalam flowchart melambangkan...',
      jawabanBenar: 'ManualInput:Manual Input',
      pilihan: [
        ['ManualInput:Manual Input', 'Benar. Simbol trapesium digunakan untuk menunjukkan data yang dimasukkan secara manual oleh pengguna, misalnya melalui keyboard.'],
        ['Input:Output', 'Salah. Output umumnya menggunakan simbol Input/Output berbentuk jajaran genjang atau simbol khusus printer.'],
        ['Decision:Decision', 'Salah. Decision menggunakan simbol belah ketupat.'],
        ['Process:Process', 'Salah. Process menggunakan simbol persegi panjang.']
      ]
    },
    {
      pertanyaan: 'Mengapa flowchart harus dibuat sesederhana mungkin?',
      jawabanBenar: 'Agar mudah dipahami oleh programmer lain',
      pilihan: [
        ['Agar mudah dipahami oleh programmer lain', 'Benar. Flowchart yang sederhana memudahkan orang lain memahami logika program dan mempermudah proses pengembangan.'],
        ['Agar hemat kertas', 'Salah. Tujuan utama penyederhanaan flowchart adalah meningkatkan kejelasan, bukan menghemat kertas.'],
        ['Agar tidak perlu dibaca', 'Salah. Flowchart justru dibuat agar mudah dibaca dan dipahami.'],
        ['Agar sulit dimengerti orang lain', 'Salah. Flowchart bertujuan mempermudah komunikasi, bukan mempersulit pemahaman.']
      ]
    },
    {
      pertanyaan: 'Setelah membuat flowchart, langkah selanjutnya adalah...',
      jawabanBenar: 'Menulis kode program (coding)',
      pilihan: [
        ['Menulis kode program (coding)', 'Benar. Flowchart menjadi pedoman atau rancangan sebelum diterjemahkan ke dalam bahasa pemrograman. Flowchart adalah cetak biru untuk menulis kode.'],
        ['Langsung menjual program', 'Salah. Program harus dibuat, diuji, dan diperbaiki terlebih dahulu sebelum dapat digunakan atau dijual.'],
        ['Menghapus flowchart', 'Salah. Flowchart sebaiknya disimpan sebagai dokumentasi dan referensi selama proses pengembangan.'],
        ['Melupakan masalah', 'Salah. Setelah flowchart selesai dibuat, langkah berikutnya adalah mengimplementasikan solusi yang telah dirancang ke dalam bentuk program.']
      ]
    }
  ]
};