import React from "react";
import BestSellers from "../components/BestSellers";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  return (
    <div className="w-[80%] m-auto ">
      <HomeBanner />
      <BestSellers />
    </div>
  );
};

export default Home;
