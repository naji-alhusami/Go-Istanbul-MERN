import { useState } from "react";
import { IoFilterSharp, IoSearchSharp } from "react-icons/io5";

import Navbar from "../Navbar/Navbar";
import Header from "../ui/Header";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AllPlaces = () => {
  const [isFilters, setIsFilters] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="pt-40">
        <Header
          subtitle="Explore Every Destination"
          title="Discover All Cities and Shared Places"
          withBrush={false}
        />
        <div className="relative py-5  mx-5 md:mx-30">
          <Input
            htmlFor="search"
            type="text"
            label=""
            placeholder="Waht City Or Place You Searching For?"
            className="rounded-full pr-12 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            errors=""
          />
          <Button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2 bg-purple-800"
          >
            <IoSearchSharp />
          </Button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Button
            type="button"
            className="border-1 border-gray-300 rounded-xl py-1 hover:bg-gray-200 cursor-pointer"
            onClick={() => setIsFilters(!isFilters)}
          >
            <IoFilterSharp />
            <span className="pl-1">Filters</span>
          </Button>
        </div>
        {isFilters && <div>show Filters</div>}
      </div>
    </>
  );
};

export default AllPlaces;
