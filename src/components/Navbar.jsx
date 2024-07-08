import React, { useState } from "react";
import house from "../assets/house.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import DisplayBar from "./DisplayBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <div className="sticky	top-0 bg-[#f6f5ec]  z-10 ">
      <DisplayBar />
      <div className=" mx-6 text-[#c8724a]  ">
        <div className=" flex justify-between items-center px-8 ">
          <NavLink to="/" className="curser-pointer ">
            <img src={house} className="md:hidden w-[50px]" />
          </NavLink>
          <p
            className="curser-pointer md:hidden block  text-[30px]"
            onClick={toggleMenu}
          >
            <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
          </p>
        </div>

        <div
          className={` py-2 flex flex-col gap-2  md:flex md:flex-row md:items-center justify-between   md:static top-[30px]  left-0  pl-4 font-semibold relative ${
            menuOpen ? "block bg-white shadow-2xl  " : "hidden"
          }  `}
        >
          <ul className=" md:w-[45%]   md:flex  flex flex-col  md:flex-row justify-end md:gap-8 gap-4">
            <li className="lg:mx-3 px-4 tooltip-container hidden lg:block">
              <ion-icon name="flower-outline"></ion-icon>
              <ion-icon name="rose-outline"></ion-icon>
              <ion-icon name="flower-outline"></ion-icon>
              <div className="tooltip">Enjoy SrigruhaSweets</div>
            </li>

            <li
              onClick={toggleMenu}
              className="lg:mx-3   px-4 rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
            >
              <NavLink to="/shop" className="demo">
                SHOP
              </NavLink>
            </li>
            <li
              onClick={toggleMenu}
              className="lg:mx-3  px-4  rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
            >
              <NavLink to="/gifting" className="demo">
                GIFTING
              </NavLink>
            </li>
            <li
              onClick={toggleMenu}
              className="lg:mx-3 px-4  rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
            >
              <NavLink to="/celebration" className="demo">
                CELEBRATION
              </NavLink>
            </li>
          </ul>
          <ul className="w-[5%]">
            <li className=" hidden md:block  justify-center justify-items-center  ">
              <NavLink to="/">
                <img className="w-[80px]" src={house} alt="image" />
              </NavLink>
            </li>
          </ul>
          <ul className=" md:w-[45%]   md:flex flex flex-col  md:flex-row  justify-between  gap-4">
            <li
              onClick={toggleMenu}
              className="lg:mx-3  px-4   rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
            >
              <NavLink to="/card" className="demo">
                GIFTING CARD
              </NavLink>
            </li>
            <li
              onClick={toggleMenu}
              className="lg:mx-3  px-4   rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
            >
              <NavLink to="/about" className="demo">
                ABOUT US
              </NavLink>
            </li>
            <li
              onClick={toggleMenu}
              className="lg:mx-3  px-4   rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-500"
            >
              <NavLink to="/contact" className="demo">
                CONTACT US
              </NavLink>
            </li>
            <li
              onClick={toggleMenu}
              className="text-2xl lg:mx-3  px-4    rounded-sm "
            >
              <NavLink to="/cart" className={"flex items-center gap-2"}>
                <ion-icon name="cart-outline"></ion-icon>
                <span>{cartItems.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
