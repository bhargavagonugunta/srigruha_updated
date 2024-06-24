import React from "react";
import image from "../gifting/sweet.png";
const gifting = () => {
  return (
    <div>
      <h2 className="first-letter:text-4xl text-center text-3xl font-mono	tracking-widest	md:p-32 pb-8 pt-8 text-green-600">
        DELIVERING SMILES, WHEREVER YOU DESIRE
      </h2>
      <div className=" relative text-white">
        <img
          src={image}
          className="w-full h-[400px]  bg-cover opacity-80 z-0 "
        />
        <div className="absolute md:top-24 top-12 text-center">
          <h2 className="md:text-3xl text-2xl m-6  text-green-600">
            GIFTING SOLUTIONS
          </h2>
          <p className="tracking-widest font-normal text-neutral-600 pt-4 px-4	md:text-2xl">
            With family, friends and colleagues spread across the city, we have
            come up with a seamless way for you to gift them delight no matter
            where they are, all from the comfort of your home.
          </p>
          <button className="px-10 font-semibold py-3 mt-12 bg-white text-orange-500 rounded-md">
            BUY GIFT HAMPERS
          </button>
        </div>
      </div>
      <div className="text-center py-24 flex flex-col justify-center items-center">
        <h2 className="md:text-4xl text-2xl font-semibold p-2 text-green-600">
          GIFTING MEMORIES FOR EVERY OCCASION
        </h2>
        <p className="tracking-widest font-normal pt-4 px-4	md:text-2xl	">
          The mere act of gifting is a momentous way to celebrate any kind of
          <br />
          achievement, festivity, and occasion. And we are here to be a part of
          <br />
          that moment - even the smallest - of celebrating joy and purity.
        </p>
      </div>
      <div className="text-center">
        <h2 className="md:text-4xl text-2xl pb-12  text-green-600">
          A GIFT WORTH GIVING
        </h2>
        <p className="md:text-2xl px-4">
          Our personalized Gift Boxes and Gift Hampers are a balanced blend of
          <br />
          Sweets, Savouries, Gourmet Selections, Khara and Premium Dry Fruits.
          <br />
          Build your own festive box, and celebrate the Season of Delight.
        </p>
      </div>
      <h2 className="text-center md:text-4xl text-2xl py-24  text-green-600">
        GIFT HAMPERS
      </h2>
    </div>
  );
};

export default gifting;
