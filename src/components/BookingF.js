import React, { useState } from "react";
import "../scss/bookingf.scss";
import icon1 from "../assests/Profile/loader.png";
import icon2 from "../assests/Profile/ban.png";
import icon3 from "../assests/Profile/forward-fast.png";
import icon4 from "../assests/Profile/square-check.png";
import star from "../assests/Profile/Frame 254.png";
import car1 from "../assests/Profile/car1.png";
import car2 from "../assests/Profile/carr2.png";
import car3 from "../assests/Profile/car3.png";
import v1 from "../assests/Profile/Vector (1).png";
import v2 from "../assests/Profile/Vector.png";
import CarCard from "./CarCard";
import { useSelector } from "react-redux";
const BookingF = () => {
  const [activeButton, setActiveButton] = useState("الغيت");
  // const [activeButton, setActiveButton] = useState('جارية')
  const bookings = useSelector(state => state.Bookings.bookingsByStatus);
  const { upcoming, ongoing, completed, cancelled } = bookings || {};
  const data1 = [
    {
      para: "Lorem ipsum dolor sit amet, consectetuer ",
      h: "سيدان",
      star: star,
      img: car1,
      itext: "",
      li1: "هذا النص:",
      li2: "   هو مثال:",
      li3: "لنص يمكن أن:",
      li4: "يستبدل في:",
      li5: "نفس:",
      li6: "المساحة:",
      p1: "ومن هنا وجب على المصمم أن يضع",
      p2: "  نصوصا مؤقتة على التصميم.",
      p3: " يظهر للعميل الشكل كاملاًدور مولد النص.",
      p4: "      العربى أن يوفر على المصمم عناء البحث .      ",
      p5: "ومن هنا وجب على المصمم أن يضع",
      p6: "      عنه التصميم فيظهر بشكل لا يليق.      ",
      btn: "460 ر.س",
      vi1: v1,
      vi2: v2,
    },
    {
      para: "Lorem ipsum dolor sit amet, consectetuer ",
      h: "دفع رباعي",
      star: star,
      img: car2,
      itext: "",
      li1: "هذا النص:",
      li2: "   هو مثال:",
      li3: "لنص يمكن أن:",
      li4: "يستبدل في:",
      li5: "نفس:",
      li6: "المساحة:",
      p1: "ومن هنا وجب على المصمم أن يضع",
      p2: "  نصوصا مؤقتة على التصميم.",
      p3: " يظهر للعميل الشكل كاملاًدور مولد النص.",
      p4: "      العربى أن يوفر على المصمم عناء البحث .      ",
      p5: "ومن هنا وجب على المصمم أن يضع",
      p6: "      عنه التصميم فيظهر بشكل لا يليق.      ",
      btn: "460 ر.س",
      vi1: v1,
      vi2: v2,
    },
    {
      para: "Lorem ipsum dolor sit amet, consectetuer ",
      h: "نقل",
      star: star,
      img: car3,
      itext: "",
      li1: "هذا النص:",
      li2: "   هو مثال:",
      li3: "لنص يمكن أن:",
      li4: "يستبدل في:",
      li5: "نفس:",
      li6: "المساحة:",
      p1: "ومن هنا وجب على المصمم أن يضع",
      p2: "  نصوصا مؤقتة على التصميم.",
      p3: " يظهر للعميل الشكل كاملاًدور مولد النص.",
      p4: "      العربى أن يوفر على المصمم عناء البحث .      ",
      p5: "ومن هنا وجب على المصمم أن يضع",
      p6: "      عنه التصميم فيظهر بشكل لا يليق.      ",
      btn: "460 ر.س",
      vi1: v1,
      vi2: v2,
    },
  ];
  const btns = [
    { h: "جارية", icon: icon2 },
    { h: "أكتملت", icon: icon3 },
    { h: "قادمة", icon: icon4 },
    { h: "الغيت", icon: icon1 },
  ];

  return (
    <>
      <div className="container-main">
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
        <div className="product">
          {activeButton === "الغيت" && <>
            {
              ongoing &&

                ongoing.length > 0 ? ongoing.map((i) => {
                  return (
                    <>
                      <CarCard type={"ongoing"} i={i} text={""} />
                    </>
                  );
                })
                : <>
                  <div style={{ display: 'grid', placeItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2 style={{ color: 'black' }}>No Items Available</h2>
                  </div>
                </>
            }
          </>}
          {activeButton === "قادمة" && <>
            {
              completed &&

                completed.length > 0 ? completed.map((i) => {
                  return (
                    <>
                      <CarCard i={i} text={""} />
                    </>
                  );
                })
                : <>
                  <div style={{ display: 'grid', placeItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2 style={{ color: 'black' }}>No Items Available</h2>
                  </div>
                </>
            }
          </>}
          {activeButton === "أكتملت" && <>
            {
              upcoming &&

                upcoming.length > 0 ? upcoming.map((i) => {
                  return (
                    <>
                      <CarCard i={i} text={""} />
                    </>
                  );
                })
                : <>
                  <div style={{ display: 'grid', placeItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2 style={{ color: 'black' }}>No Items Available</h2>
                  </div>
                </>
            }
          </>}
          {activeButton === "جارية" && <>
            {
              cancelled &&

                cancelled.length > 0 ? cancelled.map((i) => {
                  return (
                    <>
                      <CarCard i={i} text={""} />
                    </>
                  );
                })
                : <>
                  <div style={{ display: 'grid', placeItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2 style={{ color: 'black' }}>No Items Available</h2>
                  </div>
                </>
            }
          </>}
        </div>
      </div >
    </>
  );
};

export default BookingF;
