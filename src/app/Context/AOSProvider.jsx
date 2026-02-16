import { useEffect } from "react";
import AOS from "aos";
import { useLocation } from "react-router";

const AOSProvider = ({ children }) => {
  const location = useLocation();

  // init once
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);
  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return children;
};

export default AOSProvider;
