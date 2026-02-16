import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillDetails from "../Components/SkillDetails";

const SkillPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [skillDetails, setSkillDetails] = useState([]);

  useEffect(() => {
    const filteredData = data.find((details) => details.skillId == id);
    setSkillDetails(filteredData);
  }, [id, data]);
  //   console.log(skillDetails);
  return (
    <div className="flex w-11/12 mx-auto">
      <main className="flex-1">
        <div>{<SkillDetails skillDetails={skillDetails}></SkillDetails>}</div>
      </main>
    </div>
  );
};

export default SkillPage;
