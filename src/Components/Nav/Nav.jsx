import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar w-9/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink>Statistics</NavLink>
            <NavLink>Applied Jobs</NavLink>
            <NavLink>Blog</NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl  font-bold">
          Career Opp
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex gap-6">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-teal-500 underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/appliedjobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-teal-500 underline"
                  : ""
              }
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-teal-500 underline"
                  : ""
              }
            >
              Blogs
            </NavLink>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <Link>
          <button className="btn px-5 py-2 bg-[#9576ff] text-white border-0 ">
            Start Applying
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
