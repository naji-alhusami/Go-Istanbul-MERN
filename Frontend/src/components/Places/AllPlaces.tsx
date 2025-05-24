import { useParams } from "react-router-dom";
import PlacesItem from "./PlaceItem";
import istanbulImg from "../../Images/istanbul.jpg";
import najiImg from "../../Images/naji.jpg";
// import bg from "../../Images/dragon-scales.svg";

type Place = {
  pid: string;
  place: string;
  description: string;
  imageUrl: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type CityTravel = {
  cid: string;
  creatorId: string;
  city: string;
  year: number;
  description: string;
  places: Place[];
};

// type PlaceData = {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   address: string;
//   coordinates: {
//     lat: number;
//     lng: number;
//   };
//   creatorId: string;
// };

function AllPlaces() {
  const TRAVEL_DATA: CityTravel[] = [
    {
      cid: "c1",
      creatorId: "u1",
      city: "Istanbul",
      year: 2020,
      description: "aaa",
      places: [
        {
          pid: "p1",
          place: "Uskudar",
          description: "Uskudar",
          imageUrl: istanbulImg,
          address: "10 W 34th St, New Work, NY 20",
          coordinates: {
            lat: 40.7484405,
            lng: -73.9878584,
          },
        },
      ],
    },
    {
      cid: "c2",
      creatorId: "u1",
      city: "Istanbuls",
      year: 2020,
      description: "aaa",
      places: [
        {
          pid: "p1",
          place: "Sisli",
          description: "Sisli",
          imageUrl: najiImg,
          address: "10 W 34th St, New Work, NY 10",
          coordinates: {
            lat: 40.7484405,
            lng: -73.9878584,
          },
        },
        {
          pid: "p2",
          place: "Besiktas",
          description: "Besiktas",
          imageUrl: istanbulImg,
          address: "10 W 34th St, New Work, NY 10",
          coordinates: {
            lat: 40.7484405,
            lng: -73.9878584,
          },
        },
        {
          pid: "p3",
          place: "Taksim",
          description: "Taksim",
          imageUrl: istanbulImg,
          address: "10 W 34th St, New Work, NY 10",
          coordinates: {
            lat: 40.7484405,
            lng: -73.9878584,
          },
        },
      ],
    },
    {
      cid: "c3",
      creatorId: "u1",
      city: "Istanbul",
      year: 2020,
      description: "aaa",
      places: [
        {
          pid: "p1",
          place: "Taksim",
          description: "Taksim",
          imageUrl: istanbulImg,
          address: "10 W 34th St, New Work, NY 10",
          coordinates: {
            lat: 40.7484405,
            lng: -73.9878584,
          },
        },
      ],
    },
    {
      cid: "c4",
      creatorId: "u1",
      city: "Istanbul",
      year: 2020,
      description: "aaa",
      places: [
        {
          pid: "p1",
          place: "Taksim",
          description: "Taksim",
          imageUrl: istanbulImg,
          address: "10 W 34th St, New Work, NY 10",
          coordinates: {
            lat: 40.7484405,
            lng: -73.9878584,
          },
        },
      ],
    },
    {
      cid: "c5",
      creatorId: "u1",
      city: "Istanbul",
      year: 2020,
      description: "aaa",
      places: [
        {
          pid: "p1",
          place: "Taksim",
          description: "Taksim",
          imageUrl: istanbulImg,
          address: "10 W 34th St, New Work, NY 10",
          coordinates: {
            lat: 40.7484405,
            lng: -73.9878584,
          },
        },
      ],
    },
  ];

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
