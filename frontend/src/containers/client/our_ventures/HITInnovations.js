import React from "react";

const HITInnovations = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">HIT Innovations</h1>
        {/* <p>
        Sample text
      </p> */}
      </header>
      <main className="px-6 py-16">
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <p>
            {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.hitinnovations.lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HIT Innovations
            </a>{" "}
            is a spinoff of the{" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.fablanka.lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FabLanka Foundation
            </a>
            . The objectives of{" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.hitinnovations.lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HIT Innovations
            </a>{" "}
            carry out research and development, introduce innovative solutions,
            and provide novel products and services at accessible and affordable
            prices using{" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.fablanka.lk/industry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Industry 4.0 Technology
            </a>
            .
          </p>
          <div className="mt-4">
            {/* Replace with actual images */}
            {/* <img
              src="https://www.hitinnovations.lk/wp-content/uploads/2021/08/Hit-Innovations-Logo-1.png"
              alt="HIT Innovations"
              className="w-50 rounded-lg shadow-md mx-auto"
            /> */}
            <a href="https://www.hitinnovations.lk/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4">
                Visit HIT Innovations
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HITInnovations;
