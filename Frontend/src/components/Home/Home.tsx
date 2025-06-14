// import SecondHome from "./SecondHome";
// import AllUsers from "../Users/AllUsers";
// import Navbar from "../Navbar/Navbar";
import StartHome from "./StartHome";
import AppSteps from "./AppSteps";
import TopDestinations from "./TopDestinations";

const Home = () => {
  return (
    <div className="md:flex md:flex-col md:h-screen">
      {/* <div className="z-20">
        <Navbar />
      </div> */}
      <div>
        <StartHome />
      </div>
      <AppSteps />
      {/* <SecondHome /> */}
      <TopDestinations />
      {/* <AllUsers /> */}
    </div>
  );
};

export default Home;
