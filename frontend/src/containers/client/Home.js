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
      <p className="extra-content mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.This line of text is meant to be treated as fine print.This line
        of text is meant to be treated as fine print.This line of text is meant
        to be treated as fine print.This line of text is meant to be treated as
        fine print.This line of text is meant to be treated as fine print.This
        line of text is meant to be treated as fine print.This line of text is
        meant to be treated as fine print.This line of text is meant to be
        treated as fine print.This line of text is meant to be treated as fine
        print.This line of text is meant to be treated as fine print. This line
        of text is meant to be treated as fine print.This line of text is meant
        to be treated as fine print.This line of text is meant to be treated as
        fine print.This line of text is meant to be treated as fine print.This
        line of text is meant to be treated as fine print.This line of text is
        meant to be treated as fine print.This line of text is meant to be
        treated as fine print.This line of text is meant to be treated as fine
        print.This line of text is meant to be treated as fine print.This line
        of text is meant to be treated as fine print.
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <>
      <div className="container p-0">
        <div className="grid grid-cols-12 grid-rows-3">
          <div className="col-span-12 sm:col-span-8 row-span-1 bg-gradient-to-b from-green-600 to-blue py-0 px-0 flex items-center relative overflow-hidden">
            <ImageSlider />
          </div>
          <div className="col-span-4 row-span-1 bg-gradient-to-t from-white to-green-600 py-0 px-0 flex items-center relative overflow-hidden hidden sm:block">
            <NewAlert />
          </div>
          <div className="col-span-12 sm:col-span-8 row-span-1 px-5 sm:px-2 pt-2">
            <p className="text-justify mt-3">
              Fab Lanka is a group of highly motivated individuals coming
              together to set up fabrication labs (fab labs) throughout Sri
              Lanka as a community outreach project. The abundance of an
              educated work force, high degree of IT usage, and existence of a
              large number of small and medium size manufactures (SMEs) makes
              Sri Lanka an ideal home for fab labs. The benefits of bringing in
              new technology is the ability to transform the manufacturing
              sector of local economies in environmentally friendly ways. In
              addition, it will also strengthen employment for youth in the 21st
              century manufacturing job sector.
            </p>
            <div className="text-justify mt-3 mb-3">
              <p>
                Inspired by the technologically based social movements such as
                Open Source Ecology, FabLab, and RepRap who’s aim is to spread
                technology and knowledge to build a more equitable society,
                FabLanka aspires to provide a platform for social and economic
                development through education and technological innovation.
              </p>
              {readMore && extraContent}
              <a
                className="read-more-link mt-3"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <p className="text-sm mt-3">
                  <small>{linkName}</small>
                </p>
              </a>
            </div>
          </div>
          {/* <div className="col-span-4 item-center hidden sm:block">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNipunaPerera99%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=797828301687659"
              width="400"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div> */}

          {/* style={{ border: "none", overflow: "hidden" }} */}

          {/* <div className="float-right col-span-4 py-5">
                
              </div> */}
          <div className="col-span-12 sm:col-span-4 row-span-1 bg-gradient-to-t from-white to-green-600 py-0 px-0 flex items-center relative overflow-hidden block sm:hidden">
            <NewAlert />
          </div>
          <div className="col-span-12 row-span-1 bg-gradient-to-t from-white to-blue-500">
            <div className="flex justify-center items-center mt-4">
              <PastEvent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
