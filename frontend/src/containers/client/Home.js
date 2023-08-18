import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import ImageSlider from "../../components/homepage.component/ImageSlider";
import NewAlert from "../../components/news.component/NewAlert";
import PastEvent from "../../components/event.component/PastEvent";

const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const { loading, setLoading } = useStateContext();

  useEffect(() => {
    setLoading(true);
    // Do something that takes time...
    setLoading(false);
  }, []);

  const extraContent = (
    <div>
      <p className="extra-content mt-3">Extra Content</p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <>
      <div className="px-0">
        <div className="grid grid-cols-12 grid-rows-1 rounded-md">
          {/* bg-gradient-to-b from-green-600 to-blue */}
          <div className="col-span-12 row-span-3 sm:col-span-8 sm:row-span-1 sm:bg-[#F1F6F9] py-0 px-0 flex items-center overflow-hidden rounded">
            <ImageSlider />
          </div>
          <div className="col-span-4 row-span-1 bg-[#F1F6F9] py-0 px-0 flex items-center overflow-hidden hidden sm:block rounded">
            <NewAlert />
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-12 row-span-3 mx-2 sm:px-5 sm:px-2 py-10">
        <p className="text-justify text-base">
          FabLanka Foundation is the pioneering organization which introduced
          and popularized{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/industry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industry 4.0
          </a>{" "}
          in Sri Lanka. FabLanka Foundation was incorporated as a not-for-profit
          social enterprise in 2016 to introduce{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/industry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industry 4.0
          </a>{" "}
          Technologies for socio- economic development in Sri Lanka by marching
          towards a “Makers Society”. Our team of co-founders is composed of
          professionally achieved individuals working in Sri Lanka &
          internationally. Over the years, FabLanka Foundation has built a large
          community of like minded people who believe in the ability of digital
          technologies in social transformation. The Foundation has conducted
          many public outreach programs to educate Sri Lankans across the
          country on the impact of{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/industry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industry 4.0
          </a>{" "}
          and how the nation can gain the benefits of this digital revolution by
          following an inclusive approach. FabLanka has worked in collaboration
          with schools, Universities, government agencies and professional
          bodies.
        </p>
      </div>
      <div className="col-span-12 sm:col-span-4 row-span-1 bg-blue-100 my-5 py-0 px-0 flex items-center relative overflow-hidden block sm:hidden">
        <NewAlert />
      </div>
      <div className="p-0 mb-0 sm:mb-4">
        <div className="grid grid-rows-1 rounded-md">
          <div className="col-span-12 row-span-1 bg-[#D6E4E5]">
            <div className="flex justify-center items-center mt-4 md:mb-4 sm:mb-4">
              <PastEvent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
