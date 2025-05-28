import StartingHome from "./StartingHome";
import AllUsers from "../Users/AllUsers";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="md:flex md:flex-col md:h-screen">
      <div className="z-20">
        <Navbar />
      </div>
      <div>
        <StartingHome />
      </div>
      <div className="m-12">
        <h1 className="text-center lilita-one-regular text-3xl sm:text-4xl text-red-500 my-10">
          SHARED MOMENTS
        </h1>
        <AllUsers />
      </div>
    </div>
  );
};

export default Home;
