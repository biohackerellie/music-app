import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(request: Request) {
	const songs = await prisma.songs.findMany();
	return NextResponse.json(songs);
}
