import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, togglePlaying } from "../redux/store";


const Player = ({ song }) => {

  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.musicPlayer.isPlaying);
  const currentSong = useSelector((state) => state.musicPlayer.currentSong);

  const handlePlay = () => {
    dispatch(setCurrentSong(song));
    dispatch(togglePlaying());
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-700 bg-opacity-80 h-[150px]">
      
    </div>
  )
}

export default Player