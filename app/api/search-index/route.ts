import { NextResponse } from 'next/server';
import { searchIndex } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ items: searchIndex() });
}
