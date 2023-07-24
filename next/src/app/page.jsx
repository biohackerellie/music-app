'use client';

import { MusicCard, AlbumCard } from '@/components';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from '../redux/store';
import { logo } from './assets';
import { useEffect, useState } from 'react';

export default async function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSongs());
	}, [dispatch]);

	const songs = useSelector((state) => state.songs.list);

	const status = useSelector((state) => state.songs.status);
	const error = useSelector((state) => state.songs.error);
	const [sortedElements, setSortedElements] = useState([]);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchSongs());
		}
	}, [status, dispatch]);

	useEffect(() => {
		if (status === 'succeeded') {
			const combined = [];
			const albumSet = new Set();

			songs.forEach((song) => {
				if (song.album === 'Single') {
					combined.push({ type: 'Single', content: song });
				} else if (!albumSet.has(song.album)) {
					albumSet.add(song.album);
					combined.push({ type: 'Album', content: song });
				}
			});

			combined.sort((a, b) => {
				const dateA =
					a.type === 'Single'
						? a.content.releaseDate
						: Math.max(
								...songs
									.filter((song) => song.album === a.content.album)
									.map((song) => song.releaseDate)
						  );
				const dateB =
					b.type === 'Single'
						? b.content.releaseDate
						: Math.max(
								...songs
									.filter((song) => song.album === b.content.album)
									.map((song) => song.releaseDate)
						  );
				return dateB - dateA;
			});

			setSortedElements(combined);
		}
	}, [status, songs]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	if (status === 'failed') {
		return <div>{error}</div>;
	}

	return (
		<div className='grid  sm:place-items-center min-h-screen pb-[50px]'>
			<section className='justify-center flex flex-wrap overflow-hidden gap-4 mt-20 sm:mt-0 bg-transparent drop-shadow-md relative mb-0 sm:mb-10'>
				<h1 className='text-8xl font-bold text-center bg-transparent drop-shadow-sm  shadow-black '>
					Ellie Kerns Music
				</h1>
				<Image
					src={logo}
					alt='Ellie Kerns Music Logo'
					className=' h-20 w-auto bg-transparent scale-150 mt-5'
				/>
			</section>
			<section className='grid grid-cols-1 p-0 scale-75 sm:scale-100 sm:grid-cols-3 gap-4 mt-0 pb-[1px] sm:pb-[150px] overflow-auto'>
				{sortedElements.map((item) => {
					if (item.type === 'Single') {
						return (
							<MusicCard
								key={item.content.id}
								song={item.content}
							/>
						);
					} else {
						return (
							<AlbumCard
								key={item.content.album}
								album={item.content.album}
							/>
						);
					}
				})}
			</section>
		</div>
	);
}
