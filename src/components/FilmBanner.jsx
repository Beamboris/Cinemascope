import React from 'react';
import bannerImg from '/src/assets/TV & Film Pitch Deck Presentation in Black and White Red Dark & Serious Style.png';
import bannerImgMobile from '/src/assets/small_0E0PZDW5.jpg';
import bannerImgDesktop from '/src/assets/TV & Film Treatment Deck Presentation in Black and White Red Dark & Serious Style.png'

const FilmBanner = () => {
  return (
    <div className='relative mt-24 w-full md:h-[500px]'>
    <div className='text-center w-10/12 flex flex-col mx-auto gap-3 md:absolute md:bottom-52 md:left-20 md:text-left md:max-w-[300px] lg:max-w-[500px] xl:bottom-[15rem]'>
      <h1 className='text-white text-3xl'>Only on CinemaScope</h1>
      <p className='text-gray-400 text-lg'>Exclusive series and Originals you won't find on any other streaming service.</p>
      <p className='text-gray-400 text-xs'>© 2023 TAS Rights Management LLC</p>
    </div>
    <img className='w-full h-full object-cover my-12 hidden md:block xl:hidden' src={bannerImg} alt="Shattered illusions" />
    <img src={bannerImgMobile} className='w-full  object-cover my-12 md:hidden' alt="cinema image" />
    <img src={bannerImgDesktop} className='w-full h-full object-cover my-12 hidden xl:block' alt="Shattered Illusions" />

    </div>
  )
}

export default FilmBanner
