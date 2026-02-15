import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import feedback from "../assets/feedback.jpeg";
const Hero = () => {
  return (
    <div className="">
      <div className="hero bg-[#1b5301] lg:p-20 ">
        <div className="hero-content w-full grid grid-cols-1 md:grid-cols-2">
          <div className="md:order-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:order-1">
            <h1 className="text-3xl lg:text-7xl font-bold text-base-100">
              Explore tailored{" "}
              <span className="text-accent">
                <i>
                  <u>Courses</u>
                </i>{" "}
              </span>
              to enhance your professional{" "}
              <span className="text-accent">
                <i>Skills</i>
              </span>
            </h1>
            <p className="py-6 text-base-100">
              Discover innovative methods to transform your skills and
              professional life.
            </p>
            <button className="btn btn-lg p-8 rounded-4xl btn-primary shadow-sm">
              Explore our courses
            </button>
            <p className="mt-5 flex items-center gap-2 text-sm">
              <span className="flex text-accent gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>
              <span className="text-base-100">Based on 1,000+ reviews</span>
              <img src={feedback} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
