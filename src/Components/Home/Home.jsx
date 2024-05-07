import React from "react";
import Navigation from "./navigation/Navigation";
import Banner from "./Banner/Banner";
import Carouselinhome from "./Carousels/Carouselinhome";
import Banner2 from "./Banner2/Banner2";
import Footer from "./Footer/Footer";
import Mainitems from "./Mainitems/Mainitems";

const Home = () => {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <Carouselinhome/>
        <Banner2/>
        <Mainitems/>
        <Footer/>
    </div>
  );
};

export default Home;
