import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../Assets/Image.png";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div style={{ width: "250px", paddingLeft: "30px" }}>
      <Slider {...settings}>
        <div>
          <img height={"200px"} src={Image1} alt="" />
        </div>
        <div>
          <img height={"200px"} src={Image1} alt="" />
        </div>
        <div>
          <img height={"200px"} src={Image1} alt="" />
        </div>
        <div>
          <img height={"200px"} src={Image1} alt="" />
        </div>
        <div>
          <img height={"200px"} src={Image1} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
