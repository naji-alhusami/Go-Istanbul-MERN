import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";

const LargeUserNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="static flex flex-col items-start justify-start w-52 h-screen rounded-none p-6 border-r border-red-200">
      {/* Logo */}
      <div className="text-center mt-2 mb-16">
        <h1
          onClick={() => navigate("/")}
          className=" poetsen-one-regular text-purple-900 text-4xl"
        >
          Go World
        </h1>
      </div>

      {/* Navbar Content */}
      <section className="w-full flex flex-col items-center justify-center gap-y-6 mt-12">
        <Link
          to="/"
          className="w-full py-2 pr-4 rounded-md hover:bg-red-200  hover:scale-110 transition-transform "
        >
          <div className="flex flex-row items-center justify-start gap-x-4 text-black text-2xl">
            <FaHome />
            Home
          </div>
        </Link>
        <Link
          to="/places"
          className="w-full py-2 pr-4 rounded-md hover:bg-red-200  hover:scale-110 transition-transform "
        >
          <div className="flex flex-row items-center justify-start gap-x-4 text-black text-2xl">
            <MdPlace />
            Places
          </div>
        </Link>
        <Link
          to="/places"
          className="w-full py-2 pr-4 rounded-md hover:bg-red-200  hover:scale-110 transition-transform "
        >
          <div className="flex flex-row items-center justify-start gap-x-4 text-black text-2xl">
            <GoBookmarkFill />
            About
          </div>
        </Link>
      </section>
    </nav>
  );
};

export default LargeUserNavbar;
