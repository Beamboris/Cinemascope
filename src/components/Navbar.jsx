import React from 'react';
import { useNavigate } from 'react-router';

const Navbar = ( { signIn, isSignedIn} ) => {

  const navigate = useNavigate();

  return (
    <div className={`flex items-center w-full justify-between p-4 z-[100] top-0  ${isSignedIn ? "fixed bg-black" : "absolute bg-transparent"}`}>
      <div className='flex justify-between items-center w-2/4'>
        <a onClick={() => navigate("/")} className='text-red-600 text-2xl font-bold cursor-pointer md:text-4xl'>CinemaScope</a>
        <a className={`text-gray-200 text-2xl cursor-pointer md:text-xl ${isSignedIn ? "block" : "hidden"}`} href="" >Movies</a>
        <a className={`text-gray-200 text-2xl cursor-pointer md:text-xl ${isSignedIn ? "block" : "hidden"}`} href="">TV Shows</a>
        <a className={`text-gray-200 text-2xl cursor-pointer md:text-xl ${isSignedIn ? "block" : "hidden"}`} href="">Favorites</a>
        </div>
        <div>
          <button onClick={signIn} className='text-white bg-red-600 px-6 py-1 rounded cursor-pointer md:py-2'>{isSignedIn ? "Sign Out" : "Sign In"}</button>
        </div>
    </div>
  )
}

export default Navbar
