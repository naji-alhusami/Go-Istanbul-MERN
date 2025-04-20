import { useParams } from "react-router-dom";
import PlacesItem from "./PlaceItem";

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
      imageUrl: "s",
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
    <ul className="h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loadedPlaces.map((place) => (
        <li key={place.id}>
          <PlacesItem
            id={place.id}
            imageUrl={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creatorId}
            coordinates={place.coordinates}
          />
        </li>
      ))}
    </ul>
  );
}

export default AllPlaces;
