'use client';

import React from 'react';

import Link from 'next/link';
import {
	FaHome,
	FaAmazon,
	FaRecordVinyl,
	FaSpotify,
	FaYoutube,
	FaSoundcloud,
	FaItunes,
	FaGithub,
} from 'react-icons/fa';

export default function Sidebar() {
	const SideBarIcon = ({ icon, text, link }) => (
		<Link
			className='sidebar-icon group '
			href={link}
		>
			{icon}
			<span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
		</Link>
	);

	return (
		<div
			className=' fixed sm:fixed sm:top-0 sm:left-0 h-30 sm:h-screen w-screen  z-50 sm:w-16  sm:m-0 
    flex flex-row sm:flex-col 
    bg-gray-900 text-white shadow-lg'
		>
			<SideBarIcon
				icon={<FaHome size='28' />}
				text='Home'
				link='/'
			/>
			<SideBarIcon
				icon={<FaRecordVinyl size='28' />}
				text='Album - Songs in My Head'
				link='/album/Songs in My Head'
			/>
			<SideBarIcon
				icon={<FaSpotify size='28' />}
				text='Spotify'
				link='https://open.spotify.com/artist/0csjx5EnVlhizAs1mwMwrW?si=e2f8G0_nRL2pd1vM7tqQhQ'
			/>
			<SideBarIcon
				icon={<FaItunes size='28' />}
				text='Apple Music'
				link='https://music.apple.com/us/artist/ellie-kerns/1572324391'
			/>
			<SideBarIcon
				icon={<FaAmazon size='28' />}
				text='Amazon Music'
				link='https://music.amazon.com/artists/B0977FBDC1/ellie-kerns'
			/>
			<SideBarIcon
				icon={<FaYoutube size='28' />}
				text='YouTube'
				link='https://www.youtube.com/channel/UCVrCmyRUGf9KQZ7r6R8_ZeQ'
			/>
			<SideBarIcon
				icon={<FaSoundcloud size='28' />}
				text='SoundCloud'
				link='https://soundcloud.com/elliekerns'
			/>
			<SideBarIcon
				icon={<FaGithub size='28' />}
				text='Github'
				link='https://github.com/biohackerellie/music-app'
			/>
		</div>
	);
}
