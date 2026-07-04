import { NextResponse } from 'next/server';
import { pool } from '../../../lib/db'; 

// Ini buat NAMPILIN data di halaman Leaderboard
export async function GET() {
  try {
    const result = await pool.query(
      'SELECT nama, skor FROM leaderboard ORDER BY skor DESC LIMIT 10'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Gagal memuat data' }, { status: 500 });
  }
}

// Ini buat MASUKIN nilai baru pas user selesai kuis
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, skor } = body;

    await pool.query(
      'INSERT INTO leaderboard (nama, skor) VALUES ($1, $2)',
      [nama, skor]
    );

    return NextResponse.json({ message: 'Skor berhasil disimpan!' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Gagal menyimpan skor' }, { status: 500 });
  }
}