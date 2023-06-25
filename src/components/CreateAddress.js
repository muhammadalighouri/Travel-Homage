import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Autocomplete from 'react-google-autocomplete';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');

    const handleApiLoaded = (map, maps) => {
        setMap(map);

        // Add a listener to center the map on the selected location
        maps.event.addListener(map, 'center_changed', () => {
            if (selectedLocation) {
                map.panTo(selectedLocation);
            }
        });
    };

    const handlePlaceSelect = (place) => {
        setSelectedLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        });

        if (map) {
            // Move the map to the selected location
            map.panTo({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            });
        }
    };


    const handleSearch = () => {
        if (!searchQuery) {
            // If the search query is empty, return or show an error message
            return;
        }

        const autocompleteService = new window.google.maps.places.AutocompleteService();
        const placesService = new window.google.maps.places.PlacesService(map);

        autocompleteService.getPlacePredictions(
            {
                input: searchQuery,
                types: ['geocode'], // Set the desired place types
                componentRestrictions: { country: 'ksa' }, // Set the country restriction if needed
            },
            (predictions, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions && predictions.length > 0) {
                    const placeId = predictions[0].place_id;
                    placesService.getDetails({ placeId }, (placeResult, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
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
        setModalVisible(true);
    };

    const handleModalConfirm = () => {
        setModalVisible(false);
        setSearchQuery('');
        setTitle('');
    };

    return (
        <div className="container" style={{ gap: '10px' }}>
            <div className="form-group row">
                <div className="col">
                    <Autocomplete
                        apiKey="AIzaSyA9wHLQcW2_cSLKnvcQ57jKsg48ltRpY0U"
                        onPlaceSelected={handlePlaceSelect}
                        types={['geocode']}
                        componentRestrictions={{ country: 'us' }}
                        className="form-control custom-autocomplete" // Add a custom CSS class
                        placeholder="Search for a location"
                    />
                </div>
                <div className="col">
                    <button onClick={handleSearch} className="btn btn-primary">
                        Search
                    </button>
                </div>
            </div>
            <div style={{ height: '400px', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyA9wHLQcW2_cSLKnvcQ57jKsg48ltRpY0U' }}
                    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
                    defaultZoom={12}
                    center={selectedLocation} // Set the center prop to the selectedLocation
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                />

            </div>
            <div className="mt-3">
                <button onClick={handleAddLocation} className="btn btn-primary">
                    Add Location
                </button>
            </div>
            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-dark'>Enter a title for the location</Modal.Title>
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
                    <Button variant="secondary" onClick={() => setModalVisible(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MapComponent;
