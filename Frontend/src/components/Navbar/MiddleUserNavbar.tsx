import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoBookmarkFill } from "react-icons/go";
import { MdPlace } from "react-icons/md";

const MiddleUserNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="static flex flex-col items-center justify-start w-20 h-screen rounded-none py-6 border-r border-red-200">
      {/* Logo */}
      <div className="text-center mt-2 mb-16">
        <h1
          onClick={() => navigate("/")}
          className=" poetsen-one-regular text-purple-900 text-4xl"
        >
          Go
        </h1>
      </div>

      {/* Navbar Content */}
      <section className="flex flex-col items-center gap-y-8 mt-12">
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
      </section>
    </nav>
  );
};

export default MiddleUserNavbar;
