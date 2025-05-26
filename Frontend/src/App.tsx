import { BrowserRouter, Route, Routes } from "react-router";

import Navbar from "./components/Navbar/Navbar2";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
import AllUsers from "./components/Users/AllUsers";
import AllPlaces from "./components/Places/AllPlaces";
import UserProfile from "./components/ui/UserProfile";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="md:flex md:flex-row md:h-screen"> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/:userId/places" element={<AllPlaces />} />
        <Route path="/test" element={<UserProfile />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
