import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* {Daisy Ui Navbar} */}
      <div className="navbar bg-base-100 shadow-sm md:px-20 ">
        <div className="navbar-start  ">
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
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa] ">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <ShoppingCart className="w-4  h-4"></ShoppingCart>
          <p className="text-[16px] ">Login</p>
          <a className="btn text-white rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
