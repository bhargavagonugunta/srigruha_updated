import React from "react";
import vegetarion from "../../assets/lesssugar/vegeterian.png";
import lesssugar from "../../assets/lesssugar/lesssugur.webp";
import transfatfree from "../../assets/lesssugar/transfat.webp";
import eggless from "../../assets/lesssugar/eggless-sm.webp";
import gulten from "../../assets/lesssugar/gulten-free.webp";

const LessSugur = () => {
  return (
    <div>
      <div className="my-16 ">
        <h2 className="md:text-3xl text-2xl text-center my-4">
          Responsible Indulgence
        </h2>
        <p className="text-center md:text-xl">
          As delicious as our products may be, we encourage all our customers to
          indulge responsibly and in
        </p>
        <p className="text-center md:text-xl ">
          moderation, for the benefit of your well-being
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-5 mx-2">
        <div className="flex flex-col justify-center items-center justify-self-center gap-3">
          <img src={vegetarion} className="w-[40px]" />
          <h2>100% VEGETARIAN</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={lesssugar} className="w-[50px]" />
          <h2>LESS SUGAR</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={transfatfree} className="w-[50px]" />
          <h2>TRANSFAT FREE</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={eggless} className="w-[50px]" />
          <h2>EGG LESS</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={gulten} className="w-[40px]" />
          <h2>GLUTEN FREE</h2>
        </div>
      </div>
    </div>
  );
};

export default LessSugur;
