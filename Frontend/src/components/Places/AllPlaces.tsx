import { useParams } from "react-router-dom";
import PlacesItem from "./PlaceItem";
import { TRAVEL_DATA } from "../Lib/Types/CityType";
// import bg from "../../Images/dragon-scales.svg";

function AllPlaces() {
  const userId = useParams().userId;
  const loadedTravelData = TRAVEL_DATA.filter(
    (place) => place.creatorId === userId
  );
  if (loadedTravelData.length === 0) {
    return <h2 className="h-screen">No Places Found</h2>;
  }

  return (
    // <ul className="ml-4 my-4 relative border-l-2 border-purple-500">
    <ul className="m-4 relative flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:items-center gap-2">
      {loadedTravelData.map((city) => (
        <li
          key={city.cid}
          className="flex flex-col justify-center items-start py-12 px-5"
        >
          <PlacesItem {...city} />
        </li>
      ))}
    </ul>
  );
}

export default AllPlaces;
