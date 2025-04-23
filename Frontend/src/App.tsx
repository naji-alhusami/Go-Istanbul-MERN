import { BrowserRouter, Route, Routes } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
import AllUsers from "./components/Users/AllUsers";
import AllPlaces from "./components/Places/AllPlaces";
import Timeline from "./components/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/:userId/places" element={<AllPlaces />} />
        <Route path="/test" element={<Timeline />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
