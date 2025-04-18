type UserProps = {
  id: string;
  name: string;
  image: string;
  placesNumber: number;
};

function UserItem({ id, name, image, placesNumber }: UserProps) {
  return (
    <li className="w-full m-5 p-5 rounded-md bg-purple-500 ">
      <div>
        <div>
          <img src={image} alt={id} />
        </div>
        <div>
          <h2>{name}</h2>
          <h2>
            {placesNumber} {placesNumber === 1 ? "Place" : "Places"}
          </h2>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
