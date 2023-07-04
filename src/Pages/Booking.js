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

import i4 from "../assests/booking/bb4.png";

import plus from "../assests/booking/plus.png";

import tick from "../assests/booking/tick.png";

import a from "../assests/booking/Lead icon.png";

import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import differenceInDays from "date-fns/differenceInDays";
import differenceInMonths from "date-fns/differenceInMonths";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { createBooking } from "../Redux/actions/bookingActions";
import {
  createAddress,
  getAllAddresses,
} from "../Redux/actions/addressActions";
import { toast } from "react-toastify";
import { fetchCars } from "../Redux/actions/carActions";
import { differenceInHours, startOfDay } from "date-fns";
import SelectMe from "./SelectMe";
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
  const [BookingLoading, setBookingLoading] = useState(false);
  const [drivingLicense, setDrivingLicense] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [returnAddress, setReturnAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [differentReturnLocation, setDifferentReturnLocation] = useState(false);
  const [title, setTitle] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupTime, setPickupTime] = useState(startOfDay(new Date()));
  const [returnTime, setReturnTime] = useState(new Date());
  const [perDay, setPerDay] = useState(false);
  const [perHour, setPerHour] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [city, setCity] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [state, setState] = useState("");
  const [addons, setAddons] = useState([]);
  const minTime = setHours(setMinutes(new Date(), 0), 9);
  const [diffInDays, setDiffInDays] = useState(0);
  const [diffInMonths, setDiffInMonths] = useState(0);
  const [confirmBooking, setConfirmBooking] = useState(false);
  const [price, setPrice] = useState(0);
  const { car } = useParams();
  const [diffInHours, setDiffInHours] = useState(0);
  const option = useSelector((state) => state.RentalInfo?.selectedOption);
  const cars = useSelector((state) => state.Cars?.cars);
  const [street, setStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressState, setAddressState] = useState("");
  const [zip, setZip] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const creatingAddress = useSelector((state) => state.Address.creatingAddress);
  const { addresses } = useSelector((state) => state.Address);

  const error = useSelector((state) => state.Address.error);

  const handleCreateAddress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const monthsDuration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleMonthChange = (event) => {
    setDiffInMonths(event.target.value);
  };
  const handleSubmitAdress = async (e) => {
    e.preventDefault();
    const addressData = {
      title,
      street,
      city: addressCity,
      state: addressState,
      zip,
      user: user._id,
    };

    try {
      await dispatch(createAddress(addressData));

      setShowModal(false);

      // Show success toast message only if address is created successfully
      toast.success("Address created successfully!");
      dispatch(getAllAddresses());
    } catch (error) {
      // Handle error if needed
      toast.error(
        error.message || "Failed to create address. Please try again."
      );
    }
  };
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
  const calculateDiscountAmount = (price, discount) => {
    const discountAmount = (price * discount) / 100;
    return discountAmount;
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    setBookingLoading(true);
    let isAllValuesEntered = true;
    let isTimeChanged = true;
    let totalPrice = 0;
    if (option === "perHour") {

    } else {
      if (diffInDays === 0) {
        toast.warning("Change the time");
        isTimeChanged = false;
      }
    }

    // Checks if the required fields are filled out
    if (option === "perDay") {
      if (
        !selectedCar ||
        !pickupTime ||
        !returnTime ||
        !option

      ) {
        isAllValuesEntered = false;
      }
    }
    else {
      if (
        !selectedCar ||
        !pickupTime ||
        !option

      ) {
        isAllValuesEntered = false;
      }
    }
    // If option === 'delivery' checks additional required fields
    if (option === "delivery" && (!car || !delivery)) {
      isAllValuesEntered = false;
    }

    // If option !== 'delivery' checks additional required fields
    if (option !== "delivery" && (!car || !pickupLocation)) {
      isAllValuesEntered = false;
    }

    if (option !== "delivery" && (differentReturnLocation && !returnLocation)) {
      isAllValuesEntered = false;
    }
    if (option === "perDay") {
      const days = diffInDays;
      totalPrice = (selectedCar?.pricePerDay || 0) * days;
    } else if (option === "perHour") {
      const hours = diffInHours;
      totalPrice = (selectedCar?.pricePerHour || 0) * hours;
    } else {
      const days = diffInDays;
      totalPrice = (selectedCar?.pricePerDay || 0) * days;
    }
    if (isAllValuesEntered && isTimeChanged) {
      if (option === "delivery") {
        dispatch(
          createBooking({
            carId: car,
            user: user._id,
            address: deliveryAddress,
            returnLocation,
            startDate: pickupTime,
            endDate: returnTime,
            addons,
            totalPrice:
              totalPrice +
              addonsPrice -
              calculateDiscountAmount(price, selectedCar?.discount),
            rate: "delivery",
          })
        )
          .then((res) => {
            navigate("/booking-history");
            setConfirmBooking(false);
            setBookingLoading(false);
          })
          .catch((error) => {
            setBookingLoading(false);
            setConfirmBooking(false);
          });

      } else {

        dispatch(
          createBooking({
            carId: car,
            user: user._id,
            pickupLocation: pickupLocation.value,
            returnLocation: returnLocation.value,
            startDate: pickupTime,
            endDate: returnTime,
            addons,
            totalPrice:
              totalPrice +
              addonsPrice -
              calculateDiscountAmount(price, selectedCar?.discount),
            rate: option,
            delivery: option === "delivery" ? true : false,
            hours: diffInHours,
            days: diffInDays
          })
        )
          .then((res) => {
            navigate("/booking-history");
            setConfirmBooking(false);
            setBookingLoading(true);
          })
          .catch((error) => {
            setBookingLoading(true);
            setConfirmBooking(false);
          });
      }
    } else {
      if (!isAllValuesEntered) {
        toast.warning("Enter all fields");
      }
    }
  };
  const bookingValuesHandler = () => {
    if (option === "delivery") {
      if (pickupLocation && deliveryAddress && pickupTime && returnTime) {
        if (diffInDays === 0) {
          toast.warning("Change the time");
        } else {
          setActiveButton("btn2");
        }
      } else {
        toast.warning("enter all values");
      }
    }



    else {
      if (pickupLocation && pickupTime && returnTime) {
        if (differentReturnLocation && !returnLocation) {
          toast.warning("enter all values");

        }
        else {
          if (diffInDays === 0) {
            toast.warning("Change the time");
          } else {
            setActiveButton("btn2");
          }
        }
      } else {
        toast.warning("enter all values");
      }
    }
  };
  useEffect(() => {
    if (option === "perHour") {
      // setDiffInHours(rentalInfo.hours);
    } else if (option === "perMonth") {
      // const months = differenceInMonths(returnTime, pickupTime);
      // setDiffInMonths(months);
    }
    else {
      const days = differenceInDays(returnTime, pickupTime);
      setDiffInDays(days);
    }
  }, [pickupTime, returnTime, option, car]);

  useEffect(() => {
    let totalPrice = 0;
    let days = 0;
    let hours = 0;
    let months = 0;
    if (option === "perHour") {
      hours = differenceInHours(returnTime, pickupTime);
      // setDiffInHours(hours);
    }
    else if (option === "perMonth") {
      months = differenceInMonths(returnTime, pickupTime);

    }
    else {
      days = differenceInDays(returnTime, pickupTime);
      setDiffInDays(days);
    }

    if (option === "perDay") {
      totalPrice = (selectedCar?.pricePerDay || 0) * days;
    } else if (option === "perHour") {
      totalPrice = (selectedCar?.pricePerHour || 0) * hours;
    } else if (option === "delivery") {
      totalPrice = (selectedCar?.pricePerDay || 0) * days;
    }
    else if (option === "perMonth") {
      totalPrice = (selectedCar?.pricePerMonth || selectedCar?.pricePerDay * 30) * months;
    }

    setPrice(totalPrice);
  }, [pickupTime, returnTime, option, selectedCar, car]);

  const presentDay = startOfDay(new Date());

  // End time at 9PM
  const maxTime = setHours(setMinutes(new Date(), 0), 21);
  const branchesData = branches.map((branch) => ({
    value: branch.name,
    label: branch.name,
  }));
  const addressesData = addresses.map((add) => ({
    value: add._id,
    label: add.title,
  }));
  useEffect(() => {
    dispatch(getAllAddresses());
  }, []);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setDrivingLicense(user.drivingLicense || "");
      setNationalId(user.nationalId || "");
      setPhone(user.phone || "");
      setEmail(user.email || "");
    } else {
      navigate("/");
      toast.warning("You need to Login First!")
    }
  }, [user]);
  useEffect(() => {
    if (rentalInfo) {
      setPickupLocation(rentalInfo.pickupLocation || "");
      setReturnLocation(rentalInfo.returnLocation || "");
      setPickupTime(rentalInfo.pickupTime || startOfDay(new Date()));
      setReturnTime(rentalInfo.returnTime || new Date());
      setDelivery(rentalInfo.deliveryAddress || false);
      setDiffInHours(rentalInfo.hours)
      setDiffInMonths(rentalInfo.months)
    }
    console.log(rentalInfo.months);
  }, [rentalInfo]);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const handleDurationChange = (event) => {
    setDiffInHours(event.target.value);
  };

  const durations = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Navigation nav={[]} />
      <Banner />
      <section id="booking">
        <div className="container-main">
          <BookingSidebar
            price={price}
            addonsPrice={addonsPrice}
            selectedCar={selectedCar}
            pickupLocation={pickupLocation}
            returnLocation={returnLocation}
            pickupTime={pickupTime}
            returnTime={returnTime}
            confirmBooking={confirmBooking}
            handleSubmit={handleSubmit}
            BookingLoading={BookingLoading}
            setConfirmBooking={setConfirmBooking}
          />
          <div className="container">
            <div className="grid__one">
              <div className="btns">
                <button className={activeButton === "btn3" ? "active" : ""}>
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
                <button className={activeButton === "btn2" ? "active" : ""}>
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
                <button className={activeButton === "btn1" ? "active" : ""}>
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
                <>
                  {option === "delivery" ? (
                    <div className="grid__two">
                      <div className="booking-address">
                        <div className="input-box-wrap">
                          <div className="plus" onClick={handleCreateAddress}>
                            <img src={plus} alt="" />
                            إضافة عنوان
                          </div>
                          <div className="input-box">
                            <p>عنوان التسليم</p>
                            <Select
                              options={addressesData}
                              isSearchable={true}

                              onChange={(selectedOption) => {
                                setDeliveryAddress(selectedOption.value);
                              }}
                              defaultValue={
                                rentalInfo.deliveryAddress
                                  ? [
                                    {
                                      label: rentalInfo.deliveryAddress.label,
                                      value: rentalInfo.deliveryAddress.value,
                                    },
                                  ]
                                  : null
                              }
                              placeholder="تحديد موقع"
                            />

                          </div>
                        </div>

                        {
                          rentalInfo.returnLocation === "" ? <>
                            <div className="item__" >
                              <p>Return to a different location</p>
                              <input
                                type="checkbox"
                                onChange={(e) =>
                                  setDifferentReturnLocation(e.target.checked)
                                }
                              />
                            </div>
                            <div className="input-box-wrap">

                              {
                                differentReturnLocation && <>
                                  <div className="plus" style={{ opacity: "0" }}>
                                    <img src={plus} alt="" />
                                    إضافة عنوان
                                  </div>
                                  <div className="input-box">
                                    <p>عنوان الاتسلام</p>
                                    <Select
                                      defaultValue={
                                        rentalInfo.returnLocation
                                          ? [
                                            {
                                              label: rentalInfo.returnLocation.label,
                                              value: rentalInfo.returnLocation.value,
                                            },
                                          ]
                                          : null
                                      }
                                      options={branchesData}
                                      isSearchable={true}
                                      onChange={(selectedOption) =>
                                        setReturnLocation(selectedOption)
                                      }
                                      placeholder="تحديد موقع"
                                    />
                                  </div>
                                </>
                              }

                            </div>
                          </> : <>
                            <div className="input-box-wrap">
                              <div className="plus" style={{ opacity: "0" }}>
                                <img src={plus} alt="" />
                                إضافة عنوان
                              </div>
                              <div className="input-box">
                                <p>عنوان الاتسلام</p>
                                <Select
                                  defaultValue={
                                    rentalInfo.returnLocation
                                      ? [
                                        {
                                          label: rentalInfo.returnLocation.label,
                                          value: rentalInfo.returnLocation.value,
                                        },
                                      ]
                                      : null
                                  }
                                  options={branchesData}
                                  isSearchable={true}
                                  onChange={(selectedOption) =>
                                    setReturnLocation(selectedOption)
                                  }
                                  placeholder="تحديد موقع"
                                />
                              </div>
                            </div></>
                        }

                        <div className="input-box-wrap">
                          {option === "perDay" && (
                            <>
                              <div className="day">{diffInDays} days</div>
                              <div className="two">
                                <div className="item">
                                  <p>المدينة</p>
                                  <div className="btn">
                                    <DatePicker
                                      selected={pickupTime}
                                      onChange={(date) => {
                                        date = startOfDay(date); // Sets the time to midnight
                                        setPickupTime(date);
                                        console.log(date);
                                      }}
                                      dateFormat="MMMM d, yyyy"
                                      minDate={presentDay}
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
                                      minDate={presentDay}
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {option === "delivery" && (
                            <>
                              <div className="day">{diffInDays} days</div>
                              <div className="two">
                                <div className="item">
                                  <p>المدينة</p>
                                  <div className="btn">
                                    <DatePicker
                                      selected={pickupTime}
                                      onChange={(date) => {
                                        date = startOfDay(date); // Sets the time to midnight
                                        setPickupTime(date);
                                        console.log(date);
                                      }}
                                      dateFormat="MMMM d, yyyy"
                                      minDate={presentDay}
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
                                      minDate={presentDay}
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
                          <div
                            className="btn1"
                            onClick={() => setActiveButton("btn2")}
                          >
                            التالى
                          </div>
                          <div className="btn2">إلغاء</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid__two">
                      <div className="booking-address">
                        <div className="input-box-wrap">
                          <div className="plus" style={{ opacity: "0" }}>
                            <img src={plus} alt="" />
                            إضافة عنوان
                          </div>
                          <div className="input-box">
                            <p>عنوان الاتسلام</p>
                            <Select
                              defaultValue={
                                rentalInfo.pickupLocation
                                  ? [
                                    {
                                      label: rentalInfo.pickupLocation.label,
                                      value: rentalInfo.pickupLocation.value,
                                    },
                                  ]
                                  : null
                              }
                              options={branchesData}
                              isSearchable={true}
                              onChange={(selectedOption) =>
                                setPickupLocation(selectedOption)
                              }
                              placeholder="تحديد موقع"
                            />
                          </div>
                        </div>

                        {
                          rentalInfo.returnLocation === "" ? <>
                            <div className="item__" >
                              <p>Return to a different location</p>
                              <input
                                type="checkbox"
                                onChange={(e) =>
                                  setDifferentReturnLocation(e.target.checked)
                                }
                              />
                            </div>
                            <div className="input-box-wrap">

                              {
                                differentReturnLocation && <>
                                  <div className="plus" style={{ opacity: "0" }}>
                                    <img src={plus} alt="" />
                                    إضافة عنوان
                                  </div>
                                  <div className="input-box">
                                    <p>عنوان الاتسلام</p>
                                    <Select
                                      defaultValue={
                                        rentalInfo.returnLocation
                                          ? [
                                            {
                                              label: rentalInfo.returnLocation.label,
                                              value: rentalInfo.returnLocation.value,
                                            },
                                          ]
                                          : null
                                      }
                                      options={branchesData}
                                      isSearchable={true}
                                      onChange={(selectedOption) =>
                                        setReturnLocation(selectedOption)
                                      }
                                      placeholder="تحديد موقع"
                                    />
                                  </div>
                                </>
                              }

                            </div>
                          </> : <>
                            <div className="input-box-wrap">
                              <div className="plus" style={{ opacity: "0" }}>
                                <img src={plus} alt="" />
                                إضافة عنوان
                              </div>
                              <div className="input-box">
                                <p>عنوان الاتسلام</p>
                                <Select
                                  defaultValue={
                                    rentalInfo.returnLocation
                                      ? [
                                        {
                                          label: rentalInfo.returnLocation.label,
                                          value: rentalInfo.returnLocation.value,
                                        },
                                      ]
                                      : null
                                  }
                                  options={branchesData}
                                  isSearchable={true}
                                  onChange={(selectedOption) =>
                                    setReturnLocation(selectedOption)
                                  }
                                  placeholder="تحديد موقع"
                                />
                              </div>
                            </div></>
                        }

                        <div className="input-box-wrap">
                          {option === "perDay" && (
                            <>
                              <div className="day">{diffInDays} days</div>
                              <div className="two">
                                <div className="item">
                                  <p>المدينة</p>
                                  <div className="btn">
                                    <DatePicker
                                      selected={pickupTime}
                                      value={pickupTime}
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
                          )}
                          {
                            option === "perHour" && (
                              <>
                                <div className="day">{diffInHours} hours</div>
                                <div className="two">
                                  <div className="item">
                                    <p>Pickup duration:</p>

                                    <div className="input-group">
                                      <select className="form-select" id="pickupHours" value={diffInHours} onChange={(event) => handleDurationChange(event)}>
                                        <option value="">Select duration</option>
                                        {durations.map((duration) => (
                                          <option key={duration} value={duration}>
                                            {duration} hour
                                          </option>
                                        ))}
                                      </select>
                                      <label className="input-group-text" htmlFor="pickupHours">Hours</label>
                                    </div>
                                  </div>
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

                                </div>
                              </>
                            )
                          }
                          {
                            option === "perMonth" && (
                              <>
                                <div className="day">{diffInMonths} Months</div>
                                <div className="two">
                                  <div className="item">
                                    <label htmlFor="pickupHours" className="pickupHours__">
                                      {" "}
                                      Pickup duration:
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        id="pickupHours"
                                        value={diffInMonths}
                                        onChange={(event) => handleMonthChange(event)}
                                      >
                                        <option value="">Select duration</option>
                                        {monthsDuration.map((duration) => (
                                          <option key={duration} value={duration}>
                                            {duration} Months
                                          </option>
                                        ))}
                                      </select>
                                      <label className="input-group-text" htmlFor="pickupHours">
                                        Months
                                      </label>
                                    </div>
                                  </div>
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

                                </div>
                              </>
                            )
                          }
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
                          <div className="btn1" onClick={bookingValuesHandler}>
                            التالى
                          </div>
                          <div className="btn2">إلغاء</div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
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
                          {/* <img src={i4} alt="" /> */}
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
                        <span
                          style={{ background: "#ffcd00", color: "#373A36" }}
                        >
                          {" "}
                          تأكيد
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
                        <span
                          style={{ background: "#ffcd00", color: "#373A36" }}
                        >
                          {" "}
                          تأكيد
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
                        <span
                          style={{ background: "#ffcd00", color: "#373A36" }}
                        >
                          {" "}
                          تأكيد
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
                      <div
                        className="btn1"
                        onClick={() => setActiveButton("btn3")}
                      >
                        التالى
                      </div>
                      <div
                        className="btn2"
                        onClick={() => setActiveButton("btn1")}
                      >
                        إلغاء
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeButton === "btn3" && (
                <div className="grid__four">
                  <div className="booking-address">
                    {/* <div className="choose-1">
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
                    </div> */}
                    <div className="select-btns">
                      <div
                        className="btn1"
                        onClick={() => setConfirmBooking(true)}
                      >
                        التالى
                      </div>
                      <div
                        className="btn2"
                        onClick={() => setActiveButton("btn2")}
                      >
                        إلغاء
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showModal && (
              <div
                className="modal"
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Create Address</h5>
                      <button
                        type="button"
                        className="close"
                        onClick={handleCloseModal}
                      >
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleSubmitAdress}>
                        <div className="form-group">
                          <label htmlFor="street">Title:</label>
                          <input
                            type="text"
                            id="titlel"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="street">Street:</label>
                          <input
                            type="text"
                            id="street"
                            className="form-control"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="city">City:</label>
                          <input
                            type="text"
                            id="city"
                            className="form-control"
                            value={addressCity}
                            onChange={(e) => setAddressCity(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="state">State:</label>
                          <input
                            type="text"
                            id="state"
                            className="form-control"
                            value={addressState}
                            onChange={(e) => setAddressState(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="zip">Zip:</label>
                          <input
                            type="text"
                            id="zip"
                            className="form-control"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={creatingAddress}
                        >
                          Create Address
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Booking;
