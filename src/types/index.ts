import * as React from 'react';
export type Song = {
  title: string;
  artist: string;
  length: number;
  url: string;
  img: string;
}



export interface AudioContext {
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
  isPlaying: Boolean
  currentTime: number
  setCurrentTime: (time: number) => void;
  setDuration: (time: number) => void;
  setPlaying: (playing: Boolean) => void;
  setVolume: (volume: number) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  handlePlayPause: () => void;
  handleSongEnd: () => void;
}


export class MusicPlayerContext {
  constructor(AudioContext: AudioContext) {
  }

}
