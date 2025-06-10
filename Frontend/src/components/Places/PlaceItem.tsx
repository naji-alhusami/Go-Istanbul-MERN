// import { Link } from "react-router-dom";
// import Button from "../ui/Button";

import { useState } from "react";
import Backdrop from "../ui/Backdrop";
import Button from "../ui/Button";
import { BsThreeDots } from "react-icons/bs";
// import Modal from "../ui/Modal";
import { City } from "../Lib/Types/CityType";
import { motion } from "framer-motion";

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
  // creatorId,
  city,
  year,
  // description,
  places,
}: City) {
  console.log(places);
  const [openImageMenu, setOpenImageMenu] = useState<string | null>(null);
  // const [showMapModal, setShowMapModal] = useState<string | null>(null);

  const toggleMenuHandler = () => {
    setOpenImageMenu((prevId) => (prevId === cid ? null : cid));
  };

  // const toggleModalHandler = (pid: string) => {
  //   setShowMapModal((prevPid) => (prevPid === pid ? null : pid));
  // };

  return (
    <>
      {/* {places.map((place) => ( */}
        {/* <div key={place.pid} className="bg-white rounded-md ">
          {/* Map Model */}
          {/* {showMapModal === place.pid && (
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
          )} */}
          {/* <div className="relative border-l-2 border-purple-500"> */}

          {/* The Main Image */}
          {/* <div className="border-2 border-purple-400 w-full" /> */}
          {/* <div className="w-full">
            <img
              src={place.imageUrl}
              alt={place.place}
               className="w-full h-auto object-contain"
            />
          </div> */}

          {/* <div className="border-2 border-purple-400 w-full" /> */}

          {/* Change Images and Map Buttons */}
          {/* <div className="p-4 flex flex-col items-center gap-2">
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
          </div> */}
        {/* </div>
      ))} */}
      <div className="w-full flex flex-row justify-between items-center">
        <motion.div
          // key={index}
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* <div className="absolute -left-[1.05rem] top-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-md" /> */}
          <h3 className="text-3xl font-bold text-purple-700 m-0">
            {city} – {year}
          </h3>
          {/* <p className="text-gray-600 m-0">{place.description}</p> */}

          {/* Header of Each Image */}
        </motion.div>
        <div className="flex flex-row justify-between items-center  pl-2">
          <div className="flex justify-between items-center px-4 py-2">
            {/* <div className="flex items-center gap-x-2">
                  <img
                    src={place.imageUrl}
                    alt={place.place}
                    className="w-10 h-10 rounded-full border-2 border-purple-400"
                  />
                  <p>{creatorId}</p>
                </div> */}

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
        </div>
      </div>
      <div className="relative w-full h-60 my-4">
        {places[2] && (
          <img
            src={places[2].imageUrl}
            alt={places[2].place}
            className="absolute top-4 left-4 w-full h-full object-cover rounded-lg shadow-md opacity-60 z-10"
          />
        )}
        {places[1] && (
          <img
            src={places[1].imageUrl}
            alt={places[1].place}
            className="absolute top-2 left-2 w-full h-full object-cover rounded-lg shadow-md opacity-80 z-20"
          />
        )}
        {places[0] && (
          <img
            src={places[0].imageUrl}
            alt={places[0].place}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg z-30"
          />
        )}
      </div>
    </>
  );
}

export default PlaceItem;
