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
import CreateAddress from "./CreateAddress";
const Saved = () => {
  const { addresses } = useSelector((state) => state.Address) || {};
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
    <>

      <section id="saved">
        <CreateAddress />
        <div className="container">
          <CreateAddressForm setEdit={setEdit} edit={edit} />
          {addresses?.map((a) => {
            return (
              <>
                <div className="saved-box">
                  <div className="btns">

                    <div className="btn2">
                      <Link onClick={() => setEdit(a._id)}>
                        تعديل العنوان  <img src={i2} alt="" />{" "}
                      </Link>
                    </div>
                  </div>

                  <div className="box">
                    <div className="content">
                      <img style={{ cursor: 'pointer' }} onClick={() => deleteAddress(a._id)} src={t1} alt="" />
                      <h1>{a.title}</h1>
                    </div>
                    <p>City: {a.city}</p>
                    <p>State: {a.state}</p>
                    <p>Street: {a.street}</p>
                    <p>Zip: {a.zip}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Saved;
