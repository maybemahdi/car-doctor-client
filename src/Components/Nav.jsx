import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.svg";
import { SlHandbag } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#FF3811] text-[##FF3811] border-[#FF3811] no-underline bg-white"
              : "text-black no-underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#FF3811] text-[##FF3811] border-[#FF3811] no-underline bg-white"
              : "text-black no-underline"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/services"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#FF3811] text-[##FF3811] border-[#FF3811] no-underline bg-white"
              : "text-black no-underline"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#FF3811] text-[##FF3811] border-[#FF3811] no-underline bg-white"
              : "text-black no-underline"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border focus:bg-[#fff] focus:text-[#FF3811] text-[##FF3811] border-[#FF3811] no-underline bg-white"
              : "text-black no-underline"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg- my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn -ml-[30px] btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content -ml-[30px] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="text-xl w-20">
          <img className="w-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-6">
        <div className="hidden md:flex gap-6">
        <Link><SlHandbag className="h-6 w-6" /></Link>
        <Link><IoIosSearch className="h-6 w-6" /></Link>
        </div>
        <button className="btn btn-outline box-border hover:border-[#ddd0] text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811]">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Nav;
