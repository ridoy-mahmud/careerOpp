import { BiCalculator } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { BsCpu } from "react-icons/bs";

const JobCatagorys = () => {
  return (
    <div className="mx-auto w-full text-center mt-24 mb-20">
      <h1>Job Category List</h1>
      <br />
      <small>
        Explore thousands of job opportunities with all the information you
        need. It's your future
      </small>
      <br />
      <br />
      <div className="w-11/12 md:w-10/12 lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        <div className="border-2 h-[240px] items-center text-start pt-7 ps-4">
          <BiCalculator className="text-5xl font-bold bg-slate-200 p-2 text-[#8a82fe]" />
          <br />
          <h2>Accounts and Finance</h2>
          <br />
          <small>300 Jobs Available</small>
        </div>
        <div className="border-2 h-[240px] items-center text-start pt-7 ps-4">
          <HiOutlineLightBulb className="text-5xl font-bold bg-slate-200 p-2 text-[#8a82fe] " />
          <br />
          <h2>Creative Design</h2>
          <br />
          <small>100+ Jobs Available</small>
        </div>
        <div className="border-2 h-[240px] items-center text-start pt-7 ps-4">
          <MdOutlineConnectWithoutContact className="text-5xl font-bold bg-slate-200 p-2 text-[#8a82fe] " />
          <br />
          <h2>Marketing & Sales</h2>
          <br />
          <small>150 Jobs Available</small>
        </div>
        <div className="border-2 h-[240px] items-center text-start pt-7 ps-4">
          <BsCpu className="text-5xl font-bold bg-slate-200 p-2 text-[#8a82fe]" />
          <br />
          <h2>Engineering Job</h2>
          <br />
          <small>224 Jobs Available</small>
        </div>
      </div>
    </div>
  );
};

export default JobCatagorys;
