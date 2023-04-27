import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await fetch('http://10.50.1.76:3001/api/songs');
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
		currentTime: 0,
		duration: 0,
		volume: 0.5,
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    togglePlaying: (state, play) => {
      state.isPlaying = !state.isPlaying;			
    },
		setCurrentTime: (state, action) => {
			state.currentTime = action.payload;
		},
		setDuration: (state, action) => {
			state.duration = action.payload;
		},
		setVolume: (state, action) => {
			state.volume = action.payload;
		}

  },

});

export const { setCurrentSong, togglePlaying, setCurrentTime, setDuration, setVolume } = musicPlayerSlice.actions;


const store = configureStore({
  reducer: {
		songs: songsSlice.reducer,
		musicPlayer: musicPlayerSlice.reducer,
	},
});

export default store;