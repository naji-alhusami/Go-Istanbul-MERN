import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";

import Button from "../ui/Button";

type NavbarContent = {
  toggleButtonHandler?: () => void;
};

function NavbarContent({ toggleButtonHandler }: NavbarContent) {
  return (
    <div
      className="text-md font-bold text-black space-y-2"
      onClick={toggleButtonHandler}
    >
      <Link
        to="/"
        className="h-12 flex items-center justify-start hover:text-purple-900"
      >
        <FaHome />
        <h1 className="pl-4">HOME</h1>
      </Link>
      <Link
        to="/places"
        className="h-12 flex items-center justify-start hover:text-purple-900"
      >
        <MdPlace />
        <h1 className="pl-4">PLACES</h1>
      </Link>
      <Link
        to="/about"
        className="h-12 flex items-center justify-start hover:text-purple-900"
      >
        <GoBookmarkFill />
        <h1 className="pl-4">ABOUT</h1>
      </Link>
      <div className="h-12 flex items-center justify-center">
        <Button
          type="button"
          className="w-full mx-3 text-purple-900 border border-purple-900 rounded-md cursor-pointer hover:bg-purple-700 hover:text-white text-lg"
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

export default NavbarContent;
