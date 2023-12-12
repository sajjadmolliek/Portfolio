import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white font-semibold "
              : isActive
              ? " text-[#F00]  font-semibold"
              : "text-white font-semibold hover:underline"
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white font-semibold"
              : isActive
              ? " text-[#F00]  font-semibold"
              : "text-white font-semibold hover:underline"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white font-semibold"
              : isActive
              ? " text-[#F00]  font-semibold"
              : "text-white font-semibold hover:underline"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex h-16 items-center gap-10 lg:gap-0 justify-start lg:navbar col-span-1  lg:justify-center md:w-[95%] mx-auto">
      <div className="dropdown  ">
        <label tabIndex={0} className="text-white  lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-5 md:ml-0"
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
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm hover:text-[#CF8613] dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
        >
          {navitems}
        </ul>
      </div>
      <h1 className="text-[#F00] font-Leckerli font-thin text-2xl">
        SajjadHossain
      </h1>

      <div className="navbar-end col-span-3 hidden lg:flex lg:w-[70%] ">
        <ul className="gap-5 menu-horizontal text-lg font-sans text-white px-1 ">
          {navitems}
        </ul>
      </div>
      <div className="navbar-end col-span-3 lg:w-[70%] ">
     
        <button className="btn btn-outline text-[#FF0000] text-lg mt-4  bg-[#3A3A3A70]">
          Hire me &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
