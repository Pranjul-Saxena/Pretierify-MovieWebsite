import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import Person from './components/Person'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex '>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movies />} />
        
        <Route path='/tv' element={<TvShows />} />

        <Route path='/person' element={<Person />} />
      </Routes>
    </div>
  )
}

export default App