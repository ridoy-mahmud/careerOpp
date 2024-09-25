import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar w-full lg:w-9/12 mx-auto">
      {/* Navbar start for mobile and large screen */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Hamburger menu for mobile */}
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>
          {/* Mobile dropdown menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-[1]"
          >
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/appliedjobs">Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blog</NavLink>
            </li>
          </ul>
        </div>
        {/* Brand logo */}
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          <div className="flex items-center gap-2">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/3850/3850285.png"
              alt="CareerOpp logo"
            />
            <p className="mb-2">CareerOpp</p>
          </div>
        </Link>
      </div>

      {/* Navbar center for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end">
        <Link to="/">
          <button className="btn px-5 py-2 bg-[#9576ff] text-white border-0">
            Start Applying
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
