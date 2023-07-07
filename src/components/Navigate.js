import React from "react";
import star from "../assests/Fleet/Frame 199.png";
import v1 from "../assests/Fleet/Vector (3).png";
import v2 from "../assests/Fleet/Vector (4).png";
import v3 from "../assests/Fleet/Vector (5).png";
import v4 from "../assests/Fleet/Group (2).png";
import img1 from "../assests/car.png";
import "../scss/navigate.scss";
import cross from "../assests/Fleet/Xmark.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navigate = ({ car, closeModal }) => {
  const info = useSelector((state) => state.RentalInfo?.selectedOption);
  const navigate = useNavigate();
  const priceAfterDiscount = (price, discount) => {
    return price - (price * discount) / 100;
  };
  const currency = useSelector((state) => state.Currency.baseCurrency) || {};
  return (
    <>
      <div className="navigate-wrapper">
        <section id="navigate">
          <div className="container">
            <div className="cross" onClick={closeModal}>
              <img src={cross} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                <span className="year">{car?.model}</span>

                <h1>{car?.name}</h1>
              </div>

              <div className="icons-wrapper">
                <div className="para">
                  <span>Car Detail</span>
                </div>
                <div className="icons">
                  <li>
                    <img src={v1} alt="" />
                    <span>{car?.seats}</span>
                  </li>
                  <li>
                    <img src={v2} alt="" />
                    <span>{car?.bags}</span>
                  </li>
                  <li>
                    <img src={v3} alt="" />
                    <span>{car?.doors}</span>
                  </li>
                  <li>
                    <img src={v4} alt="" />
                    <span>{car?.engine}</span>
                  </li>
                </div>
              </div>

              <div
                className="price-btn"
                onClick={() => {
                  navigate(`/${car._id}/booking`);
                  window.scroll(0, 0);
                }}
              >
                <div className="btn-top">
                  <div className="btn">
                    <p className="one">
                      {info === "perDay"
                        ? car?.pricePerDay
                        : car?.pricePerHour}
                    </p>
                    <p className="second">
                      {" "}
                      {priceAfterDiscount(
                        info === "perDay"
                          ? car?.pricePerDay
                          : car?.pricePerHour,
                        car?.discount
                      )}{" "}
                      {currency}
                    </p>
                  </div>
                </div>

                <div className="btn-bottom">
                  <div className="btn-2">
                    <span>أحجز الآن</span>
                  </div>
                  <div className="btn-1">
                    {info === "perDay" ? (
                      <span>
                        {priceAfterDiscount(
                          car?.pricePerDay,

                          car?.discount
                        )}{" "}
                        <b>{currency}/Day</b>
                      </span>
                    ) : (
                      <span>
                        {priceAfterDiscount(
                          car?.pricePerHour,

                          car?.discount
                        )}{" "}
                        <b>{currency}/Hour</b>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="img">
              <img src={car?.image?.url} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navigate;
