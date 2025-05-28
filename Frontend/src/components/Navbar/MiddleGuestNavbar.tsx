import { Link, useNavigate } from "react-router-dom";

import Button from "../ui/Button";

const MiddleGuestNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 w-full h-16 bg-white shadow-lg flex flex-row items-center justify-between z-50 px-10">
        {/* Logo */}
        <div className="text-center md:text-left py-2">
          <h1
            onClick={() => navigate("/")}
            className=" poetsen-one-regular md:text-purple-900 md:text-4xl"
          >
            Go
          </h1>
        </div>

        {/* Navbar Content */}
        <section className="flex flex-row justify-between items-center">
          <div className="flex mr-8">
            <ul className="italic font-bold text-lg md:flex md:flex-row md:justify-center md:items-center md:gap-x-6">
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
              type="button"
              className="text-purple-900 border border-purple-900 rounded-md cursor-pointer mr-2 hover:bg-purple-700 hover:text-white text-lg"
            >
              Login
            </Button>
            <Button
              type="button"
              className="text-white border border-purple-900 rounded-md cursor-pointer bg-purple-700 hover:bg-purple-900 text-lg"
            >
              Signup
            </Button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default MiddleGuestNavbar;
