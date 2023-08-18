import React from "react";
import MakanduraTeam from "../../../components/fablabmakandura.component/MakanduraTeam";
import ProjectMakandura from "../../../components/fablabmakandura.component/ProjectMakandura";
import { Gallery } from "react-grid-gallery";
import { fablab } from "./images/FabLab";
import "./fablabmakandura.css";

const FablabMakandura = () => {
  return (
    <>
      <div className="m-0 p-0">
        <header className="bg-gray-600 py-10 text-white text-center ">
          <h1 className="text-4xl font-bold">FabLab Makandura</h1>
          <p className="mt-4 text-lg px-4 text-center">
            {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/fablabmakandura"
              target="_blank"
              rel="noopener noreferrer"
            >
              FabLab Makandura
            </a>{" "}
            was started on May 27th, 2017 and is the first Fabrication
            Laboratory established by FabLanka, and also the first of its kind
            in Sri Lanka.{" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/fablabmakandura"
              target="_blank"
              rel="noopener noreferrer"
            >
              FabLab Makandura
            </a>{" "}
            is equipped with various advanced manufacturing equipment, tools,
            and processes.
          </p>
          <p className="text-lg px-4 text-center">
            Fabrication Laboratory (FabLab) is an international concept where
            advanced manufacturing tools and practices are housed in a single
            place. More information about international FabLabs are available at{" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.fablabs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.fablabs.io
            </a>
            .
          </p>
        </header>
        <main className="px-4">
          <section className="">
            <div className="my-10 mx-10">
              <Gallery images={fablab} className="mx-auto" />
            </div>
          </section>
          {/* <section className="mb-8">
            <p className="text-gray-700 mb-4 text-justify"></p>
            <div className="my-10 mx-10">
              <Gallery images={fablab} className="mx-auto" />
            </div>
          </section> */}
          <section className="flex mb-8 px-5 text-justify">
            {/* Left Side: Text Content */}
            <div className="md:w-2/4 pr-5">
              <p className="text-gray-700 mb-4">
                At FabLab Makandura, we utilize{" "}
                <a
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                  href="/industry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Industry 4.0
                </a>{" "}
                Technologies to develop new products that provide efficient and
                affordable solutions to community needs. It also serves as a
                community center where anyone in the region has free access for
                education and information on advanced technologies.
              </p>
              <Gallery images={fablab} className="mx-auto" />
            </div>

            {/* Right Side: Facebook Content */}
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMakanduraFabLab&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="hidden sm:block mx-auto"
            ></iframe>
          </section>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMakanduraFabLab&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="350"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="block sm:hidden mx-auto"
          ></iframe>
        </main>
        <div className="grid grid-col-12 grid-row-3 bg-gradient-to-b from-white to-[#D4FAFC]">
          <div className="justify-center col-span-12">
            <ProjectMakandura />
          </div>
          <div className="justify-center pt-10 col-span-12 mx-2">
            <h1 className="text-left text-2xl font-semibold font-serif p-0 mt-4 text-[#394867]">
              Location
            </h1>
            <p className="text-center">
              {" "}
              <a
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                href="/fablabmakandura"
                target="_blank"
                rel="noopener noreferrer"
              >
                FabLab Makandura
              </a>{" "}
              is located about 50 Km from Colombo at the Public Library Complex
              in Makandura town of Kurunegala district.
            </p>
            <div class="mt-4 mb-4 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2716748138037!2d79.97793141525179!3d7.323351115378345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e7622d600a83%3A0xaa493fc1c1d13b3e!2sFabLab%20Makandura!5e0!3m2!1sen!2slk!4v1661173585215!5m2!1sen!2slk"
                width="100%"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="justify-center col-span-12">
            <h2 className="text-center text-2xl font-semibold font-serif p-0 mb-2 mt-4 text-[#394867]">
              FabLab Makandura Team
            </h2>
            <MakanduraTeam />
          </div>
        </div>
      </div>
    </>
  );
};

export default FablabMakandura;
