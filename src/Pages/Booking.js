import React, { useState } from "react";
import BookingSidebar from "../components/BookingSidebar";
import "../scss/booking-main.scss";
import w1 from "../assests/booking/w.1.png";
import w2 from "../assests/booking/w.2.png";
import w3 from "../assests/booking/w.3.png";

import b1 from "../assests/booking/b.1.png";
import b2 from "../assests/booking/b.2.png";
import b3 from "../assests/booking/b.3.png";
import arrow from "../assests/booking/arrow.png";
import i1 from "../assests/booking/bb1.png";
import i2 from "../assests/booking/bb2.png";
import i3 from "../assests/booking/bb3.png";
import i4 from "../assests/booking/bb4.png";
import sort from "../assests/booking/sort.png";
import plus from "../assests/booking/plus.png";
import update from "../assests/Profile/Vector.png";
import tick from "../assests/booking/tick.png";
import key from "../assests/Profile/key.png";
import eye from "../assests/Profile/eye.png";
import a from "../assests/booking/Lead icon.png";
import f1 from "../assests/booking/Frame 163.png";
import f2 from "../assests/booking/Frame 164.png";
import f3 from "../assests/booking/Frame 165.png";
import f4 from "../assests/booking/Frame 166.png";
import f5 from "../assests/booking/Visa.1.png";
import f6 from "../assests/booking/Mastercard.2.png";
import f7 from "../assests/booking/Braintree.3.png";
import f8 from "../assests/booking/PayPal.4.png";
import f9 from "../assests/booking/GooglePay.5.png";
import f10 from "../assests/booking/ApplePay.6.png";
const Booking = () => {
  const [activeButton, setActiveButton] = useState("btn3");

  return (
    <>
      <section id="booking">
        <div className="container-main">
          <BookingSidebar />
          <div className="container">
            <div className="grid__one">
              <div className="btns">
                <button
                  className={activeButton === "btn3" ? "active" : ""}
                  onClick={() => setActiveButton("btn3")}
                >
                  <span>
                    {" "}
                    {activeButton === "btn3" ? <img src={arrow} alt="" /> : ""}
                  </span>
                  الدفع
                  {activeButton === "btn3" ? (
                    <img src={b3} alt="" />
                  ) : (
                    <img src={w3} alt="" />
                  )}
                </button>
                <button
                  className={activeButton === "btn2" ? "active" : ""}
                  onClick={() => setActiveButton("btn2")}
                >
                  <span>
                    {activeButton === "btn2" ? <img src={arrow} alt="" /> : ""}
                  </span>
                  الحساب
                  {activeButton === "btn2" ? (
                    <img src={b2} alt="" />
                  ) : (
                    <img src={w2} alt="" />
                  )}
                </button>
                <button
                  className={activeButton === "btn1" ? "active" : ""}
                  onClick={() => setActiveButton("btn1")}
                >
                  <span>
                    {activeButton === "btn1" ? <img src={arrow} alt="" /> : ""}
                  </span>
                  الحجز
                  {activeButton === "btn1" ? (
                    <img src={b1} alt="" />
                  ) : (
                    <img src={w1} alt="" />
                  )}
                </button>
              </div>
            </div>

            <div className="tabs-content">
              {activeButton === "btn1" && (
                <div className="grid__two">
                  <div className="booking-address">
                    <div className="input-box-wrap">
                      <div className="plus">
                        <img src={plus} alt="" />
                        إضافة عنوان
                      </div>
                      <div className="input-box">
                        <p>عنوان الاتسلام</p>
                        <div className="input">
                          <img src={i1} alt="" />
                          <input
                            type="text"
                            placeholder="اختر من سجل العناوين"
                          />
                          <img src={sort} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div></div>
                      <div className="input-box">
                        <p>سطر العنوان 1</p>
                        <div className="input">
                          <input type="text" placeholder="سطر العنوان 1" />
                          <img src={i2} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div></div>

                      <div className="input-box">
                        <p>سطر العنوان 2</p>
                        <div className="input">
                          <input type="text" placeholder="سطر العنوان 2" />
                          <img src={i2} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div></div>

                      <div className="two-input-boxes">
                        <div className="input-box">
                          <p>المدينة</p>
                          <div className="input">
                            <input type="text" placeholder="مدينتك" />
                            <img src={i3} alt="" />
                          </div>
                        </div>
                        <div className="input-box">
                          <p>المحافظة</p>
                          <div className="input">
                            <input type="text" placeholder="محافظتك" />
                            <img src={i3} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div className="plus">
                        <img src={plus} alt="" />
                        إضافة عنوان
                      </div>
                      <div className="input-box">
                        <p>عنوان الاتسلام</p>
                        <div className="input">
                          <img src={i1} alt="" />
                          <input
                            type="text"
                            placeholder="اختر من سجل العناوين"
                          />
                          <img src={sort} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="input-box-wrap">
                      <div className="day">2 يوم</div>

                      <div className="two-input-boxes">
                        <div className="input-box">
                          <p>تاريخ ووقت الإستلام</p>
                          <div className="input">
                            <input type="text" placeholder="14 مايو 2023" />
                            <img src={i4} alt="" />
                          </div>
                        </div>
                        <div className="input-box">
                          <p>تاريخ ووقت العودة</p>
                          <div className="input">
                            <input type="text" placeholder="14 مايو 2023" />
                            <img src={i4} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="offers">
                      <h1>الإضافات والعروض</h1>
                      <div className="input-check-wrap">
                        <div></div>
                        <div className="input-check">
                          <span>+10 ر.س. </span>
                          <div className="input">
                            <label htmlFor="">مقعد لطفل</label>
                            <input type="checkbox" />
                          </div>
                        </div>
                      </div>
                      <div className="input-check-wrap">
                        <div></div>
                        <div className="input-check">
                          <span>+15 ر.س. </span>

                          <div className="input">
                            <label htmlFor="">تأمين شامل</label>
                            <input type="checkbox" />
                          </div>
                        </div>
                      </div>
                      <div className="input-check-wrap">
                        <div></div>

                        <div className="input-check">
                          <span>+40 ر.س. </span>
                          <div className="input">
                            <label htmlFor="">كيلومتر مفتوح</label>
                            <input type="checkbox" name="" id="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="select-btns">
                      <div className="btn1">التالى</div>
                      <div className="btn2">إلغاء</div>
                    </div>
                  </div>
                </div>
              )}

              {activeButton === "btn2" && (
                <div className="grid__three">
                  <div className="booking-address">
                    <div className="input-box-wrap">
                      <div className="tick">
                        <span
                          style={{ background: "#ffcd00", color: "#373A36" }}
                        >
                          {" "}
                          تأكيد
                        </span>
                      </div>
                      <div className="input-box">
                        <p>رخصة القيادة</p>
                        <div className="input">
                          <img src={i4} alt="" />
                          <input type="text" placeholder="رخصة القيادة" />
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div className="tick">
                        <span>
                          {" "}
                          <img src={tick} alt="" />
                          تم التأكيد{" "}
                        </span>
                      </div>
                      <div className="input-box">
                        <p>الرقم القومي أو رقم جواز السفر</p>
                        <div className="input">
                          <input
                            type="text"
                            placeholder="الرقم القومي أو رقم جواز السفر"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div className="tick">
                        <span>
                          {" "}
                          <img src={tick} alt="" />
                          تم التأكيد{" "}
                        </span>
                      </div>
                      <div className="input-box">
                        <p>رقم الهاتف</p>
                        <div className="input">
                          <input type="text" placeholder="بريدك الإلكتروني" />
                          <img src={a} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div className="tick">
                        <span>
                          {" "}
                          <img src={tick} alt="" />
                          تم التأكيد{" "}
                        </span>
                      </div>
                      <div className="input-box">
                        <p>البريد الإلكتروني</p>
                        <div className="input">
                          <input type="text" placeholder="بريدك الإلكتروني" />
                        </div>
                      </div>
                    </div>
                    <div className="select-btns">
                      <div className="btn1">التالى</div>
                      <div className="btn2">إلغاء</div>
                    </div>
                  </div>
                </div>
              )}

              {activeButton === "btn3" && (
                <div className="grid__four">
                  <div className="booking-address">
                    <div className="choose-1">
                      <h1>اختر نقاط الولاء</h1>
                      {/* <div className="choose-points">
                        <img src={f1} alt="" />
                        <img src={f2} alt="" />
                        <img src={f3} alt="" />
                        <img src={f4} alt="" />
                      </div> */}
                    </div>
                    <div className="choose-2">
                      <h1>اختر طريقة الدفع</h1>
                      <div className="choose-points">
                        <img src={f5} alt="" />
                        <img src={f6} alt="" />
                        <img src={f7} alt="" />
                        <img src={f8} alt="" />
                        <img src={f9} alt="" />
                        <img src={f10} alt="" />
                      </div>
                    </div>
                    <div className="select-btns">
                      <div className="btn1">التالى</div>
                      <div className="btn2">إلغاء</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
