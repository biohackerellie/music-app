import type { ArtistMap } from './artist';
import type { Quality } from './misc';
import type { Song } from './song';

export type Album = {
  explicit: boolean;
  id: string;
  image: Quality;
  name: string;
  type: 'album';
  url: string;
  duration?: number;
  year: number;
  artist_map: ArtistMap;
  song_count: number;
  songs: Song[];
  modules: {
    artists: {
      source: string;
      position: number;
      title: string;
      subtitle: string;
    };
  };
};
