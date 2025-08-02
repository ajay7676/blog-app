import React from "react";
import { FaChevronDown, FaEdit, FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="w-full bg-[#eaeaea]">
          <div className="flex items-center justify-between  max-w-7xl mx-auto w-full px-5 py-2">
      <ul className="flex items-center justify-start gap-7">
        <li>
            <Link to="/">Home Pages</Link>
        </li>
        <li>
             <Link to="#">About</Link>
        </li>
        <li>
            <Link to="#">Categories</Link>
        </li>
        <li>
             <Link to="#">Pages</Link>
        </li>
      </ul>
      <div className="flex">
         <h2>Note Book</h2>
      </div>
      <div className="flex items-center justify-center">
        <ul className="ul flex gap-7 items-center">
        <li>
            <FaSearch />
        </li>
        <li>
            <Link to="/create" className="flex items-center gap-1 hover:text-teal-600">
              <FaEdit />
              <span className="text-sm">Write</span>
            </Link>
        </li>
        <li>Contact</li>
        <li >En <span><FaChevronDown /></span></li>
      </ul>
      <div className="flex items-center gap-4 ml-5">
        <button><CiLight /></button>
        <button><MdDarkMode /></button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
