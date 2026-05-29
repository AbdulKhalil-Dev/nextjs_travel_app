import React from "react";
import { SectionHeading } from "../../Helper/SectionHeading";
import { NewsCard } from "../News/NewsCard";

export const News = () => {
  return (
    <div className='pt-16 pb-16'>
      {/* section heading */}
      <SectionHeading heading='Exciting Travel News for You' />
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
        <div>
          <NewsCard
            image='/images/n1.jpg'
            title='Top 10 places visit to Australia'
            date='15-June-2024'
          />
        </div>
        <div>
          <NewsCard
            image='/images/n2.avif'
            title='Top 10 places visit to London'
            date='01-July-2023'
          />
        </div>
        <div>
          <NewsCard
            image='/images/n3.webp'
            title='Top 10 places visit to Pakistan'
            date='23-March-2024'
          />
        </div>
        <div>
          <NewsCard
            image='/images/n4.avif'
            title='Top 10 places visit to New York'
            date='03-March-2025'
          />
        </div>
      </div>
    </div>
  );
};
