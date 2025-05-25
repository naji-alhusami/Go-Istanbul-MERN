import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ResponsiveNavbar from "./ResponsiveNavbar";
import Button from "../ui/Button";
import Backdrop from "../ui/Backdrop";
import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";

function Navbar() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [showSideNavbar, setShowSideNavbar] = useState<boolean>(false);

  function toggleButtonHandler() {
    setIsToggled(!isToggled);
    setShowSideNavbar(!showSideNavbar);
  }

  return (
    <>
      {showSideNavbar && <Backdrop onClick={toggleButtonHandler} />}
      <nav
        className="
    fixed top-0 right-0 w-16 h-16 bg-white rounded-bl-full shadow-lg flex items-center justify-center z-50
    md:static md:flex md:flex-col md:items-center md:justify-start md:w-20 md:h-screen md:rounded-none md:py-6 md:border-r md:border-red-500
  "
      >
        <div className="text-center md:text-left py-2">
          <h1
            onClick={() => navigate("/")}
            className=" poetsen-one-regular md:text-purple-900 md:text-4xl"
          >
            Go
          </h1>
        </div>

        {/* Middle Screens */}
        <section className="hidden md:flex flex-col items-center gap-y-8 mt-12 lg:hidden">
          <Link
            to="/"
            className="text-black text-3xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
          >
            <FaHome />
          </Link>
          <Link
            to="/places"
            className="text-black text-3xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
          >
            <MdPlace />
          </Link>
          <Link
            to="/about"
            className="text-black text-3xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
          >
            <GoBookmarkFill />
          </Link>
        </section>

        {/* Large Screens */}
        <section className="flex flex-row justify-center items-center">
          <div className="hidden lg:flex lg:mr-8">
            <ul className="italic font-bold text-lg md:flex md:flex-row md:justify-between md:items-center md:gap-x-6">
              <li className="group relative">
                <Link to="/" className="block px-2">
                  Home
                  <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link to="/users" className="block px-2">
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
          <div className="hidden italic font-bold text-md md:hidden md:flex-row md:justify-center md:items-center">
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
            className={`fixed top-0 right-0 z-50 md:hidden bg-white rounded-bl-full shadow-lg transition-all duration-500 ease-in-out ${
              isToggled ? "w-52 h-94 shadow-2xl" : "w-24 h-24"
            }`}
          >
            <div
              className="absolute top-6 right-6 flex flex-col items-center justify-center w-6 h-6 cursor-pointer"
              onClick={toggleButtonHandler}
            >
              <span
                className={`block w-6 h-1 bg-black rounded transition-all duration-300 ${
                  isToggled ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-1 bg-black rounded my-1 transition-all duration-300 ${
                  isToggled ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-1 bg-black rounded transition-all duration-300 ${
                  isToggled ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
            {/*Small Screens */}
            {isToggled && (
              <div className="absolute top-16 left-16 right-4 z-10">
                <ResponsiveNavbar toggleButtonHandler={toggleButtonHandler} />
              </div>
            )}
          </div>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
