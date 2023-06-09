import React from "react";
import profile from "../assests/Profile/Profile1.png";
import { side } from "../assests/data";
import { Link } from "react-router-dom";
import p from "../assests/Profile/Profile 2.png";
import inpu from "../assests/booking/Tail icon.png";
import moment from 'moment';

import "../scss/bookingside.scss";
import img1 from "../assests/booking/Rectangle 23.png";
import { useSelector } from "react-redux";
const BookingSidebar = ({ selectedCar, addonsPrice, price, returnLocation, pickupLocation, pickupTime, returnTime, setConfirmBooking, confirmBooking, handleSubmit, BookingLoading, option, diffInHours, diffInMonths }) => {
  const calculateDiscountAmount = (price, discount) => {
    const discountAmount = (price * discount) / 100;
    return discountAmount;
  };
  const calculateTaxesAmount = (price) => {
    const taxesAmount = (price * 15) / 100;
    return taxesAmount;
  };
  const currency = useSelector((state) => state.Currency.baseCurrency) || {};
  return (
    <>
      <section id="sidebar">
        <div className="container">
          <div className="top">
            <img src={selectedCar?.image?.url} alt="" />
            <div className="detial">
              <span className="year">{selectedCar?.year}</span>
              <h2 className="title">{selectedCar?.name}</h2>
            </div>
          </div>
          <ul className="bottom">
            <li className="btns" style={{ opacity: "0" }}>
              <div className="submit-btn">
                <span>إضافة</span>
              </div>

              <div className="input-box">
                <p></p>
                <div className="input">
                  <input type="text" placeholder="CGER3E" />
                  <img src={inpu} alt="" />
                </div>
              </div>
            </li>
            <li className="box" style={{ marginTop: "-20px" }}>
              <span className="h">المجموع الأولي</span>
              <span className="n">{currency}&nbsp;{price} </span>
            </li>
            {/* <li className="box">
              <span className="h">الخصم</span>
              <span className="n">-300.00 ر.س.</span>
            </li> */}
            {/* <li className="box">
              <span className="h">كود الخصم</span>
              <span className="n">-0.00 ر.س.</span>
            </li> */}
            <li className="box">
              <span className="h">الإضافات</span>
              <span className="n">{currency}&nbsp;{addonsPrice}</span>
            </li>
            <li className="box">
              <span className="h">discount</span>
              <span className="n">-{currency}&nbsp;{calculateDiscountAmount(price, selectedCar?.discount)}</span>
            </li>
            <li className="box">
              <span className="h">الضريبة</span>
              <span className="n" style={{ color: "#00AFAA" }}>
                +{currency}&nbsp;{calculateTaxesAmount(price)} (15%)
              </span>
            </li>
            <li className="box">
              <span className="h" style={{ fontWeight: "700" }}>
                الإجمالي
              </span>
              <span className="n">{currency}&nbsp;{price + addonsPrice - calculateDiscountAmount(price, selectedCar?.discount) + calculateTaxesAmount(price)} </span>
            </li>
          </ul>
        </div>
      </section>
      {
        confirmBooking && <>
          <div className="booking__modal">
            <div className="grid">
              <div className="start">
                <div className="top">
                  <img src={selectedCar?.image?.url} alt="" />
                </div>
                {
                  pickupLocation.value && <div className="item">
                    <h2>Pickup Location</h2>
                    <p>{pickupLocation.value}</p>
                  </div>
                }

                {
                  returnLocation.value && <div className="item">
                    <h2>Return Location</h2>
                    <p>{returnLocation.value}</p>
                  </div>
                }
                {
                  option === "perHour" && <>
                    <div className="item">
                      <h2>Pickup Time</h2>
                      <p>{moment(pickupTime).format('dddd MMMM Do, h:mm a')}</p>
                    </div>


                    <div className="item">
                      <h2>Duration Time</h2>
                      <p>{diffInHours} Hours</p>
                    </div>

                  </>
                }
                {
                  option === "perMonth" && <>
                    <div className="item">
                      <h2>Pickup Time</h2>
                      <p>{moment(pickupTime).format('dddd MMMM Do, h:mm a')}</p>
                    </div>


                    <div className="item">
                      <h2>Duration Time</h2>
                      <p>{diffInMonths} Months</p>
                    </div>

                  </>
                }
                {
                  option === "perDay" && <>
                    <div className="item">
                      <h2>Pickup Time</h2>
                      <p>{moment(pickupTime).format('dddd MMMM Do, h:mm a')}</p>
                    </div>


                    <div className="item">
                      <h2>Return Time</h2>
                      <p>{moment(returnTime).format('dddd MMMM Do, h:mm a')}</p>
                    </div>

                  </>
                }


              </div>
              <div className="end">
                <div className="detial">
                  <span className="year">{selectedCar?.year}</span>
                  <h2 className="title">{selectedCar?.name}</h2>
                </div>
                <ul className="bottom">
                  <li className="btns" style={{ opacity: "0" }}>
                    <div className="submit-btn">
                      <span>إضافة</span>
                    </div>

                    <div className="input-box">
                      <p></p>
                      <div className="input">
                        <input type="text" placeholder="CGER3E" />
                        <img src={inpu} alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="box" style={{ marginTop: "-20px" }}>
                    <span className="h">المجموع الأولي</span>
                    <span className="n">{currency}&nbsp;{price} </span>
                  </li>

                  <li className="box">
                    <span className="h">الإضافات</span>
                    <span className="n">{currency}&nbsp;{addonsPrice}</span>
                  </li>
                  <li className="box">
                    <span className="h">discount</span>
                    <span className="n">-{currency}&nbsp;{calculateDiscountAmount(price, selectedCar?.discount)}</span>
                  </li>
                  <li className="box">
                    <span className="h">الضريبة</span>
                    <span className="n" style={{ color: "#00AFAA" }}>
                      +{currency}&nbsp;{calculateTaxesAmount(price)} (15%)
                    </span>
                  </li>
                  <li className="box">
                    <span className="h" style={{ fontWeight: "700" }}>
                      الإجمالي
                    </span>
                    <span className="n">{currency}&nbsp;{price + addonsPrice - calculateDiscountAmount(price, selectedCar?.discount) + calculateTaxesAmount(price)}</span>
                  </li>
                  <div className="btns">
                    <button className="cancel" onClick={() => setConfirmBooking(false)}>Cancel</button>
                    {
                      BookingLoading ? <button className="confirm">Confirming...</button> : <button className="confirm" onClick={handleSubmit}>Confirm</button>
                    }
                  </div>

                </ul>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default BookingSidebar;
