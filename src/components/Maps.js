import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import phone from "../assests/phone.png";
import watch from "../assests/watch.png";
import down from "../assests/down.png"
import ico1 from "../assests/ico1.png"
import ico2 from "../assests/ico2.png"
import ico3 from "../assests/ico3.png"
const containerStyle = {
    height: "466px",
    width: "620px",
    borderRadius: "30px",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

function Maps() {
    const [location, setLocation] = useState({
        lat: 0,
        lng: 0,
    });
    useEffect(() => {
        // replace this with your own API key
        const apiKey = "AIzaSyAgPZjd32fLLGuiKK0tNpLmqhqEoEBOSG0";
        const address = "197 avenue gambetta Bagnolet, 93170";
        axios
            .get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
            )
            .then((response) => {
                // update state with location from response
                setLocation(response.data.results[0].geometry.location);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }, []);
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAgPZjd32fLLGuiKK0tNpLmqhqEoEBOSG0" // replace this with your own API key
        >
            <div className="map">
                <div className="container__">
                    <div className="grid">
                        <div className="start">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={location}
                                zoom={15}
                            >
                                <Marker position={location} />
                            </GoogleMap>

                        </div>
                        <div className="info">
                            <div className="item">
                                <label htmlFor="">المنطقة</label>
                                <div className="dropdown">
                                    <div className="icon">
                                        <img src={down} alt="" />
                                    </div>
                                    <p>اختر منطقة</p>
                                    <div className="ico">
                                        <img src={ico1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <label htmlFor="">المدينة</label>
                                <div className="dropdown">
                                    <div className="icon">
                                        <img src={down} alt="" />
                                    </div>
                                    <p>اختر مدينة</p>
                                    <div className="ico">
                                        <img src={ico2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <label htmlFor="">الفرع</label>
                                <div className="dropdown">
                                    <div className="icon">
                                        <img src={down} alt="" />
                                    </div>
                                    <p>اختر فرعًا</p>
                                    <div className="ico">
                                        <img src={ico3} alt="" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="bottom">
                        <div className="item">
                            <div className="end">
                                <h4>شارع النجد بالرياض</h4>
                                <p>LS230201</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">

                                <img src={phone} alt="" />

                            </div>
                            <div className="end">
                                {" "}
                                <p>+9665xxxxxxxx</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">

                                <img src={watch} alt="" />

                            </div>
                            <div className="end">
                                {" "}
                                <h4>الأحد إلى الخميس</h4>
                                <p>9:00 صباحًا - 11:00 مساءً</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="end">
                                <h4>الجمعة - السبت</h4>
                                <p>4:00 مساءً - 11:00 مساءً</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadScript>
    );
}

export default React.memo(Maps);
