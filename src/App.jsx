import React, { useState, useEffect } from 'react'
import './index.css'
import Home from './components/home'
import Footers from './components/footer'



const App =() => {
	const [songs, setSongs] = useState([]);
	
	useEffect(() => {
		const fetchSongs = async () => {
			const response = await fetch('http://localhost:3001/songs');
			const songData = await response.json();
			setSongs(songData);
		};
		fetchSongs();
	}, []);

  return (
			<Home />
  )
}


export default App
