import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
// import { HomeWrapper } from "./style";
// import style from "./newalert.css";
import { API_URL } from "../../config/index";

const NewAlert = () => {
  const [news, setNews] = useState([]);
  // const [status, setStatus] = useState(isChacked);

  //get access token Bearer
  const token = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getNews = async () => {
    try {
      console.log("access", token);
      const response = await axios.get(`${API_URL}/news/`);
      //only status is true data will be shown
      setNews(response.data.filter((item) => item.status === true)); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          position: "absolute",
          top: "10px", // Change the value of top to position at the top
          bottom: "unset", // Set bottom to "unset" to remove the default bottom value
          right: "unset", // Set right to "unset" to remove the default right value
          left: "50%", // Center the arrow horizontally
          transform: "translateX(50%) translateY(-50%) rotate(-90deg)", // Center the arrow vertically
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
          top: "unset", // Set top to "unset" to remove the default top value
          bottom: "12px", // Change the value of bottom to position at the bottom
          right: "unset", // Set right to "unset" to remove the default right value
          left: "50%", // Center the arrow horizontally
          transform: "translateX(-50%) translateY(50%) rotate(-90deg)", // Center the arrow vertically
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  const numData = news.length;
  const slidesToShow = numData === 1 ? 1 : numData < 4 ? numData - 1 : 3;
  const minSlides = numData === 1 ? 1 : numData < 4 ? numData - 1 : 3;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    minSlides,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold p-0 my-2">NEWS</h1>
        <Slider {...settings}>
          {news.map((curElem, index) => {
            return (
              <div className="card mb-3 border-0 shadow-none border-bottom bg-transparent py-6">
                <div className="row no-gutters">
                  <div className="col-4 pl-3 m-0 pr-2">
                    <img
                      src={curElem.image}
                      className="card-img m-0 w-full h-32 object-cover"
                      alt="..."
                    />
                  </div>

                  <div className="col-8 p-0 m-0">
                    <a href={"/news/" + curElem.id} className="no-underline">
                      <div className="card-body py-0 pl-0">
                        <p className="card-title text-lg font-normal text-black hover:text-[#2c185a] m-0 pb-3">
                          {curElem.title}
                        </p>
                        <p className="card-text lh-1 text-lg text-slate-500 hover:text-[#2a6d99] line-clamp-2 hover:line-clamp-none duration-100 ease-in-out">
                          {curElem.summery}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default NewAlert;
