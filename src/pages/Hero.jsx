import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import feedback from "../assets/feedback.jpeg";
import FloatingCards from "../Components/FloatingCards";
import Marquee from "react-fast-marquee";
const Hero = () => {
  const marquee = [
    {
      id: "cmp_001",
      name: "NovaCore Technologies",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    },
    {
      id: "cmp_002",
      name: "BluePeak Systems",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    },
    {
      id: "cmp_003",
      name: "QuantumBridge AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png",
    },
    {
      id: "cmp_004",
      name: "Skyline Dynamics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
    },
    {
      id: "cmp_005",
      name: "Zenith Labs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
    },
  ];

  return (
    <div className="">
      <div className="hero bg-[#1b5301] lg:p-20 ">
        <div className="hero-content w-full grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className="md:order-2">
            <FloatingCards></FloatingCards>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="md:order-1 ">
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
              <span className="text-base-100 ">Based on 1,000+ reviews</span>
              <img src={feedback} className="h-6 w-auto" />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="font-bold p-3 md:p-6 text-lg md:text-2xl w-full md:w-6/12 mx-auto text-center">
          Taken by +05M from the world's leading companies
        </h2>
        <div className="w-full md:w-6/12 mx-auto shadow-sm p-6 rounded-b-4xl">
          <Marquee pauseOnHover={true} speed={60} gradient={true}>
            {marquee.map((mar) => (
              <div key={mar.id} className="mx-4 md:mx-16">
                <img src={mar.logo} alt={mar.name} className="h-8 w-auto" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
