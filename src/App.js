import { AnimatePresence } from "framer-motion";
import React, { Fragment, useEffect, useState, lazy, Suspense } from "react";
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
import Preloader from "./components/Preloader";

// Lazy load pages
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const PaintCorrection = lazy(() => import("./components/pages/PaintCorrection"));
const Ceramic = lazy(() => import("./components/pages/Ceramic"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Testimonials = lazy(() => import("./components/pages/Testimonials"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(() => {
      handleComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Fragment>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <Navbar />
      <div className="App">
        <Suspense fallback={<Preloader />}>
          {/* <ErrorBoundary> */}
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/paint-correction" element={<PaintCorrection />} />
              <Route path="/ceramic" element={<Ceramic />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          {/* </ErrorBoundary> */}
        </Suspense>
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
