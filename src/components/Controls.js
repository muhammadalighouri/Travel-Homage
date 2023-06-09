import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import "../scss/controls.scss";
import search from "../assests/search.png";
import CreatableSelect from "react-select/creatable";
import switch1 from "../assests/Switches.png";
import switch2 from "../assests/Switches (1).png";
import switchIcon from "../assests/Seach mid ICON.png";
import { startOfDay, toDate } from "date-fns";

import text1 from "../assests/text1.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import text2 from "../assests/text2.png";
import { ToastContainer, toast } from "react-toastify";
import text3 from "../assests/control1.png";
import { setRentalDetails } from "../Redux/actions/rentalActions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { getAllAddresses } from "../Redux/actions/addressActions";
import MapComponent from "./CreateAddressModal";
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
const Controls = () => {
    const rentalInfo = useSelector((state) => state.RentalInfo); // assuming your reducer is named RentalInfo
    const option = useSelector((state) => state.RentalInfo?.selectedOption);
    const [pickupLocation, setPickupLocation] = useState("");
    const [returnLocation, setReturnLocation] = useState("");
    const [pickupTime, setPickupTime] = useState(toDate(startOfDay(new Date())));
    const [returnTime, setReturnTime] = useState(new Date());
    const [perDay, setPerDay] = useState(false);
    const [perHour, setPerHour] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [differentReturnLocation, setDifferentReturnLocation] = useState(false);
    const [activeButton, setActiveButton] = useState("btn3");
    const navigate = useNavigate();
    const minTime = setHours(setMinutes(new Date(), 0), 9);
    const maxTime = setHours(setMinutes(new Date(), 0), 21);
    const pickupLocationRef = useRef(null);
    const returnLocationRef = useRef(null);
    const { addresses } = useSelector((state) => state.Address);
    const [activeInput, setActiveInput] = useState(null);
    const [selectedOption, setSelectedOption] = useState("perDay");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(0);
    const [selectedMonthsInfo, setSelectedMonthsInfo] = useState(0);

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
    };

    const durations = [1, 2, 3, 4, 5, 6];
    const monthsDuration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const handleMonthChange = (event) => {
        setSelectedMonthsInfo(event.target.value);
    };

    // Default selection is 'perDay'
    const options = branches.map((branch) => ({
        value: branch.name,
        label: branch.name,
    }));
    const addressesData = addresses.map((add) => ({
        value: add._id,
        label: add.title,
    }));
    const presentDay = new Date();
    // Handle selection change
    const handleChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
    };
    useEffect(() => {
        if (activeInput === "pickup") {
            pickupLocationRef.current.focus();
        } else if (activeInput === "return") {
            returnLocationRef.current.focus();
        }
    }, [activeInput]);

    const handleSubmit = () => {

        if (selectedOption === "perDay") {
            console.log(pickupTime);
            console.log(returnTime);
        }

        if (selectedOption === "delivery") {
            if (!deliveryAddress || !pickupTime || !returnTime || !selectedOption) {
                toast.error("Please fill out all fields");
                return;
            }
            dispatch(
                setRentalDetails({
                    deliveryAddress,
                    pickupTime,
                    returnTime,
                    selectedOption,
                    hours: selectedDuration,
                    months: selectedMonthsInfo,
                })
            );
        } else {
            if (selectedOption === "perDay") {
                if (!pickupLocation || !pickupTime || !returnTime || !selectedOption) {
                    toast.error("Please fill out all fields");
                    return;
                }
                if (pickupTime.getTime() === returnTime.getTime()) {
                    toast.error("Change the time");
                    return;
                }
            } else {
                if (!pickupLocation || !pickupTime || !selectedOption) {
                    toast.error("Please fill out all fields");
                    return;
                }
            }
            dispatch(
                setRentalDetails({
                    pickupLocation,
                    returnLocation,
                    deliveryAddress,
                    pickupTime,
                    returnTime,
                    selectedOption,
                    hours: selectedDuration,
                    months: selectedMonthsInfo,
                })
            );
        }

        navigate("/fleet");
    };
    useEffect(() => {
        const presentHour = setMinutes(
            setHours(new Date(), new Date().getHours()),
            0
        );
        const minTime = setHours(setMinutes(new Date(), 0), 9);
        const maxTime = setHours(setMinutes(new Date(), 0), 17);
        if (rentalInfo) {
            setPickupLocation(rentalInfo.pickupLocation || "");
            setReturnLocation(rentalInfo.returnLocation || "");
            setPickupTime(rentalInfo.pickupTime || presentHour);
            setPickupTime(rentalInfo.pickupTime || presentHour);
            setReturnTime(rentalInfo.returnTime || presentHour);
            setPerDay(rentalInfo.perDay || false);
            setPerHour(rentalInfo.perHour || false);
            setDelivery(rentalInfo.deliveryAddress || false);
        }
    }, [rentalInfo]);
    useEffect(() => {
        dispatch(getAllAddresses());
    }, []);
    const handleOptionChange = (value) => {
        setSelectedOption(value);

        dispatch(getAllAddresses());
        if (value === "delivery") {
            setDifferentReturnLocation(false);
        }
    };

    const handleReturnLocationChange = (checked) => {
        setDifferentReturnLocation(checked);

        if (checked) {
            if (!selectedOption === "perMonth") {
                setSelectedOption("perDay");
            }
        }
    };
    return (
        <section className="controls">
            <div className="container">
                <div className="grid__one">
                    <div className="start"></div>
                    <div className="btns">
                        <button
                            className={activeButton === "btn1" ? "active" : ""}
                            onClick={() => {
                                setActiveButton("btn1");
                            }}
                        >
                            <img src={text1} alt="" />
                        </button>
                        <button
                            className={activeButton === "btn2" ? "active" : ""}
                            onClick={() => {
                                setActiveButton("btn2");
                                setSelectedOption("perMonth");
                            }}
                        >
                            <img src={text2} alt="" />
                        </button>
                        <button
                            className={activeButton === "btn3" ? "active" : ""}
                            onClick={() => {
                                setActiveButton("btn3");
                                setSelectedOption("perDay");
                            }}
                        >
                            <img src={text3} alt="" />
                        </button>
                    </div>
                </div>

                {activeButton === "btn3" && (
                    <div className="grid__two">
                        <div className="one">
                            <div className="flex">
                                <button onClick={handleSubmit}>
                                    بحث
                                    <img src={search} alt="" />
                                </button>
                            </div>
                        </div>
                        {selectedOption === "perDay" && (
                            <div className="two">
                                <div className="item">
                                    <p>Pickup date</p>
                                    <div className="btn">
                                        <DatePicker
                                            selected={pickupTime}
                                            onChange={(date) => setPickupTime(date)}
                                            showTimeSelect
                                            minTime={minTime}
                                            maxTime={maxTime}
                                            dateFormat="Pp"
                                            timeIntervals={60}
                                        />
                                    </div>
                                    <div className="btn"></div>
                                </div>
                                <div className="item">
                                    <p>Return date</p>
                                    <div className="btn">
                                        <DatePicker
                                            selected={returnTime}
                                            onChange={(date) => setReturnTime(date)}
                                            showTimeSelect
                                            minTime={minTime}
                                            maxTime={maxTime}
                                            dateFormat="Pp"
                                            timeIntervals={60}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedOption === "delivery" && (
                            <div className="two">
                                <div className="item">
                                    <p>Pickup date</p>
                                    <div className="btn">
                                        <DatePicker
                                            selected={pickupTime}
                                            onChange={(date) => setPickupTime(date)}
                                            dateFormat="MMMM d, yyyy"
                                            minDate={presentDay}
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <p>Return date</p>
                                    <div className="btn">
                                        <DatePicker
                                            selected={returnTime}
                                            onChange={(date) => setReturnTime(date)}
                                            dateFormat="MMMM d, yyyy"
                                            minDate={pickupTime || presentDay}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedOption === "perHour" && (
                            <div className="two">
                                <div className="item">
                                    <p>Pickup date & time</p>
                                    <div className="btn">
                                        <DatePicker
                                            selected={pickupTime}
                                            onChange={(date) => setPickupTime(date)}
                                            showTimeSelect
                                            minTime={minTime}
                                            maxTime={maxTime}
                                            dateFormat="Pp"
                                            timeIntervals={60}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="pickupHours" className="pickupHours__">
                                        {" "}
                                        Pickup duration:
                                    </label>
                                    <div className="input-group">
                                        <select
                                            className="form-select"
                                            id="pickupHours"
                                            value={selectedDuration}
                                            onChange={(event) => handleDurationChange(event)}
                                        >
                                            <option value="">Select duration</option>
                                            {durations.map((duration) => (
                                                <option key={duration} value={duration}>
                                                    {duration} hour
                                                </option>
                                            ))}
                                        </select>
                                        <label className="input-group-text" htmlFor="pickupHours">
                                            Hours
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="three">
                            <div className="top">
                                <ul className="start">
                                    <li>
                                        <div className="item">
                                            <p>Return to a different location</p>
                                            <input
                                                type="checkbox"
                                                checked={differentReturnLocation}
                                                onChange={(e) =>
                                                    handleReturnLocationChange(e.target.checked)
                                                }
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <p>Per Day</p>
                                            <input
                                                type="radio"
                                                value="perDay"
                                                checked={selectedOption === "perDay"}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                            />
                                        </div>
                                        <div className="item">
                                            <p>Per Hour</p>
                                            <input
                                                type="radio"
                                                value="perHour"
                                                checked={selectedOption === "perHour"}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                            />
                                        </div>
                                        <div className="item">
                                            <p>Delivery</p>
                                            <input
                                                type="radio"
                                                value="delivery"
                                                checked={selectedOption === "delivery"}
                                                onChange={(e) => handleOptionChange(e.target.value)}
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <div className="end">موقع الاستلام والعودة</div>
                            </div>
                            <div className="bottom">
                                <div
                                    className="grid"
                                    style={{
                                        gridTemplateColumns: !differentReturnLocation
                                            ? "1fr"
                                            : "auto 50px auto",
                                    }}
                                >
                                    {differentReturnLocation && (
                                        <>
                                            <div className="btn">
                                                {option === "delivery" ? (
                                                    <Select
                                                        options={options}
                                                        isSearchable={true}
                                                        onChange={(selectedOption) =>
                                                            setPickupLocation(selectedOption)
                                                        }
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
                                                        placeholder="delivery"
                                                    />
                                                ) : (
                                                    <Select
                                                        options={options}
                                                        isSearchable={true}
                                                        onChange={(selectedOption) =>
                                                            setPickupLocation(selectedOption)
                                                        }
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
                                                        placeholder="تحديد موقع"
                                                    />
                                                )}
                                            </div>
                                            <div className="switch">
                                                <img src={switchIcon} alt="" />
                                            </div>
                                            <div className="btn">
                                                <Select
                                                    options={options}
                                                    isSearchable={true}
                                                    onChange={(selectedOption) =>
                                                        setReturnLocation(selectedOption)
                                                    }
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
                                                    placeholder="تحديد موقع"
                                                />
                                            </div>
                                        </>
                                    )}
                                    {!differentReturnLocation && (
                                        <>
                                            <div className="btn" style={{ textAlign: "end" }}>
                                                {selectedOption === "delivery" ? (
                                                    <>
                                                        {addressesData.length === 0 && (
                                                            <Link onClick={() => setShow(true)}>
                                                                Add Location
                                                            </Link>
                                                        )}
                                                        <CreatableSelect
                                                            options={addressesData}
                                                            isSearchable={true}
                                                            onChange={(selectedOption) =>
                                                                setDeliveryAddress(selectedOption)
                                                            }
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
                                                    </>
                                                ) : (
                                                    <Select
                                                        options={options}
                                                        isSearchable={true}
                                                        onChange={(selectedOption) =>
                                                            setPickupLocation(selectedOption)
                                                        }
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
                                                        placeholder="تحديد موقع"
                                                    />
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeButton === "btn2" && (
                    <div className="grid__two ">
                        <div className="one">
                            <div className="flex">
                                <button onClick={handleSubmit}>
                                    بحث
                                    <img src={search} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="two">
                            <div className="item">
                                <p>Pickup date & time</p>
                                <div className="btn">
                                    <DatePicker
                                        selected={pickupTime}
                                        onChange={(date) => setPickupTime(date)}
                                        showTimeSelect
                                        minTime={minTime}
                                        maxTime={maxTime}
                                        dateFormat="Pp"
                                        timeIntervals={60}
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <label htmlFor="pickupHours" className="pickupHours__">
                                    {" "}
                                    Pickup duration:
                                </label>
                                <div className="input-group">
                                    <select
                                        className="form-select"
                                        id="pickupHours"
                                        value={selectedMonthsInfo}
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
                        </div>
                        <div className="three">
                            <div className="top">
                                <ul className="start">
                                    <li>
                                        <div className="item">
                                            <p>Return to a different location</p>
                                            <input
                                                type="checkbox"
                                                checked={differentReturnLocation}
                                                onChange={(e) =>
                                                    handleReturnLocationChange(e.target.checked)
                                                }
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <p>Per Month</p>
                                            <input
                                                type="radio"
                                                value="perMonth"
                                                checked={selectedOption === "perMonth"}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <div className="end">موقع الاستلام والعودة</div>
                            </div>
                            <div className="bottom">
                                <div
                                    className="grid"
                                    style={{
                                        gridTemplateColumns: !differentReturnLocation
                                            ? "1fr"
                                            : "auto 50px auto",
                                    }}
                                >
                                    {differentReturnLocation && (
                                        <>
                                            <div className="btn">
                                                {option === "delivery" ? (
                                                    <Select
                                                        options={options}
                                                        isSearchable={true}
                                                        onChange={(selectedOption) =>
                                                            setPickupLocation(selectedOption)
                                                        }
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
                                                        placeholder="delivery"
                                                    />
                                                ) : (
                                                    <Select
                                                        options={options}
                                                        isSearchable={true}
                                                        onChange={(selectedOption) =>
                                                            setPickupLocation(selectedOption)
                                                        }
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
                                                        placeholder="تحديد موقع"
                                                    />
                                                )}
                                            </div>
                                            <div className="switch">
                                                <img src={switchIcon} alt="" />
                                            </div>
                                            <div className="btn">
                                                <Select
                                                    options={options}
                                                    isSearchable={true}
                                                    onChange={(selectedOption) =>
                                                        setReturnLocation(selectedOption)
                                                    }
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
                                                    placeholder="تحديد موقع"
                                                />
                                            </div>
                                        </>
                                    )}
                                    {!differentReturnLocation && (
                                        <>
                                            <div className="btn" style={{ textAlign: "end" }}>
                                                {selectedOption === "delivery" ? (
                                                    <>
                                                        {addressesData.length === 0 && (
                                                            <Link to={"/saved-adress/1"}>Add Location</Link>
                                                        )}
                                                        <CreatableSelect
                                                            options={addressesData}
                                                            isSearchable={true}
                                                            onChange={(selectedOption) =>
                                                                setDeliveryAddress(selectedOption)
                                                            }
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
                                                    </>
                                                ) : (
                                                    <Select
                                                        options={options}
                                                        isSearchable={true}
                                                        onChange={(selectedOption) =>
                                                            setPickupLocation(selectedOption)
                                                        }
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
                                                        placeholder="تحديد موقع"
                                                    />
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeButton === "btn1" && (
                    <div className="grid__two ">
                        <div className="one">
                            <div className="flex">
                                <button onClick={handleSubmit}>
                                    بحث
                                    <img src={search} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="two">
                            <div className="item">
                                <p>Pickup date & time</p>
                                <div className="btn">
                                    <DatePicker
                                        selected={pickupTime}
                                        onChange={(date) => setPickupTime(date)}
                                        showTimeSelect
                                        dateFormat="Pp"
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <p>Return date & time</p>
                                <div className="btn">
                                    <DatePicker
                                        selected={returnTime}
                                        onChange={(date) => setReturnTime(date)}
                                        showTimeSelect
                                        dateFormat="Pp"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="three">
                            <div className="top">
                                <ul className="start">
                                    <li>
                                        <div className="item">
                                            <p>Return to a different location</p>
                                            <input
                                                type="checkbox"
                                                onChange={(e) =>
                                                    setDifferentReturnLocation(e.target.checked)
                                                }
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <p>Delivery</p>
                                            <input
                                                type="radio"
                                                value="delivery"
                                                checked={selectedOption === "delivery"}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <div className="end">موقع الاستلام والعودة</div>
                            </div>
                            <div className="bottom">
                                <div
                                    className="grid"
                                    style={{
                                        gridTemplateColumns: !differentReturnLocation
                                            ? "1fr"
                                            : "auto 50px auto",
                                    }}
                                >
                                    {differentReturnLocation && (
                                        <>
                                            <div className="btn">
                                                <input
                                                    type="text"
                                                    ref={pickupLocationRef}
                                                    placeholder="تحديد موقع"
                                                    onClick={() => setActiveInput("pickup")}
                                                    onChange={(e) => setPickupLocation(e.target.value)}
                                                />
                                            </div>
                                            <div className="switch">
                                                <img src={switchIcon} alt="" />
                                            </div>
                                            <div className="btn">
                                                <input
                                                    type="text"
                                                    ref={returnLocationRef}
                                                    placeholder="تحديد موقع"
                                                    onClick={() => setActiveInput("return")}
                                                    onChange={(e) => setReturnLocation(e.target.value)}
                                                />
                                            </div>
                                        </>
                                    )}
                                    {!differentReturnLocation && (
                                        <>
                                            <div className="btn">
                                                <input
                                                    type="text"
                                                    ref={pickupLocationRef}
                                                    placeholder="تحديد موقع"
                                                    onClick={() => setActiveInput("pickup")}
                                                    onChange={(e) => setPickupLocation(e.target.value)}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {show && <MapComponent setShow={setShow} />}
        </section>
    );
};

export default Controls;
