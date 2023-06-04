import React from "react";
import s1 from "../assests/Fleet/span1.png";
import green from "../assests/green.png";
import s2 from "../assests/Fleet/span2.png";
import s3 from "../assests/Fleet/span3.png";
import s4 from "../assests/Fleet/span4.png";
import f4 from "../assests/Fleet/i.11.png";
import f5 from "../assests/Fleet/i.22.png";
const CarCard = ({ i, text }) => {
  const { car } = i
  return (
    <>
      <div className="box">
        <div className="content">
          <div className="heading">
            <div className="main">
              <h1>
                <img src={i.star} alt="" />
                {car?.name}
              </h1>
              <p>{car?.description}</p>
            </div>
            <div className="h-btn">
              <a href="#"> ر.س.{i.totalPrice} </a>
            </div>
          </div>
          <div className="list">
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
          </div>
        </div>
        <div className="img-box">
          <div className="img-wrapper">
            <img src={i?.car?.mainImages[0]} alt="" />
            <div className="btn">
              <a href="#">{text}</a>
            </div>
            <div className="wrap-vector">
              <div className="vector">
                <img src={i.vi1} alt="" />
                <img src={i.vi2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
