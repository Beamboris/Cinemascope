import React from "react";
import { Link } from "react-router-dom";

const MovieExplanation = ({ movie }) => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
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
        <Link to={`/${movie.id}`}>
          <button className="text-white w-fit border-solid border-[1px] cursor-pointer border-gray-300 px-5 py-3">
            More Information
          </button>
        </Link>
        <p className="text-gray-400">Release Date: {movie?.release_date}</p>
        <p className="text-white lg:w-[60%]">
          {truncateString(movie?.overview, 170)}
        </p>
      </div>
    </div>
  );
};

export default MovieExplanation;
