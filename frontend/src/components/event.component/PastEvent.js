import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
// import styles from "./PastEvent.module.css";
import { API_URL } from "../../config/index";

const PastEvent = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/event/`);
      //only status is true data will be shown
      setEvents(response.data.filter((item) => item.status === true)); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

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
          bottom: "unset",
          right: "10px",
          left: "unset",
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
          bottom: "unset",
          right: "unset",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  // const numData = news.length;
  // const slidesToShow = numData === 1 ? 1 : numData < 4 ? numData - 1 : 3;
  // const minSlides = numData === 1 ? 1 : numData < 4 ? numData - 1 : 3;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="container m-0 p-0 bg-trasparent">
        <h1 className="text-center font-bold pb-3 text-3xl">Past Event</h1>
        <Slider
          {...settings}
          className="sm:card_container md:pl-0 lg:pl-0 xl:pl-0"
        >
          {events.map((curElem) => {
            console.log(curElem, "test");
            return (
              <div
                className="p-4 sm:w-1/2 lg:w-1/3 border border-gray-300 !important"
                key={curElem.id}
              >
                <div className="h-full rounded-lg overflow-hidden px-4 ">
                  <img
                    className="lg:auto md:h-48 w-full object-cover object-center rounded hover:scale-125 duration-300 ease-in-out"
                    src={curElem.image_project_m}
                    alt="blog"
                  />
                  <a href={"/event/" + curElem.id} className="no-underline">
                    <div className="p-6 hover:bg-gray-500 hover:text-white transition duration-300 ease-in rounded">
                      <h1 className="sm:text-lg md:text-xl lg:text-2xl font-normal mb-3">
                        {curElem.title_pastevent}
                      </h1>
                      <p className="leading-relaxed mb-3 line-clamp-3 hover:line-clamp-none duration-100 ease-in-out">
                        {curElem.summery_pastevent}
                      </p>
                      <div className="flex items-center flex-wrap "></div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default PastEvent;
