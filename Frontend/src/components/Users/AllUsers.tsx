import UserItem from "./UserItem";

type UserData = {
  id: string;
  name: string;
  image: string;
  places: number;
};

function AllUsers() {
  const USERS: UserData[] = [
    {
      id: "u1",
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
    // {
    //   id: "u6",
    //   name: "Naji",
    //   image: "s",
    //   places: 2,
    // },
  ];

  if (USERS.length === 0) {
    return <h2>No Users Found</h2>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {USERS.map((user) => (
        <li key={user.id}>
          <UserItem
            id={user.id}
            image={user.image}
            name={user.name}
            placesNumber={user.places}
          />
        </li>
      ))}
    </ul>
  );
}

export default AllUsers;
