import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
	const response = await fetch('http://localhost:3001/songs');
	const songData = await response.json();
	return songData;
}')

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState: {
    currentSong: null,
    isPlaying: false,
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    togglePlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setCurrentSong, togglePlaying } = musicPlayerSlice.actions;


const store = configureStore({
  reducer: musicPlayerSlice.reducer,
});

export default store;