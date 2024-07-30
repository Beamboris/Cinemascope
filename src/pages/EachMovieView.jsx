import React, { useEffect, useState } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import { useParams } from "react-router";
import key from "../key";
import MoviesRow from '/src/components/MoviesRow.jsx';
import { SyncLoader } from "react-spinners";

const EachMovieView = () => {
  const { id } = useParams()
  const [ movie , setMovie ] = useState(null)
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading , setLoading ] = useState(true)

    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, creditsResponse, videosResponse] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
        ]);

        setMovie(movieResponse.data);
        setCredits(creditsResponse.data.cast);
        setVideos(videosResponse.data.results);
      } catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
    };

  useEffect(() => {
    fetchMovieDetails();
   
  }, [id]);

  const firstFive = (arr) => {
    return arr.slice(0, 5);
  };
  const actors = firstFive(credits);

  return (
    <>
    {loading ? <div className="w-full h-[100vh] flex justify-center items-center"><SyncLoader size={30} color="#ffffff" /></div>
      : <>
      <div
        className="w-full min:h-[100vh] h-fit pb-20 flex justify-center items-center"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="mx-auto  h-fit min-h-[500px] flex flex-col w-[90%] mt-32 gap-4 md:flex-row md:w-10/12 lg:w-2/3">
          <img
            className="object-cover w-full rounded-xl md:w-1/3 "
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="flex flex-col gap-4 h-full">
            <p className="text-3xl   md:text-6xl text-white">{movie?.title}</p>
            <p className="text-white">{movie?.overview}</p>
            <div>
              {credits.length != 0 ?
               <> 
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
              </> : null }
              <div className="text-center mt-20">
                <p className="text-yellow-400 text-4xl">Movie Rated</p>
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
      <div className="w-full mt-20 mx-auto">
      <MoviesRow rowID={1} typeOfMovies={`Recommended`}  URL={`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}`} recommended={true} />
      </div>
      </>}
      </> 
  );
};
export default EachMovieView;
