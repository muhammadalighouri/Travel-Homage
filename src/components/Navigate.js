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
  const info = useSelector(state => state.RentalInfo?.selectedOption);
  const navigate = useNavigate()
  const priceAfterDiscount = (price, discount) => {
    return price - (price * discount / 100);
  }
  return (
    <>
      <div className="navigate-wrapper">
        <section id="navigate">
          <div className="container">
            <div className="content">
              <div className="heading">
                <div className="cross" onClick={closeModal}>
                  <img src={cross} alt="" />
                </div>
                <span className="year">{car?.model}</span>

                <h1>
                  {car?.name}
                </h1>

              </div>
              <div className="para">
                <img src={star} alt="" />
                <p>{car?.description}</p>
              </div>
              <div className="icons">
                <li>
                  <img src={v1} alt="" />
                  <span>{car?.maxPeople}</span>
                </li>
                <li>
                  <img src={v2} alt="" />
                  <span>{car?.bags}</span>
                </li>
                <li>
                  <img src={v3} alt="" />
                  <span>{car?.numDoors}</span>
                </li>
                <li>
                  <img src={v4} alt="" />
                  <span>{car?.engine}</span>
                </li>
              </div>
              {/* <div className="list">
                <ul className="light">
                  <li>{car?.maxPeople}</li>
                  <li>{car?.bags}</li>
                  <li>{car?.numDoors}</li>
                  <li>{car?.engine}</li>

                </ul>
                <ul className="bold">
                  <li>Max Person</li>
                  <li>No Of Bags</li>
                  <li>No Of Doors</li>
                  <li>Engine </li>

                </ul>
              </div> */}
              <div className="price-btn" onClick={() => navigate(`/${car._id}/booking`)}>
                <div className="btn-1">
                  <span>أحجز الآن</span>
                </div>
                <div className="btn-2">
                  <p className="one">{info === "perDay" ? car?.pricePerDay : car?.pricePerHour}</p>
                  <p className="second"> {priceAfterDiscount(info === "perDay" ? car?.pricePerDay : car?.pricePerHour, car?.discount)} ر.س</p>
                </div>
              </div>
            </div>
            <div className="img">
              <img src={car?.image} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navigate;
