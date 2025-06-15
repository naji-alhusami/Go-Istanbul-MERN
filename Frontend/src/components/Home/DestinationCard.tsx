import { HiUsers } from "react-icons/hi";
import { City, TRAVEL_DATA } from "../Lib/Types/CityType";
import Button from "../ui/Button";
import { MdPlace } from "react-icons/md";

function DestinationCard({
  //   cid,
  // creatorId,
  city,
  //   year,
  // description,
  places,
}: City) {
  // Number of Users Visited the City
  const uniqueUserCount = new Set(
    TRAVEL_DATA.filter(
      (entry) => entry.city.toLowerCase() === city.toLowerCase()
    ).map((entry) => entry.creatorId)
  ).size;

  // Number of Places Shared for the City
  const placeCounts: Record<string, number> = {};

  TRAVEL_DATA.forEach((entry) => {
    const key = entry.city;
    placeCounts[key] = (placeCounts[key] || 0) + entry.places.length;
  });

  return (
    <>
      <div className="relative w-full h-110 my-4 rounded-3xl overflow-hidden shadow-xl bg-white bg-opacity-60 border-2 border-red-300">
        {places[0] && (
          <img
            src={places[0].imageUrl}
            alt={places[0].place}
            className="rounded-3xl absolute top-0 w-full h-70 z-10 p-3 object-cover"
          />
        )}

        <div className="absolute bottom-2 left-0 w-full bg-white bg-opacity-60 text-black text-xl font-bold px-3 py-1 z-10">
          <h1 className="text-3xl">{city}</h1>
          <div className="flex flex-row justify-start items-end gap-x-8 pt-8 pb-2">
            <div className="flex flex-row justify-center items-center text-gray-400">
              <HiUsers />
              <p className="text-sm pl-2 text-black">
                {uniqueUserCount} User{uniqueUserCount !== 1 && "s"}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center text-gray-400">
              <MdPlace />
              <p className="text-sm pl-2 text-black">
                {placeCounts[city]} Place{placeCounts[city] !== 1 && "s"}
              </p>
            </div>
          </div>
          <Button
            type="button"
            // onClick={() => {
            // }}
            className=" bg-purple-800 text-white rounded-full hover:bg-gray-800 transition py-2 text-md"
          >
            Check Places
          </Button>
        </div>
      </div>
    </>
  );
}

export default DestinationCard;
