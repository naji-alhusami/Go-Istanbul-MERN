import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Backdrop from "../ui/Backdrop";
import NavbarContent from "./NavbarContent";

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
      <nav className="fixed top-0 right-0 w-16 h-16 bg-white rounded-bl-full shadow-lg flex items-center justify-center z-50">
        <div className="fixed top-0 left-0 w-16 h-16 z-50  bg-white rounded-br-full shadow-lg text-center p-2">
          <h1
            onClick={() => navigate("/")}
            className=" poetsen-one-regular text-3xl text-purple-900 md:text-4xl"
          >
            Go
          </h1>
        </div>

        <section className="flex flex-row justify-center items-center">
          <div
            className={`fixed top-0 right-0 z-50  bg-white rounded-bl-full shadow-lg transition-all duration-500 ease-in-out md:hidden ${
              isToggled ? "w-52 h-94 shadow-2xl" : "w-16 h-16"
            }`}
          >
            <div
              className="absolute top-3 right-3 flex flex-col items-center justify-center w-6 h-6 cursor-pointer"
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
            {isToggled && (
              <div className="absolute top-16 left-16 right-4 z-10">
                <NavbarContent toggleButtonHandler={toggleButtonHandler} />
              </div>
            )}
          </div>
        </section>
      </nav>
    </>
  );
};

export default SmallNavbar;
