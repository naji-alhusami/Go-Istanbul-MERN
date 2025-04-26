// import { Link } from "react-router-dom";
// import Button from "../ui/Button";

import { useState } from "react";
import Backdrop from "../ui/Backdrop";
import Button from "../ui/Button";
import { BsThreeDots } from "react-icons/bs";
import Modal from "../ui/Modal";
import { CityTravel } from "./AllPlaces";

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

function PlaceItem({
  cid,
  creatorId,
  // city,
  // year,
  // description,
  places,
}: CityTravel) {
  console.log(places);
  const [openImageMenu, setOpenImageMenu] = useState<string | null>(null);
  const [showMapModal, setShowMapModal] = useState<string | null>(null);

  const toggleMenuHandler = () => {
    setOpenImageMenu((prevId) => (prevId === cid ? null : cid));
  };

  const toggleModalHandler = (pid: string) => {
    setShowMapModal((prevPid) => (prevPid === pid ? null : pid));
  };

  return (
    <>
      {places.map((place) => (
        <div key={place.pid} className="bg-white my-4  rounded-md ">
          {showMapModal === place.pid && (
            <>
              <Backdrop onClick={() => toggleModalHandler(place.pid)} />
              <Modal>
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">Address:</h2>
                  <p>{place.address}</p>
                  <Button
                    type="button"
                    className="mt-4 bg-purple-600 text-white"
                    onClick={() => toggleModalHandler(place.pid)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </>
          )}

          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-x-2">
              <img
                src={place.imageUrl}
                alt={place.place}
                className="w-10 h-10 rounded-full border-2 border-purple-400"
              />
              <p>{creatorId}</p>
            </div>

            <div
              className="relative cursor-pointer"
              // onClick={toggleMenuHandler}
            >
              <div onClick={toggleMenuHandler} className="cursor-pointer">
                <BsThreeDots />
              </div>
              {openImageMenu === cid && (
                <>
                  <Backdrop onClick={toggleMenuHandler} />
                  <div className="absolute top-6 right-0 bg-white border rounded-md shadow-md w-28 z-50">
                    <Button
                      type="button"
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    >
                      Delete
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <img
              src={place.imageUrl}
              alt={place.place}
              className="w-full object-cover h-64"
            />
          </div>

          <div className="p-4 flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <Button type="button" className="bg-red-400 text-white px-4 py-1">
                Prev
              </Button>
              <Button type="button" className="bg-red-400 text-white px-4 py-1">
                Next
              </Button>
            </div>
            <Button
              type="button"
              className="border-2 border-purple-900 text-purple-900 px-4 py-1 rounded-md"
              onClick={() => toggleModalHandler(place.pid)}
            >
              Show on Map
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default PlaceItem;
