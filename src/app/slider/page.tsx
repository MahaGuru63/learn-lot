// pages/index.js
'use client';
import React from 'react';
import SliderComponent from '@/components/logoslider';


const LogoSlider = () => {
  const images = [
    './images/sliderlogo/slider(01).png',
    './images/sliderlogo/slider(2).png',
    './images/sliderlogo/slider(3).png',
    './images/sliderlogo/slider(4).png',
    './images/sliderlogo/slider(5).png',
    './images/sliderlogo/slider(6).png',
    './images/sliderlogo/slider(7).png',
    './images/sliderlogo/slider(8).png',
    // Add more image URLs as needed
  ];

  return (
    <div className="p-10">
      <SliderComponent images={images} />
    </div>
  );
};

export default LogoSlider;
