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

    const imageStyle = {
      width: "100%",
      height: "300px",
      objectFit: "cover",
      display: "block",
    };

    return (
      <div className="w-full">
        <style>
          {`
            @media (min-width: 640px) {
              .slider-image {
                height: 400px !important;
              }
            }
            @media (min-width: 1024px) {
              .slider-image {
                height: 600px !important;
              }
            }
          `}
        </style>
        <Slider {...settings}>
          <div>
            <a href="#">
              <img
                className="slider-image"
                style={imageStyle}
                src="/hero/heroimg1.jpg"
                alt="slide1"
              />
            </a>
          </div>

          <div>
            <a href="#">
              <img
                className="slider-image"
                style={imageStyle}
                src="/hero/heroimg2.jpg"
                alt="slide2"
              />
            </a>
          </div>
          {/* <div>
            <a href="#">
              <img
                className="m-0 rounded w-full"
                style={{ height: "500px", objectFit: "cover" }}
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9615-1.jpg"
                alt="slide3"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className="m-0 rounded w-full"
                style={{ height: "500px", objectFit: "cover" }}
                src="https://new-bucket13.s3.ap-southeast-1.amazonaws.com/images_for_slides/329586204_1279223199645798_8818403373741526354_n+(1).jpg"
                alt="slide4"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className="m-0 rounded w-full"
                style={{ height: "500px", objectFit: "cover" }}
                src="https://new-bucket13.s3.ap-southeast-1.amazonaws.com/images_for_slides/302069285_190582280103309_3220980484686533445_n.jpg"
                alt="slide5"
              />
            </a>
          </div> */}
        </Slider>
      </div>
    );
  }
}
