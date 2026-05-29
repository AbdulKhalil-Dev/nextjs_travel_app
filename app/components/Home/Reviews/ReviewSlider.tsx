"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { reviewsData } from "../../data/data";

const ReviewSlider = () => {
  return (
    <div className='flex items-center justify-center'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className='md:w-[450px] md:h-[350px] w-[90%] h-[300px]'
      >
        {reviewsData.map((data) => (
          <SwiperSlide key={data.id} className='bg-white rounded-3xl'>
            <div className='w-[80%] mx-auto mt-16'>
              {/* review text */}
              <p className='text-xs sm:text-sm md:text-base font-semibold'>
                {data.review}
              </p>

              {/* stars */}
              <div className='flex items-center mt-4'>
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
              </div>

              {/* user profile */}
              <div className='mt-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-[60px] h-[60px] rounded-full overflow-hidden'>
                    <Image
                      src={data.image}
                      width={60}
                      height={60}
                      alt='client'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                <p className='text-sm sm:text-lg font-semibold'>{data.name}</p>

                <p className='text-gray-600 text-xs sm:text-base'>
                  Web Developer
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
