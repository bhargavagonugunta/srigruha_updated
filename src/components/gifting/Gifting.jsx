import React from "react";
import image from "../gifting/Motichoor_Laddu.webp";
const gifting = () => {
  return (
    <div>
      <h2 className="first-letter:text-4xl text-center text-3xl font-mono	tracking-widest	md:p-32 pb-8 pt-8 ">
        DELIVERING SMILES, WHEREVER YOU DESIRE
      </h2>

      <div
        className="relative h-[600px] "
        style={{
          background: `url(${image}) center center / cover no-repeat`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" absolute inset-0 flex items-center justify-center ">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="md:text-3xl text-2xl   text-white">
              GIFTING SOLUTIONS
            </h2>
            <p className="tracking-widest font-normal text-white pt-4 px-4	md:text-2xl">
              With family, friends and colleagues spread across the city, we
              have come up with a seamless way for you to gift them delight no
              matter where they are, all from the comfort of your home.
            </p>
            <button className="px-10 font-semibold py-3 mt-12 text-white bg-orange-400 rounded-md">
              BUY GIFT HAMPERS
            </button>
          </div>
        </div>
      </div>
      <div className="text-center py-24 flex flex-col justify-center items-center">
        <h2 className="md:text-4xl text-2xl font-semibold p-2 ">
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
        <h2 className="md:text-4xl text-2xl pb-12  ">A GIFT WORTH GIVING</h2>
        <p className="md:text-2xl px-4">
          Our personalized Gift Boxes and Gift Hampers are a balanced blend of
          <br />
          Sweets, Savouries, Gourmet Selections, Khara and Premium Dry Fruits.
          <br />
          Build your own festive box, and celebrate the Season of Delight.
        </p>
      </div>
      <h2 className="text-center md:text-4xl text-2xl py-24  ">GIFT HAMPERS</h2>
    </div>
  );
};

export default gifting;
