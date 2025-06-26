import { useRef, useState } from "react";
import { TRAVEL_DATA } from "../Lib/Types/CityType";
// import { AnimatePresence, motion } from "framer-motion";
// import { IoMdArrowDown } from "react-icons/io";
// import { IoArrowUpOutline } from "react-icons/io5";

// const filterOptions = ["All", "Cities", "Places"];

const continents: string[] = [
  "Africa",
  "Antarctica",
  "Asia",
  "North America",
  "South America",
  "Australia",
];

// type FiltersProps = {
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
//   selected: string;
//   handleSelect: (option: string) => void;
// };

// step by step:
// 1-choose continents.
// 2-places/cities/all. ( I will delete this step)
// 3-then list all the cities in my data.
// 4-then list all the places in the city selected.
// 5-the user can select the category of the place.
// 6-then there is selection to sort the places (most visited places / most rated / ...)

const Filters = () => {
  // Continent Scroller:
  const listRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    listRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  // City Selection:
  const [expanded, setExpanded] = useState<boolean>(false);
  const maxVisible = 4;

  const cityCounts = TRAVEL_DATA.reduce((acc: Record<string, number>, curr) => {
    acc[curr.city] = (acc[curr.city] || 0) + 1;
    return acc;
  }, {});

  const sortedCityOptions = Object.entries(cityCounts)
    .map(([city, count]) => ({ city: city, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      {/* 1. Continent Selection */}
      <div className="relative py-2 flex flex-col justify-center items-start md:flex-row">
        <h1 className="pl-12 py-2 font-bold text-purple-900 text-lg">
          Continent:
        </h1>
        <div className="max-w-full px-10">
          <ul
            className="flex flex-row items-center md:justify-center gap-x-10 overflow-x-auto whitespace-nowrap scrollbar-hide "
            ref={listRef}
          >
            {continents.map((continent) => (
              <li
                key={continent}
                className="font-bold text-sm hover:bg-gray-300 rounded-md cursor-pointer px-2 py-1"
              >
                {continent}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute left-2 top-16 -translate-y-1/2 z-10 md:hidden">
          <button
            type="button"
            onClick={scrollLeft}
            className="px-3 bg-white shadow-lg rounded-full cursor-pointer border-1 border-gray-300"
          >
            &#8249;
          </button>
        </div>
        <div className="absolute right-2 top-16 -translate-y-1/2 z-10 md:hidden">
          <button
            type="button"
            onClick={scrollRight}
            className="px-3 bg-white shadow-lg rounded-full cursor-pointer border-1 border-gray-300"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* 2.City Selection */}
      <div className="py-6 px-12">
        <h1 className="py-2 font-bold text-purple-900 text-lg">City:</h1>

        {sortedCityOptions
          .slice(0, expanded ? sortedCityOptions.length : maxVisible)
          .map((opt, idx) => (
            <div key={idx} className="flex items-center space-x-2 mb-1">
              <input type="checkbox" id={`city-${idx}`} className="h-4 w-4" />
              <label htmlFor={`city-${idx}`} className="text-md">
                {opt.city}{" "}
                <span className="text-gray-500">
                  ({opt.count.toLocaleString()})
                </span>
              </label>
            </div>
          ))}

        {sortedCityOptions.length > maxVisible && (
          <button
            className="text-blue-600 text-sm mt-1"
            onClick={() => setExpanded(!expanded)}
          >
            <h1 className="cursor-pointer hover:underline">
              {expanded ? "Show less" : "Show more"}
            </h1>
          </button>
        )}
      </div>
      {/* Dropdown Button */}
      {/* <div className="relative inline-block text-left p-8 w-full">
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
        </button> */}

      {/* Dropdown Menu */}
      {/* {isOpen && (
          <div className="z-10 mt-2 w-full rounded-xl bg-white shadow-lg border-1 border-gray-200 ring-opacity-5">
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
      </div> */}
    </>
  );
};

export default Filters;
