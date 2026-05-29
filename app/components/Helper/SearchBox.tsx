import React from 'react'
import { FaCalendarWeek } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { SiGooglemaps } from 'react-icons/si'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    xl:grid-cols-4 items-center mx-auto gap-8 mt-4 sm:mt-12 w-full sm:w-[75%]'>
      {/* 1st search input */}
    <div className='flex items-center space-x-4 sm:space-x-6'>
      {/* <SiGooglemaps className='w-10 h-10 p-2 rounded-full transition-all duration-300 hover:bg-rose-100 hover:text-rose-500 cursor-pointer'/> */}
      <SiGooglemaps className='w-10 h-10 p-2 shrink-0 rounded-full transition-all duration-300 hover:bg-rose-100 hover:text-rose-500 cursor-pointer'/>
      <div>
        <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
        <input type="text" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800'/>
      </div>
    </div>
    {/* 2nd search input */}
    <div className='flex items-center space-x-4 sm:space-x-6'>
      <FaCalendarWeek className='w-10 h-10 p-2 shrink-0 rounded-full transition-all duration-300 hover:bg-rose-100 hover:text-rose-500 cursor-pointer'/>
      <div>
        <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
        <input type="date" className='outline-none'/>
      </div>
    </div>
    {/* 3rd search input */}
    <div className='flex items-center space-x-4 sm:space-x-6'>
      <FaCalendarWeek className='w-10 h-10 p-2 shrink-0 rounded-full transition-all duration-300 hover:bg-rose-100 hover:text-rose-500 cursor-pointer'/>
      <div>
        <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
        <input type="date" className='outline-none'/>
      </div>
    </div>
    {/* 4th search input */}
    <div className='flex items-center space-x-4 sm:space-x-6'>
      <FaUserGroup className='w-10 h-10 p-2 shrink-0 rounded-full transition-all duration-300 hover:bg-rose-100 hover:text-rose-500 cursor-pointer'/>
      <div>
        <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
        <p className='text-base font-normal'>1 Guest 1 Room</p>
      </div>
    </div>
    </div>
  )
}

export default SearchBox