// import UserItem from "./UserItem";

import Header from "../ui/Header";

type PlaceData = {
  id: string;
  name: string;
  image: string;
  places: number;
};

const MostSharedPlaces = () => {
  const USERS: PlaceData[] = [
    {
      id: "p1",
      name: "Naji",
      image: "s",
      places: 2,
    },
    {
      id: "u2",
      name: "Naji",
      image: "s",
      places: 2,
    },
    {
      id: "u3",
      name: "Naji",
      image: "s",
      places: 2,
    },
    {
      id: "u4",
      name: "Naji",
      image: "s",
      places: 2,
    },
    {
      id: "u5",
      name: "Naji",
      image: "s",
      places: 2,
    },
  ];

  if (USERS.length === 0) {
    return <h2>No Users Found</h2>;
  }

  return (
    <Header
      subtitle="Top Shared Destinations"
      title="Discover the Most Visited Cities by Travelers"
    />
    // <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //   {USERS.map((user) => (
    //     <li key={user.id}>
    //       <UserItem
    //         id={user.id}
    //         image={user.image}
    //         name={user.name}
    //         placesNumber={user.places}
    //       />
    //     </li>
    //   ))}
    // </ul>
  );
};

export default MostSharedPlaces;
