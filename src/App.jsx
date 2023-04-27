import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from './redux/store';
import Home from './components/home';
import  AlbumPage  from './components/album-page';
import Footer from './components/footer';
import Player from './components/player';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return(
		<Router>
    <div>
    <div>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/album/:album" element={<AlbumPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
    </div>
      <div className="relative z-50">
    <Player />
    </div>
    </div>
		</Router>
)
}




export default App
