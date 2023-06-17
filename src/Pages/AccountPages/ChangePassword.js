import React from "react";
import "../../scss/profile.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import first from "../../assests/Photo.png";
import icon from "../../assests/Icons/1.png";
import img1 from "../../assests/Icons/Tail icon q.png";
import img2 from "../../assests/Icons/Lead icon.png";
import img3 from "../../assests/Icons/Lead icon.svg";
import img4 from "../../assests/Icons/Vector (6).png";
import img5 from "../../assests/Icons/Tail icon.svg";
import PasswordF from "../../components/PasswordF";
import ProfileSidebar from "../../components/ProfileSidebar";
const ChangePassword = () => {
  return (
    <>
      <Navigation nav={[]}/>
      <Banner text={"كلمة المرور"} img={first
      } />
      <section id="user-profile">
        <div className="user-container">
       <PasswordF/>
       <ProfileSidebar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ChangePassword;
