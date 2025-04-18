import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";

import Button from "../ui/Button";

function Navbar() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [showSideNavbar, setShowSideNavbar] = useState<boolean>(false);

  function toggleButtonHandler() {
    setIsToggled(!isToggled);
    setShowSideNavbar(!showSideNavbar);
  }

  return (
    <nav className="bg-white z-30 top-0 w-full px-12 sticky shadow-lg flex flex-row justify-between items-center">
      <div className="text-center md:text-left p-2">
        <h1
          onClick={() => navigate("/")}
          className="poetsen-one-regular text-purple-900 text-2xl sm:text-4xl"
        >
          Go-World
        </h1>
      </div>

      {/* Large Screens */}
      <section className="flex flex-row justify-center items-center">
        <div className="hidden md:flex md:mr-8">
          <ul className="italic font-bold text-lg md:flex md:flex-row md:justify-between md:items-center md:gap-x-6">
            <li className="group relative">
              <Link to="/" className="block px-2">
                Home
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link to="/places" className="block px-2">
                Places
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link to="/" className="block px-2">
                About
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden italic font-bold text-md md:flex md:flex-row md:justify-center md:items-center">
          <Button
            type="button"
            className="text-purple-900 border border-purple-900 rounded-md cursor-pointer mr-2 hover:bg-purple-700 hover:text-white text-lg"
          >
            Login
          </Button>
          <Button
            type="button"
            className="text-white border border-purple-900 rounded-md cursor-pointer bg-purple-700 hover:bg-purple-900 text-lg"
          >
            Signup
          </Button>
        </div>
        <div
          className={`relative inline-block cursor-pointer m-[0.3rem_0_0_1rem] p-2 bg-white rounded-full z-20 md:hidden ${
            isToggled ? "change" : ""
          }`}
          onClick={toggleButtonHandler}
        >
          <div className="line1 w-[28px] h-1 bg-black rounded-[10px] mb-[6px] transition-all duration-400"></div>
          <div className="line2 w-[28px] h-1 bg-black rounded-[10px] mb-[6px] transition-all duration-400"></div>
          <div className="line3 w-[28px] h-1 bg-black rounded-[10px] mt-[6px] transition-all duration-400"></div>
        </div>
      </section>

      {/* Middle and Small Screens */}
      {showSideNavbar && (
        <div
          className="italic font-bold text-lg bg-white absolute top-12 right-0 w-full sm:absolute sm:top-14 sm:right-13 sm:w-60 sm:rounded-md divide-y divide-gray-300 border border-gray-300 shadow-lg md:hidden"
          onClick={toggleButtonHandler}
        >
          <Link to="/" className="px-12 h-12 flex items-center justify-start">
            <FaHome />
            <h1 className="pl-4">HOME</h1>
          </Link>
          <Link
            to="/places"
            className="px-12 h-12 flex items-center justify-start"
          >
            <MdPlace />
            <h1 className="pl-4">PLACES</h1>
          </Link>
          <Link
            to="/about"
            className="px-12 h-12 flex items-center justify-start"
          >
            <GoBookmarkFill />
            <h1 className="pl-4">ABOUT</h1>
          </Link>
          <div className="h-12 flex items-center justify-center">
            <Button
              type="button"
              className="w-full mx-12 text-purple-900 border border-purple-900 rounded-md cursor-pointer hover:bg-purple-700 hover:text-white text-lg"
            >
              Login
            </Button>
          </div>
          <div className="h-10 flex items-center justify-center">
            <Button
              type="button"
              className="w-full mx-12 text-white border border-purple-900 rounded-md cursor-pointer bg-purple-700 hover:bg-purple-900 text-lg"
            >
              Signup
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
