import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import Trailer from './components/partials/Trailer'
import NotFound from './components/NotFound'
import Loading from './components/Loading'
import About from './components/partials/About'
import Contact from './components/Contact'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return loading === false ? (
    <div className='bg-[#1F1E24] w-screen h-screen flex '>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />

        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/details/:id' element={<MovieDetails />}>
          <Route path='/movie/details/:id/trailer' element={<Trailer />} />
        </Route>

        <Route path='/tv' element={<TvShows />} />
        <Route path='/tv/details/:id' element={<TvDetails />} >
          <Route path='/tv/details/:id/trailer' element={<Trailer />} />

        </Route>

        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>


        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  ) : (<Loading />)
}

export default App