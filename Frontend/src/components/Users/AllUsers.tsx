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
  ];

  if (USERS.length === 0) {
    return <h2>No Users Found</h2>;
  }

  return (
    <ul className="m-5 flex flex-col justify-center items-center sm:flex sm:flex-row">
      {USERS.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placesNumber={user.places}
          />
        );
      })}
    </ul>
  );
}

export default AllUsers;
