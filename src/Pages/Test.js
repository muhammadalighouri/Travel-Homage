import React, { useEffect, useRef, useState } from 'react';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const GeocoderAutocompleteWrapper = ({ onSuggest }) => {
    const containerRef = useRef(null);
    const geocoderRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            geocoderRef.current = new GeocoderAutocomplete(containerRef.current, 'YOUR_API_KEY', {
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

const MapComponent = () => {
    const mapContainerRef = useRef(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (location && mapContainerRef.current) {
            const map = L.map(mapContainerRef.current).setView([location.lat, location.lon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
        }
    }, [location]);

    const handleSelect = (result) => {
        setLocation(result.location);
    };

    return (
        <div>
            <GeocoderAutocompleteWrapper onSuggest={handleSelect} />
            <div ref={mapContainerRef} style={{ height: '400px' }}></div>
        </div>
    );
};

export default MapComponent;
