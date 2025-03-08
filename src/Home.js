import React from "react";

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";
import Reels from "./components/Reels";

const Home = () => {
  const data = {
    name: "Montex",
    img: "images/hero.jpg",
    para: "Hedonist Roots. The placeholder text, beginning with the line“Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth,",
  };

  return (
    <>
      <Reels />
      <HeroSection mydata={data} />

      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
