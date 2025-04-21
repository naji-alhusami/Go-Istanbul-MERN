import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import world from "../../Images/world.avif";

const Footer = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <footer className="w-full font-poppins flex flex-row items-center justify-between sm:flex sm:flex-row sm:items-center sm:justify-between bg-white px-4">
      <div className="m-2">
        <Link to="/">
          <motion.div
            className="flex flex-row items-center "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={world} alt="logo" className="h-9 w-9 mr-[0.8rem]" />
          </motion.div>
        </Link>
      </div>
      <div className="max-w-full text-md font-bold">
        <ul className="flex flex-row items-center justify-center">
          <li className="hover:text-white">
            <Link
              to="/"
              className={`mx-1 p-3 hover:text-purple-950 hover:font-extrabold transition duration-300 font-bold ${
                activeLink === "About"
                  ? "text-purple-950 active"
                  : "text-purple-800"
              } `}
              onClick={() => handleLinkClick("Skills")}
            >
              HOME
            </Link>
          </li>
          <p>|</p>
          <li className="hover:text-white">
            <Link
              to="/"
              className={`mx-1 p-3 hover:text-purple-950 hover:font-extrabold transition duration-300 font-bold ${
                activeLink === "About"
                  ? "text-purple-950 active"
                  : "text-purple-800"
              } `}
              onClick={() => handleLinkClick("Skills")}
            >
              PLACES
            </Link>
          </li>
          <p>|</p>

          <li className="hover:text-white">
            <Link
              to="/"
              className={`mx-1 p-3 hover:text-purple-950 hover:font-extrabold transition duration-300 font-bold ${
                activeLink === "About"
                  ? "text-purple-950 active"
                  : "text-purple-800"
              } `}
              onClick={() => handleLinkClick("Skills")}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block ">
        <p className="ml-20 p-3 text-purple-800 font-bold text-lg">2025</p>
      </div>
    </footer>
  );
};

export default Footer;
