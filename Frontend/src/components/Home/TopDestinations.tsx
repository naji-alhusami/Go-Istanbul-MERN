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
  console.log("Most Visited:", mostVisited);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header
        subtitle="Top Shared Destinations"
        title="Discover the Most Visited Cities by Travelers"
      />

      {mostVisited.length === 0 ? (
        <h2>No Places Found</h2>
      ) : (
        <ul className="w-full mx-4 relative flex flex-col md:w-full md:flex-row md:justify-center md:items-center">
          {mostVisited.map((city) => (
            <li
              key={city.cid}
              className="flex flex-col justify-center items-start py-6 px-5 md:w-full"
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
