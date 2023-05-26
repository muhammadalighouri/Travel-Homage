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
import Footer from "./components/Footer";
import Register from "./components/Register";
import EmailConfirmation from "./Pages/ConfirmEmail";
import LoginIn from "./components/LoginIn";
import UserProfile from "./Pages/AccountPages/UserProfile";
import Booking from "./Pages/AccountPages/Booking";
import Doucment from "./Pages/AccountPages/Doucment";
import ChangePassword from "./Pages/AccountPages/ChangePassword";
import MemberShip from "./Pages/AccountPages/Membership";
import SavedAdress from "./Pages/AccountPages/SavedAdress";
import RideRatings from "./Pages/AccountPages/RideRatings";
import Customer from "./Pages/AccountPages/Customer";
import RoadSide from "./Pages/AccountPages/RoadSide";
import Fleet from "./Pages/AccountPages/Fleet";

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
            <Route
              path="/confirm_email/:token"
              element={<EmailConfirmation />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginIn />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/doucment" element={<Doucment />} />
            <Route path="/membership" element={<MemberShip />} />
            <Route path="/saved-adress" element={<SavedAdress />} />
            <Route path="/ride-ratings" element={<RideRatings />} />
            <Route path="/user-customer" element={<Customer />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/change-Password" element={<ChangePassword />} />
            <Route path="/roadside-assistance" element={<RoadSide />} />
          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
