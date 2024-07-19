import React, { useState } from 'react';
import requests from '../requests.js';
import MovieRow from '../components/MoviesRow.jsx'
import MovieExplanation from '../components/MovieExplanation.jsx';

const MovieFeed = () => {


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
      <MovieRow rowID={1} URL={requests.popular} onSelectMovie={handleSelectMovie} typeOfMovies="Popular"  />
      <MovieRow rowID={2} URL={requests.topRated} onSelectMovie={handleSelectMovie} typeOfMovies="Top Rated" />
      <MovieRow rowID={3} URL={requests.nowPlaying} onSelectMovie={handleSelectMovie} typeOfMovies="Now Playing" />
      <MovieRow rowID={4} URL={requests.horror} onSelectMovie={handleSelectMovie} typeOfMovies="Horror Movies" />
      <MovieRow rowID={5} URL={requests.action} onSelectMovie={handleSelectMovie} typeOfMovies="Action Movies" />
      </div>
    </div>
  )
}

export default MovieFeed
