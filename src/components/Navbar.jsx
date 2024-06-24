import React, { useState } from "react";
import house from "../../public/assets/house.png";
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
    <div className="sticky	top-0 bg-white z-10">
      <DisplayBar />
      <div className=" m-6 text-orange-400  ">
        <div className=" flex justify-between items-center px-8 ">
          <p className="curser-pointer ">
            <img src={house} className="md:hidden w-[50px]" />
          </p>
          <p
            className="curser-pointer md:hidden block  text-[50px]"
            onClick={toggleMenu}
          >
            <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
          </p>
        </div>

        <div
          className={` flex flex-col gap-2  md:flex md:flex-row md:items-center justify-around md:static top-[100px]  left-0 pl-4 font-semibold  ${
            menuOpen ? "block  bg-white shadow-2xl  " : "hidden"
          }  `}
        >
          <ul className="md:flex flex flex-col gap-2 md:flex-row">
            <li className="lg:mx-3   px-4 hover:bg-orange-400 hover:text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
              <NavLink to="/">SHOP</NavLink>
            </li>
            <li className="lg:mx-3  px-4  hover:bg-orange-400 hover:text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
              <NavLink to="/gifting">GIFTING</NavLink>
            </li>
            <li className="lg:mx-3 px-4  hover:bg-orange-400 hover:text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
              <NavLink to="/celebration">CELEBRATION</NavLink>
            </li>
          </ul>
          <ul>
            <li className=" hidden md:block     ">
              <NavLink to="/homepage">
                <img className="w-[100px]" src={house} alt="image" />
              </NavLink>
            </li>
          </ul>
          <ul className="md:flex flex flex-col gap-2 md:flex-row">
            <li className="lg:mx-3  px-4  hover:bg-orange-400 hover:text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
              <NavLink to="/card">GIFTING CARD</NavLink>
            </li>
            <li className="lg:mx-3  px-4  hover:bg-orange-400 hover:text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li className="lg:mx-3  px-4  hover:bg-orange-400 hover:text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
            <li className="text-2xl lg:mx-3  px-4  hover:bg-orange-400 hover:text-white rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
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
