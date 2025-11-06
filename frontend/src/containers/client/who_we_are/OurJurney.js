const OurJourney = () => {
  return (
    <>
      <div className="container-sm shadow-sm bg-white rounded py-2 px-4">
        <h1 className="text-center text-3xl font-semibold font-serif text-[#394867] mt-8">
          Our Journey
        </h1>
        <p className=" text-lg mt-5 mb-10">
          The Co-Founders of FabLanka Foundation conceptualized the venture as
          early as in 2014 was publicly launched in May 2015. FabLanka
          Foundation (GTE) LTD was incorporated as a not-for-profit social
          enterprise in April 2016 under Companies Act of Sri Lanka.{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/fablabmakandura"
            target="_blank"
            rel="noopener noreferrer"
          >
            FabLab Makandura
          </a>{" "}
          , the first ever FabLab in Sri Lanka was started in 2017.
        </p>
      </div>
    </>
  );
};

export default OurJourney;
