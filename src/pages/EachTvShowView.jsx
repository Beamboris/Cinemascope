import React, { useEffect, useState } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import { useParams } from "react-router";

const EachTvShowView = () => {
  const { id } = useParams()
  const [ show , setShow ] = useState(null)
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const key = "20ee7ddc92e5923dbe9489331f6b1625";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setShow(response.data);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setCredits(response.data.cast);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`
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
    <>
      <div
        className="w-full min:h-[100vh] h-fit pb-20 flex justify-center items-center"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${show?.backdrop_path}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="mx-auto  h-fit min-h-[500px] flex flex-col w-[90%] mt-32 gap-4 md:flex-row md:w-10/12 lg:w-2/3">
          <img
            className="object-cover w-full rounded-xl md:w-1/3 "
            src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`}
            alt={show?.name}
          />
          <div className="flex flex-col gap-4 h-full">
            <p className="text-3xl   md:text-6xl text-white">{show?.name}</p>
            <p className="text-white">{show?.overview}</p>
            <div>
              <p className="text-white text-3xl mb-4">Cast</p>
              <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
                {actors.map((actor, i) => (
                  <div key={i}>
                    <img
                      className="w-32 h-20  md:w-56 md:h-32 object-cover"
                      src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
                    />
                    <p className="text-xs md:text-base text-white text-center mt-[1px]">
                      {actor?.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-20">
                <p className="text-yellow-400 text-4xl">Show Rated</p>
                <p className="text-yellow-400 text-4xl">
                  {show?.vote_average.toFixed(1)}/10
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
            <div className="mt-20">
              <p className="text-white text-4xl mb-2">{video?.name}</p>
            <iframe
              src={`https://www.youtube.com/embed/${video?.key}`}
              style={{ width: '100%', height: '500px' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
          ) : null}
        </div>
      ))}
      <div>
      </div>
      </div>
      </> 
  );
};

export default EachTvShowView;