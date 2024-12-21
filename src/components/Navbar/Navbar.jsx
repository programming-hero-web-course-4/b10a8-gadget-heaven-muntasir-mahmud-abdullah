import React from "react";
import { NavLink } from "react-router-dom";
import heartimg from "../../assets/heart.png";
const links = (
  <>
    <li>
      <NavLink className="text-white text-lg font-semibold mr-10" to={"/"}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="text-white text-lg font-semibold mr-10"
        to={"dashboard"}
      >
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink
        className="text-white text-lg font-semibold mr-10"
        to={"statistics"}
      >
        Statistics
      </NavLink>
    </li>
    <li>
      <NavLink className="text-white text-lg font-semibold mr-10" to={"login"}>
        Log In
      </NavLink>
    </li>
  </>
);
const Navbar = () => {
  return (
    <div className="navbar max-w-screen-xl bg-[rgb(149,56,226)] top-0 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn md:btn-ghost lg:hidden"
          >
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
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-white text-2xl">Gadget Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className=" navbar-end">
        <div className="flex gap-4 items-center">
          <button className="flex px-3 py-3 rounded-full gap-3 text-black bg-white items-center font-semibold">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <button className="border-2 border-gray-300 p-3 bg-white rounded-full">
            <img className="w-4" src={heartimg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
