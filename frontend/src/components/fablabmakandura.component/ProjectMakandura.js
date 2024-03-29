import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { API_URL } from "../../config/index";
import { Amplify } from "aws-amplify";
import { Storage } from "aws-amplify";

const ProjectMakandura = () => {
  const [project, setProject] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "ap-southeast-1:1bab1487-9e1b-494f-8758-ac6afed9cff4",
        region: "ap-southeast-1",
      },

      Storage: {
        AWSS3: {
          bucket: "new-bucket13",
          region: "ap-southeast-1",
        },
      },
    });
  }, []);

  const getProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projectmakandura/`);
      //only status is true data will be shown
      const filteredData = response.data.filter((item) => item.status === true);
      setProject(filteredData);

      // Download image URLs for each project
      const urls = await Promise.all(
        filteredData.map((curElem) => downloadFile(curElem.image_project_m))
      );
      setImageUrls(urls);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async (fileName) => {
    try {
      const fileURL = await Storage.get(fileName);
      console.log("get image", fileName);
      return fileURL;
    } catch (error) {
      console.log("Error retrieving file:", error);
      return null;
    }
  };

  useEffect(() => {
    getProjects();
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
    speed: 100,
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
        <h1 className="text-center font-bold font-serif py-3 text-3xl">
          Project Makandura
        </h1>
        <Slider
          {...settings}
          className="sm:card_container md:pl-0 lg:pl-0 xl:pl-0"
        >
          {project.map((curElem, index) => {
            return (
              <div
                className="p-4 sm:w-1/2 lg:w-1/3 !important"
                key={curElem.id}
              >
                <div className="h-full rounded-lg overflow-hidden px-4 ">
                  <a href={"/fablabmakandura/" + curElem.id}>
                    <div className="relative w-xs h-72 overflow-hidden">
                      <img
                        className="absolute inset-0 w-full h-full object-cover object-center duration-300 transform hover:scale-125 transition-transform ease-in-out"
                        src={imageUrls[index]}
                        alt="blog"
                      />
                    </div>
                  </a>
                  {/* <a href={"/event/" + curElem.id} > */}
                  <div className="p-6 bg-gray-200 hover:text-black transition duration-300 ease-in">
                    <a
                      href={"/fablabmakandura/" + curElem.id}
                      className="hover:underline hover:text-black"
                    >
                      <h1
                        className="sm:text-lg md:text-xl lg:text-2xl font-normal mb-3"
                        style={{ textDecoration: "none" }}
                      >
                        {curElem.title_project_m}
                      </h1>
                    </a>
                    <p
                      className=" mb-3 duration-100 ease-in-out "
                      style={{
                        textDecoration: "none",
                        display: "-webkit-box",
                        WebkitLineClamp: 15,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {curElem.summery_project_m}
                    </p>
                    <div className="flex items-center flex-wrap"></div>
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

export default ProjectMakandura;
