import React, { useState, useEffect, useRef, useCallback } from "react";
import "./scss/normalize.css";

import "./scss/reset.css";
// import Form from "./components/Form";
import Loader from "./components/Loader";

import { loadFull } from "tsparticles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

// import BuyPage from "./Pages/Buy/BuyPage";
import AOS from "aos";
import "aos/dist/aos.css";
// import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route  path="/register" element={<Register />} />

          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
