import Navbar from "../Navbar/Navbar";
import home from "../../Images/home.jpg";
import torn from "../../Images/torn.png";
import brush from "../../Images/brush.png";
import Button from "../ui/Button";

const StartHome = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Background Image */}
      <img
        src={home}
        alt="Travel Hero"
        className="min-w-full h-screen object-cover mx-auto"
      />

      <img
        src={torn}
        className="absolute top-[80vh] sm:top-[70vh] md:top-[60vh] lg:top-[55vh] xl:top-[42vh] w-full z-30"
        alt="torn edge"
      />

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/30 to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center md:items-start text-white w-full px-8 lg:px-21   text-center">
        <div className="text-6xl font-bold leading-tight text-center md:text-start">
          <h1 className="hidden sm:flex sm:text-6xl sm:font-bold">
            Build Your Memories &
          </h1>
          <h1> Share The Best </h1>
          <span className="relative inline-block mt-4">
            <img
              src={brush}
              alt="brush texture"
              className="absolute top-12 left-0 w-full h-22 md:h-24 lg:h-28 xl:h-32 transform -translate-y-1/2"
            />
            <span className="relative z-10 text-white text-6xl sm:text-7xl">
              Places
            </span>
          </span>
        </div>

        <p className="mt-4 text-lg font-bold">
          Help Others Discover The Best Places In Modern Cities
        </p>

        <Button
          type="button"
          className="mt-6 w-1/2 lg:w-100 bg-white text-black px-6 py-3 rounded-full font-semibold"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default StartHome;
