import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
    height: "500px",
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
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={location}
                            zoom={15}
                        >
                            <Marker position={location} />
                        </GoogleMap>
                        <div className="info">
                            <div className="first">
                                <h3>
                                    Get in touch
                                </h3>
                                <span></span>
                                <div className="points">
                                    <div className="top">
                                        <h4>Work and general inquiries</h4>
                                        <p>33(0)9 88 31 29 23</p>
                                    </div>
                                    <div className="bottom">
                                        <h4>Email:</h4>
                                        <p>Contact@mkgreenenergy.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="second">
                                <h3>
                                    Post Address
                                </h3>
                                <span></span>
                                <div className="points">
                                    <div className="top">
                                        <h4>Service Office</h4>
                                        <p>197 avenue gambetta Bagnolet , 93170</p>
                                    </div>
                                    <div className="bottom">
                                        <h4>Assistance hours:</h4>
                                        <p>Monday – Friday 6 am to 8 pm EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadScript>
    );
}

export default React.memo(Maps);
