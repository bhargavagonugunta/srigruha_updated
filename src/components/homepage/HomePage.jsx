import React from "react";
import homelogo from "../../assets/homenavlogo.png";
import gulab from "../../assets/Sweets/gulabhijam.jpg";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2 className="py-[100px] text-center sm:text-3xl tracking-widest 	 sm:first-letter:text-5xl first-letter:text-2xl ">
        DELIVERING SMILES, WHEREVER YOU DESIRE
      </h2>
      <div className="md:flex md:flex-row flex mx-16 sm:mx-48 md:mx-4  flex-col gap-4 lg:gap-16 xl:mx-[200px] justify-around">
        <div className="border-4 border-amber-600 rounded-3xl  lg:w-[300px]">
          <h2 className="text-center  py-24 sm:text-2xl font-semibold	sm:first-letter:text-3xl  first-letter:text-2xl">
            Delivering <br />
            sweetness,one <br /> doorstep at a time
          </h2>
        </div>
        <div className="border-4 border-amber-600 rounded-3xl lg:w-[300px]  ">
          <h2 className="text-center px-12 py-24 sm:text-2xl font-semibold	sm:first-letter:text-3xl first-letter:text-2xl ">
            Sweet delights
            <br /> delivered, <br /> nationwide
          </h2>
        </div>
        <div className="border-4  border-amber-600 rounded-3xl  lg:w-[300px] ">
          <h2 className="text-center  py-24 sm:text-2xl font-semibold	sm:first-letter:text-3xl first-letter:text-2xl">
            Connecting worlds <br />
            through <br /> International <br /> deliveries
          </h2>
        </div>
      </div>
      <nav className="bg-amber-600 flex justify-around md:gap-10 gap-4 p-6 my-16 items-center ">
        <div>BEYOND AUTHENTIC</div>
        <div>
          <img src={homelogo} />
        </div>
        <div>BEYOND AUTHENTIC</div>
        <div>
          <img src={homelogo} />
        </div>
        <div>BEYOND AUTHENTIC</div>
      </nav>
      <h2 className="text-center tracking-widest text-3xl py-16 my-16 ">
        BEST SELLER
      </h2>
      <div className="md:flex md:flex-row flex flex-col   justify-center items-center gap-8  md:w-4/6 mx-auto ">
        <div className="w-3/6">
          <img src={gulab} className="w-full " />
        </div>
        <div className="w-3/6 flex flex-col gap-10 ">
          <h2 className="text-center text-2xl md:text-5xl text-amber-600 tracking-widest">
            GULABJAM
          </h2>
          <p className="md:text-center">
            Gulab Jamun is a popular Indian dessert made from deep-fried milk
            solids or milk powder, which are then soaked in a sugar syrup
            flavored with cardamom, saffron, and rose water. Here's some
            feedback on Gulab Jamun
          </p>
          <p className="bg-amber-600 text-white px-12 m-4 p-2 mx-auto rounded-md">
            <NavLink to="/"> SHOP NOW</NavLink>
          </p>
        </div>
      </div>
      <div className="bg-amber-600 text-white md:text-3xl text-2xl py-6 text-center my-16 tracking-wide">
        PURITY IN GOOD TASTE! PURITY IN GOOD WILL!
      </div>
      <div className="bg-black">
        <h2 className=" md:text-4xl text-2xl py-10 text-white text-center">
          CELEBRATE THE NEW WAY
        </h2>
        <iframe
          src="https://www.youtube.com/embed/gyVgkl8czZ4"
          title="A YouTube video"
          frameborder="0"
          allowfullscreen
          className="mx-auto  w-[400px] h-[400px] md:w-[700px] md:h-[400px]"
        ></iframe>
        <p className="text-white py-10 px-8 text-center">
          Prepared with love and tradition, our Chicken Pickle is a culinary
          masterpiece that brings together the rich heritage of pickling with
          the irresistible allure of chicken. Whether enjoyed as a zesty
          accompaniment to your meals, a mouthwatering snack, or a gourmet
          addition to your culinary creations, our Chicken Pickle is sure to
          delight your taste buds and leave you craving for more.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
