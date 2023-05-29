import React, { useEffect } from "react";
import "../../scss/profile.scss";
import first from "../../assests/Photo.png";

import { useDispatch } from "react-redux";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
// import Slide  from "../../components/Sidebar";
import Sidebar from "../../components/Sidebar";
import ProfileF from "../../components/ProfileF";
import { getUserDetails } from "../../Redux/actions/userActions";
const UserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails())
  }, [])

  return (
    <>
      <Navigation />
      <Banner text={"الملف الشخصي"} img={first} />
      <section id="user-profile">
        <div className="user-container">
          <ProfileF />
          <Sidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProfile;
