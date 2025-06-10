// import UserItem from "./UserItem";

import { DUMMY_USERS } from "../Lib/Types/UserType";
import Header from "../ui/Header";

const MostSharedPlaces = () => {
  if (DUMMY_USERS.length === 0) {
    return <h2>No Users Found</h2>;
  }

  return (
    <Header
      subtitle="Top Shared Destinations"
      title="Discover the Most Visited Cities by Travelers"
    />
  );
};

export default MostSharedPlaces;
