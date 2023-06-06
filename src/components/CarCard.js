import React from "react";
import s1 from "../assests/Fleet/span1.png";
import green from "../assests/green.png";
import s2 from "../assests/Fleet/span2.png";
import s3 from "../assests/Fleet/span3.png";
import s4 from "../assests/Fleet/span4.png";
import f4 from "../assests/Fleet/i.11.png";
import f5 from "../assests/Fleet/i.22.png";
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration'; // you need to import the plugin
dayjs.extend(duration); // make sure to extend dayjs with the plugin
const CarCard = ({ i, text, type }) => {
  const { car } = i
  const timeLeft = (startDate) => {
    let now = dayjs();
    let start = dayjs(startDate);
    let diff = start.diff(now); // difference in milliseconds
    if (diff < 0) {
      return 'Start'; // if the start date has already passed, return 'Start'
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

            {
              type === "ongoing" ? <div className="btn">
                <a href="#">{timeLeft(i.endDate)}</a>
              </div> : <div className="btn">
                <a href="#">{timeLeft(i.startDate)}</a>
              </div>
            }
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
