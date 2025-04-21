// import { Link } from "react-router-dom";
// import Button from "../ui/Button";

import { useState } from "react";
import Button from "../ui/Button";
import { BsThreeDots } from "react-icons/bs";

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
  // id,
  title,
  // description,
  imageUrl,
  creatorId,
}: // address,
// coordinates,
PlaceData) {
  const [showImageMenu, setShowImageMenu] = useState<boolean>(false);

  function showImageMenuHandler() {
    setShowImageMenu(!showImageMenu);
  }

  return (
    <div className="bg-white">
      <div className="flex flex-row justify-between items-center px-4">
        <div className="py-2 flex flex-row justify-start items-center gap-x-2">
          <img
            src={imageUrl}
            alt={title}
            className="w-10 h-10 rounded-full object-cover border-2 border-purple-400"
          />
          <p className="text-center text-md">{creatorId}</p>
        </div>
        <div className="cursor-pointer" onClick={showImageMenuHandler}>
          <BsThreeDots />
        </div>
        {/* {showImageMenu && (
          <div className="italic font-bold text-lg bg-white absolute top-20 right-0 w-full sm:absolute sm:top-14 sm:right-13 sm:w-60 sm:rounded-md divide-y divide-gray-300 border border-gray-300 shadow-lg md:hidden">
            s
          </div>
        )} */}
      </div>
      <div className="border-2 border-purple-400 w-full"></div>
      <div
        className="z-20 w-screen h-[22rem] shadow-md md:w-[22rem] md:h-[22rem]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          // backgroundImage: `url(${profilePictureURLs[activeSlide]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="border-2 border-purple-400 w-full"></div>
      <div className="flex flex-col justify-between items-center px-4">
        <div className="flex flex-row justify-center items-center my-4 gap-x-1">
          <Button
            type="button"
            className="bg-red-400 hover:bg-red-600 py-0.5 rounded-md text-white"
            // onClick={handlePrevSlide}
          >
            Prev
          </Button>
          <Button
            type="button"
            className=" bg-red-400 hover:bg-red-600 px-1 py-0.5 rounded-md  text-white"
            // onClick={handleNextSlide}
          >
            Next
          </Button>
        </div>
        <div>
          <Button
            type="button"
            className="text-purple-900 border-2 border-purple-900 rounded-md"
          >
            Show on Map
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlaceItem;
