import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Autocomplete from 'react-google-autocomplete';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAddress, getAllAddresses } from '../Redux/actions/addressActions';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from "../assests/close.png"
const MapComponent = ({ setActiveButton, setShow }) => {
    const [map, setMap] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [locations, setLocations] = useState([]);
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.UserLogin.userInfo)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setSelectedLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }, []);

    const handleApiLoaded = (map, maps) => {
        setMap(map);
    };

    const handlePlaceSelect = (place) => {
        const postalCodeComponent = place.address_components.find((component) =>
            component.types.includes('postal_code')
        );
        const postalCode = postalCodeComponent
            ? postalCodeComponent.long_name
            : null;
        const name = place.name ? place.name : place.formatted_address;

        const cityComponent = place.address_components.find((component) =>
            component.types.includes('locality')
        );
        const city = cityComponent ? cityComponent.long_name : 'N/A';

        const stateComponent = place.address_components.find((component) =>
            component.types.includes('administrative_area_level_1')
        );
        const state = stateComponent ? stateComponent.long_name : 'N/A';

        const address = place.formatted_address ? place.formatted_address : 'N/A';

        const location = {
            name: name,
            postalCode: postalCode,
            city: city,
            state: state,
            address: address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        };

        setSelectedLocation(location);

        if (map) {
            setMap(null); // Reset the map to trigger re-rendering
            setTimeout(() => {
                setSelectedLocation(location);
                setMap(map);
            }, 100);
        }
    };




    const handleSearch = () => {
        if (!searchQuery) {
            return;
        }

        const autocompleteService = new window.google.maps.places.AutocompleteService();
        const placesService = new window.google.maps.places.PlacesService(map);

        autocompleteService.getPlacePredictions(
            {
                input: searchQuery,
                types: ['geocode'],
                componentRestrictions: { country: 'SA' },
            },
            (predictions, status) => {
                if (
                    status ===
                    window.google.maps.places.PlacesServiceStatus.OK &&
                    predictions &&
                    predictions.length > 0
                ) {
                    const placeId = predictions[0].place_id;
                    placesService.getDetails({ placeId }, (placeResult, status) => {
                        if (
                            status === window.google.maps.places.PlacesServiceStatus.OK
                        ) {
                            setSelectedLocation({
                                lat: placeResult.geometry.location.lat(),
                                lng: placeResult.geometry.location.lng(),
                            });
                            setModalVisible(true);
                        }
                    });
                } else {
                    console.error('Failed to retrieve place predictions:', status);
                }
            }
        );
    };



    const handleAddLocation = () => {
        if (selectedLocation && title) {
            const newLocation = {
                title: title,
                location: selectedLocation,
            };

        }
        setModalVisible(true);
        setSearchQuery('');
        setTitle('');
        dispatch(createAddress({ ...selectedLocation, title, user: user._id })).then((res) => {
            dispatch(getAllAddresses());
            setActiveButton('addresses');
            toast.success('Address created successfully!');
        }).catch(error => {
            toast.error(error.message || 'Failed to create address. Please try again.');
        });
    };

    const handleModalConfirm = async () => {
        setModalVisible(false);
        try {
            dispatch(createAddress({ ...selectedLocation, title, user: user._id })).then((res) => {
                dispatch(getAllAddresses())
                setActiveButton('addresses')
                toast.success("Address created successfully!");

            })


        } catch (error) {
            toast.error(
                error.message || "Failed to create address. Please try again."
            );
        }
    };
    const handleAddCurrentLocation = () => {
        if (selectedLocation) {
            setLocations([...locations, {
                title: 'Current Location',
                location: selectedLocation
            }]);
        }
    };
    return (
        <div className="map__modal">
            <div className="container-md wrapper" style={{ gap: '10px' }}>
                <img src={closeIcon} className="close__ico" alt="" onClick={() => setShow(false)} />
                <div className="form-group row">
                    <div className="col">
                        <Autocomplete
                            apiKey="AIzaSyA9wHLQcW2_cSLKnvcQ57jKsg48ltRpY0U"
                            onPlaceSelected={handlePlaceSelect}
                            componentRestrictions={{ country: 'SA' }}
                            className="form-control custom-autocomplete"
                            placeholder="Search for a location"
                        />

                    </div>
                    <div className="col">
                        <button onClick={handleSearch} style={{ marginRight: '10px' }} className="btn mr-3 btn-warning">
                            Search
                        </button>
                        <button onClick={handleAddCurrentLocation} className="btn btn-warning">
                            Add Current Location
                        </button>
                    </div>
                </div>
                <div style={{ height: '400px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyA9wHLQcW2_cSLKnvcQ57jKsg48ltRpY0U' }}
                        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
                        defaultZoom={12}
                        center={selectedLocation}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                    />
                </div>
                <div className="mt-3">
                    <button onClick={handleAddLocation} className="btn btn-warning">
                        Add Location
                    </button>
                </div>
                {modalVisible && (
                    <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title className='text-dark'>Location Title</Modal.Title>
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
                            <Button variant="secondary" >
                                Close
                            </Button>
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
