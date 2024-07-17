import React, { useEffect, useState } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import { useParams } from "react-router";

const EachMovieView = () => {
  const { id } = useParams()
  const [ movie , setMovie ] = useState(null)
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const key = "20ee7ddc92e5923dbe9489331f6b1625";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setCredits(response.data.cast);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setVideos(response.data.results);
      });
  }, [id]);

  const firstFive = (arr) => {
    return arr.slice(0, 5);
  };
  const actors = firstFive(credits);

  return (
    <div>
      <div
        className="w-full h-[100vh] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="mx-auto w-2/3 flex gap-4">
          <img
            className="object-cover h-[500px] w-1/3  rounded-xl"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="flex flex-col gap-4 h-full">
            <p className="text-6xl text-white">{movie?.title}</p>
            <p className="text-white">{movie?.overview}</p>
            <div>
              <p className="text-white text-3xl mb-4">Cast</p>
              <div className="flex gap-2 ">
                {actors.map((actor, i) => (
                  <div key={i}>
                    <img
                      className="w-56 h-32 object-cover"
                      src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
                    />
                    <p className="text-white text-center mt-[1px]">
                      {actor?.name}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-yellow-400 text-4xl">Rated</p>
                <p className="text-yellow-400 text-4xl">
                  {movie?.vote_average.toFixed(1)}/10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
      {videos.map((video, i) => (
        <div key={i}>
          {video.name.toLowerCase().includes("trailer") ? (
            <iframe
              src={`https://www.youtube.com/embed/${video?.key}`}
              style={{ width: '100%', height: '500px' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
      ))}
      </div>
    </div>
  );
};

export default EachMovieView;
