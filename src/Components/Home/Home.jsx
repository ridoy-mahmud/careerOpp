import Banner from "../Banner/Banner";
import FeatchredJobs from "../FeatchredJobs/FeatchredJobs";
import JobCatagorys from "../JobCatagorys/JobCatagorys";

const Home = () => {
  return (
    <div>
      <div className="bg-[#f9f9ff]">
        <Banner></Banner>
        <JobCatagorys></JobCatagorys>
        <FeatchredJobs></FeatchredJobs>
      </div>
    </div>
  );
};

export default Home;
