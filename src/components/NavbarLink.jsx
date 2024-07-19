import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ( {linkName, linkTo, isSignedIn} ) => {
  return (
    <>
      <NavLink to={linkTo} className={({ isActive }) =>
                `text-gray-200 text-3xl cursor-pointer md:text-xl relative after:absolute after:content-[''] after:h-[2px] after:left-0 after:bottom-0 after:w-0 after:bg-white transition-width duration-150 hover:after:w-full ${
                    isSignedIn ? "block" : "hidden"
                } ${isActive ? " after:bg-red-600 after:w-full " : ""}`
            }>
          {linkName}
        </NavLink>
    </>
  )
}

export default NavbarLink
