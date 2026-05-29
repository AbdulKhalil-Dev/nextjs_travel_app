import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import { WhyChoose } from "./WhyChoose/WhyChoose";
import { Review } from "./Reviews/Review";
import { News } from "./News/News";
import NewsLetter from "./NewsLetter/NewsLetter";
import ScrollToTop from "../Helper/ScrollToTop";

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <NewsLetter />
      <ScrollToTop />
    </div>
  );
};

export default Home;
