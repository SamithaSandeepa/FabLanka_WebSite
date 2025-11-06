import React from "react";

const CenterforBioTechnology = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">Center for Bio-Technology</h1>
        {/* <p>
          Sample text
        </p> */}
      </header>
      <main className="px-6 py-16">
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <p>
            Bio-Technology Center located next to FabLab Makandura is a
            specialized facility for novel therapeutics areas including  {" "}
            
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.dvcstem.com/post/stem-cell-therapy"
              target="_blank"
              rel="noopener noreferrer"
            >
             Stem Cell therapy
            </a>
             , {" "}
            
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.genome.gov/genetics-glossary/Gene-Therapy#:~:text=Gene%20therapy%20is%20a%20technique,healthy%20version%20of%20that%20gene."
              target="_blank"
              rel="noopener noreferrer"
            >
             Gene therapy
            </a>
             , and {" "}
            
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.cancer.org/cancer/managing-cancer/treatment-types/immunotherapy.html"
              target="_blank"
              rel="noopener noreferrer"
            >
             Immunotherapy.
            </a> 
             With the
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
            This center is a joint initiative by {" "}
            
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
            >
             FabLanka Foundation
            </a>  , {" "}
            
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="/fablabmakandura"
              target="_blank"
              rel="noopener noreferrer"
            >
             FabLab Makandura
            </a>   and  {" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://hitinnovations.lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
             HIT Innovations (PVT) LTD 
            </a> to build a better,
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
      </main>
    </div>
  );
};

export default CenterforBioTechnology;
