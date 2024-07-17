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
      <MovieRow URL={requests.popular} onSelectMovie={handleSelectMovie} typeOfMovies="Popular"/>
      <MovieRow URL={requests.topRated} onSelectMovie={handleSelectMovie} typeOfMovies="Top Rated"/>
      <MovieRow URL={requests.nowPlaying} onSelectMovie={handleSelectMovie} typeOfMovies="Now Playing"/>
      </div>
    </div>
  )
}

export default MovieFeed
