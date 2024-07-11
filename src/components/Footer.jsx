import React from 'react';
import logo from '/src/assets/cinemascope-high-resolution-logo-transparent (1).png'

const Footer = () => {
  return (
    <div className='mt-20 w-10/12 md:w-8/12 lg:w-6/12 mx-auto'>
        <img className='h-10 mx-auto w-fit mb-6' src={logo} alt="" />
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
      <p className='text-gray-400 mx-auto text-xs w-fit mt-6 pb-4'>© 2024 CinemaScope and its related entities. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
