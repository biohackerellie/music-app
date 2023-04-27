import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, togglePlaying, setCurrentTime, setDuration, setVolume } from "../redux/store";

const Player = () => {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { isPlaying, currentSong, currentTime, duration, volume } = useSelector((state) => state.musicPlayer);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current) {
        dispatch(setCurrentTime(audioRef.current.currentTime));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePlayPause = () => {
    dispatch(togglePlaying());
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    dispatch(setCurrentTime(newTime));
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    dispatch(setVolume(newVolume));
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
 

	return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-br from-stone-100 via-gray-400 to-stone-400 bg-opacity-10 backdrop-blur-sm h-[100px] flex items-center justify-center">
      <div className="flex w-full max-w-screen-xl p4 md:py-8 mx-auto justify-between bg-transparent drop-shadow-md items-center h-full px-8">
        {currentSong && (
          <>
            <div className="flex items-center space-x-4 bg-transparent"> 
              <img src={`/api/songs/${currentSong.image}`} alt={currentSong.title} className="w-16 h-16" />
              <div className="bg-transparent">
                <h4 className="bg-transparent">{currentSong.title}</h4>
                <p className="bg-transparent">{currentSong.artist}</p>
              </div>
            </div>
					
            <audio ref={audioRef} src={`/api/songs/${currentSong.audioFile}`} preload="auto" onLoadedMetadata={() => dispatch(setDuration(audioRef.current.duration))} />
          </>
        )}
            <div className="flex flex-col items-center space-y-2 bg-transparent"> 
              <button onClick={handlePlayPause} disabled={!currentSong}>
                {isPlaying ? (
                  <BsPauseCircleFill className="bg-transparent border-none outline-none" size={50} />
                ) : (
                  <BsPlayCircleFill className="bg-transparent fill-blue-500 border-none outline-none" size={50} />
                )}
              </button>
              <input type="range" min="0" max={duration || 0} value={currentTime || 0} onChange={handleTimeChange} className="w-64 h-1 bg-blue-500 rounded-full" disabled={!currentSong} />
            </div>

            <div className="flex justify-end"> 
              <input type="range" min="0" max="1" step="0.01" value={volume || 0} onChange={handleVolumeChange} className="w-24 h-1 bg-blue-500 rounded-full" />
            </div>

      </div>
    </div>
  );
}

export default Player;

