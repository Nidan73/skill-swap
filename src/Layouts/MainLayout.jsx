import React from "react";
import Home from "./Home";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
