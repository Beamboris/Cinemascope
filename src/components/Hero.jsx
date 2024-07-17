import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import requests from '../requests';
import { IoIosArrowDown } from "react-icons/io";




const Main = () => {
    const [movies, setMovies ] = useState([]) 
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.popular).then((response) => {
            setMovies(response.data.results)
        })
    },[])



    
  return (
    <div className="h-[100vh]">
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-t from-black'></div>
      <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` } alt={movie?.title} />
      <div className='absolute bottom-0 left-0 right-0 text-center w-full flex justify-center md:bottom-20'>
        <div className='w-11/12 flex flex-col gap-4 md:w-10/12'>
      <h1 className='text-white text-3xl md:text-5xl md:w-9/12 mx-auto'>Stream brand new Originals, blockbusters, binge-worthy series and more</h1>
      <p className='text-xl md:text-2xl'>All at no extra cost. Cancel at any time.</p>
      <p className='text-gray-400 text-sm'>Enter your email to create or restart your subscription.</p>
      <div className='w-full max-w-[500px] mx-auto flex flex-col h-24 gap-2 md:flex-row md:gap-0 md:max-w-full md:h-14 justify-center'>
      <input placeholder='Email' className="w-full pl-4 h-full rounded md:w-1/3 md:rounded-r-none text-black" type="email"/>
      <button className='h-full rounded bg-red-600 px-4 md:rounded-l-none'>SIGN UP NOW </button>
      </div>
      <p className=' text-gray-400 text-sm'>Get 12 months for the price of 10 with an annual subscription, compared to paying monthly, on your Premium or Standard plan.</p>
      <p className='text-gray-400 text-xs'>*Effective at the end of the billing period. Subscription required.</p>
      <IoIosArrowDown className='mx-auto text-2xl md:text-4xl'/>
      </div>
      </div>


      </div>
      
    </div>
    </div>
  )
}

export default Main
