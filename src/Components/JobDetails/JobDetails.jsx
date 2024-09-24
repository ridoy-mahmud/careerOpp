import { MdWorkHistory } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { MdPhoneInTalk } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLoaderData, useParams } from "react-router-dom";

import { saveJobApplication } from "../Store/localstorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job, id);
  const {
    job_title,
    job_description,
    job_responsibility,
    salary,
    educational_requirements,
    experiences,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("Wow so easy!");
  };
  return (
    <div className="mb-20">
      <h2 className="text-center mt-5 p-20 font-bold text-2xl">Job Details</h2>
      <div className="flex w-8/12 mx-auto gap-5">
        <div>
          <p>
            <span className="font-bold">Job Description </span>
            <small>{job_description}</small>
          </p>
          <br />
          <p>
            <span className="font-bold">Job Responsibility </span>
            <small>{job_responsibility}</small>
          </p>
          <br />
          <p>
            <span className="font-bold">Educational Requarment </span>
            <br />
            <small>{educational_requirements}</small>
          </p>
          <br />
          <p>
            <span className="font-bold">Experiance</span>
            <br />
            <small>{experiences}</small>
          </p>
          <br />
        </div>
        {/* Nerw */}
        <div>
          <div className="card bg-indigo-50 text-black w-96">
            <div className="card-body">
              <h4 className="card-title">Job details</h4>
              <p className="flex gap-2">
                <MdWorkHistory />
                <span>{salary}</span>
              </p>
              <p className="flex gap-2">
                <GrWorkshop />
                <span>{job_title}</span>
              </p>
              <p>Contact Information </p>
              <div>
                <p className="flex gap-2">
                  <MdPhoneInTalk />
                  <span>Phone</span>
                  <p>{job.contact_information.phone}</p>
                </p>
                <p className="flex gap-2">
                  <MdAttachEmail />
                  <span>Email</span>
                  <p>{job.contact_information.email}</p>
                </p>
                <p className="flex gap-2">
                  <FaAddressBook />
                  <span>Address</span>
                  <p>{job.contact_information.address}</p>
                </p>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleApplyJob()}
                  className="btn btn-primary w-full"
                >
                  Apply Now
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
