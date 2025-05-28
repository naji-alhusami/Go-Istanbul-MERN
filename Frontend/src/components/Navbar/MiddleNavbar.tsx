import { FaHome } from "react-icons/fa";
import { GoBookmarkFill } from "react-icons/go";
import { MdPlace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

// import NavbarContent from "./NavbarContent";

const MiddleNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="static flex flex-col items-center justify-start w-20 h-screen rounded-none py-6 border-r border-red-200">
        <div className="fixed top-0 left-0 w-16 h-16 z-50  bg-white rounded-br-full shadow-lg text-center p-2 md:text-left">
          <h1
            onClick={() => navigate("/")}
            className=" poetsen-one-regular text-purple-900 text-4xl"
          >
            Go
          </h1>
        </div>

        {/* <div className="absolute top-16 left-16 right-4 z-10"> */}
          {/* <NavbarContent /> */}
          <section className="flex flex-col items-center gap-y-8 mt-12 lg:hidden">
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
        {/* </div> */}
      </nav>
    </>
  );
};

export default MiddleNavbar;
