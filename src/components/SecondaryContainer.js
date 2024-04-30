import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  return movies.nowPlayingMovies &&  movies.popularMovies && (
    <div className=' bg-black'>
      <div className='md-0  md:-mt-52 pl-4  md:pl-12  relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />

      </div>
      {/*

          MovieList - Popular
            -MovieCards*n
          MovieList - Horror
          .
          .
          .  

      */}
    </div>
  )
}

export default SecondaryContainer
