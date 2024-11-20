
import type { Quality } from "./misc";

export type Artist = {
  id: string;
  image: Quality;
  url: string;
  name: string;
  type: 'artist'
  role: string;
}

export type ArtistMap = {
  primary_artists: Artist[];
  featured_artists: Artist[];
  artists: Artist[];
}
