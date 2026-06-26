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
    soal: [{ pertanyaan: 'Tipe data apa yang paling tepat untuk menyimpan sebuah kalimat atau teks panjang?', pilihan: ['Integer', 'String', 'Boolean', 'Float'], jawabanBenar: 'String' }] 
  },
  { 
    id: 'modul-2', 
    judul: 'Logika Percabangan (If-Else)', 
    deskripsi: 'Mempelajari cara komputer mengambil keputusan.', 
    waktu: '20 Menit', 
    ringkasan: 'Logika percabangan memungkinkan program kita untuk membuat keputusan. Jika (IF) sebuah kondisi terpenuhi (bernilai benar), maka kerjakan perintah A. Jika tidak terpenuhi, maka kerjakan perintah lain (ELSE). Ini adalah dasar kecerdasan dari sebuah aplikasi.',
    soal: [{ pertanyaan: 'Sintaks apa yang digunakan untuk mengeksekusi blok kode jika kondisi sebelumnya tidak terpenuhi?', pilihan: ['if', 'else if', 'else', 'switch'], jawabanBenar: 'else' }] 
  },
  { 
    id: 'modul-3', 
    judul: 'Looping Statement', 
    deskripsi: 'Mengulang blok kode hingga kondisi terpenuhi.', 
    waktu: '15 Menit', 
    ringkasan: 'Looping (Perulangan) digunakan ketika kita ingin mengeksekusi baris kode yang sama berkali-kali tanpa harus menulisnya berulang-ulang secara manual. Contoh yang sering digunakan adalah "for loop" dan "while loop".',
    soal: [{ pertanyaan: 'Apa fungsi utama dari proses loop dalam pemrograman?', pilihan: ['Supaya program menunggu', 'Untuk menambah error', 'Untuk mengulang sebuah blok kode', 'Untuk menangkap output error'], jawabanBenar: 'Untuk mengulang sebuah blok kode' }, { pertanyaan: 'Jika loop diatur untuk menampilkan angka dari 1 ke 3 secara berurutan, mana yang akan tampil di layar?', pilihan: ['1, 2, 3', '1, 3, 2', '3, 1, 2', '2, 1, 3'], jawabanBenar: '1, 2, 3' }] 
  }
];