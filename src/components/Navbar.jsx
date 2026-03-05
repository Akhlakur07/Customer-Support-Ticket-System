import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm px-[4%] py-4">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <p className="text-md lg:text-2xl font-bold text-[#130B2D]">CS — Ticket System</p>
      </div>
      <div className="navbar-end hidden 2xl:flex">
        <ul className="menu menu-horizontal gap-8 px-8 text-base">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <div>
          <button className="bg-linear-to-r from-[#6a1cd7] to-[#9d70dd] text-white px-4 py-3 rounded-md">
            <p>
              <span className="pr-2.5">+</span>New Ticket
            </p>
          </button>
        </div>
      </div>
      <div className="2xl:hidden navbar-end">
        <button className="bg-linear-to-r from-[#6a1cd7] to-[#9d70dd] text-white px-3.5 py-2.5 rounded-md">
          <p className="text-sm">
            <span className="pr-2.5">+</span>New Ticket
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
