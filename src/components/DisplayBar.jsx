import React from "react";

const DisplayBar = () => {
  return (
    <div className=" flex md:justify-between md:flex-row flex-col  items-center px-4 py-1 text-[#c8724a] ">
      <div className="flex gap-4 pb-2">
        <p>Order Traking</p>
        <span className="md:w-[4px] w-[2px]   bg-orange-500 rounded-md"></span>
        <p> Srigruhafoods@gmail.com</p>
      </div>
      <div className="flex items-center pr-12  gap-4">
        <div className="flex items-center">
          <ion-icon name="person-outline"></ion-icon>
          <p className="pl-4">Sign In</p>
        </div>
        <span className="md:w-[4px] w-[2px]    bg-orange-500 rounded-md">
          l
        </span>
        <p>Register</p>
      </div>
    </div>
  );
};

export default DisplayBar;
