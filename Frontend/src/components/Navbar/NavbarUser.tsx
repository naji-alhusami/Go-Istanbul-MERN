import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoBookmarkFill } from "react-icons/go";
import { MdPlace } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";

import NavbarSidebar from "./NavbarSidebar";

type NavbarUserProps = {
  isToggled: boolean;
  showSideNavbar: boolean;
  isUserPage: boolean;
  isScrolled: boolean;
  toggleButtonHandler: () => void;
};

const NavbarUser = ({
  isToggled,
  showSideNavbar,
  isUserPage,
  isScrolled,
  toggleButtonHandler,
}: NavbarUserProps) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar in Small Screens */}
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
        <NavbarSidebar
          isToggled={isToggled}
          showSideNavbar={showSideNavbar}
          toggleButtonHandler={toggleButtonHandler}
        />
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
