import type { ArtistMap } from './artist';
import type { Lang, Quality, Rights } from './misc';

export type SongObj = {
  songs: Song[];
  modules?: SongModules;
};

export type Song = {
  _id: string;
  title: string;
  artist: string
  album: string;
  track: number;
  audioFile: string;
  image: string;
  releaseDate: number;
};

export type SongModules = {
  artists: {
    title: string;
    subtitle: string;
    source: string;
    position: number;
  };
};
