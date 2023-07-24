import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
	const song = await prisma.songs.findUnique({
		where: { id },
	});
	return NextResponse.json(song);