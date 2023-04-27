import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AlbumCard = ({ album }) => {
	const songs = useSelector((state) => state.songs.list);
	const albumSongs = songs.find((song) => song.album === album);

	if (!albumSongs) {
		return null;
	}


  return (
    <div className="bg-gray-900 shadow-xl rounded p-3 relative group">
      <img className="w-full md:w-72 block rounded" src={`/api/songs/${albumSongs.image}`} alt="" />
      <div className="p-5 bg-transparent ">
        <h3 className="text-white drop-shadow-sm text-lg bg-transparent">{albumSongs.album}</h3>
        <p className="text-gray-400 bg-transparent">{albumSongs.artist} • {albumSongs.releaseDate}</p>
      </div>
      <div className="absolute bg-transparent bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
				<Link to={`/album/${albumSongs.album}`}>
					View Album
				</Link>
      </div>
    </div>
  );
};


export default AlbumCard;
