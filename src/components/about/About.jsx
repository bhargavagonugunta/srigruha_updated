import React from "react";
import about from "../about/about1.jpeg";
const About = () => {
  return (
    <div>
      <div
        className="relative h-[600px] hidden sm:block"
        style={{
          background: `url(${about}) center  / cover no-repeat`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="absolute inset-0 flex items-center justify-center md:text-4xl  text-2xl font-semibold font-lora ">
          ABOUT US
        </h3>
      </div>
      <div>
        <p className="text-center text-4xl py-4  ">
          <p className="py-4"> the </p>
          <p className="py-4 tracking-widest	">TASTEMAKERS</p>
          <p className="py-4 tracking-widest	"> of GUNTUR</p>
        </p>
        <p className="text-center text-1xl py-4">SINCE 1999</p>
      </div>

      <p className="md:text-center md:text-2xl text-xl py-24 px-4 leading-8 tracking-wide	">
        Journeying over 25 years, we have developed a unique style in shaping
        wholesome and decadent experiences. With a wide range of mithai and
        savouries made from richly picked ingredients and with a keen eye for
        craftsmanship, we specialize as the Taste makers of Festivity and
        Celebration.
      </p>
    </div>
  );
};

export default About;
