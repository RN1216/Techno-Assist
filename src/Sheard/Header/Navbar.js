import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2 dropdown-content menu shadow bg-base-100 rounded-box w-45">
                <li>
                  <Link to="">Monitor & Flat Screen</Link>
                </li>
                <li>
                  <Link to="">CPU</Link>
                </li>
                <li>
                  <Link to="">Others Accessories</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
        <Link className=" normal-case text-xl">
          Techno{" "}
          <span className=" normal-case text-xl text-orange-500">Assist</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          <li>
            <Link>Home</Link>
          </li>
          <li tabIndex={0} className="dropdown dropdown-hover">
            <Link>
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 dropdown-content menu shadow bg-base-100 rounded-box w-45">
              <li>
                <Link to="">Monitor & Flat Screen</Link>
              </li>
              <li>
                <Link to="">CPU</Link>
              </li>
              <li>
                <Link to="">Others Accessories</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
