'use client';

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const AlbumCard = ({ album }) => {
	const songs = useSelector((state) => state.songs.list);
	const albumSongs = songs.find((song) => song.album === album);

	if (!albumSongs) {
		return null;
	}

	return (
		<div className='bg-gray-900 shadow-xl rounded p-3 relative group'>
			<Image
				className='w-full md:w-72 block rounded'
				src={`api/songs/${albumSongs.image}`}
				alt=''
			/>
			<div className='p-5 bg-transparent '>
				<h3 className='text-baby drop-shadow-sm text-lg bg-transparent'>
					{albumSongs.album}
				</h3>
				<p className='text-purts bg-transparent'>
					{albumSongs.artist} • {albumSongs.releaseDate}
				</p>
			</div>
			<div className='absolute bg-slate-500 bg-opacity-80 rounded-md text-baby  hover:fill-teal-300 hover:ease-in-out hover:-translate-y-1  hover:scale-105 bottom-4 right-4 opacity-100 sm:opacity-0  sm:group-hover:opacity-100 transition'>
				<Link href={`/album/${albumSongs.album}`}>View Album</Link>
			</div>
		</div>
	);
};

export default AlbumCard;
