import React, { useState } from "react";
import btn from "../assests/Fleet/Button.png";
import c1 from "../assests/Fleet/Car Photo1.png";
import icons from "../assests/Fleet/Icons.png";
import bi from "../assests/Fleet/Badge.png";
import Vector from "../assests/Fleet/Vector1.png";
import top from "../assests/Fleet/top-left.png";
import bottom from "../assests/Fleet/bottom-right.jpeg";
import s1 from "../assests/Fleet/span1.png";
import s2 from "../assests/Fleet/span2.png";
import s3 from "../assests/Fleet/span3.png";
import s4 from "../assests/Fleet/span4.png";
import f4 from "../assests/Fleet/i.11.png";
import f5 from "../assests/Fleet/i.22.png";
import "../scss/card.scss";
import { useSelector } from "react-redux";
import Navigate from "./Navigate";
const CarD = ({ display }) => {
  const { cars, loading } = useSelector((state) => state.Cars) || {};

  // State to hold the selected car's data
  const [selectedCar, setSelectedCar] = useState(null);

  // Function to handle when a car card is clicked
  const cardDetails = (car) => {
    setSelectedCar(car);
  }
  const closeModal = () => {
    setSelectedCar(null);
  }
  // Function to calculate price after discount
  const priceAfterDiscount = (price, discount) => {
    return price - (price * discount / 100);
  }
  return (
    <>
      {loading ? (
        <h2 style={{ color: "black" }}>Loading...</h2>
      ) : (
        <>
          {cars?.map((car) => {
            return (
              <>
                <div className="box" onClick={() => cardDetails(car)}>
                  <div
                    className="wrapper-main"

                  >
                    <div className="top-h">
                      <div className="start">
                        <span>خصم {car.discount}%</span>
                      </div>
                      <div className="center">{car.type}</div>
                      <div className="end">
                        <img src={Vector} alt="" className="vector" />
                      </div>
                    </div>
                    <div className="bottom-h">
                      <div className="content">
                        <div className="heading-1">
                          <h1>
                            {car.name}
                          </h1>
                        </div>
                        <div className="year">
                          <span>{car.year}</span>
                          <div className="price">
                            <span className="n1">ر.س.</span>
                            <span className="n2">{priceAfterDiscount(car?.pricePerDay, car?.discount)}</span>
                          </div>
                        </div>

                        <div className="layer">
                          <h2>
                            {true ? car?.pricePerDay : car?.pricePerHour}
                            <span className="l1">ر.س.*</span>
                          </h2>
                        </div>
                      </div>
                      <div className="wrap-img">
                        <img src={car?.image} alt="" className="main" />
                        <div className="icons">
                          <li>
                            <img src={s1} alt="" />
                            <span>{car?.maxPeople}</span>
                          </li>
                          <li>
                            <img src={s2} alt="" />
                            <span>{car?.bags}</span>
                          </li>
                          <li>
                            <img src={s3} alt="" />
                            <span>{car?.numDoors}</span>
                          </li>
                          <li>
                            <img src={s4} alt="" />
                            <span>{car?.engine}</span>
                          </li>
                        </div>
                        <div className="main-btn">
                          <span>احجز الآن</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="impression">
                    <div className="btn">
                      حفظ
                      <img src={f4} alt="" />
                    </div>
                    <div className="btn">
                      <img src={f5} alt="" /> اضافة للمفضله
                    </div>
                  </div>
                </div>

              </>
            );
          })}
          {selectedCar && <Navigate closeModal={closeModal} car={selectedCar} />}
        </>
      )}
    </>
  );
};

export default CarD;
