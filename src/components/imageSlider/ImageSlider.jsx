import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, interval);

    return () => clearInterval(timeoutRef.current);
  }, [slides.length, interval]);

  return (
    <div className="image-slider max-h-400px">
      <div
        className={`image-wrapper ${isTransitioning ? "slide" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className="content absolute md:bottom-[100px] md:left-[80px] lg:bottom-[100px] lg:left-[100px] left-6 bottom-8 p-6 rounded-md">
              <h2 className="tracking-wider	lg:text-4xl md:text-3xl text-xl font-semibold leading-9	">
                {slide.title}
              </h2>
              <p className="md:my-6 my-2 tracking-wide md:text-xl	lg:text-2xl ">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
