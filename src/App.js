import { AnimatePresence } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Ceramic from "./components/pages/Ceramic";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import PaintCorrection from "./components/pages/PaintCorrection";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the preloader on route changes
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Show preloader on location change
    handleStart();
    const timer = setTimeout(() => {
      handleComplete();
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Fragment>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <Navbar />
      <div className="App">
        <ErrorBoundary>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/paint-correction" element={<PaintCorrection />} />
            <Route path="/ceramic" element={<Ceramic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </ErrorBoundary>
      </div>
      <Footer />
    </Fragment>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
