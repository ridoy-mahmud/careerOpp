import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShowAppliedJobs = ({ job }) => {
  console.log(job);
  const {
    job_title,
    job_description,
    job_responsibility,
    salary,
    logo,
    company_name,
    remote_or_onsite,
    location,
  } = job;
  const handleDeails = () => {};

  return (
    <div>
      <div className="card card-side bg-white p-5 border-2 mb-5 flex justify-between items-center">
        <div className="card card-side">
          <figure className="px-12 py-8 bg-slate-50">
            <img className="w-28  " src={logo} alt="Movie" />
          </figure>
          <div className="card-body">
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
            <div className="flex items-center text-sm w-12/12 gap-1 mt-1 ">
              <FaLocationDot />
              <p>{location}</p>
              <AiFillDollarCircle />
              <p>Salary - {salary}</p>
            </div>
          </div>
        </div>
        <Link>
          <button
            onClick={() => handleDeails()}
            className=" bg-[#8984fe] text-white px-4 py-2 rounded-sm"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowAppliedJobs;
