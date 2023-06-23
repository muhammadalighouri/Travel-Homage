import React from "react";
import s1 from "../assests/Fleet/span1.png";
import green from "../assests/green.png";
import s2 from "../assests/Fleet/span2.png";
import s3 from "../assests/Fleet/span3.png";
import s4 from "../assests/Fleet/span4.png";
import f4 from "../assests/Fleet/i.11.png";
import f5 from "../assests/Fleet/i.22.png";
import { AiFillHeart } from 'react-icons/ai'
import bac from '../assests/top-left.png'
import dayjs from "dayjs";
import icon from '../assests/upper.png'
import suv from "../assests/cars/SUV (2).png";
import sedan from "../assests/cars/sedan (2).png";
import luxury from "../assests/cars/luxury (2).png";
import family from "../assests/cars/faamily.png";
import economy from "../assests/cars/economy.png";
import "../scss/carcard.scss";
import car1 from "../assests/car.png";
import duration from "dayjs/plugin/duration"; // you need to import the plugin
dayjs.extend(duration); // make sure to extend dayjs with the plugin
const CarCard = ({ i, text, type, handleRowClick }) => {
  const { startDate, endDate } = i;
  const timeLeft = (startDate) => {
    let now = dayjs();
    let start = dayjs(startDate);
    let diff = start.diff(now); // difference in milliseconds
    if (diff < 0) {
      return "Start"; // if the start date has already passed, return 'Start'
    } else {
      let duration = dayjs.duration(diff); // convert difference to a duration
      let days = duration.asDays(); // get the duration in days
      let hours = duration.asHours(); // get the duration in hours
      let minutes = duration.asMinutes(); // get the duration in minutes

      if (days >= 1) {
        return `${Math.floor(days)} days left`; // if more than a day, show in days
      } else if (hours >= 1) {
        return `${Math.floor(hours)} hours left`; // if less than a day but more than an hour, show in hours
      } else {
        return `${Math.floor(minutes)} minutes left`; // if less than an hour, show in minutes
      }
    }
  };
  const timeDuration = () => {
    let start = dayjs(startDate);
    let end = dayjs(endDate);
    let diff = end.diff(start); // difference in milliseconds

    let duration = dayjs.duration(diff); // convert difference to a duration
    let days = duration.asDays(); // get the duration in days

    return `${Math.floor(days)} days`;
  };
  const getCategoryIcon = (cat) => {
    if (cat === "SUV") {
      return suv;
    }
    if (cat === "Luxury") {
      return luxury;
    }
    if (cat === "Sedan") {
      return sedan;
    }
    if (cat === "Economy") {
      return economy;
    }
    if (cat === "Family") {
      return family;
    }
  };
  return (
    <>
      <div className="box-wrapper" onClick={() => handleRowClick(i)}>
        <div className="box">
          <div className="first">
            <div className="heading">
              <h1>{i.car?.name}</h1>
              <span>
                {i.car?.year}
              </span>
              <h2 style={{ color: 'black', fontSize: '18px', fontWeight: '700' }}>{timeDuration()}</h2>
              <h2 style={{ color: 'black', fontSize: '18px', fontWeight: '700' }}>ر.س.{i?.totalPrice}</h2>

            </div>
          </div>
          <div className="second">
            <div className="top">
              <div className="layer">
                <img src={getCategoryIcon(i.car?.category)} alt="" />
              </div>
              <span>{i.car?.category}</span>
            </div>
            <div className="img">
              <img src={i?.car?.image?.url} alt="" />
            </div>
            <p style={{ color: 'black' }}>status: {i?.rideStatus}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
