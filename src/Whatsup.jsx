import React from "react";
import ImageLogo from "../public/assets/whatsapp-logo.png";
const Whatsup = () => {
  return (
    <div className=" fixed bottom-0 right-0 p-3  z-50 ">
      <a
        href="https://wa.me/9155536665?text=Hello How Can i help you ?"
        target="_blank"
      >
        <img src={ImageLogo} width="60" />
      </a>
    </div>
  );
};

export default Whatsup;
