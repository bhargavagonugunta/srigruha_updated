import React from "react";
import about from "../about/candy.jpg";
const About = () => {
  return (
    <div>
      <div className="relative">
        <img src={about} className="h-[400px] w-full" />
        <h3 className="absolute top-36 text-6xl font-semibold  left-[650px]  text-green-600">
          ABOUT US
        </h3>
      </div>
      <div>
        <p className="text-center text-5xl py-4  text-green-600">
          <p className="py-4"> the </p>
          <p className="py-4 tracking-widest	">TASTEMAKERS</p>
          <p className="py-4 tracking-widest	"> of GUNTUR</p>
        </p>
        <p className="text-center text-1xl py-4">SINCE 1999</p>
      </div>

      <p className="text-center text-2xl py-24 px-4">
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
