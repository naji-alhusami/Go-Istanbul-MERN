import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";

import Button from "../ui/Button";

type ResponsiveNavbar = {
  toggleButtonHandler: () => void;
};

function ResponsiveNavbar({ toggleButtonHandler }: ResponsiveNavbar) {
  return (
    <div
      className="italic font-bold text-lg bg-white absolute top-12 right-0 w-full sm:absolute sm:top-14 sm:right-13 sm:w-60 sm:rounded-md divide-y divide-gray-300 border border-gray-300 shadow-lg md:hidden"
      onClick={toggleButtonHandler}
    >
      <Link to="/" className="px-12 h-12 flex items-center justify-start">
        <FaHome />
        <h1 className="pl-4">HOME</h1>
      </Link>
      <Link to="/places" className="px-12 h-12 flex items-center justify-start">
        <MdPlace />
        <h1 className="pl-4">PLACES</h1>
      </Link>
      <Link to="/about" className="px-12 h-12 flex items-center justify-start">
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
  );
}

export default ResponsiveNavbar;
