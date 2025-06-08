import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Backdrop from "../ui/Backdrop";
import SmallNavbarContent from "./SmallNavbarContent";

const SmallNavbar = () => {
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
      <nav className="fixed w-full flex items-center justify-between z-50">
        {/* Logo */}
        <div className=" z-50  text-center px-8 py-4">
          <h1
            onClick={() => navigate("/")}
            className=" poetsen-one-regular text-4xl text-white"
          >
            Go-World
          </h1>
        </div>

        {/* Navbar Toggle Button */}
        <div className="flex flex-row justify-center items-center px-8 py-4">
          <div
            className={`fixed z-50  bg-white  transition-all duration-500 ease-in-out ${
              isToggled
                ? "w-48 h-116 shadow-2xl top-0 right-0 rounded-bl-full"
                : "w-12 h-12 rounded-full top-3 right-3"
            }`}
          >
            <div
              className={`absolute flex flex-col items-center justify-center w-6 h-6 cursor-pointer ${
                isToggled ? "top-6 right-6" : "top-3 right-3"
              }`}
              onClick={toggleButtonHandler}
            >
              <span
                className={`block w-7 h-1 bg-purple-900 rounded transition-all duration-300 ${
                  isToggled ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-purple-900  rounded my-1 transition-all duration-300 ${
                  isToggled ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-purple-900  rounded transition-all duration-300 ${
                  isToggled ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>

            {/* Navbar Content */}
            {isToggled && (
              <div className="absolute top-16 left-16 right-4 z-10">
                <SmallNavbarContent toggleButtonHandler={toggleButtonHandler} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default SmallNavbar;
