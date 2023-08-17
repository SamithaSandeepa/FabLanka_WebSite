import React from "react";

const CenterforBioTechnology = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">Center for Bio-Technology</h1>
      </header>
      <main className="px-6 py-16">
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <p>
            Bio-Technology Center located next to FabLab Makandura is a
            specialized facility for novel therapeutics areas including Stem
            Cell therapy, Gene therapy, and Immunotherapy. With the
            establishment of the Center for Bio-Technology, we plan to take
            advantage of the state-of-the-art technologies such as 3-D printing,
            and computational biology to add value for bioprocess manufacturing
            unit operations to bring down the cost associated with these new
            treatment options. This will lead to successfully treating or curing
            diseases such as cancer, autoimmune diseases, and neurological
            ailments at affordable prices.
          </p>
          <p>
            With the inauguration of the Center, we will be launching a new
            certificate course on Biotechnology in collaboration with FabLab
            Makandura.
          </p>
          <p>
            This center is a joint initiative by FabLanka Foundation, FabLab
            Makandura and HIT Innovations (PVT) LTD to build a better,
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
