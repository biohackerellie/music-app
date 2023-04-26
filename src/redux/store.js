import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await fetch('http://localhost:3001/api/songs');
  if (!response.ok) {
    throw new Error('Error fetching songs: ' + response.statusText);
  }
  const songData = await response.json();
  return songData; 
	
});

console.log(fetchSongs)

const songsSlice = createSlice({
	name: 'songs',
	initialState: {
		list: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSongs.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchSongs.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.list = action.payload;
			})
			.addCase(fetchSongs.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});


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
  reducer: {
		songs: songsSlice.reducer,
		musicPlayer: musicPlayerSlice.reducer,
	},
});

export default store;