import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {API_URL} from "../../config/index";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function ProjectMakandura({ projects }) {

    const text = "This is a long text string.";
    const maxLength = 10;
    const truncatedText = text.slice(0, maxLength) + (text.length > maxLength ? "1" : "2");

    console.log(truncatedText); // Output: "This is a ..."


    const [project, setProject] = useState([]);
    // console.log(events);
    console.log(project);
    // const [status, setStatus] = useState(isChacked);

    const getProject = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/projectmakandura/`);
          setProject(response.data);
          console.log(response.data, "setProject");
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getProject();
      }, []);


      const numNews = project.length;
        let slidesToShow = 4;
        if (numNews === 0) {
            slidesToShow = 0;
        } else if (numNews < 5) {
            slidesToShow = numNews;
        } else if (numNews > 6) {
            slidesToShow = 5;
        }
    

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true,
    //       },
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
    };
  
    return (
        <>
        {/* <div className="container-fluid px-5 pb-5 pt-3 rounded-3 shadow bg-white mb-5"> */}
      <h1 className="text-center  text-3xl pt-5 ">Makadura Project</h1>
      {/* <HomeWrapper> */}
        <Slider {...settings} className={styles.card_container}>
          
          {project.map((curElem) => {
            console.log(curElem, "test");
            return (
                <div className='mt-10 h-80 pt-1 flex justify-center container w-auto'>
                    <div className="bg-white rounded-md shadow-md p-4 w-64 ">
                        <div className="mb-4 ">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Placeholder"
                                className="rounded-full w-20 h-20 mx-auto"
                            />
                        </div>
                        <div className="font-bold text-lg mb-2">{curElem.title_project_m}</div>
                            <p className="text-gray-700 text-base">{curElem.summery_project_m.slice(0,20)}</p>
                            <div className="mt-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
                                See more
                            </a>
                        </div>
                    </div>
                </div>

            );
          })}
        </Slider>
      {/* </HomeWrapper> */}
    {/* </div> */}
    </>
    );
  }
  
  export default ProjectMakandura;

  const styles = {
    card_container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
}
  