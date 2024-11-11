import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import { Route, Routes } from "react-router-dom";
import M1S from "./pages/M1S";
import M2S from "./pages/M2S";
import M3S from "./pages/M3S";
import M4S from "./pages/M4S";
import Suggestion from "./pages/Suggestion";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/m1s" element={<M1S />} />
        <Route path="/m2s" element={<M2S />} />
        <Route path="/m3s" element={<M3S />} />
        <Route path="/m4s" element={<M4S />} />
        <Route path="/suggestions" element={<Suggestion />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
