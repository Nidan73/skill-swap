import React from "react";
import Home from "./Home";
import { Outlet } from "react-router";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="md:w-11/12 mx-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      {/* <Home></Home> */}
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
