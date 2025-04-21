import { useParams } from "react-router-dom";
import PlacesItem from "./PlaceItem";
import istanbulImg from "../../Images/istanbul.jpg";
// import bg from "../../Images/dragon-scales.svg";

type PlaceData = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  creatorId: string;
};

function AllPlaces() {
  const PLACES: PlaceData[] = [
    {
      id: "p1",
      title: "aaa",
      description: "aaa",
      imageUrl: istanbulImg,
      address: "10 W 34th St, New Work, NY 10",
      coordinates: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creatorId: "u1",
    },
    {
      id: "p2",
      title: "aaa",
      description: "aaa",
      imageUrl: istanbulImg,
      address: "10 W 34th St, New Work, NY 10001",
      coordinates: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creatorId: "u1",
    },
    {
      id: "p3",
      title: "aaa",
      description: "aaa",
      imageUrl: istanbulImg,
      address: "10 W 34th St, New Work, NY 10001",
      coordinates: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creatorId: "u1",
    },
  ];

  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creatorId === userId);
  if (loadedPlaces.length === 0) {
    return <h2 className="h-screen">No Places Found</h2>;
  }

  return (
    <ul className="w-full">
      {loadedPlaces.map((place) => (
        <li
          key={place.id}
          className="pb-10 border-y border-gray-200 shadow-sm flex flex-col justify-center items-center z-10"
        >
          <PlacesItem {...place} />
        </li>
      ))}
    </ul>
  );
}

export default AllPlaces;
