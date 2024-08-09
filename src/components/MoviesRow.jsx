import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { GoHeartFill } from "react-icons/go";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import PlaceholderCard from "/src/components/PlaceholderCard.jsx";
import { useNavigate } from "react-router-dom";

const MoviesRow = ({
  URL,
  typeOfMovies,
  onSelectMovie,
  recommended = false,
}) => {
  const [favorites, setFavorites] = useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const placeholders = new Array(10).fill(0);
  const sliderRef = useRef(null);
  
  const movieFunction = async () => {
    try {
      const data = await axios.get(URL).then((res) => {
        setMovies(res.data.results);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const redirectToMovie = (movieID) => {
      navigate(`/${movieID}`)
     window.scrollTo({
      top: 0,
    });
  };

  const voteAverageColorer = (vote_average) => {
    if (vote_average === 0) {
      return "opacity-0";
    } else if (vote_average < 4) {
      return "text-red-600";
    } else if (vote_average > 4 && vote_average < 7) {
      return "text-orange-500";
    } else {
      return "text-green-300";
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };
  
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };


  useEffect(() => {
    movieFunction();
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, [URL]);

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
    <div className="w-[95%] mx-auto">
      <h5 className="text-white text-3xl py-2">{typeOfMovies}</h5>
      <div className="flex items-center relative group">
        <FaArrowCircleLeft
          size={40}
          className="bg-white top-20 md:top-[35%] rounded-full absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 md:hidden md:group-hover:block "
          onClick={slideLeft}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative"
        >
          {loading
            ? placeholders.map((_, i) => <PlaceholderCard key={i} />)
            : movies.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    if (recommended) {
                      redirectToMovie(item?.id);
                    } else {
                      onSelectMovie(item);
                    }
                  }}
                  className="w-[150px] h-[200px] inline-block relative cursor-pointer ml-2 md:w-[200px] md:h-[250px]"
                >
                    <div className="hidden md:flex absolute top-0 left-0 w-full h-full md:opacity-0 hover:bg-black/80 hover:opacity-100 justify-center items-center text-center transition-opacity duration-300">
                    <p className="text-white md:text-sm max-w-[150px] whitespace-normal break-words h-full mx-auto flex justify-center items-center">
                      {item?.title}
                    </p>
                    <p>
                      <GoHeartFill
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className={`absolute top-4 right-4 text-2xl ${
                          favorites[item.id] ? "text-red-500" : "text-white"
                        }`}
                      />
                    </p>
                    <p
                      className={`absolute top-4 left-4 text-xl ${voteAverageColorer(
                        item?.vote_average
                      )}`}
                    >
                      {item?.vote_average.toFixed(1)}
                    </p>
                  </div>
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    alt={item?.title}
                    loading="lazy"
                  />
                  <div className="md:hidden">
                    <p className="text-xl text-white truncate break-words">
                      {item?.title}
                    </p>
                    <p
                      className={`text-xl text-center ${voteAverageColorer(
                        item?.vote_average
                      )}`}
                    >
                      {item?.vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
              ))}
        </div>

        <FaArrowCircleRight
          size={40}
          className="bg-white rounded-full absolute top-20 md:top-[35%]  opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 md:hidden md:group-hover:block"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default React.memo(MoviesRow);
