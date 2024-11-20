import type {ArtistMap} from './artist';
import type {Lang, Quality, Rights} from './misc';

export type SongObj = {
  songs: Song[]
  modules?: SongModules;
}

export type Song = {
  id: string;
  name: string;
  subtitle: string;
  header_desc: string;
  type: "song";
  year: number;
  explicit: boolean;
  music: string;
  url: string;
  image: Quality
  song?: string;
  album: string;
  album_id: string;
  album_url?: string;
  download_url: Quality;
  duration: number;
  rights: Rights;
  artist_map: ArtistMap;
  release_date?: string;

}

export type SongModules = {
  artists: {
    title: string;
    subtitle: string;
    source: string;
    position: number
  }
}
