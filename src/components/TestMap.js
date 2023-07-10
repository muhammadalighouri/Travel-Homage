import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
    GeoapifyGeocoderAutocomplete,
    GeoapifyContext
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const TestMap = () => {
    const [type, setType] = useState();
    const [language, setLanguage] = useState();

    const [countryCodes, setCountryCodes] = useState();
    const [debounceDelay, setDebounceDelay] = useState();
    const [limit, setLimit] = useState();
    const [value, setValue] = useState('');
    const [filterByCountryCode, setFilterByCountryCode] = useState();
    const [filterByCircle, setFilterByCircle] = useState();
    const [filterByRect, setFilterByRect] = useState();
    const [filterByPlace, setFilterByPlace] = useState();
    const [biasByCountryCode, setBiasByCountryCode] = useState();
    const [biasByCircle, setBiasByCircle] = useState();
    const [biasByRect, setBiasByRect] = useState();
    const [biasByProximity, setBiasByProximity] = useState();
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [position, setPosition] = useState([51.505, -0.09]);

    function onPlaceSelect(value) {
        setSelectedPlace(value);
        console.log(value);
        setPosition([value.geometry.coordinates[1], value.geometry.coordinates[0]]);
    }






    function onPlaceSelect(value) {
        console.log(value);
    }

    function onSuggectionChange(value) {
        console.log(value);
    }

    function preprocessHook(value) {
        return `${value}, Munich, Germany`
    }

    function postprocessHook(feature) {
        return feature.properties.street;
    }

    function suggestionsFilter(suggestions) {
        const processedStreets = [];

        const filtered = suggestions.filter(value => {
            if (!value.properties.street || processedStreets.indexOf(value.properties.street) >= 0) {
                return false;
            } else {
                processedStreets.push(value.properties.street);
                return true;
            }
        })

        return filtered;
    }

    function onUserInput(input) {
        console.log(input);
    }

    function onOpen(opened) {
        console.log(opened);
    }

    function onClose(opened) {
        console.log(opened);
    }

    return <div>


        <GeoapifyContext apiKey="00a9862ac01f454887fc285e220d8460">

            <GeoapifyGeocoderAutocomplete
                placeSelect={onPlaceSelect}
                suggestionsChange={onSuggectionChange}
                onUserInput={onUserInput}
                onOpen={onOpen}
                onClose={onClose}
                allowNonVerifiedHouseNumber={true}
            />

            <GeoapifyGeocoderAutocomplete
                placeholder="Enter address here"
                value={value}
                type={type}
                lang={language}
                position={position}
                countryCodes={countryCodes}
                limit={limit}
                filterByCountryCode={filterByCountryCode}
                filterByCircle={filterByCircle}
                filterByRect={filterByRect}
                filterByPlace={filterByPlace}
                biasByCountryCode={biasByCountryCode}
                biasByCircle={biasByCircle}
                biasByRect={biasByRect}
                biasByProximity={biasByProximity}
                placeSelect={onPlaceSelect}
                suggestionsChange={onSuggectionChange}
                skipIcons={true}
                skipDetails={true}
                skipSelectionOnArrowKey={true}
                allowNonVerifiedHouseNumber={true}
                allowNonVerifiedStreet={true}
                debounceDelay={debounceDelay}
            />

            <GeoapifyGeocoderAutocomplete
                placeSelect={onPlaceSelect}
                suggestionsChange={onSuggectionChange}
                preprocessHook={preprocessHook}
                postprocessHook={postprocessHook}
                suggestionsFilter={suggestionsFilter}
            />

        </GeoapifyContext>
        <div>
            <GeoapifyContext apiKey="00a9862ac01f454887fc285e220d8460">
                <GeoapifyGeocoderAutocomplete placeSelect={onPlaceSelect} />

                <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="Map data © OpenStreetMap contributors"

                    />

                    {selectedPlace && (
                        <Marker position={position}>
                            <Popup>
                                <div>
                                    <h2>{selectedPlace.properties.formatted}</h2>
                                    <p>Latitude: {position[0]}</p>
                                    <p>Longitude: {position[1]}</p>
                                </div>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </GeoapifyContext>
        </div>

    </div>
}

export default TestMap
