import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import Person from './components/Person'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex '>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/details/:id' element={<MovieDetails />} />
        
        <Route path='/tv' element={<TvShows />} />
        <Route path='/tv/details/:id' element={<TvDetails />} />

        <Route path='/person' element={<Person />} />
        <Route path='/person/details/:id' element={<PersonDetails />} />

      </Routes>
    </div>
  )
}

export default App