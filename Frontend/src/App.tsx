import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
import AllUsers from "./components/Users/AllUsers";
import AllPlaces from "./components/Places/AllPlaces";
import UserProfile from "./components/ui/UserProfile";
import Auth from "./components/Auth/Auth";
// import Signup from "./components/Auth/Signup";
// import Login from "./components/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/:userId/places" element={<AllPlaces />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/auth" element={<Auth />} />
          {/* <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
