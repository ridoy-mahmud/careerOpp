import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Store/localstorage";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appiededJobs, setApplidedJObs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appiededJobs);
    } else if (filter === "Onsite") {
      const onSiteJobs = appiededJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appiededJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    }
  };

  console.log(jobs);
  useEffect(() => {
    const storeJobsid = getStoredApplication();
    if (jobs.length) {
      //   const jobApply = jobs.filter((job) => storeJobsid.includes(job.id));
      const jobApplied = [];
      for (const id of storeJobsid) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setApplidedJObs(jobApplied);
      setDisplayJobs(jobApplied);
      //   console.log(jobs, storeJobsid, jobApplied);
    }
  }, [jobs]);
  return (
    <div className="w-8/12 mx-auto">
      <h2 className="text-center font-bold text-2xl p-12">
        Applied Jobs {appiededJobs.length}
      </h2>
      <div className="flex justify-end mb-12">
        <details className="dropdown">
          <summary className="btn btn-primary text-white m-1">Sort by</summary>
          <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleJobsFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("Onsite")}>
              <a>On Site</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="mb-20">
        {displayJobs.map((job) => (
          <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
