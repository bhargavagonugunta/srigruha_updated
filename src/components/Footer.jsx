import React from "react";
import house from "../assets/house.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-400 md:flex md:flex-row flex flex-col md:justify-around gap-4 lg:gap-16 text-white p-12  ">
      <div className="xl:px-10">
        <p className="flex items-center cursor-pointer ">
          <NavLink to="/homepage">
            <img src={house} className=" w-10" />
          </NavLink>

          <span className="lg:text-2xl text-1xl   pl-1">Srigruhafoods</span>
        </p>
        <p className="py-2 px-2">
          Your Srigruhafoods is now delivering sweets <br /> and snacks across
          Andrapradesh
        </p>
      </div>
      <ul className=" px-2">
        <li className="py-2">
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="py-2">Track Your Order</li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>

      <div>
        <p className="lg:text-1xl font-semibold py-1">GET IN TOUCH</p>
        <ul className="flex gap-2">
          <li className="text-3xl  cursor-pointer ">
            <ion-icon name="logo-facebook"></ion-icon>
          </li>
          <li className="text-3xl  cursor-pointer">
            <ion-icon name="logo-instagram"></ion-icon>
          </li>
          <li className="text-3xl  cursor-pointer">
            <ion-icon name="logo-twitter"></ion-icon>
          </li>
        </ul>
      </div>
      <div>
        <p className="md:text-1xl py-2 cursor-pointer pl-2">Contact Details:</p>
        <p className="pl-2 cursor-pointer">P No: +91000059063</p>
        <p className="pl-2 cursor-pointer">Email: SRIGRUHAFOODS@GMAIL.COM</p>
      </div>
    </div>
  );
};

export default Footer;
