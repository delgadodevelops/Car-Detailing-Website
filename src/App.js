// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Ceramic from "./components/pages/Ceramic";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import PaintCorrection from "./components/pages/PaintCorrection";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/paint-correction" element={<PaintCorrection />} />
          <Route path="/ceramic" element={<Ceramic />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
