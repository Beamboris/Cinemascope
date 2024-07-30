import React, { useState } from 'react';
import requests from '../requests.js';
import MoviesRow from '../components/MoviesRow.jsx'
import MovieExplanation from '../components/MovieExplanation.jsx';

const MoviesFeed = () => {


    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
  
    
    
  return (  
    <div>
      {selectedMovie && <MovieExplanation movie={selectedMovie} />}
      <div className="pt-20">
      <MoviesRow rowID={1} URL={requests.popular} onSelectMovie={handleSelectMovie} typeOfMovies="Popular"  />
      <MoviesRow rowID={2} URL={requests.topRated} onSelectMovie={handleSelectMovie} typeOfMovies="Top Rated" />
      <MoviesRow rowID={3} URL={requests.nowPlaying} onSelectMovie={handleSelectMovie} typeOfMovies="Now Playing" />
      <MoviesRow rowID={4} URL={requests.action} onSelectMovie={handleSelectMovie} typeOfMovies="Action Movies" />
      </div>
    </div>
  )
}

export default MoviesFeed
