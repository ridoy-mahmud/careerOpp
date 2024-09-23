import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";

const Jobs = ({ job }) => {
  const { logo, job_title, company_name, location, remote_or_onsite, salary } =
    job;
  return (
    <div>
      <div className="card bg-white text-black h-5/5 w-12/12 border-2">
        <div className="card-body">
          <img className="w-28" src={logo} alt="" />
          <br />
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="btn btn-sm btn-outline me-3 text-[#7f8ffe] btn-[#7f8ffe]">
              {remote_or_onsite}
            </button>
            <button className="btn btn-sm btn-outline text-[#7f8ffe] btn-[#7f8ffe]">
              Full Time
            </button>
          </div>
          <div className="flex items-center text-sm w-10/12 gap-1 mt-1 ">
            <FaLocationDot />
            <p>{location}</p>
            <AiFillDollarCircle />
            <p>Salary - {salary}</p>
          </div>
          <button className="mt-1 bg-[#8e7fff] text-white  w-4/12 h-[38px] border-0 rounded-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
