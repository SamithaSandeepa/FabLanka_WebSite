import React from "react";

const UniversalEnergy = () => {
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
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Current Product Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Off Grid Solar Systems
              </h3>
              <p>For residential and commercial buildings.</p>
              <div className="mt-4">
                {/* Replace with actual images */}
                <img
                  src="https://solaren-power.com/wp-content/uploads/2020/05/Annotation-2020-05-06-150252-1-1.jpg"
                  alt="Grid Tied Solar Systems"
                  className="max-w-full rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Solar Water Pumping Systems
              </h3>
              <p>Efficient solutions for water pumping using solar energy.</p>
              <div className="mt-4">
                {/* Replace with actual images */}
                <img
                  src="https://ecodeshpowersolutions.co.ke/wp-content/uploads/2021/03/Abdul-Majeed-0.jpg"
                  alt="Solar Water Pumping Systems"
                  className="max-w-full rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Grid Tied Solar Systems
              </h3>
              <p>For residential and commercial buildings.</p>
              <div className="mt-4">
                {/* Replace with actual images */}
                <img
                  src="https://solaren-power.com/wp-content/uploads/2020/05/Annotation-2020-05-06-150252-1-1.jpg"
                  alt="Grid Tied Solar Systems"
                  className="max-w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default UniversalEnergy;
