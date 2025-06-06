import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { HomeSlidesData } from "./HomeSlidesData";
import "./StartingHome.css";

const SecondHome = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % HomeSlidesData.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key={currentSlideIndex}
      className="h-screen mb-32 flex items-center justify-center bg-cover bg-center bg-no-repeat z-10"
      style={{
        backgroundImage: `url(${HomeSlidesData[currentSlideIndex].background})`,
        animation: "fadeIn 5s",
      }}
    >
      <div className="flex flex-col mx-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="rounded-t-md px-5 pt-5 pb-1 bg-opacity-50 bg-black flex flex-col"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
            {HomeSlidesData[currentSlideIndex].heading}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="rounded-b-md px-5 pb-5 pt-1 bg-opacity-50 bg-black flex flex-col"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
            {HomeSlidesData[currentSlideIndex].subheading}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondHome;
