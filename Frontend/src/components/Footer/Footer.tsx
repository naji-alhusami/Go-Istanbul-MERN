import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import galata from "../../Images/Galata.svg";

const Footer = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <footer className=" font-poppins flex flex-row items-center justify-center md:flex md:flex-row md:items-center md:justify-between bg-orange-400 md:px-4">
      <div className=" ml-[2.5rem] m-2">
        <Link to="/">
          <motion.div
            className="flex flex-row items-center "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={galata} alt="logo" className="h-9 w-9 mr-[0.8rem]" />
          </motion.div>
        </Link>
      </div>
      <div className="mr-[1rem] text-md font-bold">
        <ul className="flex flex-row items-center justify-center">
          <li className="hover:text-white">
            <Link
              to="/"
              className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
                activeLink === "About" ? "text-white active" : "text-black"
              } `}
              onClick={() => handleLinkClick("Skills")}
            >
              HOME
            </Link>
          </li>
          <p>|</p>
          <li className="hover:text-white">
            <Link
              to="/places"
              className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
                activeLink === "About" ? "text-white active" : "text-black"
              } `}
              onClick={() => handleLinkClick("Skills")}
            >
              PLACES
            </Link>
          </li>
          <p>|</p>

          <li className="hover:text-white">
            <Link
              to="/about"
              className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
                activeLink === "About" ? "text-white active" : "text-black"
              } `}
              onClick={() => handleLinkClick("Skills")}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block ">
        <p className="ml-20 p-3 text-white font-bold text-lg">2025</p>
      </div>
    </footer>
  );
};

export default Footer;
