import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoBookmarkFill } from "react-icons/go";
import { HiUserCircle } from "react-icons/hi";
import { MdPlace } from "react-icons/md";

import Backdrop from "../ui/Backdrop";

type NavbarSidebarProps = {
  isToggled: boolean;
  showSideNavbar: boolean;
  toggleButtonHandler: () => void;
};

const NavbarSidebar = ({
  isToggled,
  showSideNavbar,
  toggleButtonHandler,
}: NavbarSidebarProps) => {
  return (
    <>
      {showSideNavbar && <Backdrop onClick={toggleButtonHandler} />}
      {/* Navbar in Small Screens */}
      <nav className="fixed w-full z-50 px-6 py-3 md:flex flex-row items-center justify-between md:px-8 md:py-0 lg:px-20">
        <div
          className={`fixed z-50 bg-white transition-all duration-500 ease-in-out md:hidden ${
            isToggled
              ? "w-20 h-full shadow-2xl top-0 left-0 border-r border-purple-500"
              : "w-12 h-12 rounded-full top-3 left-4 border-2 border-purple-500"
          }`}
        >
          <div
            className={`absolute flex flex-col items-center justify-center w-6 h-6 cursor-pointer ${
              isToggled ? "top-6 left-7" : "top-2.5 left-2.5"
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
    </>
  );
};

export default NavbarSidebar;
