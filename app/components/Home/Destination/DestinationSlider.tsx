"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { destinationsData } from "../../data/data";
import Image from "next/image";

const DestinationSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationsData.map((data) => {
        return (
          <div key={data.id} className='m-3'>
            <div className='relative h-[400px]'>
              {/* overlay */}
              <div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
              {/* image */}
              <Image
                src={data.image}
                alt={data.country}
                height={400}
                width={400}
                className='h-full w-full object-cover rounded-lg'
              />
            </div>
            {/* text content */}
            <h1 className='text-lg font-semibold mt-4'>{data.country}</h1>
            <p className='text-sm text-gray-600'>{data.travelers} Travelers</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestinationSlider;
