import { Link } from "react-router-dom";

type UserProps = {
  id: string;
  name: string;
  image: string;
  placesNumber: number;
};

function UserItem({ id, name, image, placesNumber }: UserProps) {
  return (
    <div className="rounded-md bg-gray-400 hover:bg-purple-500 p-4">
      <Link to={`/${id}/places`}>
        <div>
          <img src={image} alt={id} />
        </div>
        <div>
          <h2>{name}</h2>
          <h2>
            {placesNumber} {placesNumber === 1 ? "Place" : "Places"}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default UserItem;
