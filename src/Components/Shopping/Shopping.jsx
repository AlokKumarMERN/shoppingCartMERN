import React from "react";
import Mainitems from "../Home/Mainitems/Mainitems";
import Navigation from "../Home/navigation/Navigation";
import Footer from "../Home/Footer/Footer";

const Shopping = ({ act }) => {
  return (
    <div>
      <Navigation act={act} />
      <Mainitems />
      <Footer />
    </div>
  );
};

export default Shopping;
