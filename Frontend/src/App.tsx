import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative h-screen">
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
