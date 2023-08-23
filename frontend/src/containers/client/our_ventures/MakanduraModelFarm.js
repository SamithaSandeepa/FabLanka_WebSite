import React from "react";

const MakanduraModelFarm = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">Makandura Model Farm</h1>
        <p className="mt-4 text-lg">
          A pilot project to test and evaluate the {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/industry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Industry 4.0 Technologies
            </a> for
          Smart and Efficient Agriculture.
        </p>
      </header>
      <main className="flex items-center justify-center py-16">
        <div className="w-1/2 mr-10 ml-5">
          <img
            src="https://www.researchdive.com/blogImages/IgkfBzr81a.jpeg"
            alt="Makandura Model Farm"
            className="max-w-full rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg">
            Makandura Model Farm is a collaborative project between {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://hitinnovations.lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
             HIT Innovations (PVT) LTD
            </a> 
              and {" "}
           
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/fablabmakandura"
              target="_blank"
              rel="noopener noreferrer"
            >
            FabLab Makandura.
            </a> 
          </p>

          <p className="text-lg mt-4">
            The Model Farm site is an 11 acre area located in {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.google.com/maps/place/Margret+Estate/@7.3207153,79.9861169,17.5z/data=!4m6!3m5!1s0x3ae2e75dbe469273:0xb3a4ad97ddf62172!8m2!3d7.3192189!4d79.98791!16s%2Fg%2F11gc_lhxn_?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
             Margrett Estate
            </a> in Mediriwila Road, Makandura.
          </p>
        </div>
        

              
      </main>
      <div class="m-2.5">
                <iframe
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=makandura margett&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
    </div>
  );
};

export default MakanduraModelFarm;
