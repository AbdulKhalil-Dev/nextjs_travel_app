import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* 1st part */}
        <div className='space-y-5'>
          <h1 className='text-lg font-bold'>Company</h1>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            About Us
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Carers
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Blogs
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Gift Cards
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Magazine
          </p>
        </div>
        {/* 2nd part */}
        <div className='space-y-5'>
          <h1 className='text-lg font-bold'>Support</h1>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Contact
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Legal Notice
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Privacy Policy
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Terms & Condition
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Sitemap
          </p>
        </div>
        {/* 3rd part */}
        <div className='space-y-5'>
          <h1 className='text-lg font-bold'>Other Services</h1>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Car hire
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Activity Finder
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Tour Finder
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Flight Finder
          </p>
          <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
            Travel Agent
          </p>
        </div>
        {/* 4th part */}
        <div className='space-y-5'>
          <h1 className='text-lg font-bold'>Contact Us</h1>
          <div className='mt-6'>
            <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
            <h1 className='text-base font-bold text-blue-950 mt-2'>
              +0092 345 1234567
            </h1>
          </div>
          <div className='mt-6'>
            <h1 className='text-sm text-gray-600'>Our Email</h1>
            <h1 className='text-base font-bold text-blue-950 mt-2'>
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='text-center md:text-left'>
          @{new Date().getFullYear()} CodeWithKhalil. All Rights Reserved.
        </p>
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
          <span>Special : </span>
          <Link href='#' className="text-gray-800 hover:text-gray-800/50" ><FaTwitter/></Link>
          <Link href='#' className="text-gray-800 hover:text-gray-800/50" ><FaTiktok/></Link>
          <Link href='#' className="text-gray-800 hover:text-gray-800/50" ><FaFacebook/></Link>
          <Link href='#' className="text-gray-800 hover:text-gray-800/50" ><FaLinkedin/></Link>
        </div>
      </div>
    </div>
  );
};
