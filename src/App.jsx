import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from './redux/store';
import Home from './components/home';
import Footer from './components/footer';
import Player from './components/player';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return(
    <div>
    <div>
    <Home />
    </div>
      <div className="relative">
    <Player />
    </div>
    </div>
)
};




export default App
