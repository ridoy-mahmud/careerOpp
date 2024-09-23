const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full mx-auto w-10/12 items-center">
      <div className="w-full md:w-7/12 mx-auto text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">
          One Step Closer To Your
          <span className="text-[#7f8ffe]"> Dream Job</span>
        </h1>
        <br />
        <p className="text-sm text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Your future. Come find it. Manage all your job applications from
          start to finish.
        </p>
        <br />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-10/12 mx-auto">
        <img
          className="w-full h-auto"
          src="https://i.ibb.co.com/YfHdTKg/P3-OLGJ1-copy-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
