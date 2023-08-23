import React from "react";

const CenterforIndustry4 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">Center for Industry 4.0</h1>
      </header>
      <main className="px-6 py-16">
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <p>
            Center for  {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/industry4"
              target="_blank"
              rel="noopener noreferrer"
            >
             Industry 4.0  
            </a>  (C4I4) is a think thank specialized on
            research work on Industry 4.0 Technologies and Digital
            Transformation Management. This unique platform will carry out
            policy research, advise government on Industry 4.0 adaptation,
            consult industrial organizations on digitalization and act as a
            networking platform for all stakeholders including similar centers
            around the world. C4I4 will act as an independent research institute
            associated to   {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
            >
             FabLanka Foundation.
            </a> 
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

export default CenterforIndustry4;
