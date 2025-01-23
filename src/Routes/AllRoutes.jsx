import {Routes, Route} from 'react-router-dom'
import { MovieList, MovieDetail,Search, PageNotFound} from '../Pages'
import { Footer, Header, MovieCard } from '../components'

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className='dark:bg-darkbg'>
      <Routes>
        <Route path='/' element={<MovieList apiPath="movie/now_playing" title="Home"/>}></Route>
        <Route path='/movie/:id' element={<MovieDetail/>}></Route>
        <Route path='/movies/popular' element={<MovieList apiPath="movie/popular" title="popular" />}></Route>
        <Route path='/movies/top' element={<MovieList apiPath="movie/top_rated" title="top_rated" />}></Route>
        <Route path='/movies/upcoming' element={<MovieList apiPath="movie/upcoming" title="upcoming" />}></Route>
        <Route path='/search' element={<Search apiPath="search/movie"/>}></Route>
        <Route path='*' element={<PageNotFound />}></Route>

        
      </Routes>
    </div>
  )
}

 