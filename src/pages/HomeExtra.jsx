import React from "react";
import { FaStar, FaUserGraduate, FaSearch, FaHandshake } from "react-icons/fa";

const providers = [
  {
    id: 1,
    name: "Priya Sharma",
    skill: "Meditation & Mindfulness",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "David Kim",
    skill: "Web Development",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Maria Lopez",
    skill: "Photography",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

const steps = [
  {
    id: 1,
    title: "Browse Skills",
    desc: "Explore a variety of courses offered by top-rated providers.",
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Book a Session",
    desc: "Choose your preferred time slot and confirm your booking.",
    icon: <FaUserGraduate />,
  },
  {
    id: 3,
    title: "Learn & Grow",
    desc: "Connect with experts and upgrade your skills effortlessly.",
    icon: <FaHandshake />,
  },
];

const HomeExtra = () => {
  return (
    <div className="bg-base-100">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-2">
            <span className="text-accent">★</span> Top Rated Providers
          </h2>
          <p className="mt-2 text-sm opacity-70">
            Trusted instructors with consistently high ratings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl transition rounded-2xl"
            >
              <div className="card-body items-center text-center p-8">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-4">
                    <img src={provider.image} alt={provider.name} />
                  </div>
                </div>

                <h3 className="mt-4 font-bold text-lg">{provider.name}</h3>
                <p className="text-sm opacity-70">{provider.skill}</p>

                <div className="mt-3 inline-flex items-center gap-2">
                  <span className="badge badge-accent text-black">
                    <FaStar className="mr-1" /> {provider.rating}
                  </span>
                  <span className="text-xs opacity-60">Top performer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eef7ea] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary">How It Works</h2>
            <p className="mt-2 text-sm opacity-70">
              Start learning in just three simple steps.
            </p>
          </div>

          <div className="bg-base-100/70 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-lg border border-base-300">
            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((step) => (
                <div key={step.id} className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center text-2xl shadow-md">
                    {step.icon}
                  </div>

                  <h3 className="font-semibold text-lg mt-5">{step.title}</h3>
                  <p className="text-sm mt-2 opacity-70 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="mt-4">
                    <span className="badge badge-outline border-primary text-primary">
                      Step {step.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeExtra;
