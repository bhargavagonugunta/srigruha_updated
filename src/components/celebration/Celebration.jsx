import React from "react";
import image from "../celebration/wed.jpg";
import imageo from "../celebration/image.png";

const Celebration = () => {
  return (
    <div>
      <div className="text-center relative my-12">
        <img src={image} className="h-[400px] w-full bg-cover opacity-80" />
        <div className="absolute top-[150px]  xl:left-[400px] left-[100px] sm:left-[180px] ">
          <h2 className="lg:text-6xl md:text-3xl text-2xl text-center tracking-widest	text-white">
            BEAUTIFUL BLESSINGS
          </h2>
          <button className="bg-[#e7e9e9] tracking-widest my-8 px-4 md:px-24 py-2 rounded-md text-orange-500">
            PLAN YOUR WEDDING
          </button>
        </div>
      </div>
      <h2 className="text-4xl py-40 tracking-widest font-semibold text-center ">
        TURN YOUR WEDDING INTO A CELEBRATIONS
      </h2>
      <p className="text-center text-2xl py-22">
        An Indian wedding is almost a full-scale festival - with celebrations
        all around that creates an aura of joy and excitement. In such an
        environment, happiness knows no bounds. The exchange of gifts and
        greetings are a common sight, and to compliment the elaborate setting,
        we have a range of Wedding Hampers that will truly capture the emotion,
        colours and exhilaration of the event.
      </p>
      <div>
        <img src={imageo} className="h-[350px] w-full my-24" />
      </div>

      <div className="bg-orange-400 md:mx-28 p-4 text-white">
        <h2 className="text-center text-2xl tracking-widest	py-4">
          PERSONALIZE YOUR WEDDINGS SWEETS
        </h2>
        <form className="p-6">
          <label for="fname">NAME</label>
          <br />
          <input
            type="text"
            placeholder="NAME"
            className="border border-white placeholder:text-slate-500 bg-transparent p-2 md:w-[400px] my-3"
          />
          <br />
          <label for="fname">EMAIL</label>
          <br />
          <input
            type="email"
            placeholder="EMAIL"
            className="border border-white placeholder:text-slate-500 bg-transparent p-2 md:w-[400px] my-3"
          />
          <br />
          <label for="fname">MOBILE NO</label>
          <br />
          <input
            type="text"
            placeholder="MOBILE NO"
            className="border border-white placeholder:text-slate-500 bg-transparent p-2 md:w-[400px] my-3"
          />
          <br />
          <label for="fname">OCCASSION DATE</label>
          <br />
          <input
            type="date"
            placeholder="NAME"
            className="border border-white placeholder:text-slate-500 bg-transparent p-2 md:w-[400px]"
          />
          <input
            type="time"
            placeholder="NAME"
            className="border border-white placeholder:text-slate-500 bg-transparent p-2 ml-3 my-3"
          />
          <br />
          <label for="w3review">ADD SOMETHING</label>
          <br />
          <textarea
            className=" border border-white placeholder:text-slate-500 bg-transparent p-2  my-3"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50 "
            placeholder="ENTER YOUR REQUIREMENTS"
          ></textarea>
          <br />
          <input
            type="submit"
            className="border border-white p-3 px-12 text-orange-500 md:text-2xl rounded-md my-8 bg-white shadow-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default Celebration;
