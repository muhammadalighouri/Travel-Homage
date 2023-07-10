import React, { useState, useEffect } from "react";
import t1 from "../assests/Profile/trash.png";
import t2 from "../assests/Profile/trash (1).png";
import i1 from "../assests/Profile/t1.png";
import i2 from "../assests/Profile/t2.png";
import "../scss/saved.scss";
import CreateAddressForm from "./CreateAddressForm";
import { useDispatch, useSelector } from "react-redux";
import { useStateManager } from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { getAllAddresses } from "../Redux/actions/addressActions";
import axios from "../api/axios";
import { toast } from "react-toastify";
import icon1 from "../assests/Profile/loader.png";
import icon2 from "../assests/Profile/ban.png";
import icon3 from "../assests/Profile/forward-fast.png";
import CreateAddress from "./CreateAddress";
const Saved = () => {
  const { addresses } = useSelector((state) => state.Address) || {};
  const [activeButton, setActiveButton] = useState("Create New");
  const [activeTab, setactiveTab] = useState("Running")
  const [edit, setEdit] = useState(null);
  const list = [
    {
      h: "Home",
      icon: t1,
      p: "14552 Lorem ipsum dolor sit amet, consectetuer adipiscing",
      btn1: "افتراضي",
      btn2: "تعديل العنوان",
      btni1: i1,
      btni2: i2,
    },
    {
      h: "Work",
      icon: t1,
      p: "14552 Lorem ipsum dolor sit amet, consectetuer adipiscing",
      btn1: "افتراضي",
      btn2: "تعديل العنوان",
      btni1: i1,
      btni2: i2,
    },
    {
      h: "Address 1Home",
      icon: t1,
      p: "14552 Lorem ipsum dolor sit amet, consectetuer adipiscing",
      btn1: "افتراضي",
      btn2: "تعديل العنوان",
      btni1: i1,
      btni2: i2,
    },
  ];
  const btns = [
    // { h: "جارية", icon: icon2 },
    { h: "Create New", icon: icon3 },
    // { h: "قادمة", icon: icon4 },
    { h: "Addresses", icon: icon1 },
  ];
  const dispatch = useDispatch();
  const deleteAddress = async (id) => {
    try {
      await axios.delete(`/api/v1/address/${id}`);
      toast.success('address deleted');
      dispatch(getAllAddresses());
    } catch (error) {
      // Handle deletion error
      toast.error('Failed to delete address');
    }
  };
  useEffect(() => {
    dispatch(getAllAddresses());
  }, []);

  return (
    <div>
      <ul className="top-btns">
        {btns.map((a) => {
          return (
            <>
              <li
                onClick={() => setActiveButton(a.h)}
                className={activeButton === a.h ? "active" : ""}
              >
                {a.h}
                <img src={a.icon} alt="" />
              </li>
            </>
          );
        })}
      </ul>
      <section id="saved">
        {
          activeButton === "Create New" ?
            <CreateAddress setActiveButton={setActiveButton} /> : <div className="container">
              <CreateAddressForm setEdit={setEdit} edit={edit} />
              {addresses?.map((a) => {
                return (
                  <>
                    <div className="saved-box">


                      <div className="box">
                        <div className="content">
                          <img style={{ cursor: 'pointer' }} onClick={() => deleteAddress(a._id)} src={t1} alt="" />
                          <h1>{a.title}</h1>
                        </div>
                        <p><div>City: {a.city}</div> <div>State: {a.state}</div></p>
                        <p><div>Street: {a.street}</div> <div>Zip: {a.postalCode}</div></p>

                      </div>
                    </div>
                  </>
                );
              })}
            </div>
        }

      </section>
    </div>
  );
};

export default Saved;
