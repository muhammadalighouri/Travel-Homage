import React, { useState, useEffect, useRef, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/normalize.css";
import "./scss/reset.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Pages/HomePage";
import Loader from "./components/Loader";
import Register from "./components/Register";
import EmailConfirmation from "./Pages/ConfirmEmail";
import LoginIn from "./components/LoginIn";
import UserProfile from "./Pages/AccountPages/UserProfile";
import Doucment from "./Pages/AccountPages/Doucment";
import ChangePassword from "./Pages/AccountPages/ChangePassword";
import MemberShip from "./Pages/AccountPages/Membership";
import SavedAdress from "./Pages/AccountPages/SavedAdress";
import RideRatings from "./Pages/AccountPages/RideRatings";
import Customer from "./Pages/AccountPages/Customer";
import RoadSide from "./Pages/AccountPages/RoadSide";
import Fleet from "./Pages/Fleet";
import BookingHistory from "./Pages/AccountPages/BookingHistory";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import FaqPage from "./Pages/FaqPage";
import Booking from "./Pages/Booking";
import VerifyEmail from "./Pages/VerifyEmail";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import PrivacyPage from "./Pages/PrivacyPage";
import MediaPage from "./Pages/MediaPage";
import TermsPage from "./Pages/TermsPage";
import CookiesPage from "./Pages/CookiesPage";
import CookieModal from "./components/CookieModal";

function App() {
  const { loading } = useSelector((state) => state.loading);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      <CookieModal />
      {loading && <Loader />}

      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/confirm_email/:token" element={<EmailConfirmation />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/login" element={<LoginIn />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/doucment" element={<Doucment />} />
          <Route path="/membership" element={<MemberShip />} />
          <Route path="/saved-adress" element={<SavedAdress />} />
          <Route path="/saved-adress/:editId" element={<SavedAdress />} />
          <Route path="/ride-ratings" element={<RideRatings />} />
          <Route path="/user-customer" element={<Customer />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/change-Password" element={<ChangePassword />} />
          <Route path="/roadside-assistance" element={<RoadSide />} />
          <Route path="/booking" element={<RoadSide />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/:car/booking" element={<Booking />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
        {/* <Footer /> */}
      </>
    </div>
  );
}

export default App;
