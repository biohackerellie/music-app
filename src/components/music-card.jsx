import { BsPlayCircleFill } from "react-icons/bs";
import React from 'react'
import { useDispatch } from "react-redux";
import { setCurrentSong, togglePlaying } from "../redux/store";



const MusicCard = ({ song }) => {
	const dispatch = useDispatch();

	const handlePlay = () => {
		dispatch(setCurrentSong(song));
		dispatch(togglePlaying());
	}

	return(
		<div className="bg-gray-900 shadow-xl rounded p-3">
			<div className="group relative">
				<img className="w-full md:w-72 block rounded" src={`/api/songs/${song.image}`} alt="" />
				<div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
					<button 
						className=" text-white opacity-0 transform translate-y-3 
							group-hover:translate-y-0 group-hover:opacity-100 transition"
						onClick={handlePlay} 
							>
						<BsPlayCircleFill scale={200} />
					</button>
				</div>
			</div>
		<div className="p-5 bg-transparent">
			<h3 className="text-white drop-shadow-sm text-lg bg-inherit">{song.title}</h3>
			<p className="text-gray-400 bg-inherit">{song.artist} • {song.releaseDate} </p>
		</div>
		</div>
	)
}


export default MusicCard;