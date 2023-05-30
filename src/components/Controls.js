import React, { useState, useEffect, useRef } from "react";
import "../scss/controls.scss";
import search from "../assests/search.png";
import switch1 from "../assests/Switches.png";
import switch2 from "../assests/Switches (1).png";
import switchIcon from "../assests/Seach mid ICON.png";
import text1 from "../assests/text1.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import text2 from "../assests/text2.png";
import { ToastContainer, toast } from "react-toastify";
import text3 from "../assests/control1.png";
import { setRentalDetails } from "../Redux/actions/rentalActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
const Controls = () => {
    const rentalInfo = useSelector((state) => state.RentalInfo); // assuming your reducer is named RentalInfo

    const [pickupLocation, setPickupLocation] = useState("");
    const [returnLocation, setReturnLocation] = useState("");
    const [pickupTime, setPickupTime] = useState(new Date());
    const [returnTime, setReturnTime] = useState(new Date());
    const [perDay, setPerDay] = useState(false);
    const [perHour, setPerHour] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const dispatch = useDispatch();
    const [differentReturnLocation, setDifferentReturnLocation] = useState(false);
    const [activeButton, setActiveButton] = useState('btn3');
    const navigate = useNavigate();
    const minTime = setHours(setMinutes(new Date(), 0), 9);

    // End time at 9PM
    const maxTime = setHours(setMinutes(new Date(), 0), 21);
    const pickupLocationRef = useRef(null);
    const returnLocationRef = useRef(null);

    const [activeInput, setActiveInput] = useState(null);
    const [selectedOption, setSelectedOption] = useState("perDay"); // Default selection is 'perDay'
    useEffect(() => {
        if (activeInput === "pickup") {
            pickupLocationRef.current.focus();
        } else if (activeInput === "return") {
            returnLocationRef.current.focus();
        }
    }, [activeInput]);

    const handleSubmit = () => {
        if (!pickupLocation || !pickupTime || !returnTime || !selectedOption) {
            toast.error("Please fill out all fields");
            return;
        }

        dispatch(
            setRentalDetails({
                pickupLocation,
                returnLocation,
                pickupTime,
                returnTime,
                selectedOption,
            })
        );

        navigate("/fleet#cars");
    };
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
        <section className="controls">
            <div className="container">
                <div className="grid__one">
                    <div className="start"></div>
                    <div className="btns">
                        <button className={activeButton === 'btn1' ? 'active' : ''} onClick={() => setActiveButton('btn1')}>
                            <img src={text1} alt="" />
                        </button>
                        <button className={activeButton === 'btn2' ? 'active' : ''} onClick={() => setActiveButton('btn2')}>
                            <img src={text2} alt="" />
                        </button>
                        <button className={activeButton === 'btn3' ? 'active' : ''} onClick={() => setActiveButton('btn3')}>
                            <img src={text3} alt="" />
                        </button>
                    </div>
                </div>

                {activeButton === 'btn3' && (
                    <div className="grid__two">
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

                {activeButton === 'btn2' && (
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
                                        gridTemplateColumns:
                                            "1fr",
                                    }}
                                >
                                    <div className="btn">
                                        <input
                                            type="text"
                                            ref={pickupLocationRef}
                                            placeholder="تحديد موقع"
                                            onClick={() => setActiveInput("pickup")}
                                            onChange={(e) => setPickupLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeButton === 'btn1' && (
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
        </section>
    );
};

export default Controls;
