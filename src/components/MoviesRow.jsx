import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MovieFeed = ({ URL, typeOfMovies, onSelectMovie }) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {   
        axios.get(URL).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    
    
  return (
    <div className='w-11/12 mx-auto'>
        <p className='text-white text-3xl py-2'>{typeOfMovies}</p>
        <div className='flex items-center relative'>
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative'>
        {movies.map((item, i) => (  
            <div key={i} onClick={() => onSelectMovie(item)} className='w-[200px] h-[250px] inline-block ml-2'>
                <div className='absolute w-[200px] h-[250px] cursor-pointer z-50 hover:bg-black/80'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
                
            </div>          
            
        ))}
        </div>
        </div>
    </div>
  )
}

export default MovieFeed
