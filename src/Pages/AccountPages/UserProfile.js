import React, { useEffect, useState } from "react";
import "../../scss/profile.scss";
import first from "../../assests/Photo.png";
import { useDispatch } from "react-redux";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ProfileF from "../../components/ProfileF";
import { getUserDetails } from "../../Redux/actions/userActions";
import ProfileSidebar from "../../components/ProfileSidebar";
import p from "../../assests/Profile/Profile 2.png";
const UserProfile = () => {
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(p);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);
  const handleDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <Navigation nav={[]} />

      <Banner text={"الملف الشخصي"} img={first} />
      <section id="user-profile">
        <div className="user-container">
          <ProfileF
            setAvatar={setAvatar}
            avatar={avatar}
            setAvatarPreview={setAvatarPreview}
            avatarPreview={avatarPreview}
            handleDataChange={handleDataChange}
          />
          <ProfileSidebar
            setAvatar={setAvatar}
            setAvatarPreview={setAvatarPreview}
            avatar={avatar}
            handleDataChange={handleDataChange}
            avatarPreview={avatarPreview}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProfile;
