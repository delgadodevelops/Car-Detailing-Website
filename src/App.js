// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
// import Packages from "./components/pages/Packages";
// import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Home />
        <About />
        <Contact />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
