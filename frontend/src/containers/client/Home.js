import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import ImageSlider from "../../components/homepage.component/ImageSlider";
import NewAlert from "../../components/news.component/NewAlert";

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
        <div className="grid-rows-3">
          <div className="flex item-center col-md-12 bg-gray-200 py-0 px-0">
            <div className="col-md-8">
              <ImageSlider />
            </div>
            <div className="col-md-4 flex justify-center items-center">
              <NewAlert />
            </div>
          </div>
          <div className="col-md-12">
            <p className="text-justify col-lg-12 mt-3">
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
            <div className="text-justify col-lg-12 mt-3 mb-3">
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
                <p className=" text-sm mt-3">
                  <samll>{linkName}</samll>
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-12 bg-gray-200 py-5">
            <div className="flex justify-center items-center">
              <div className="">
                <h1 className="text-center text-2xl font-bold">Our Mission</h1>
                <p className="text-justify col-lg-12 mt-3">
                  FabLanka is a group of highly motivated individuals coming
                  together to set up fabrication labs (fab labs) throughout Sri
                  Lanka as a community outreach project. The abundance of an
                  educated work force, high degree of IT usage, and existence of
                  a large number of small and medium size manufactures (SMEs)
                  makes Sri Lanka an ideal home for fab labs. The benefits of
                  bringing in new technology is the ability to transform the
                  manufacturing sector of local economies in environmentally
                  friendly ways. In addition, it will also strengthen employment
                  for youth in the 21st century manufacturing job sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;