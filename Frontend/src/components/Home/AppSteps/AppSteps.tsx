import Header from "../../ui/Header";
import { AppStepsData } from "./AppStepsData";

import DownArrow from "../../../Images/DownArrow.png";
import RightArrow from "../../../Images/RightArrow.png";

const AppSteps = () => {
  return (
    <div className="my-52 z-50">
      {/* Header */}
      <Header
        subtitle="A New Way to Travel"
        title="Organize, Share, and Revisit Your Trips"
      />

      {/* App Steps */}
      <div className="mx-10 flex flex-col items-center justify-center lg:flex lg:flex-row">
        {AppStepsData.map(({ number, title, description }, index) => (
          <div
            key={number}
            className="mb-8 w-full px-4 flex flex-col items-center justify-center lg:flex lg:flex-row"
          >
            <div className="flex flex-col items-center justify-center text-center lg:text-left">
              <h3 className="text-2xl font-bold text-purple-800 text-center py-4">
                {number}. {title}
              </h3>
              <p className="text-gray-700 mt-2 poetsen-one-regular text-center">
                {description}
              </p>
            </div>
            {index < AppStepsData.length - 1 && (
              <div>
                <img
                  src={DownArrow}
                  alt="down arrow brush"
                  className="h-24 my-4 lg:hidden"
                />
                <img
                  src={RightArrow}
                  alt="right arrow brush"
                  className="hidden lg:flex h-24 my-4"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSteps;
