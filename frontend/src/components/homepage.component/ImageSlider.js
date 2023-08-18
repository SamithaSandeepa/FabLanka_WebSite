import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };

    return (
      <div className="container pl-2 mt-2">
        <Slider {...settings}>
          <div className="bg-gray-200 w-full h-auto">
            <a href="#">
              <img
                className="m-0 rounded"
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9796-1.jpg"
                alt="slide1"
              />
            </a>
          </div>

          <div>
            <a href="#">
              <img
                className="m-0 rounded w-full h-auto"
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9720-1.jpg"
                alt="slide2"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className="m-0 rounded w-full h-auto"
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9615-1.jpg"
                alt="slide3"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className="m-0 rounded w-full h-auto"
                src="https://new-bucket13.s3.ap-southeast-1.amazonaws.com/images_for_slides/329586204_1279223199645798_8818403373741526354_n+(1).jpg"
                alt="slide3"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className="m-0 rounded w-full h-auto"
                src="https://new-bucket13.s3.ap-southeast-1.amazonaws.com/images_for_slides/302069285_190582280103309_3220980484686533445_n.jpg"
                alt="slide3"
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
