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

