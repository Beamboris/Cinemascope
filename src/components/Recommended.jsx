import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoHeartFill } from "react-icons/go";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Recommended = ({ URL, typeOfMovies, rowID }) => {
    const navigate = useNavigate()
  const [favorites, setFavorites] = useState({});
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(URL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const scrollToTop = (id) => {
    window.scrollTo({ top: 0});
    navigate(`/${id}`)

};

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [movieId]: !prevFavorites[movieId],
    }));
  };
  console.log(movies);
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
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }


  return (
    <div className="w-[95%] mx-auto">
      <p className="text-white text-3xl py-2">{typeOfMovies}</p>
      <div className="flex items-center relative group">
        <FaArrowCircleLeft
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 md:hidden md:group-hover:block "
          onClick={slideLeft}
        />
        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative">
          {movies.map((item, i) => (
            <div
              key={i}
              onClick={() => scrollToTop(item.id)}
              className="w-[150px] h-[200px] inline-block relative cursor-pointer ml-2 md:w-[200px] md:h-[250px]"
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 flex justify-center items-center text-center">
                <p className="text-white text-xs md:text-sm max-w-[150px] whitespace-normal break-words h-full mx-auto flex justify-center items-center">
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
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.title}
              />
            </div>
          ))}
        </div>
        <FaArrowCircleRight
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 md:hidden md:group-hover:block"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Recommended;