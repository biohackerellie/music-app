import { configureStore, createSlice } from '@reduxjs/toolkit';

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