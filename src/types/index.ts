import * as React from 'react';
export type Song = {
  title: string;
  artist: string;
  length: number;
  url: string;
  audioFile: string;
  image: string;
}



export interface AudioContext {
  currentSong: Song | null;
  setCurrentSong: (song: Song) => void;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  duration: number;
  setCurrentTime: (time: number) => void;
  setDuration: (time: number) => void;
  setPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  handlePlayPause: () => void;
  handleSongEnd: () => void;
}



export class MusicPlayer {
  private context: AudioContext;

  constructor(context: AudioContext) {
    this.context = context;
  }

  play() {
    if (this.context.audioRef.current) {
      this.context.audioRef.current.play();
      this.context.setPlaying(true);
    }
  }

  pause() {
    if (this.context.audioRef.current) {
      this.context.audioRef.current.pause();
      this.context.setPlaying(false);
    }
  }

  togglePlayPause() {
    this.context.isPlaying ? this.pause() : this.play();
  }
}
