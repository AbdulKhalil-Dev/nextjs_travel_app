import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

export const WhyChooseCard = ({ image, title, description }: Props) => {
  return (
    <div>
      {/* image */}
      <Image
        src={image}
        width={90}
        height={90}
        alt='image'
        className='mx-auto transition-all duration-300 hover:scale-110 hover:-translate-y-2'
      />
      {/* content */}
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">{title}</h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">{description}</p>
    </div>
  );
};
