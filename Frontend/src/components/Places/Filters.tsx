import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";
import { IoArrowUpOutline } from "react-icons/io5";

const filterOptions = ["All", "Cities", "Places"];

const continents = [
  "Africa",
  "Antarctica",
  "Asia",
  "North America",
  "South America",
  "Australia",
];

type FiltersProps = {
  isOpen: boolean;
  selected: string;
  handleSelect: (option: string) => void;
  setIsOpen: (open: boolean) => void;
};

const Filters = ({
  isOpen,
  selected,
  handleSelect,
  setIsOpen,
}: FiltersProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    listRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative w-full py-2 px-10">
        {/* Scrollable list */}
        <ul
          className="flex flex-row justify-center items-center overflow-x-auto gap-x-6 whitespace-nowrap scrollbar-hide"
          ref={listRef}
        >
          {continents.map((continent) => (
            <li key={continent} className="font-bold text-sm hover:bg-gray-300 rounded-md cursor-pointer px-2 py-1">
              {continent}
            </li>
          ))}
        </ul>

        {/* Left button */}
        <div className="absolute left-1 top-4 px-2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm sm:hidden">
          <button
            type="button"
            className="px-2 bg-white shadow-md rounded-full cursor-pointer"
            onClick={scrollLeft}
          >
            &#8249;
          </button>
        </div>

        {/* Right button */}
        <div className="absolute right-1 top-4 px-2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm sm:hidden">
          <button
            type="button"
            onClick={scrollRight}
            className="px-2 bg-white shadow-md rounded-full cursor-pointer"
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="relative inline-block text-left p-4">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full pl-6 pr-4 border-1 border-gray-200 py-2 rounded-lg shadow-sm bg-white text-sm font-medium hover:bg-gray-50 flex flex-row justify-between items-center cursor-pointer"
        >
          {selected}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="up"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="ml-6"
              >
                <IoArrowUpOutline />
              </motion.span>
            ) : (
              <motion.span
                key="down"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="ml-6"
              >
                <IoMdArrowDown />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 mt-2 w-40 rounded-xl bg-white shadow-lg border-1 border-gray-200  ring-opacity-5">
            <ul className="py-2">
              {filterOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                    selected === option ? "bg-gray-100 font-semibold" : ""
                  }`}
                >
                  {option}
                  {selected === option && (
                    <span className="float-right">✔</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
