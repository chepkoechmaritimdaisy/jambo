import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { Ambassador } from '@/lib/types';

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code) {
    return new NextResponse('Coupon code is required', { status: 400 });
  }

  try {
    const { rows } = await sql<Ambassador>`
      SELECT * FROM ambassadors WHERE unique_code = ${code};
    `;

    if (rows.length === 0) {
      return new NextResponse('Invalid coupon code', { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
