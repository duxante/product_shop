import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.style.css';

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 10000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="homeSlider">
      <Slider autoplay={true} style={{ height: '50vh' }} {...settings}>
        <div className="bg bg1"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
