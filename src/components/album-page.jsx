import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentSong, togglePlaying } from '../redux/store';
import { useDispatch } from 'react-redux';

const AlbumPage = () => {
  const dispatch = useDispatch();
  const { album } = useParams();
  const songs = useSelector((state) => state.songs.list);
  const albumSongs = songs.filter((song) => song.album === album);

  const handlePlay = (song) => {
    dispatch(setCurrentSong(song));
    dispatch(togglePlaying(true));
  };

  return (
		<div className="relative">
      {albumSongs.length > 0 && (
		<img src={`/api/songs/${albumSongs[0].image}`} alt={album} className="w-screen h-screen object-cover fixed blur-sm  z-0" />
      )}
    <div className=" sticky grid w-screen h-screen align-middle justify-center z-10 bg-black bg-opacity-50 overflow-auto">
      <h1 className="bg-transparent text-8xl drop-shadow-sm">{album}</h1>
      <ul>
        {albumSongs.map((song) => (
          <li key={song.id}>
            {song.title}
            <button onClick={() => handlePlay(song)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
		</div>
  );
};

export default AlbumPage;

