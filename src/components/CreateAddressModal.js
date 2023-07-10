import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import {
    GeoapifyGeocoderAutocomplete,
    GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import Test from "../Pages/Test";
import "../scss/GeoApifyMap.scss";
import icon from "../assests/location.png";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { createAddress, getAllAddresses } from "../Redux/actions/addressActions";
import { toast } from "react-toastify";
import closeIcon from "../assests/close.png"
const MapComponent = ({ setActiveButton, setShow }) => {
    const [clickedLocation, setClickedLocation] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const mapRef = useRef(null);
    const [location, setLocation] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [addressData, setAddressData] = useState({
        address: "",
        city: "",
        title: "",
        state: "",
        lat: "",
        lng: "",
        postalCode: "",
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [locations, setLocations] = useState([]);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.UserLogin.userInfo);
    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        setClickedLocation({ lat, lng });
        reverseGeocode(lat, lng);
        console.log(lat, lng);
        if (mapRef.current) {
            mapRef.current.setView([lat, lng]);
        }
    };
    function onPlaceSelect(value) {
        // setSelectedPlace(value);
        // console.log(value);
        if (value) {
            const { lon, lat } = value.properties;
            // setClickedLocation({ lat, lng: lon });
            console.log(value);
            if (mapRef.current) {
                mapRef.current.setView([lat, lon], 15);
            }
        }
    }

    const reverseGeocode = async (lat, lng) => {
        const apiKey = "66ddd881d22a46d9bc78e260c5dbb0fa";
        const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                const address = data.features[0].properties;
                setAddressData({
                    address: address.address_line1,
                    city: address.city,
                    state: address.state,
                    lat: address.lat,
                    lng: address.lon,
                    postalCode: address.postcode,
                });
                console.log("data:", addressData);
            } else {
                console.error("Reverse Geocoding Error:", data.message);
            }
        } catch (error) {
            console.error("Reverse Geocoding Error:", error);
        }
    };

    const LocationMarker = () => {
        const map = useMapEvents({
            click: handleMapClick,
        });

        const markerIcon = L.icon({
            iconUrl: icon,
            iconSize: [41, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41],
        });

        return clickedLocation ? (
            <Marker position={clickedLocation} icon={markerIcon} />
        ) : null;
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleSelect = (result) => {
        setLocation(result.location);
    };
    const handleModalConfirm = async () => {
        setModalVisible(false);
        try {
            dispatch(createAddress({ ...addressData, title, user: user._id }))
            dispatch(getAllAddresses())
            toast.success("Address created successfully!");
            setShow(false)
            setModalVisible(false);
        } catch (error) {
            toast.error(
                error.message || "Failed to create address. Please try again."
            );
        }
    };
    const handleAddLocation = () => {
        setModalVisible(true);
    };
    return (
        <div className="map__modal">
            <div className="container-md wrapper" style={{ gap: '10px' }}>
                <img src={closeIcon} className="close__ico" alt="" onClick={() => setShow(false)} />

                <div>
                    <GeoapifyContext apiKey="00a9862ac01f454887fc285e220d8460">
                        <GeoapifyGeocoderAutocomplete placeSelect={onPlaceSelect} />
                    </GeoapifyContext>
                </div>
                <MapContainer
                    center={[31.5656822, 74.3141829]}
                    zoom={13}
                    style={{ height: "400px", width: "100%" }}
                    ref={mapRef}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker />
                </MapContainer>
                <div className="mt-3">
                    <button onClick={handleAddLocation} className="btn btn-warning">
                        Add Location
                    </button>
                </div>
                {modalVisible && (
                    <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-dark">Location Title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter a title for the location"
                                className="form-control"
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary" onClick={handleModalConfirm}>
                                Save Location
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default MapComponent;
