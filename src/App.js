import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AirPollution from "./components/AirPollution";
import Contact from "./components/Contact";
import FossilFuels from "./components/FossilFuels";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NotRecycled from "./components/NotRecycled";
import SupportUs from "./components/SupportUs";
import WaterPollution from "./components/WaterPollution";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/support" element={<SupportUs />}></Route>
        <Route path="/fossil-fuels" element={<FossilFuels />}></Route>
        <Route path="/air-pollution" element={<AirPollution />}></Route>
        <Route path="/water-pollution" element={<WaterPollution />}></Route>
        <Route path="/not-recycled" element={<NotRecycled />}></Route>
      </Routes>
    </div>
  );
}

export default App;
