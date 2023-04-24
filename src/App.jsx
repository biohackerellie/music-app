import { useState } from 'react'
import './index.css'
import MusicCard from './components/music-card'



function App() {


  return (
    <>
      <h1>Hello</h1>
      <MusicCard
        title="Older"
        releaseDate="2022"
        type="Single"
      />
    </>
  )
}

export default App
