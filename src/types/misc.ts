import type {Artist} from "./artist";

export type Quality = string | {quality: string, link: string}[]

export type ImageQuality = "low" | "medium" | "high"

export type StreamQuality = "poor" | "low" | "medium" | "high" | "excellent"

export type Queue = {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  type: 'song'
  image: Quality;
  artists: Artist[];
  download_url: Quality;
  duration: number;
}

export type Type = 
  | "artist"
  | "album"
  | "playlist"
  | "song"
  | "label"

export type Rights = {
  code: unknown;
  cacheable: unknown;
  delete_cached_object: unknown;
  reason: unknown;
}

export type Lang = "english" | "other"

export type Category = "latest" | "popularity" | "alphabetical"

export type Sort = "asc" | "desc"

type QualitiesMap = {
  quality: StreamQuality;
  bitrate: string;
}
export const QUALITIES_MAP: QualitiesMap[] = [
  { quality: "poor", bitrate: "12kbps" },
  { quality: "low", bitrate: "48kbps" },
  { quality: "medium", bitrate: "96kbps" },
  { quality: "high", bitrate: "160kbps" },
  { quality: "excellent", bitrate: "320kbps" },
];

