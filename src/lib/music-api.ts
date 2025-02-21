"use server";

import client from "./db"
import type {
  Song
  
} from "@/types"


const db = client.db("musicdb");
const songs = db.collection<Song>("music");
export async function getAllSongs() {
  const data = await songs.find<Song>({}).toArray()
  return data;
}

export async function getSongsFromAlbum(album: string) {
  return await songs.find<Song>({
   album: album 
  }, {
      sort: {
        track: 1
      } 
    }).toArray()
  
}

