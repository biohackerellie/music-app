import type { Album } from './album';
import type { Quality } from './misc';
import type { Song } from './song';

export type Artist = {
  id: string;
  image: Quality;
  url: string;
  name: string;
  type: 'artist';
  role: string;
};

export type ArtistMap = {
  primary_artists: Artist[];
  featured_artists: Artist[];
  artists: Artist[];
};

export type ArtistSong = Pick<
  Song,
  | 'id'
  | 'name'
  | 'subtitle'
  | 'type'
  | 'url'
  | 'image'
  | 'year'
  | 'explicit'
  | 'music'
  | 'artist_map'
> & {
  query: string;
  text: string;
  song_count: number;
};
