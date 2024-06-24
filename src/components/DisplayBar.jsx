import React from "react";

const DisplayBar = () => {
  return (
    <div className=" flex md:justify-between md:flex-row flex-col  items-center p-4  text-orange-500 ">
      <div className="flex gap-4 pb-6">
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
