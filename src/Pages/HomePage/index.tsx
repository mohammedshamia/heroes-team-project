import React from "react";
import Container from "../../Components/Container";
import CardSliders from "./Components/cardSlider";
import Categories from "./Components/categories";
import Hero from "./Components/hero";
import TopRate from "./Components/topRate";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <CardSliders />
      <TopRate/>
    </>
  );
};

export default HomePage;
