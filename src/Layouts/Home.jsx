import React from "react";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/footer";
import Hero from "../Components/Hero";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="md:w-11/12 mx-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="flex-1 md:w-11/12 mx-auto">
        <section>
          <Hero></Hero>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
