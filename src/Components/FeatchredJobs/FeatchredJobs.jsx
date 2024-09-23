import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeatchredJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h1 className="mt-10 font-bold text-3xl text-center">Featured Jobs</h1>
      <br />
      <center>
        <small className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </center>{" "}
      <br /> <br />
      <div className="w-8/12 grid mx-auto lg:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex mx-auto justify-center mb-10">
        <button className="btn btn-ghost">Show More</button>
      </div>
    </div>
  );
};

export default FeatchredJobs;
