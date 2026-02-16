import React from "react";
import SkillCards from "../Components/skillCards";

const HomeMain = ({ data }) => {
  return (
    <div>
      <h2 className="md:w-6/12 mx-auto text-4xl font-bold text-center p-5 animate__animated animate__pulse">
        Explore Our Course
      </h2>
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6"
      >
        {data.map((skill) => (
          <SkillCards key={skill.skillId} skill={skill}></SkillCards>
        ))}
      </div>
    </div>
  );
};

export default HomeMain;
