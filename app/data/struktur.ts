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

export const Struktur: Modul = {