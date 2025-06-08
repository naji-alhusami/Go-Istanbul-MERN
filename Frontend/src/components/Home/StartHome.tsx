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
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center md:items-start text-white w-full px-10 md:px-20 text-center">
        <h1 className="text-6xl font-bold leading-tight text-center md:text-start">
          Build Your Memories &<h1> Share The Best </h1>
          <span className="relative">
            <img
              src={brush}
              alt="brush texture"
              className="absolute top-1/2 left-0 w-full transform -translate-y-1/2"
            />
            <span className="relative z-10 text-white">Places</span>
          </span>
        </h1>

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
