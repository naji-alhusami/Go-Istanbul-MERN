import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../../ui/Header";
import Button from "../../ui/Button";
import { CitiesCarouselData } from "./CitiesCarouselData";
import "./CitiesCarousel.css";

const CitiesCarousel = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % CitiesCarouselData.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      {/* Header */}
      <div className="h-full flex flex-col justify-start items-center lg:px-8 xl:px-32">
        <Header
          subtitle="Around the World"
          title="Spotlight on Global Destinations"
          withBrush={true}
        />
        <p className="px-10 font-bold text-center text-gray-500 max-w-2xl text-lg leading-relaxed lg:text-xl">
          From the romantic streets of Paris to the vibrant rhythm of Rio de
          Janeiro, explore a curated selection of iconic cities that shift every
          few seconds. Experience the essence of each destination through
          stunning visuals and inspiring insights.
        </p>
        <Button
          onClick={() => {
            navigate("/places");
          }}
          type="button"
          className="my-8 bg-purple-800 text-white rounded-full px-10 py-4 font-bold cursor-pointer"
        >
          Search All Places
        </Button>
      </div>

      {/* Cities Carousel*/}
      <div
        key={currentSlideIndex}
        className="w-full h-[36rem] mb-32 flex items-center justify-center bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: `url(${CitiesCarouselData[currentSlideIndex].background})`,
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
              {CitiesCarouselData[currentSlideIndex].heading}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="rounded-b-md px-5 pb-5 pt-1 bg-opacity-50 bg-black flex flex-col"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
              {CitiesCarouselData[currentSlideIndex].subheading}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CitiesCarousel;
