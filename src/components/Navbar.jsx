import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center w-full justify-between p-4 z-[100] absolute'>
        <a className='text-red-600 text-2xl font-bold cursor-pointer md:text-4xl' href="#">CinemaScope</a>
        <div>
          <button className='text-white bg-red-600 px-6 py-1 rounded cursor-pointer md:py-2'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
