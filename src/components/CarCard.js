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
  const { car } = i;
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
      <div className="box-wrapper">
        <div className="box">
          <div className="first">

          </div>
          <div className="second">
            <div className="top">
              <div className="layer">

              </div>
              <span>Luxury</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
