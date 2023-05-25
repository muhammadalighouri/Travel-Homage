import React from "react";
import "../../scss/profile.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
// import Slide  from "../../components/Sidebar";
import Sidebar from "../../components/Sidebar";
import ProfileF from "../../components/ProfileF";
const UserProfile = () => {
  return (
    <>
      <Navigation />
      <Banner text={"الملف الشخصي"} />
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
