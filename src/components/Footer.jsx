import React from 'react';
import logo from '/src/assets/cS__2_-removebg-preview.png'

const Footer = () => {
  return (
    <div className='mt-20 w-10/12 md:w-8/12 lg:w-6/12 mx-auto'>
        <h1 className='mx-auto w-fit mb-6 text-red-600 text-2xl font-bold cursor-pointer md:text-4xl' src={logo} alt="">CINEMASCOPE</h1>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Subscriber Agreement</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Privacy Policy</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>UK & EU Privacy rights</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Cookies Policy</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Interest-Based Ads</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Supported Devices</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Imprint</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Cancel Subscription Here</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Help Center</p>
        <p className='text-gray-400 text-xs hover:text-white cursor-pointer'>Manage Privacy Prefrences</p>
      </div>
      <p className='text-center  text-gray-400 mx-auto text-xs w-fit mt-6 pb-4'>© 2024 CinemaScope and its related entities. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
