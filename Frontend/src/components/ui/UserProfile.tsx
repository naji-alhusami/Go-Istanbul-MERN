import { useState } from "react";
import najiImg from "../../Images/naji.jpg";
import Button from "./Button";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<"images" | "favourites">("images");

  return (
    <div className="">
      <div className="flex flex-col m-8">
        <div className="flex flex-row">
          <div>
            <img
              src={najiImg}
              alt="userImage"
              className="rounded-full w-32 h-32 border-2 border-purple-500 overflow-hidden object-cover"
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="w-52 mx-4 flex flex-col items-start justify-center">
              <h1 className="text-2xl">User Name</h1>
              <div>
                <p>Description</p>
              </div>
              <div>
                <Button
                  type="button"
                  className="bg-gray-200 px-4 py-2 font-bold hover:bg-gray-300 cursor-pointer text-md rounded-md"
                >
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* <div className="md:w-full md:flex md:flex-row md:justify-between"> */}
            <div className="hidden md:w-full md:flex md:flex-row md:items-center md:justify-center md:gap-x-10">
              <div className="flex flex-row items-center justify-center gap-x-2">
                <h1 className="font-bold">30</h1>
                <p>Images</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-x-2">
                <h1 className="font-bold">30</h1>
                <p>Cities</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-x-2">
                <h1 className="font-bold">30</h1>
                <p>Favourites</p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="py-4">
          <Button
            type="button"
            className="cursor-pointer rounded-full w-16 h-16 bg-gray-200 border-2 border-gray-500"
          >
            Add
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between px-20 border-t border-b border-gray-300 py-4 md:hidden">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">30</h1>
          <p>Images</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">30</h1>
          <p>Cities</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">30</h1>
          <p>Favourites</p>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between border-b border-gray-300">
        <div
          className={`w-full flex flex-col items-center justify-center cursor-pointer${
            activeTab === "images" ? " border-t-1 font-bold" : ""
          }`}
          onClick={() => setActiveTab("images")}
        >
          <h1
            className={` ${
              activeTab === "images" ? "text-purple-600 py-4" : "text-gray-500"
            }`}
          >
            IMAGES
          </h1>
        </div>
        <div
          className={`w-full flex flex-col items-center justify-center cursor-pointer${
            activeTab === "favourites" ? " border-t-1 font-bold" : ""
          }`}
          onClick={() => setActiveTab("favourites")}
        >
          <h1
            className={` ${
              activeTab === "favourites"
                ? "text-purple-600 py-4"
                : "text-gray-500"
            }`}
          >
            FAVOURITES
          </h1>
        </div>
      </div>

      {/* Content Below Tabs */}
      <div className="p-4">
        {activeTab === "images" && <p>Showing images...</p>}
        {activeTab === "favourites" && <p>Showing favourites...</p>}
      </div>
    </div>
  );
};

export default UserProfile;
