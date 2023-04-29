import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentSong, togglePlaying } from '../redux/store';
import { useDispatch } from 'react-redux';


const apiUrl = import.meta.env.VITE_API_URL;

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
		<img src={`${apiUrl}/songs/${albumSongs[0].image}`} alt={album} className=" w-full h-screen object-cover absolute blur-sm  z-0" />
      )}
    <div className=" sticky grid w-screen h-screen align-middle justify-center z-10 bg-black bg-opacity-50 overflow-auto">
      <h1 className="bg-transparent mt-20 sm:mt-0 text-8xl text-center drop-shadow-sm font-bold">{album}</h1>
      <ul className="bg-transparent  items-center justify-center  text-center text-3xl pb-10 mb-[80px]  ">
        {albumSongs.map((song) => (
          <li 
						key={song.id}
						className="bg-transparent mx-15 sm:mx-[150px] hover:bg-gray-700 hover:text-4xl hover:translate-y-2 hover:bg-opacity-50  rounded-3xl p-4 items-center  text-center "
					>
            <button onClick={() => handlePlay(song)}>{song.title}</button>
          </li>
        ))}
      </ul>
    </div>
		</div>
  );
};

export default AlbumPage;

