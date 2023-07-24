

import { MusicCard, AlbumCard } from '@/components';

import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from '../redux/store';
import { logo } from './assets';
import { useEffect, useState } from 'react';

async function fetchSongs(){
	const res = await fetch('api/songs');
	const data = await res.json();
	return data;
}

export default async function Home() {
	
	const songs = await fetchSongs();



	return (
		<div className='grid  sm:place-items-center min-h-screen pb-[50px]'>
			<section className='justify-center flex flex-wrap overflow-hidden gap-4 mt-20 sm:mt-0 bg-transparent drop-shadow-md relative mb-0 sm:mb-10'>
				<h1 className='text-8xl font-bold text-center bg-transparent drop-shadow-sm  shadow-black '>
					Ellie Kerns Music
				</h1>
				<img
					src={logo}
					alt='Ellie Kerns Music Logo'
					className=' h-20 w-auto bg-transparent scale-150 mt-5'
				/>
			</section>
			<section className='grid grid-cols-1 p-0 scale-75 sm:scale-100 sm:grid-cols-3 gap-4 mt-0 pb-[1px] sm:pb-[150px] overflow-auto'>
				{songs.map((song) => {
					if (song.album === 'Single') {
						return (
							<div key={song.id}>
							<MusicCard

								song={...song}
							/>
							</div>
						);
					} else {
						return (
							
							<AlbumCard
								key={song.album}
								album={song.album}
							/>
						);
					}
				})}
			</section>
		</div>
	);
}
