import React from "react";

const Stalckus = () => {
  return (
    <div className="my-24">
      <h1 className="text-center mb-12 text-4xl ">STALK US ON</h1>
      <ul className="flex justify-center items-center md:gap-24 gap-6 ">
        <li className="md:w-16 md:h-16  w-12 h-12  rounded-full bg-[#cb7143] flex justify-center items-center ">
          <a
            href="https://www.facebook.com/srigruhafoods"
            target="_blank"
            className="flex justify-center items-center"
          >
            <ion-icon name="logo-facebook" id="icon" size="large"></ion-icon>
          </a>
        </li>
        <li className="md:w-16 md:h-16  w-12 h-12   rounded-full bg-[#cb7143] flex justify-center items-center ">
          <ion-icon name="logo-twitter" id="icon" size="large"></ion-icon>
        </li>
        <li className="md:w-16 md:h-16 w-12 h-12  rounded-full bg-[#cb7143] flex justify-center items-center ">
          <ion-icon name="logo-instagram" id="icon" size="large"></ion-icon>
        </li>
        <li className="md:w-16 md:h-16  w-12 h-12   rounded-full bg-[#cb7143] flex justify-center items-center ">
          <a
            href="https://wa.me/9155536665?text=Hello How Can i help you ?"
            target="_blank"
            className="flex justify-center items-center"
          >
            <ion-icon name="logo-whatsapp" id="icon" size="large"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Stalckus;
