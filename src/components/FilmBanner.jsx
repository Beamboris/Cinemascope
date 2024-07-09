import React from 'react';
import bannerImg from '/src/assets/TV & Film Pitch Deck Presentation in Black and White Red Dark & Serious Style.png';


const FilmBanner = () => {
  return (
    <div className='relative mt-24 w-full h-[500px]'>
    <div className='text-center w-10/12 flex flex-col mx-auto gap-3 md:absolute md:bottom-52 md:left-20 md:text-left md:max-w-[300px] lg:max-w-[500px]'>
      <h1 className='text-white text-3xl'>Only on CinemaScope</h1>
      <p className='text-gray-400 text-lg'>Exclusive series and Originals you won't find on any other streaming service.</p>
      <p className='text-gray-400 text-xs'>© 2023 TAS Rights Management LLC</p>
    </div>
    <img className='w-full h-full object-cover mt-12 hidden md:block' src={bannerImg} alt="Shattered illusions" />

    </div>
  )
}

export default FilmBanner
