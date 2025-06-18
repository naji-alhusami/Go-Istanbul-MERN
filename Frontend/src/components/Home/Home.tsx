import LandingHome from "./LandingHome/LandingHome";
import AppSteps from "./AppSteps/AppSteps";
// import MostVisitedCities from "./MostVisitedCities/MostVisitedCities";
import CitiesCarousel from "./CitiesCarousel/CitiesCarousel";

const Home = () => {
  return (
    <div className="md:flex md:flex-col md:h-screen">
      <LandingHome />
      <AppSteps />
      {/* <MostVisitedCities /> */}
      <CitiesCarousel />
    </div>
  );
};

export default Home;
