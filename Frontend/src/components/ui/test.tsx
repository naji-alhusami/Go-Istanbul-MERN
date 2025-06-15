// import { Link } from "react-router-dom";
// import Button from "../ui/Button";

// import { useState } from "react";
// import Backdrop from "../ui/Backdrop";
// import Button from "../ui/Button";
// import { BsThreeDots } from "react-icons/bs";
// import Modal from "../ui/Modal";
import { City, TRAVEL_DATA } from "../Lib/Types/CityType";
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

function DestinationCard({
  //   cid,
  // creatorId,
  city,
  //   year,
  // description,
  places,
}: City) {
  //   console.log(places);
  //   const [openImageMenu, setOpenImageMenu] = useState<string | null>(null);
  // const [showMapModal, setShowMapModal] = useState<string | null>(null);

  //   const toggleMenuHandler = () => {
  //     setOpenImageMenu((prevId) => (prevId === cid ? null : cid));
  //   };

  // const toggleModalHandler = (pid: string) => {
  //   setShowMapModal((prevPid) => (prevPid === pid ? null : pid));
  // };
  const uniqueUserCount = new Set(
    TRAVEL_DATA.filter(
      (entry) => entry.city.toLowerCase() === city.toLowerCase()
    ).map((entry) => entry.creatorId)
  ).size;
  console.log(uniqueUserCount);
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <motion.div
          // key={index}
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* <div className="absolute -left-[1.05rem] top-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-md" /> */}
          {/* <h3 className="text-3xl font-bold text-purple-700 m-0">{city}</h3> */}
          {/* <p className="text-gray-600 m-0">{place.description}</p> */}

          {/* Header of Each Image */}
        </motion.div>
        {/* <div className="flex flex-row justify-between items-center  pl-2"> */}
        {/* <div className="flex justify-between items-center px-4 py-2">
            <div
              className="relative cursor-pointer"
              // onClick={toggleMenuHandler}
            > */}
        {/* <div onClick={toggleMenuHandler} className="cursor-pointer">
                <BsThreeDots />
              </div> */}
        {/* {openImageMenu === cid && (
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
              )} */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="relative w-full h-60 my-4 rounded-lg overflow-hidden shadow-xl">
        {/* {places[2] && (
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
        )} */}
        {places[0] && (
          <img
            src={places[0].imageUrl}
            alt={places[0].place}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )}

        <div className="text-3xl font-bold text-purple-700 m-0 absolute top-0 left-0 w-full bg-white bg-opacity-60 px-3 py-1 z-10">
          {city}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 text-black text-xl font-bold px-3 py-1 z-10">
          Visited by {uniqueUserCount} user{uniqueUserCount !== 1 && "s"}
        </div>
      </div>
    </>
  );
}

export default DestinationCard;
