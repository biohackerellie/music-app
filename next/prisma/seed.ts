import { prisma } from '@/utils/prisma';

const songs = require('../src/utils/songs.json');

async function main() {
	const { PrismaClient } = require('@prisma/client');
	const prisma = new PrismaClient();

	for (const song of songs) {
		await prisma.song.create({
			data: {
				title: song.title,
				artist: song.artist,
				album: song.album,
				image: song.image,
				audioFile: song.audioFile,
				releaseDate: song.releaseDate,
			},
		});
	}

	await prisma.$disconnect();
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
