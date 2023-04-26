import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from './redux/store';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.musicPlayer.currentSong);
  const isPlaying = useSelector((state) => state.musicPlayer.isPlaying);

  const audioRef = useRef(null); // <-- Added useRef here

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = `/api/songs/${currentSong.audioFile}`;
      audioRef.current.volume = 0.2;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);
  return(
    <div>
    <Home />
    <audio ref={audioRef} preload="auto" /> {/* Use the ref here */}
    </div>
)
};




export default App
