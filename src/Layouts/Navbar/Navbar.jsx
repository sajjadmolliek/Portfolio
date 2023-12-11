import { NavLink } from "react-router-dom";

// import logo from "../../src/assets/Logo.png";

const Navbar = () => {
  const navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white font-semibold"
              : isActive
              ? " text-[#F00] underline font-semibold"
              : "text-white font-semibold"
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
              ? " text-[#F00] underline font-semibold"
              : "text-white font-semibold"
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
              ? " text-[#F00] underline font-semibold"
              : "text-white font-semibold"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    
      <div className="flex h-16 items-center gap-10 lg:gap-0 justify-start lg:navbar  col-span-1  lg:justify-center w-[90%] mx-auto">
       
          <div className="dropdown  ">
            <label tabIndex={0} className="text-white  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
          <h1 className="text-[#F00] font-Leckerli font-thin text-2xl ml-[10%]">
            sajjadmolliek
          </h1>
       
        <div className="navbar-end col-span-3 hidden lg:flex lg:w-[70%] ">
          <ul className="gap-5 menu-horizontal  font-sans text-white px-1 ">
            {navitems}
          </ul>
        </div>
        <div className="navbar-end col-span-3 hidden lg:flex lg:w-[70%] ">
          
        </div>
      </div>
   
  );
};

export default Navbar;
