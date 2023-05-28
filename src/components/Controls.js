import React, { useState, useEffect } from 'react'
import "../scss/controls.scss"
import search from "../assests/search.png"
import switch1 from "../assests/Switches.png"
import switch2 from "../assests/Switches (1).png"
import switchIcon from "../assests/Seach mid ICON.png"
import text1 from "../assests/text1.png"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import text2 from "../assests/text2.png"
import text3 from "../assests/text3.png"
import { setRentalDetails } from '../Redux/actions/rentalActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
const Controls = () => {
    const rentalInfo = useSelector(state => state.RentalInfo); // assuming your reducer is named RentalInfo

    const [pickupLocation, setPickupLocation] = useState('');
    const [returnLocation, setReturnLocation] = useState('');
    const [pickupTime, setPickupTime] = useState(new Date());
    const [returnTime, setReturnTime] = useState(new Date());
    const [perDay, setPerDay] = useState(false);
    const [perHour, setPerHour] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = () => {
        dispatch(setRentalDetails({
            pickupLocation,
            returnLocation,
            pickupTime,
            returnTime,
            perDay,
            perHour,
            delivery
        }));

        navigate("/fleet");
    };
    useEffect(() => {
        if (rentalInfo) {
            setPickupLocation(rentalInfo.pickupLocation || '');
            setReturnLocation(rentalInfo.returnLocation || '');
            setPickupTime(rentalInfo.pickupTime || new Date());
            setReturnTime(rentalInfo.returnTime || new Date());
            setPerDay(rentalInfo.perDay || false);
            setPerHour(rentalInfo.perHour || false);
            setDelivery(rentalInfo.delivery || false);
        }
    }, [rentalInfo]);
    return (
        <section className='controls'>
            <div className="container">
                <div className="grid__one">
                    <div className="start">

                    </div>
                    <div className="btns">
                        <button>
                            <img src={text1} alt="" />
                        </button>
                        <button>
                            <img src={text2} alt="" />
                        </button>
                        <button>
                            <img src={text3} alt="" />
                        </button>

                    </div>
                </div>
                <div className="grid__two">
                    <div className="one">
                        <div className="flex">
                            <button onClick={handleSubmit}>
                                بحث<img src={search} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="two">
                        <div className="item">
                            <p>Pickup date & time</p>
                            <div className="btn">
                                <DatePicker selected={pickupTime} onChange={(date) => setPickupTime(date)} showTimeSelect dateFormat="Pp" />
                            </div>
                        </div>
                        <div className="item">
                            <p>Return date & time</p>
                            <div className="btn">
                                <DatePicker selected={returnTime} onChange={(date) => setReturnTime(date)} showTimeSelect dateFormat="Pp" />
                            </div>
                        </div>
                    </div>
                    <div className="three">
                        <div className="top">
                            <ul className="start">
                                <li>
                                    <div className="item">
                                        <p>Return to a different location</p>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <p>Per Day</p>
                                        <input type="checkbox" onChange={(e) => setPerDay(e.target.checked)} />
                                    </div>
                                    <div className="item">
                                        <p>Per Hour</p>
                                        <input type="checkbox" onChange={(e) => setPerHour(e.target.checked)} />
                                    </div>
                                    <div className="item">
                                        <p>Delivery</p>
                                        <input type="checkbox" onChange={(e) => setDelivery(e.target.checked)} />
                                    </div>
                                </li>
                            </ul>
                            <div className="end">
                                موقع الاستلام والعودة
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="grid">
                                <div className="btn">
                                    <input type="text" placeholder='تحديد موقع' onChange={(e) => setPickupLocation(e.target.value)} />
                                </div>
                                <div className="switch">
                                    <img src={switchIcon} alt="" />
                                </div>
                                <div className="btn">
                                    <input type="text" placeholder='تحديد موقع' onChange={(e) => setReturnLocation(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Controls
