import React from "react";
import ImageSlider from "./ImageSlider";
import "./ImageSlider.css";
import tastysalty from "../../assets/Sweets/Motichoor_Laddu.webp";
import coockies from "../../assets/Sweets/cookies.jpg";
import combo from "../../assets/Sweets/still.jpg";

const ImageSlideHome = () => {
  const slides = [
    {
      image: tastysalty,
      title: "MOTICHUR LADDU",
      description: "MORE THAN JUST A SWEET",
    },
    {
      image: coockies,
      title: "BISTICKS",
      description: "OUR SIGNATURE COOKIES",
    },
    {
      image: combo,
      title: "THE TASTEMAKERS ",
      description: "GUNTUR",
    },
  ];

  return (
    <div className="App">
      <ImageSlider slides={slides} interval={3000} />
    </div>
  );
};

export default ImageSlideHome;
