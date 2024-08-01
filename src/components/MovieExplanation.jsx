import React from "react";
import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { useState, useEffect } from "react";


const MovieExplanation = ({ movie }) => {
  const [favorites, setFavorites] = useState({});
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = {
        ...prevFavorites,
        [movieId]: !prevFavorites[movieId],
      };
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };


  return (
    <div className="h-[550px] w-full mt-20">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <img
        className="h-full w-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-[30%] pl-4 flex flex-col gap-5">
        <p className="text-5xl text-white">{movie?.title}</p>
        <div className="flex">
        <Link to={`/${movie.id}`}>
          <button className="text-white before:ease relative h-12 w-40 overflow-hidden border border-white shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black hover:shadow-white hover:before:-rotate-180">
          <span className="relative z-10">More Information</span>
          </button>
        </Link>
            <button
            onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie.id);
            }}
            className={`before:ease relative h-12 w-40 overflow-hidden border border-red-500 bg-red-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-red-500 hover:before:-translate-x-40  `}
            ><span className="relative z-10">{ favorites[movie.id] ? "Unfavorite" : "Favorite"}</span></button>
           </div>
        <p className="text-gray-400">Release Date: {movie?.release_date}</p>
        <p className="text-white w-[80%] md:w-[70%] lg:w-[60%]">
          {truncateString(movie?.overview, 170)}
        </p>
  
      </div>
    </div>
  );
};

export default MovieExplanation;