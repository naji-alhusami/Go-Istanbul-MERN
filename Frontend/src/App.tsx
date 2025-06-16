import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/Home/Home";
import AllUsers from "./components/Users/AllUsers";
import AllPlaces from "./components/Places/AllPlaces";
import UserProfile from "./components/ui/UserProfile";
import Auth from "./components/Auth/Auth";
import Cities from "./components/Cities/Cities";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/:userId/places" element={<AllPlaces />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
