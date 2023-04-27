import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, togglePlaying } from "../redux/store";

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
      <img className="w-full md:w-72 block rounded" src={`/api/songs/${song.image}`} alt="" />
      <div className="p-5 bg-transparent ">
        <h3 className="text-white drop-shadow-sm text-lg bg-transparent">{song.title}</h3>
        <p className="text-gray-400 bg-transparent">{song.artist} • {song.releaseDate}</p>
      </div>
      <div className="absolute bg-transparent bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
        <button
          
          onClick={handlePlay}
        >
          {isPlaying && currentSong.id === song.id ? (
            <BsPauseCircleFill className="bg-transparent border-none outline-none focus:outline-none focus:border-none align-end"  size={75} />
          ) : (
            <BsPlayCircleFill className="bg-transparent fill-blue-500 border-none outline-none focus:outline-none focus:border-none align-end" size={75} />
          )}
        </button>
      </div>
    </div>
  );
};


export default MusicCard;
