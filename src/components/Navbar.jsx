import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import NavbarLink from "./NavbarLink";

const Navbar = ({ signIn, isSignedIn }) => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const toggleNav = () => {
    responsiveNav ? setResponsiveNav(false) : setResponsiveNav(true);
  };

  return (
    <header
      className={`flex justify-between items-center w-full p-4 z-[100] top-0  ${
        isSignedIn ? "fixed bg-black" : "absolute bg-transparent" 
      }`}
    >
      <Link to={'/'}>
        <h1 className="text-red-600 text-2xl font-bold cursor-pointer md:text-4xl">
          CinemaScope
        </h1>
      </Link>
      <nav className={`${isSignedIn ? 'bg-black fixed top-0 left-0 h-full w-full items-center flex flex-col justify-center gap-8 duration-100' : 'bg-transparent translate-y-[0px] w-full flex justify-end'}  md:justify-end md:flex-row md:static ${responsiveNav ? "translate-y-0" : "translate-y-[-100vh] md:translate-y-0"} `}>  
        <NavbarLink linkName="Movies" isSignedIn={isSignedIn} linkTo={'/'} onClick={toggleNav}/>
        <NavbarLink linkName="Favorites" isSignedIn={isSignedIn} linkTo={'/favorites'} onClick={toggleNav}/>
        <button
          onClick={signIn}
          className="text-white bg-red-600 px-6 hover:bg-red-800 py-1 text-2xl rounded cursor-pointer md:py-2 md:text-base"
        >
          {isSignedIn ? "Sign Out" : "Sign In"}
        </button>
        <button onClick={toggleNav} className={`text-3xl absolute top-[2rem] right-[1rem] md:hidden md:opacity-0}`}>
          <IoIosClose color="white" className={`${isSignedIn ? "static" : "hidden"}`} />
        </button>
      </nav>
      <button onClick={toggleNav} className={`text-3xl md:hidden md:opacity-0`}>
        <IoMenuOutline color="white"  className={`${isSignedIn ? "static" : "hidden"}`} />
      </button>
    </header>
  );
};

export default Navbar;
