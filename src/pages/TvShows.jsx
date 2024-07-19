import React, { useState } from 'react';
import tvRequests from '/src/tvRequests.js';
import MovieRow from '../components/MoviesRow.jsx';
import TvExplanation from '../components/TvExplanation.jsx'


const TvShows = () => {
    const [selectedShow, setSelectedShow] = useState(null);

    const handleSelectShow = (show) => {
        setSelectedShow(show);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };



  return (
    <div>
    {selectedShow && <TvExplanation show={selectedShow} />}
    <div className="pt-20">
    <MovieRow rowID={1} URL={tvRequests.airingToday} onSelectMovie={handleSelectShow} typeOfMovies="Airing Today"/>
    <MovieRow rowID={2} URL={tvRequests.onTheAir} onSelectMovie={handleSelectShow} typeOfMovies="On The Air"/>
    <MovieRow rowID={3} URL={tvRequests.popular} onSelectMovie={handleSelectShow} typeOfMovies="Popular "/>
  
    </div>
  </div>
  )
}

export default TvShows
