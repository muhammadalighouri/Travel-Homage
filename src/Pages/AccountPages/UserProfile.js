import React, { useEffect } from "react";
import "../../scss/profile.scss";
import first from "../../assests/Photo.png";
import { useDispatch } from "react-redux";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ProfileF from "../../components/ProfileF";
import { getUserDetails } from "../../Redux/actions/userActions";
import ProfileSidebar from "../../components/ProfileSidebar";
const UserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails())
  }, [])

  return (
    <>
      <Navigation nav={[]}/>

      <Banner text={"الملف الشخصي"} img={first} />
      <section id="user-profile">
        <div className="user-container">
          <ProfileF />
          <ProfileSidebar />

        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProfile;
