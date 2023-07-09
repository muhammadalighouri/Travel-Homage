import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import Test from '../Pages/Test';

const MapComponent = () => {
    const [clickedLocation, setClickedLocation] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const mapRef = useRef(null);
    const [location, setLocation] = useState(null);



    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        setClickedLocation({ lat, lng });
        reverseGeocode(lat, lng);

        if (mapRef.current) {
            mapRef.current.flyTo([lat, lng]);
        }
    };
    const GeocoderAutocompleteWrapper = ({ onSuggest }) => {
        const containerRef = useRef(null);
        const geocoderRef = useRef(null);

        useEffect(() => {
            if (containerRef.current) {
                geocoderRef.current = new GeocoderAutocomplete(containerRef.current, '66ddd881d22a46d9bc78e260c5dbb0fa', {
                    /* Geocoder options */
                });

                geocoderRef.current.on('select', (location) => {
                    // Handle selected location
                    onSuggest(location);
                });

                geocoderRef.current.on('suggestions', (suggestions) => {
                    // Process suggestions
                });
            }
        }, [onSuggest]);

        return <div ref={containerRef}></div>;
    };

    const handleSearch = async () => {
        if (searchQuery) {
            const apiKey = '66ddd881d22a46d9bc78e260c5dbb0fa';
            const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
                searchQuery
            )}&apiKey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (response.ok && data.features && data.features.length > 0) {
                    const [lon, lat] = data.features[0].geometry.coordinates;
                    setClickedLocation({ lat, lng: lon });
                    console.log([lat, lon]);
                    if (mapRef.current) {
                        mapRef.current.flyTo([lat, lon]);
                    }
                } else {
                    console.error('Search Error: No results found');
                }
            } catch (error) {
                console.error('Search Error:', error);
            }
        }
    };

    const reverseGeocode = async (lat, lng) => {
        const apiKey = '66ddd881d22a46d9bc78e260c5dbb0fa';
        const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                const address = data.features[0].properties.formatted;
                console.log('Reverse Geocoding Result:', address);
            } else {
                console.error('Reverse Geocoding Error:', data.message);
            }
        } catch (error) {
            console.error('Reverse Geocoding Error:', error);
        }
    };

    const LocationMarker = () => {
        const map = useMapEvents({
            click: handleMapClick,
        });

        const markerIcon = L.icon({
            iconUrl: 'marker-icon.png',
            iconSize: [25, 41],
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

    return (
        <div>
            <div>
                <GeocoderAutocompleteWrapper onSuggest={handleSelect} />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    style={{ color: 'black' }}
                    placeholder="Search for a location"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <MapContainer
                center={[31.5656822, 74.3141829]}
                zoom={13}
                style={{ height: '400px', width: '100%' }}
                ref={mapRef}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
            </MapContainer>
        </div>
    );
};

export default MapComponent;
