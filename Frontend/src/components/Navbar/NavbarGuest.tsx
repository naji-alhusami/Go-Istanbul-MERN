import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import StateContext from "../store/context/state-context";
import Button from "../ui/Button";
import NavbarSidebar from "./NavbarSidebar";

type NavbarGuestProps = {
  isToggled: boolean;
  showSideNavbar: boolean;
  isScrolled: boolean;
  toggleButtonHandler: () => void;
};

const NavbarGuest = ({
  isToggled,
  showSideNavbar,
  isScrolled,
  toggleButtonHandler,
}: NavbarGuestProps) => {
  const navigate = useNavigate();

  const { setIsLoginMode } = useContext(StateContext) as {
    isLoginMode: boolean;
    setIsLoginMode: (mode: boolean) => void;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-60 transition-all duration-300 px-6 py-3 md:flex flex-row items-center justify-between md:px-8 md:py-0 lg:px-20 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="text-center py-1">
          <h1
            onClick={() => navigate("/")}
            className={`${
              isScrolled ? " text-purple-900" : "text-stroke-purple text-white"
            } poetsen-one-regular text-4xl `}
          >
            Go-World
          </h1>
        </div>

        <NavbarSidebar
          isToggled={isToggled}
          showSideNavbar={showSideNavbar}
          toggleButtonHandler={toggleButtonHandler}
        />

        {/* Navbar in Large Screens */}
        <nav className="hidden md:flex flex-row justify-between items-center py-4">
          <div className="flex mr-8">
            <ul className="italic font-bold text-xl md:flex md:flex-row md:justify-center md:items-center md:gap-x-6">
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
          <div className="italic font-bold text-md flex flex-row justify-center items-center">
            <Button
              onClick={() => {
                setIsLoginMode(true);
                navigate("/auth");
              }}
              type="button"
              className={`relative border-purple-900 py-2 px-4 border rounded-lg cursor-pointer mr-2 text-lg overflow-hidden transition-colors duration-300
                ${
                  isScrolled
                    ? " text-purple-900 bg-white hover:bg-purple-900 hover:text-white"
                    : "bg-white text-purple-900 hover:bg-purple-900 hover:text-white "
                }
            `}
            >
              <span className="relative z-10">Login</span>
            </Button>
            <Button
              onClick={() => {
                setIsLoginMode(false);
                navigate("/auth");
              }}
              type="button"
              className="relative py-2 text-white border border-purple-900 rounded-lg cursor-pointer bg-purple-700 mr-2 text-lg overflow-hidden transition-colors duration-300 hover:bg-purple-900"
            >
              <span className="relative z-10">Signup</span>
            </Button>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default NavbarGuest;
