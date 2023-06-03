import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = ({ slides, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length, interval]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default Slider;
