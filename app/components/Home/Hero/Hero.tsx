import React from "react";
import SearchBox from "../../Helper/SearchBox";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='relative w-full h-screen sm:h-[100vh]'>
      {/* overlay */}
      <div className='absolute inset-0 bg-blue-900/60 z-10'></div>
      {/* video */}
      <video
        src='/images/tour-vid.mp4'
        autoPlay
        muted
        loop
        preload='metadata'
        className='absolute inset-0 w-full h-full object-cover z-0'
      />
      {/* Text Content */}
      <div className='absolute inset-0 z-20 flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center flex-col w-full h-full'>
<div>
  <h1 className="text-center text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wide leading-tight bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent drop-shadow-sm">
    Nature is calling 🌿
  </h1>
  <p className="text-base text-center md:text-lg text-white font-normal tracking-wide leading-relaxed mt-3">
    Get the best prices on 2,000,000+ properties worldwide.
  </p>
</div>
          {/* Search Box */}
          <SearchBox />
          <Link
            href='#'
            className='rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-600 via-emerald-500 hover:to-lime-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300'
          >
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-transition-x-40 ease'></span>
            <span className='relative font-medium tracking-wider'>Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
