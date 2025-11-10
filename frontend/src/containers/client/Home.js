import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import ImageSlider from "../../components/homepage.component/ImageSlider";
import ReactPlayer from "react-player";

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
        <div className="rounded-md">
          {/* bg-gradient-to-b from-green-600 to-blue */}
          <div className="sm:bg-[#F1F6F9] py-0 px-0 flex items-center overflow-hidden rounded">
            <ImageSlider />
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
      
      {/* YouTube Video and Facebook Feed Section */}
      <div className="flex flex-col md:flex-row px-2 md:px-10 py-4 gap-4 mb-4">
        {/* YouTube Video */}
        <div className="w-full md:w-3/5">
          <div className="rounded-md overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=H1k3TwiZ5EE&t=1s"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 0,
                    modestbranding: 1,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Facebook Feed - Desktop */}
        <div className="w-full md:w-2/5 hidden md:flex justify-center items-start">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFabLankaFoundation%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="100%"
            height="500"
            style={{ border: "none", overflow: "hidden", maxWidth: "500px" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* Facebook Feed - Mobile */}
      <div className="flex justify-center px-2 mb-4 md:hidden">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFabLankaFoundation%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="100%"
          height="500"
          style={{ border: "none", overflow: "hidden", maxWidth: "340px" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
