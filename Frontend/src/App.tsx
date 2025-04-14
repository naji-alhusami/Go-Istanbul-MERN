import { BrowserRouter, Route, Routes } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative h-screen">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
