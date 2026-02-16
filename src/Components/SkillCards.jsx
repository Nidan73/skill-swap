import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCards = ({ skill }) => {
  const { skillId, skillName, price, rating, image, category, slotsAvailable } =
    skill;

  return (
    <div className="flex bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="w-40 h-36 flex-shrink-0">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="font-bold text-primary text-lg">{skillName}</h2>

            <div className="mt-1">
              <span className="badge badge-accent text-black badge-sm">
                {category}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(rating) ? "text-accent" : "text-base-300"
                    }
                    size={14}
                  />
                ))}
              </div>
              <span className="text-sm opacity-70">{rating}</span>
            </div>

            <p className="text-sm mt-1 opacity-70">
              🪑 {slotsAvailable} slots available
            </p>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold">${price}</p>
          </div>
        </div>

        <div className="mt-4">
          <Link to={`/skills/${skillId}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
