import React from "react";
import image from "../celebration/wed.jpg";
import imageo from "../celebration/image.png";

const Celebration = () => {
  return (
    <div>
      <div
        className="relative h-[600px] "
        style={{
          background: `url(${image}) center center / cover no-repeat`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="lg:text-6xl md:text-3xl text-2xl text-center tracking-widest	text-white">
              BEAUTIFUL BLESSINGS
            </h2>
            <button className="bg-orange-400 tracking-widest my-8 px-4 md:px-24 py-2 rounded-md text-white">
              PLAN YOUR WEDDING
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-4xl py-40 tracking-widest font-semibold text-center ">
        TURN YOUR WEDDING INTO A CELEBRATIONS
      </h2>
      <p className="md:text-center  px-4 text-2xl py-22">
        An Indian wedding is almost a full-scale festival - with celebrations
        all around that creates an aura of joy and excitement. In such an
        environment, happiness knows no bounds. The exchange of gifts and
        greetings are a common sight, and to compliment the elaborate setting,
        we have a range of Wedding Hampers that will truly capture the emotion,
        colours and exhilaration of the event.
      </p>
      <div
        className="relative h-[400px] my-16 "
        style={{
          background: `url(${imageo}) center center / cover no-repeat`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="bg-orange-300 md:mx-28 p-4 text-white my-2">
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
