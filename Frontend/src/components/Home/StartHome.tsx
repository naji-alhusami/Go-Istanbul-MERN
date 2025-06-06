import home from "../../Images/Travel Plans Blog 2.webp"

const StartHome = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={home}
        alt="Travel Hero"
        className="object-cover z-10"
      />

      {/* Left Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent z-10"></div> */}

      {/* Content */}
      {/* <div className="relative z-20 h-full flex flex-col justify-center px-10 text-white max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight">
          Plan your next trip like a pro <br />
          with{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-pink-600 -skew-y-3 -z-10"></span>
            style
          </span>
        </h1>
        <p className="mt-4 text-lg">
          Build your travel memories and share the best spots with the world.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold">
          Get Started
        </button>
      </div> */}

      {/* Optional: Torn Bottom Edge
    <img
      src="/torn-edge.png"
      className="absolute bottom-0 w-full z-30"
      alt="torn edge"
    /> */}
    </div>
  );
};

export default StartHome;
