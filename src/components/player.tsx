'use client';
import {
  Loader2,
  MoreVertical,
  MoveUpRight,
  Pause,
  Repeat,
  Repeat1,
  Shuffle,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

import { Icons } from '@/components/icons';
import { useEventListener } from '@/hooks/use-event-listener';
import {
  useCurrentSongIndex,
  useIsPlayerInit,
  useIsTyping,
  useQueue,
  useStreamQuality,
} from '@/hooks/use-store';
import { cn, formatDuration, getDownloadLink, getImageSrc } from '@/lib/utils';
import { ImageWithFallback } from './image-fallback';

const Player = () => {
  const {
    currentSong,
    setCurrentSong,
    isPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    volume,
    setVolume,
    audioRef,
    handlePlayPause,
    handleSongEnd,
    setPlaying,
  } = useMusicPlayer();

  // Constructing the MusicPlayer instance
  const musicPlayer = new MusicPlayer({
    currentSong,
    setCurrentSong,
    isPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    volume,
    setVolume,
    audioRef,
    setPlaying,
    handlePlayPause,
    handleSongEnd,
  });

  useEffect(() => {
    if (!audioRef.current || !currentSong) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(currentSong.audioFile);
      hls.attachMedia(audioRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setDuration(audioRef.current?.duration || 0);
      });

      return () => {
        hls.destroy();
      };
    }
    if (audioRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      audioRef.current.src = currentSong.audioFile;
    }
  }, [audioRef, currentSong, setDuration]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setCurrentTime, audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleSongEnd);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleSongEnd);
      }
    };
  }, [handleSongEnd, audioRef]);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number.parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {currentSong && (
        <div className="transition-all fixed bottom-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-md h-[100px] flex items-bottom justify-evenly">
          <div className="grid-rows-1 grid grid-cols-2 sm:grid-cols-3 w-full max-w-screen-xl p4 md:py-5 mx-0 justify-items-center bg-transparent drop-shadow-md items-center h-full">
            <div className="flex items-left mt-5 gap-4 bg-transparent">
              <img
                src={currentSong.image}
                alt={currentSong.title}
                className="w-16 h-16"
              />
              <div className="bg-transparent">
                <h4 className="bg-transparent">{currentSong.title}</h4>
                <p className="bg-transparent">{currentSong.artist}</p>
              </div>
            </div>
            <audio ref={audioRef} preload="auto" />
            <div className="flex flex-col mt-5 sm:mt-0 items-center justify-center space-y-2 bg-transparent w-full">
              <button
                onClick={() => musicPlayer.togglePlayPause()}
                disabled={!currentSong}
              >
                {isPlaying ? (
                  <PauseCircleIcon
                    className="bg-transparent border-none fill-puke outline-none"
                    size={50}
                  />
                ) : (
                  <PlayCircleIcon
                    className="bg-transparent mr-1 fill-baby hover:fill-teal-300 hover:ease-in-out hover:-translate-y-1 hover:scale-105"
                    size={50}
                  />
                )}
              </button>
              <div className="flex justify-center w-full">
                <div>{formatTime(currentTime)}</div>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime || 0}
                  onChange={handleTimeChange}
                  className="w-32 sm:w-64 h-1 bg-baby rounded-full"
                  disabled={!currentSong}
                />
                <div>{formatTime(duration)}</div>
              </div>
            </div>
            <div className="flex p-1 collapse sm:visible items-end justify-around">
              <Volume1Icon className="mx-2 my-1 opacity-50" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume || 0}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-baby rounded-full"
              />
              <Volume2Icon className="mx-2 my-1 opacity-50" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Player;

function formatTime(timeInSeconds: number) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${paddedSeconds}`;
}
