import { useRef, useState } from "react";
import { TRAVEL_DATA } from "../Lib/Types/CityType";
import { AnimatePresence, motion } from "framer-motion";
import { MoveDown, MoveUp } from "lucide-react";

const continents: string[] = [
  "All Continents",
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
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

const Filters = () => {
  // Continent Selection:
  const listRef = useRef<HTMLUListElement>(null);
  const [isContinentSelected, setContinentIsSelected] = useState<string>("");

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const selectContinentHandler = (continent: string) => {
    setContinentIsSelected(continent);
    setSelectedCities([]);
    setIsDropdownOpen(false);
  };

  // City Selection:
  const [isCitiesExpanded, setIsCitiesExpanded] = useState<boolean>(false);
  const [isPlacesExpanded, setIsPlacesExpanded] = useState<boolean>(false);
  const maxVisible = 2;

  // Define all cities from TRAVEL_DATA
  const allCities = TRAVEL_DATA.map((entry) => entry.city);

  // Create Set of cities that belong to the selected continent
  const citiesInSelectedContinent = new Set(
    TRAVEL_DATA.filter((entry) => entry.continent === isContinentSelected).map(
      (entry) => entry.city
    )
  );

  // Count how many times each city appears
  const allCityCounts = allCities.reduce<Record<string, number>>(
    (acc, city) => {
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    },
    {}
  );

  // Sort cities by count
  const sortedAllCityOptions = Object.entries(allCityCounts)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count);

  // Place Selection:
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const placesInSelectedCitySet = new Set(
    TRAVEL_DATA.filter((entry) => selectedCities.includes(entry.city)).flatMap(
      (entry) => entry.places.map((place) => place.place)
    )
  );

  const allPlaces = TRAVEL_DATA.flatMap((entry) =>
    entry.places.map((place) => place.place)
  );

  const allPlaceCounts = allPlaces.reduce<Record<string, number>>(
    (acc, place) => {
      acc[place] = (acc[place] || 0) + 1;
      return acc;
    },
    {}
  );

  const sortedAllPlaceOptions = Object.entries(allPlaceCounts)
    .map(([place, count]) => ({ place, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      {/* 1. Continent Selection */}
      <div className="relative py-6 px-12 flex flex-col md:flex-row md:items-center md:gap-6">
        <h1 className="py-2 font-bold text-purple-900 text-lg md:hidden">
          1. Select the Continent:
        </h1>

        {/* Mobile Dropdown */}
        <div className="relative text-right w-60 lg:w-60 flex flex-row justify-center items-center gap-x-6 md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 border-1 border-gray-200 py-2 rounded-lg shadow-sm bg-white text-sm font-medium hover:bg-gray-50 flex flex-row justify-between items-center cursor-pointer"
          >
            {isContinentSelected || "-- Choose Continent --"}
            <AnimatePresence mode="wait">
              {isDropdownOpen ? (
                <motion.span
                  key="up"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="ml-6"
                >
                  <MoveUp className="h-4" />
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
                  <MoveDown className="h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-8 left-0 z-10 mt-2 w-60 rounded-xl bg-white shadow-lg border-1 border-gray-200 ring-opacity-5 ">
              <ul className="py-2 text-left">
                {continents.map((continent) => (
                  <li
                    key={continent}
                    onClick={() => selectContinentHandler(continent)}
                    className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                      isContinentSelected === continent
                        ? "bg-gray-100 font-semibold"
                        : ""
                    }`}
                  >
                    {continent}
                    {isContinentSelected === continent && (
                      <span className="float-right">✔</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Horizontal List */}
        <div className="hidden md:block">
          <ul
            className="flex flex-row items-center gap-x-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-4"
            ref={listRef}
          >
            {continents.map((continent) => (
              <li
                key={continent}
                onClick={() => {
                  setContinentIsSelected(continent);
                  setSelectedCities([]);
                }}
                className={`font-bold text-sm hover:bg-gray-300 rounded-md cursor-pointer px-2 py-1 ${
                  isContinentSelected === continent ? "bg-gray-300" : ""
                }`}
              >
                {continent}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2.City Selection */}
      <div className="py-6 px-12">
        <h1 className="py-2 font-bold text-purple-900 text-lg">2. Cities:</h1>

        {sortedAllCityOptions
          .slice(0, isCitiesExpanded ? sortedAllCityOptions.length : maxVisible)
          .map((opt, idx) => {
            const isDisabled =
              isContinentSelected === "" ||
              (isContinentSelected !== "All Continents" &&
                !citiesInSelectedContinent.has(opt.city));

            return (
              <div key={idx} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  name="city"
                  value={opt.city}
                  checked={selectedCities.includes(opt.city)}
                  onChange={() => {
                    setSelectedCities((prev) =>
                      prev.includes(opt.city)
                        ? prev.filter((c) => c !== opt.city)
                        : [...prev, opt.city]
                    );
                  }}
                  disabled={isDisabled}
                  className={`h-4 w-4 ${
                    isDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
                <label
                  htmlFor={`city-${idx}`}
                  className={`text-md ${
                    isDisabled ? "text-gray-400" : "text-black"
                  }`}
                >
                  {opt.city}{" "}
                  <span className="text-gray-500">
                    ({opt.count.toLocaleString()})
                  </span>
                </label>
              </div>
            );
          })}

        {sortedAllCityOptions.length > maxVisible && (
          <button
            className="text-blue-600 text-sm mt-1"
            onClick={() => setIsCitiesExpanded(!isCitiesExpanded)}
          >
            <h1 className="cursor-pointer hover:underline">
              {isCitiesExpanded ? "Show less" : "Show more"}
            </h1>
          </button>
        )}
      </div>

      {/* 2.Place Selection */}
      <div className="py-6 px-12">
        <h1 className="py-2 font-bold text-purple-900 text-lg">3. Places:</h1>
        {sortedAllPlaceOptions
          .slice(
            0,
            isPlacesExpanded ? sortedAllPlaceOptions.length : maxVisible
          )
          .map((opt, idx) => {
            const isPlaceDisabled =
              selectedCities.length === 0 ||
              !placesInSelectedCitySet.has(opt.place);

            return (
              <div key={idx} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  name="place"
                  value={opt.place}
                  disabled={isPlaceDisabled}
                  className={`h-4 w-4 ${
                    isPlaceDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
                <label
                  htmlFor={`place-${idx}`}
                  className={`text-md ${
                    isPlaceDisabled ? "text-gray-400" : "text-black"
                  }`}
                >
                  {opt.place}{" "}
                  <span className="text-gray-500">
                    ({opt.count.toLocaleString()})
                  </span>
                </label>
              </div>
            );
          })}

        {sortedAllPlaceOptions.length > maxVisible && (
          <button
            className="text-blue-600 text-sm mt-1"
            onClick={() => setIsPlacesExpanded(!isPlacesExpanded)}
          >
            <h1 className="cursor-pointer hover:underline">
              {isPlacesExpanded ? "Show less" : "Show more"}
            </h1>
          </button>
        )}
      </div>
    </>
  );
};

export default Filters;
