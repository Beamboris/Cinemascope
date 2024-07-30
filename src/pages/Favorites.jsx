import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import key from '/src/key.js';
import { GoHeartFill } from 'react-icons/go';

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    const favoriteMovieIds = Object.keys(storedFavorites).filter(id => storedFavorites[id]);

    const fetchFavoriteMovies = async () => {
      try {
        const movieRequests = favoriteMovieIds.map(id =>
          axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
        );

        const movieResponses = await Promise.all(movieRequests);
        setMovies(movieResponses.map(response => response.data));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (favoriteMovieIds.length > 0) {
      fetchFavoriteMovies();
    } else {
      setLoading(false);
    }
  }, []);

  const redirectToMovie = (movieID) => {
    navigate(`/${movieID}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleFavorite = (movieId) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    const updatedFavorites = {
      ...storedFavorites,
      [movieId]: !storedFavorites[movieId],
    };
    setMovies(prevMovies =>
      prevMovies.filter(movie => movie.id !== movieId)
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={150} />
      </div>
    );
  } 

  return (
    <div className='mt-32 min-h-[40vh]'>
      {movies.length === 0 ? (
        <h6 className='text-4xl text-white text-center mb-20'>You have no favorite movies.</h6>
      ) : (
        <>
          <h6 className='text-4xl text-white text-center mb-20'>These are your favorite movies</h6>
          <div className='w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {movies.map((movie, i) => (
                <div className='mb-36 md:mb-20'>
                  <img className="w-full h-full object-cover rounded-lg cursor-pointer" onClick={() => redirectToMovie(movie?.id)} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                  <div className='flex justify-between items-center mx-5'>
                  <p className='text-white text-3xl mt-5'>{movie?.title}</p>
                  <GoHeartFill
                  size={30}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(movie.id);
                  }}
                  className={`text-2xl ${
                    movies.find(m => m.id === movie.id) ? "text-red-500" : "text-white"
                  } cursor-pointer`}
                />
                </div>
                </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorites;
