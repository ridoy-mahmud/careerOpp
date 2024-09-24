import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeatchredJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
        {jobs.slice(0, dataLength).map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
      <br />
      <br />
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="w-full flex mx-auto justify-center mb-10 ">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-ghost "
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatchredJobs;
