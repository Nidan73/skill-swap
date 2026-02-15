import React from "react";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/footer";
import Hero from "../pages/Hero";
import HomeMain from "../pages/HomeMain";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 md:w-11/12 mx-auto">
        <section>
          <Hero></Hero>
        </section>
        <section className="mt-5 md:mt-9">
          <HomeMain></HomeMain>
        </section>
      </div>
    </div>
  );
};

export default Home;
