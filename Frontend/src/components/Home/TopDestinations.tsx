import { City, TRAVEL_DATA } from "../Lib/Types/CityType";
import Header from "../ui/Header";
import DestinationCard from "./DestinationCard";

const TopDestinations = () => {
  const getMostVisitedCities = () => {
    const counts: Record<string, { count: number; city: City }> = {};

    TRAVEL_DATA.forEach((entry) => {
      const key = entry.city.toLowerCase();
      if (!counts[key]) {
        counts[key] = { count: 1, city: entry };
      } else {
        counts[key].count++;
      }
    });

    return Object.values(counts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 4)
      .map((entry) => entry.city);
  };

  const mostVisited = getMostVisitedCities();
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header
        subtitle="Top Shared Destinations"
        title="Discover the Most Visited Cities by Travelers"
      />

      {mostVisited.length === 0 ? (
        <h2>No Places Found</h2>
      ) : (
        // <ul className="w-full mx-4 bg-gray-100 relative flex flex-col md:w-full sm:flex-row sm:justify-center sm:items-center">
          <ul className="w-full mx-4 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 lg:px-10">
          {mostVisited.map((city) => (
            <li
              key={city.cid}
              className="flex flex-col justify-center items-start py-6 px-12 sm:w-full sm:px-4"
            >
              <DestinationCard {...city} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopDestinations;
