import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShowAppliedJobs = ({ job }) => {
  const { job_title, salary, logo, company_name, remote_or_onsite, location } =
    job;

  return (
    <div>
      <div className="card card-side bg-white p-5 border-2 mb-5 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-start lg:items-center w-full">
          <figure className="px-12 py-8 bg-slate-50 flex-shrink-0">
            <img className="w-28" src={logo} alt="Company Logo" />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title text-xl lg:text-2xl">{job_title}</h2>
            <p className="text-sm lg:text-base">{company_name}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <button className="btn btn-sm btn-outline text-[#7f8ffe]">
                {remote_or_onsite}
              </button>
              <button className="btn btn-sm btn-outline text-[#7f8ffe]">
                Full Time
              </button>
            </div>
            <div className="flex items-center text-sm mt-2 gap-2">
              <FaLocationDot className="text-lg" />
              <p>{location}</p>
              <AiFillDollarCircle className="text-lg" />
              <p>Salary - {salary}</p>
            </div>
          </div>
        </div>
        <Link className="mt-5 lg:mt-0">
          <button className="bg-[#8984fe] text-white px-4 py-2 rounded-sm">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowAppliedJobs;
