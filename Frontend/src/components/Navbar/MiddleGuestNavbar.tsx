import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import StateContext from "../store/context/state-context";
import Button from "../ui/Button";

const MiddleGuestNavbar = () => {
  const navigate = useNavigate();
  const { setIsLoginMode } = useContext(StateContext) as {
    isLoginMode: boolean;
    setIsLoginMode: (mode: boolean) => void;
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-none h-16 flex flex-row items-center justify-between z-50 px-10">
        {/* Logo */}
        <div className="text-center md:text-left py-2">
          <h1
            onClick={() => navigate("/")}
            className=" poetsen-one-regular md:text-purple-900 md:text-4xl"
          >
            Go-World
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
              onClick={() => {
                setIsLoginMode(true);
                navigate("/auth");
              }}
              type="button"
              className="relative text-purple-900 border border-purple-900 rounded-md cursor-pointer mr-2 text-lg overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-purple-700 before:transition-all before:duration-400 before:ease-in-out hover:before:w-full hover:text-white"
            >
              <span className="relative z-10">Login</span>
            </Button>
            <Button
              onClick={() => {
                setIsLoginMode(false);
                navigate("/auth");
              }}
              type="button"
              className="relative text-white border border-purple-900 rounded-md cursor-pointer bg-purple-700 mr-2 text-lg overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-purple-900 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-white"
            >
              <span className="relative z-10">Signup</span>
            </Button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default MiddleGuestNavbar;
