import { Link } from "react-router-dom";
import Button from "../ui/Button";

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

function PlaceItem({
  id,
  title,
  description,
  imageUrl,
  address,
  coordinates,
  creatorId,
}: PlaceData) {
  return (
    <div className="rounded-md bg-gray-400 hover:bg-purple-500 p-4">
      {/* <Link to={`/${id}/places`}> */}
      <div>
        <img src={imageUrl} alt={id} />
      </div>
      <div>
        <h2>{title}</h2>
        <h2>{address}</h2>
        <h2>{description}</h2>
        <h2>{creatorId}</h2>
        <h2>{coordinates.lat}</h2>
      </div>
      <div>
        <Button type="button" className="bg-white">
          View
        </Button>
        <Link to={`/places/${id}`}>
          <Button type="button" className="bg-white">
            Edit
          </Button>
        </Link>
        <Button type="button" className="bg-white">
          Delete
        </Button>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default PlaceItem;
