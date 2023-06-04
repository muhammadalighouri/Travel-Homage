import React, { useState } from "react";
import "../scss/slide.scss";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    
    <div className="slider">
      <div className="slider-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="slider-controls">
        <button className="prev-button" onClick={goToPrevSlide}>
          Prev
        </button>
        <button className="next-button" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
