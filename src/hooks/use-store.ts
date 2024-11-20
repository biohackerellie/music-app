import {atom, createStore, useAtom} from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import type {ImageQuality, Queue, StreamQuality} from '@/types';

const store = createStore()

const queueAtom = atomWithStorage<Queue[]>('queue', [])

export function useQueue() {
  return useAtom(queueAtom, {store})
}

const currentSongIndexAtom = atomWithStorage("current_song_index", 0)

export function useCurrentSongIndex() {
  return useAtom(currentSongIndexAtom, {store})
}
