import React from 'react'
import "../scss/controls.scss"
import search from "../assests/search.png"
import switch1 from "../assests/Switches.png"
import switch2 from "../assests/Switches (1).png"
import switchIcon from "../assests/Seach mid ICON.png"
import text1 from "../assests/text1.png"
import text2 from "../assests/text2.png"
import text3 from "../assests/text3.png"
const Controls = () => {
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
                            <button>
                                بحث<img src={search} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="two">
                        <div className="item">
                            <p>
                                Pickup date & time
                            </p>
                            <div className="btn">
                                <div className="start">الوقت</div>
                                <div className="end">
                                    التاريخ
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <p>
                                Return date & time
                            </p>
                            <div className="btn">
                                <div className="start">الوقت</div>
                                <div className="end">
                                    التاريخ
                                </div>
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
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="item">
                                        <p>Per Hour</p>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="item">
                                        <p>Delivery</p>
                                        <input type="checkbox" name="" id="" />
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
                                    <input type="text" placeholder='تحديد موقع' />
                                </div>
                                <div className="switch">
                                    <img src={switchIcon} alt="" />
                                </div>
                                <div className="btn">
                                    <input type="text" placeholder='تحديد موقع' />
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
