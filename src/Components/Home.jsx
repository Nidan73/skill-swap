import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="flex-1 w-11/12 mx-auto">
        <Hero></Hero>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
