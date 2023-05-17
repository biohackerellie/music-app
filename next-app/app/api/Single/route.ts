import { NextResponse } from "next/server";

const singles = [
  {
    id: 1,
    title: "Makin it Up",
    artist: "Ellie Kerns",
    album: "Single",
    image: "images/makin.jpg",
    audioFile: "audio/makin.mp3",
    releaseDate: "2023",
  },
  {
    id: 2,
    title: "Getting Older",
    artist: "Ellie Kerns",
    album: "Single",
    image: "images/older.jpg",
    audioFile: "audio/older.mp3",
    releaseDate: "2022",
  },
  {
    id: 3,
    title: "Willow",
    artist: "Ellie Kerns",
    album: "Single",
    image: "images/willow.jpg",
    audioFile: "audio/willow.wav",
    releaseDate: "2022",
  },
  {
    id: 5,
    title: "Jordan Peterson",
    artist: "Ellie Kerns",
    album: "Single",
    image: "images/peterson.png",
    audioFile: "audio/peterson.wav",
    releaseDate: "2022",
  },
];

export default async function GET(res: NextResponse) {
  return await res.json();
}
