import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, togglePlaying, setCurrentTime, setDuration, setVolume } from "../redux/store";
import { FaVolumeDown, FaVolumeUp } from "react-icons/fa";


function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${paddedSeconds}`;
}


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
    <div className=" transition-all fixed bottom-0 left-0 right-0 bg-white  bg-opacity-10 backdrop-blur-md  h-[100px] flex items-bottom justify-evenly">
      <div className=" grid-rows-1 grid grid-cols-3  w-full max-w-screen-xl p4 md:py-5 mx-0 justify-around justify-items-center bg-transparent drop-shadow-md items-center h-full ">
        {currentSong && (
          <>
            <div className="flex items-left  gap-4 bg-transparent"> 
              <img src={`/api/songs/${currentSong.image}`} alt={currentSong.title} className="w-16 h-16" />
              <div className="bg-transparent">
                <h4 className="bg-transparent">{currentSong.title}</h4>
                <p className="bg-transparent">{currentSong.artist}</p>
              </div>
            </div>
					
            <audio ref={audioRef} src={`/api/songs/${currentSong.audioFile}`} preload="auto" onLoadedMetadata={() => dispatch(setDuration(audioRef.current.duration))} />
          </>
        )}
            <div className="flex flex-col items-center   space-y-2 bg-transparent"> 
              <button onClick={handlePlayPause} disabled={!currentSong}>
                {isPlaying ? (
                  <BsPauseCircleFill className="bg-transparent  border-none fill-puke outline-none" size={50} />
                ) : (
                  <BsPlayCircleFill className="  bg-transparent mr-1 fill-baby hover:fill-teal-300 hover:ease-in-out hover:-translate-y-1  hover:scale-105" size={50} />
                )}
              </button>
              <div className="flex">
              <div>{formatTime(currentTime)}</div>
              <input type="range" min="0" max={duration || 0} value={currentTime || 0} onChange={handleTimeChange} className="w-32 sm:w-64 h-1 bg-baby   rounded-full" disabled={!currentSong} />
              <div>{formatTime(duration)}</div>
              </div>
            </div>

            <div className="flex p-1 collapse sm:visible items-end justify-around">
              <FaVolumeDown className="mx-2 my-1 opacity-50" />
              <input type="range" min="0" max="1" step="0.01" value={volume || 0} onChange={handleVolumeChange} className="w-24 h-1 bg-baby rounded-full" />
              <FaVolumeUp className="mx-2 my-1 opacity-50"/>
            </div>

      </div>
    </div>
  );
}

export default Player;

