'use client';

import * as React from 'react';
import type { AudioContext, Song } from '../types';

const MusicPlayerContext = React.createContext<AudioContext | undefined>(
  undefined,
);

export const useMusicPlayer = () => {
  const context = React.useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};

export const MusicPlayerProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [currentSong, setCurrentSong] = React.useState<Song | null>(null);
  const [isPlaying, setPlaying] = React.useState<boolean>(false);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const [volume, setVolume] = React.useState<number>(1);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  const handleSongEnd = () => {
    setPlaying(false);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        setCurrentTime,
        setDuration,
        setPlaying,
        setVolume,
        audioRef,
        handlePlayPause,
        handleSongEnd,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
