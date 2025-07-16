import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SliderComponent = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Slide ${index + 1}`} className="w-44" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;


