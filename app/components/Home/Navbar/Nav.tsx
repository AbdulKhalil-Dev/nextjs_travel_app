"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "../../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { ImAirplane } from "react-icons/im";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} transition-all h-[12vh] z-[1000] fixed w-full`}
    >
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* {logo} */}
        <div className='flex item-center space-x-1.5 md:space-x-2 flex-shrink-0'>
          <div className='p-1.5 md:p-2 rounded-full bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 flex-shrink-0'>
            <ImAirplane className='w-4 h-4 md:w-6 md:h-6 text-white hover:text-lime-300' />
          </div>
          <h1 className='text-xl sm:text-xl md:text-2xl text-white uppercase font-bold tracking-wider whitespace-nowrap'>
            Tourvia
          </h1>
        </div>
        {/* NavLinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className='relative cursor-pointer text-white text-base font-medium w-fit block after:block after:content-[""] 
            after:absolute after:h-[3px] after:bg-lime-400 after:w-full after:scale-x-0 hover:after:scale-x-100
            after:transition duration-300 after:origin-left'
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className='flex items-center space-x-4'>
          <button
            className='text-xs sm:text-sm md:text-base font-semibold text-black
             px-4 py-1.5 sm:px-6 sm:py-2 md:px-12 md:py-2 
             bg-white hover:bg-lime-100 transition-all duration-200 rounded-lg whitespace-nowrap'
          >
            Book Now
          </button>
          {/* hamburger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 cursor-pointer text-white lg:hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
