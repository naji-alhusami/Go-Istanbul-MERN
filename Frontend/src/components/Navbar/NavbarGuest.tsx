import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Backdrop from "../ui/Backdrop";
// import SmallNavbarContent from "./SmallNavbarContent";
import Button from "../ui/Button";
import StateContext from "../store/context/state-context";
// import NavbarSidebar from "./NavbarSidebar";
import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";
import { HiUserCircle } from "react-icons/hi";

type NavbarGuestProps = {
  isToggled: boolean;
  showSideNavbar: boolean;
  toggleButtonHandler: () => void;
  isUserPage: boolean;
};

const NavbarGuest = ({
  isToggled,
  showSideNavbar,
  toggleButtonHandler,
//   isUserPage,
}: NavbarGuestProps) => {
  const navigate = useNavigate();

  const { setIsLoginMode } = useContext(StateContext) as {
    isLoginMode: boolean;
    setIsLoginMode: (mode: boolean) => void;
  };

  return (
    <>
      {showSideNavbar && <Backdrop onClick={toggleButtonHandler} />}
      <nav className="fixed w-full z-50 px-6 py-3 md:flex flex-row items-center justify-between md:px-8 md:py-0 lg:px-20">
        <div className="text-center">
          <h1
            onClick={() => navigate("/")}
            className="text-stroke-purple poetsen-one-regular text-4xl text-white"
          >
            Go-World
          </h1>
        </div>

        {/* Navbar Sidebar For Small Screens */}
        {/* <NavbarSidebar
          isToggled={isToggled}
          showSideNavbar={showSideNavbar}
          toggleButtonHandler={toggleButtonHandler}
          isUserPage={isUserPage}
        /> */}

        <nav className="fixed w-full z-50 px-6 py-3 md:flex flex-row items-center justify-between md:px-8 md:py-0 lg:px-20">
          {/* {!isUserPage && (
            <div className="text-center">
              <h1
                onClick={() => navigate("/")}
                className="poetsen-one-regular text-4xl text-purple-900 md:hidden"
              >
                Go-World
              </h1>
            </div>
          )} */}
          <div
            className={`fixed z-50  bg-white  transition-all duration-500 ease-in-out  md:hidden ${
              isToggled
                ? "w-20 h-full shadow-2xl top-0 left-0  border-r border-red-200"
                : "w-12 h-12 rounded-full top-3 left-4"
            }`}
          >
            <div
              className={`absolute flex flex-col items-center justify-center w-6 h-6 cursor-pointer ${
                isToggled ? "top-6 left-7" : "top-3 left-3"
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
              <nav className="flex flex-col justify-between items-center h-[80vh] mt-28 md:hidden">
                <div className="flex flex-col items-center gap-y-8">
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
                </div>

                <Link
                  to="/auth"
                  className="text-black text-3xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
                >
                  <HiUserCircle />
                </Link>
              </nav>
            )}
          </div>
        </nav>

        {/* Navbar Content */}
        <section className="hidden md:flex flex-row justify-between items-center py-4">
          <div className="flex mr-8">
            <ul className="italic font-bold text-xl md:flex md:flex-row md:justify-center md:items-center md:gap-x-6">
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
          <div className="italic font-bold text-md flex flex-row justify-center items-center">
            <Button
              onClick={() => {
                setIsLoginMode(true);
                navigate("/auth");
              }}
              type="button"
              className="relative py-2 text-black bg-white rounded-lg cursor-pointer mr-2 text-lg overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-purple-700 before:transition-all before:duration-400 before:ease-in-out hover:before:w-full hover:text-white"
            >
              <span className="relative z-10">Login</span>
            </Button>
            <Button
              onClick={() => {
                setIsLoginMode(false);
                navigate("/auth");
              }}
              type="button"
              className="relative py-2 text-white border border-purple-900 rounded-lg cursor-pointer bg-purple-700 mr-2 text-lg overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-purple-900 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-white"
            >
              <span className="relative z-10">Signup</span>
            </Button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default NavbarGuest;
