import { FaHome } from "react-icons/fa";
import { GoBookmarkFill } from "react-icons/go";
import { MdPlace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import Backdrop from "../ui/Backdrop";

type NavbarUserProps = {
  isToggled: boolean;
  showSideNavbar: boolean;
  toggleButtonHandler: () => void;
  isUserPage: boolean;
  isScrolled: boolean;
};

const NavbarUser = ({
  isToggled,
  showSideNavbar,
  toggleButtonHandler,
  isUserPage,
  isScrolled,
}: NavbarUserProps) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar in Small Screens */}
      {showSideNavbar && <Backdrop onClick={toggleButtonHandler} />}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 px-6 py-3 md:flex flex-row items-center justify-between md:px-8 md:py-0 lg:px-20 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {isUserPage && (
          <div className=" text-center">
            <h1
              onClick={() => navigate("/")}
              className="poetsen-one-regular text-4xl text-purple-900 md:hidden"
            >
              Go-World
            </h1>
          </div>
        )}
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

      {/* Navbar in Large Screens */}
      <div className="hidden static md:flex flex-col items-center justify-start w-20 lg:w-40 h-screen rounded-none py-6 border-r border-red-200">
        {/* Logo */}
        <div className="text-center mt-2 mb-12">
          <h1
            onClick={() => navigate("/")}
            className=" poetsen-one-regular text-purple-900 text-4xl"
          >
            Go
          </h1>
        </div>

        {/* Navbar Content */}
        <div className="flex flex-col justify-between items-center h-[80vh]">
          <div className="flex flex-col items-center gap-y-8">
            <Link
              to="/"
              className="flex items-center gap-x-2 text-black text-2xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
            >
              <FaHome />
              <span className="hidden lg:inline">Home</span>
            </Link>

            {/* <Link
              to="/places"
              className="text-black text-3xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
            >
              <MdPlace />
            </Link>

            <Link
              to="/places"
              className="w-full py-2 pr-4 rounded-md hover:bg-red-200  hover:scale-110 transition-transform "
            >
              <div className="flex flex-row items-center justify-start gap-x-4 text-black text-2xl">
                <MdPlace />
                Places
              </div>
            </Link> */}

            <Link
              to="/places"
              className="flex items-center gap-x-2 text-black text-2xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
            >
              <MdPlace />
              <span className="hidden lg:inline">Places</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-x-2 text-black text-2xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
            >
              <GoBookmarkFill />
              <span className="hidden lg:inline">Home</span>
            </Link>
          </div>
          <Link
            to="/auth"
            className="flex items-center gap-x-2 text-black text-2xl p-3 rounded-md hover:bg-red-200 hover:scale-110 transition-transform"
          >
            <HiUserCircle />
            <span className="hidden lg:inline">Account</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarUser;
