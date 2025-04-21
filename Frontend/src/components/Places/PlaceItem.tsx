// import { Link } from "react-router-dom";
// import Button from "../ui/Button";

import { useState } from "react";
import Backdrop from "../ui/Backdrop";
import Button from "../ui/Button";
import { BsThreeDots } from "react-icons/bs";
import Modal from "../ui/Modal";

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
  // description,
  imageUrl,
  creatorId,
  address,
}: // coordinates
PlaceData) {
  const [showMapModal, setShowMapModal] = useState<boolean>(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const isMenuOpen = activeMenuId === id;

  function toggleMenuHandler() {
    setActiveMenuId((prevId) => (prevId === id ? null : id));
  }

  const showMapHandler = () => {
    setShowMapModal(!showMapModal);
  };

  // const closeMapHandler = () => {
  //   setShowMapModal(false);
  // };

  return (
    <>
      {isMenuOpen && <Backdrop onClick={toggleMenuHandler} />}
      {showMapModal && <Backdrop onClick={showMapHandler} />}
      {showMapModal && <Modal> {address}</Modal>}
      {/* <Modal
        show={showMapModal}
        onCancel={closeMapHandler}
        header={address}
        footer={
          <Button
            type="button"
            className="bg-amber-600"
            onClick={closeMapHandler}
          >
            Close
          </Button>
        }
      >
        <div>
          <h2>THE MAP</h2>
        </div>
      </Modal> */}
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
          <div className="cursor-pointer relative" onClick={toggleMenuHandler}>
            <BsThreeDots />
            {isMenuOpen && (
              <div className="absolute top-6 right-0 bg-white border border-gray-300 rounded-md shadow-md z-50 w-28">
                <Button
                  type="button"
                  className="block w-full cursor-pointer px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Edit
                </Button>
                <Button
                  type="button"
                  className="block w-full cursor-pointer px-4 py-2 hover:bg-gray-100 text-left text-red-500"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
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
              onClick={showMapHandler}
              className="text-purple-900 border-2 border-purple-900 rounded-md"
            >
              Show on Map
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceItem;
