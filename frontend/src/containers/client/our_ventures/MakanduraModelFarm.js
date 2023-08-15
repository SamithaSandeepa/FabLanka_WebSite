import React from "react";

const MakanduraModelFarm = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">Makandura Model Farm</h1>
        <p className="mt-4 text-lg">
          A pilot project to test and evaluate the Industry 4.0 Technologies for
          Smart and Efficient Agriculture.
        </p>
      </header>
      <main className="flex items-center justify-center py-16">
        <div className="w-1/2 mr-10">
          <img
            src="https://www.farmersjournal.ie/WEBFILES/000/240/465/587235-240465.jpg"
            alt="Makandura Model Farm"
            className="max-w-full rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg">
            Makandura Model Farm is a collaborative project between HIT
            Innovations (PVT) LTD and FabLab Makandura.
          </p>
          <p className="text-lg mt-4">
            The Model Farm site is an 11 acre area located in Margrett Estate in
            Mediriwila Road, Makandura.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MakanduraModelFarm;
