const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function main() {
	const songs = JSON.parse(fs.readFileSync('./songs.json', 'utf8'));

	for (const song of songs) {
		await prisma.songs.create({
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

	console.log('All songs have been imported!');
}

main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
