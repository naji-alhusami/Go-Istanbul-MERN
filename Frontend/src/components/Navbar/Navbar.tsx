import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ResponsiveNavbar from "./ResponsiveNavbar";
import Button from "../ui/Button";
import Backdrop from "../ui/Backdrop";

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
      <nav className="sticky bg-white z-30 top-0 w-full px-4 shadow-lg flex flex-row justify-between items-center">
        <div className="text-center md:text-left py-2">
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
            className={`relative inline-block cursor-pointer m-[0.3rem_0_0_1rem] py-2 bg-white rounded-full z-20 md:hidden ${
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
          <ResponsiveNavbar toggleButtonHandler={toggleButtonHandler} />
        )}
      </nav>
    </>
  );
}

export default Navbar;
