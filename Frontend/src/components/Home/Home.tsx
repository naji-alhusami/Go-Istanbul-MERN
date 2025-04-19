import StartingHome from "./StartingHome";
import AllUsers from "../Users/AllUsers";

const Home = () => {
  return (
    <>
      <StartingHome />
      <div className="m-12">
        <h1 className="text-center lilita-one-regular text-3xl sm:text-4xl text-red-500 my-10">SHARED MOMENTS</h1>
        <AllUsers />
      </div>
    </>
  );
};

export default Home;
