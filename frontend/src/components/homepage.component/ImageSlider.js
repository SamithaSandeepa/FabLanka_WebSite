import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="">
            <div>
              <img
                className="object-cover"
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9796-1.jpg"
                alt="slide1"
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9720-1.jpg"
                alt="slide2"
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/image-slider/IMG_9615-1.jpg"
                alt="slide3"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
