import React from "react";

import BallCanvas from "../components/canvas/Ball";

import { technologies } from "../constants";


const TechStack = () => {
  return (
    <section className="translate-y-[270px]">
    <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient mt-5 mb-10"
   
    >Languages that i know.</h3>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>


    </section>
  );
};

export default TechStack;