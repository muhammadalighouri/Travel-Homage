import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import differenceInDays from "date-fns/differenceInDays";
import differenceInHours from "date-fns/differenceInHours";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { createBooking } from "../Redux/actions/bookingActions";
const branches = [
  {
    name: "الرياض - الشفا لبن",
    address: "ظهرة لبن شارع نجد بجوار العثيم",
    phone: "592891678",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الرياض حي الموسى",
    address: "طويق شارع أحمد بن الخطاب",
    phone: "594850304   ",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الرياض - مخرج 28",
    address: "حي السويدي مخرج 28",
    phone: "592891608",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الرياض - حي قرطبة",
    address: "طريق الدمام حي قرطبة مخرج 8",
    phone: "596050250",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الرياض - طريق خريص",
    address: "خريص - طريق مكة المكرمة الفرعي",
    phone: "580954620",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الرياض - المروج",
    address: "الدائري الشمالي – شارع الخدمة قبل مخرج 5",
    phone: "581086365",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الرياض – نجد لبن ",
    address: "تقاطع طريق نجد مع طريق طيبة",
    phone: "596178313",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الرياض - معرض خريص",
    address: "طريق خريص الجهة المقابله للوعلان",
    phone: "596178445",
    workingTime: "9:00AM - 11:00PM",
    friday: "4:00PM - 11:00PM",
    saturday: "4:00PM -11:00PM",
  },
  {
    name: "الدمام - حي الاتصالات ",
    address: "طريق الأمير نايف حي الاتصالات شارع 42",
    phone: "581337594",
    workingTime: "8:00AM - 11:00PM",
    friday: "3:00PM - 11:00PM",
    saturday: "3:00PM -11:00PM",
  },
  {
    name: "الخبر - حي العزيزية ",
    address: "العزيزية – حي الخزامة",
    phone: "595012042",
    workingTime: "8:00AM - 11:00PM",
    friday: "3:00PM - 11:00PM",
    saturday: "3:00PM -11:00PM",
  },
  {
    name: "الجبيل - شارع المدينة",
    address: "الجبيل البلد شارع المدينة ",
    phone: "582046560",
    workingTime: "9:00PM - 12:00PM 4:00PM - 10:00PM",
    friday: "أجازه",
    saturday: "9:00AM -12:00PM 4:00PM - 10: 00PM",
  },
  {
    name: "الاحساء",
    address: "ط الملك عبد الله حي غرناطه",
    phone: "595134170",
    workingTime: "9:00PM - 12:00PM 4:00PM - 10:00PM",
    friday: "أجازه",
    saturday: "9:00AM -12:00PM 4:00PM - 10: 00PM",
  },
  {
    name: "جازان -مطار جازان",
    address: "داخل مطار جازان ",
    phone: "594839625",
    workingTime: "24/7",
    friday: "24/7",
    saturday: "24/7",
  },
  {
    name: "جدة - طريق المدينة",
    address: "طريق المدينة شارع حي الروضة ",
    phone: "581341239",
    workingTime: "9:00PM - 12:30PM 5:00PM - 10:00PM",
    friday: "5:00PM - 11:30PM",
    saturday: "9:00AM -12:30PM 5:00PM - 11: 00PM",
  },
  {
    name: "70 جدة - طريق المدينة",
    address: "طريق المدينة شارع حي الروضة ",
    phone: "581341239",
    workingTime: "9:00PM - 12:30PM 5:00PM - 10:00PM",
    friday: "5:00PM - 11:00PM",
    saturday: "9:00AM - 11:00PM",
  },
  {
    name: "مكة المكرمة ",
    address: "ي النزهة - شارع حسين عرب ",
    phone: "594870275",
    workingTime: "9:00PM - 12:30PM 5:00PM - 10:00PM",
    friday: "5:00PM - 11:30PM",
    saturday: "9:00AM -12:30PM 5:00PM - 11: 00PM",
  },
  {
    name: "الطائف -مطار الطائف",
    address: "ي النزهة - شارع حسين عرب ",
    phone: "594870275",
    workingTime: "24/7",
    friday: "24/7",
    saturday: "24/7",
  },
];
const addonsData = [
  { label: "مقعد لطفل", value: "child_seat", price: "+10 ر.س.", num: 10 },
  { label: "تأمين شامل", value: "full_insurance", price: "+15 ر.س.", num: 15 },
  {
    label: "كيلومتر مفتوح",
    value: "open_discount",
    price: "+40 ر.س.",
    num: 40,
  },
];
const Booking = () => {
  const [activeButton, setActiveButton] = useState("btn1");
  const { user } = useSelector((state) => state.UserLogin?.userInfo) || {};
  const rentalInfo = useSelector((state) => state.RentalInfo) || {};
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupTime, setPickupTime] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());
  const [perDay, setPerDay] = useState(false);
  const [perHour, setPerHour] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [city, setCity] = useState("");
  const [selectedCar, setSelectedCar] = useState();
  const [state, setState] = useState("");
  const [addons, setAddons] = useState([]);
  const minTime = setHours(setMinutes(new Date(), 0), 9);
  const [diffInDays, setDiffInDays] = useState(0);
  const [price, setPrice] = useState(0);
  const { car } = useParams();
  const [diffInHours, setDiffInHours] = useState(0);
  const option = useSelector((state) => state.RentalInfo?.selectedOption);
  const cars = useSelector((state) => state.Cars?.cars);
  useEffect(() => {
    const newCar = cars.find((item) => item._id === car);
    setSelectedCar(newCar);
  }, [car, cars]);
  const handleAddonChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAddons((prevAddons) => [...prevAddons, value]);
    } else {
      setAddons((prevAddons) => prevAddons.filter((addon) => addon !== value));
    }
  };

  const addonsPrice = addons.reduce((total, addon) => {
    const addonData = addonsData.find((data) => data.value === addon);
    if (addonData) {
      return total + addonData.num;
    }
    return total;
  }, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    let totalPrice = 0;

    if (option === "perDay") {
      const days = diffInDays;
      totalPrice =
        (selectedCar?.pricePerDay || 0) * days;
    } else if (option === "perHour") {
      const hours = diffInHours;
      totalPrice =
        (selectedCar?.pricePerHour || 0) * hours;
    }

    console.log({
      car,
      user: user._id,
      pickupLocation,
      returnLocation,
      startDate: pickupTime,
      endDate: returnTime,
      addons,
      totalPrice: totalPrice + addonsPrice,
      rate: option
    });
    dispatch(createBooking({
      car,
      user: user._id,
      pickupLocation,
      returnLocation,
      startDate: pickupTime,
      endDate: returnTime,
      addons,
      totalPrice: totalPrice + addonsPrice,
      rate: option
    }))
    // Dispatch action or perform further operations
  };

  useEffect(() => {
    if (option === "perHour") {
      const hours = differenceInHours(returnTime, pickupTime);
      setDiffInHours(hours);
    } else {
      const days = differenceInDays(returnTime, pickupTime);
      setDiffInDays(days);


    }
  }, [pickupTime, returnTime, option]);
  useEffect(() => {
    let totalPrice = 0;
    let days = 0;
    let hours = 0;

    if (option === "perHour") {
      hours = differenceInHours(returnTime, pickupTime);
      setDiffInHours(hours);
    } else {
      days = differenceInDays(returnTime, pickupTime);
      setDiffInDays(days);
    }

    if (option === "perDay") {
      totalPrice = (selectedCar?.pricePerDay || 0) * days;
    } else if (option === "perHour") {
      totalPrice = (selectedCar?.pricePerHour || 0) * hours;
    }

    setPrice(totalPrice);
  }, [pickupTime, returnTime, option, selectedCar]);

  useEffect(() => {
    console.log(price);
  }, [price]);

  // End time at 9PM
  const maxTime = setHours(setMinutes(new Date(), 0), 21);
  const options = branches.map((branch) => ({
    value: branch.name,
    label: branch.name,
  }));
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setDrivingLicense(user.drivingLicense || "");
      setNationalId(user.nationalId || "");
      setPhone(user.phone || "");
      setEmail(user.email || "");
    }
  }, [user]);
  useEffect(() => {
    if (rentalInfo) {
      setPickupLocation(rentalInfo.pickupLocation || "");
      setReturnLocation(rentalInfo.returnLocation || "");
      setPickupTime(rentalInfo.pickupTime || new Date());
      setReturnTime(rentalInfo.returnTime || new Date());
      setPerDay(rentalInfo.perDay || false);
      setPerHour(rentalInfo.perHour || false);
      setDelivery(rentalInfo.delivery || false);
    }
  }, [rentalInfo]);
  return (
    <>
      <Navigation />
      <Banner />
      <section id="booking">
        <div className="container-main">
          <BookingSidebar price={price} addonsPrice={addonsPrice} selectedCar={selectedCar} />
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
                        <Select
                          options={options}
                          isSearchable={true}
                          onChange={(selectedOption) =>
                            setPickupLocation(selectedOption.value)
                          }
                          placeholder="تحديد موقع"
                        />
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div></div>
                      <div className="input-box">
                        <p>سطر العنوان 1</p>
                        <div className="input">
                          <input
                            type="text"
                            name="addressLine1"
                            value={addressLine1}
                            onChange={(e) => setAddressLine1(e.target.value)}
                            placeholder="سطر العنوان 1"
                          />
                          <img src={i2} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="input-box-wrap">
                      <div></div>

                      <div className="input-box">
                        <p>سطر العنوان 2</p>
                        <div className="input">
                          <input
                            type="text"
                            value={addressLine2}
                            onChange={(e) => setAddressLine2(e.target.value)}
                            name="addressLine2"
                            placeholder="سطر العنوان 2"
                          />
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
                            <input
                              type="text"
                              name="city"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="مدينتك"
                            />
                            <img src={i2} alt="" />
                          </div>
                        </div>
                        <div className="input-box">
                          <p>المحافظة</p>
                          <div className="input">
                            <input
                              type="text"
                              name="state"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              placeholder="محافظتك"
                            />
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
                        <Select
                          options={options}
                          isSearchable={true}
                          onChange={(selectedOption) =>
                            setReturnLocation(selectedOption.value)
                          }
                          placeholder="تحديد موقع"
                        />
                      </div>
                    </div>

                    <div className="input-box-wrap">
                      {option === "perDay" ? (
                        <>
                          <div className="day">{diffInDays} days</div>
                          <div className="two">
                            <div className="item">
                              <p>المدينة</p>
                              <div className="btn">
                                <DatePicker
                                  selected={pickupTime}
                                  onChange={(date) => setPickupTime(date)}
                                  dateFormat="MMMM d, yyyy"
                                />
                              </div>
                            </div>
                            <div className="item">
                              <p>المحافظة</p>
                              <div className="btn">
                                <DatePicker
                                  selected={returnTime}
                                  onChange={(date) => setReturnTime(date)}
                                  dateFormat="MMMM d, yyyy"
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="day">{diffInHours} hours</div>
                          <div className="two">
                            <div className="item">
                              <p>المدينة</p>
                              <div className="btn">
                                <DatePicker
                                  selected={pickupTime}
                                  onChange={(date) => setPickupTime(date)}
                                  showTimeSelect
                                  minTime={minTime}
                                  maxTime={maxTime}
                                  dateFormat="Pp"
                                />
                              </div>
                            </div>
                            <div className="item">
                              <p>المحافظة</p>
                              <div className="btn">
                                <DatePicker
                                  selected={returnTime}
                                  onChange={(date) => setReturnTime(date)}
                                  showTimeSelect
                                  minTime={minTime}
                                  maxTime={maxTime}
                                  dateFormat="Pp"
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                    </div>

                    <div className="offers">
                      <h1>(Addons) الإضافات والعروض</h1>
                      {addonsData.map((addon) => (
                        <div className="input-check-wrap" key={addon.value}>
                          <div></div>
                          <div className="input-check">
                            <span>{addon.price}</span>
                            <div className="input">
                              <label htmlFor="">{addon.label}</label>
                              <input
                                type="checkbox"
                                id={addon.value}
                                name="addons"
                                value={addon.value}
                                checked={addons.includes(addon.value)}
                                onChange={handleAddonChange}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="select-btns">
                      <div className="btn1" onClick={() => setActiveButton('btn2')}>التالى</div>
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
                          <input
                            type="text"
                            value={drivingLicense}
                            onChange={(e) => setDrivingLicense(e.target.value)}
                            placeholder="رخصة القيادة"
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
                        <p>الرقم القومي أو رقم جواز السفر</p>
                        <div className="input">
                          <input
                            type="text"
                            value={nationalId}
                            onChange={(e) => setNationalId(e.target.value)}
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
                          <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder="بريدك الإلكتروني"
                          />
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
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="بريدك الإلكتروني"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="select-btns">
                      <div className="btn1" onClick={() => setActiveButton('btn3')}>التالى</div>
                      <div className="btn2" onClick={() => setActiveButton('btn1')}>إلغاء</div>
                    </div>
                  </div>
                </div>
              )}

              {activeButton === "btn3" && (
                <div className="grid__four">
                  <div className="booking-address">
                    <div className="choose-1">
                      <h1>اختر نقاط الولاء</h1>
                      <div className="choose-points">
                        <img src={f1} alt="" />
                        <img src={f2} alt="" />
                        <img src={f3} alt="" />
                        <img src={f4} alt="" />
                      </div>
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
                      <div className="btn1" onClick={handleSubmit}>التالى</div>
                      <div className="btn2" onClick={() => setActiveButton('btn2')}>
                        إلغاء
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;
