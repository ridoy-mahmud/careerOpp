import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Jobs = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    remote_or_onsite,
    salary,
  } = job;
  return (
    <div className="w-full">
      <div className="card bg-white text-black border-2">
        <div className="card-body">
          <img className="w-28 h-10" src={logo} alt="" />
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
          <Link to={`/job/${id}`}>
            <button className="mt-1 bg-[#8e7fff] text-white p-1 sm:h-[30px] sm:w-6/12 lg:w-4/12 border-0 rounded-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
