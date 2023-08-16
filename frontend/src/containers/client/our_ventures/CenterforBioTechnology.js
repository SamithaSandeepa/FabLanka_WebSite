import React from "react";

const CenterforBioTechnology = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">Universal Energy</h1>
        <p className="mt-4 text-lg">
          A Product Line brand for Renewable Energy Systems designed, assembled
          and marketed by HIT Innovations (PVT) LTD, a spinoff business of
          FabLab Makandura.
        </p>
        <p className="mt-4 text-lg">
          The vision of the Universal Energy Product Line is to contribute
          towards an “Energy Sufficient Sri Lanka” by providing efficient
          renewable energy systems at an affordable price to consumers.
        </p>
      </header>
      <main className="px-6 py-16">
        {/* Current Product Offerings Section */}
        {/* ... Product offering content */}

        {/* Center for Bio-Technology Section */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Center for Bio-Technology
          </h2>
          <p>
            Bio-Technology Center located next to FabLab Makandura is a
            specialized facility for novel therapeutics areas including Stem
            Cell therapy, Gene therapy, and Immunotherapy.
          </p>
          <p>
            With the inauguration of the Center, we will be launching a new
            certificate course on Biotechnology in collaboration with FabLab
            Makandura.
          </p>
          <p>
            This center is a joint initiative by FabLanka Foundation, FabLab
            Makandura, and HIT Innovations (PVT) LTD to build a better,
            healthier, and a more abundant world!
          </p>
          <div className="mt-4">
            {/* Replace with actual images */}
            <img
              src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2020/04/iStock-499085898.jpg"
              alt="Center for Bio-Technology"
              className="w-50 rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>

        {/* Center for Industry 4.0 Section */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Center for Industry 4.0
          </h2>
          <p>
            Center for Industry 4.0 (C4I4) is a think tank specialized in
            research work on Industry 4.0 Technologies and Digital
            Transformation Management.
          </p>
          <p>
            C4I4 will act as an independent research institute associated with
            FabLanka Foundation.
          </p>
          <div className="mt-4">
            {/* Replace with actual images */}
            <img
              src="https://www.europeansprings.com/wp-content/uploads/2022/11/iStock-1329665165-1024x576.jpg"
              alt="Center for Industry 4.0"
              className="w-50 rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CenterforBioTechnology;
