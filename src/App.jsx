import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from './redux/store';
import Home from './components/home';
import  AlbumPage  from './components/album-page';
import Sidebar from './components/sidebar';

import Player from './components/player';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return(
		<Router>
    <div  >
      <div className="collapse sm:visible flex">
        <Sidebar  />
      </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/album/:album" element={<AlbumPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <div className="relative z-50 ">
        <Player />
      </div>
    </div>
		</Router>
)
}




export default App 
