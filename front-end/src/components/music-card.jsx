import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, togglePlaying } from "../redux/store";
const apiUrl = import.meta.env.VITE_API_URL;

const MusicCard = ({ song }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.musicPlayer.isPlaying);
  const currentSong = useSelector((state) => state.musicPlayer.currentSong);

  const handlePlay = () => {
		if (currentSong && currentSong.id === song.id) {
			dispatch(togglePlaying());
		} 
		else {
    dispatch(setCurrentSong(song));
    dispatch(togglePlaying());
  }
};

  return (
    <div className="bg-gray-900 shadow-xl rounded p-3 relative group">
      <img className="w-full md:w-72 block rounded" src={`${apiUrl}/songs/${song.image}`} alt="" />
      <div className="p-5 bg-transparent ">
        <h3 className="text-baby drop-shadow-sm text-lg bg-transparent">{song.title}</h3>
        <p className="text-purts bg-transparent">{song.artist} • {song.releaseDate}</p>
      </div>
      <div className="absolute bg-transparent bottom-4 right-4 opacity-100 sm:opacity-0  sm:group-hover:opacity-100 transition">
        <button
          
          onClick={handlePlay}
        >
          {isPlaying && currentSong.id === song.id ? (
            <BsPauseCircleFill className="bg-transparent border-none outline-none focus:outline-none focus:border-none align-end"  size={50} />
          ) : (
            <BsPlayCircleFill className="bg-transparent fill-baby hover:fill-teal-300 hover:ease-in-out hover:-translate-y-1  hover:scale-105 border-none outline-none focus:outline-none focus:border-none align-end" size={50} />
          )}
        </button>
      </div>
    </div>
  );
};


export default MusicCard;
