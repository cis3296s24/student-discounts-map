import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {wait} from "@testing-library/user-event/dist/utils";


function SubmissionPage() {
    // State variables to store form data
    const [establishmentName, setEstablishmentName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [discount, setDiscount] = useState('');
    const [submitterID, setSubmitterID] = useState('');
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const geocodeAddress = async () => {
        const fullAddress = `${address}, ${city}, ${state}, ${zip}`;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(fullAddress)}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`;
    
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const { tempLat, tempLng } = data.results[0].geometry;
                setLat(tempLat);
                setLng(tempLng);
                console.log(lat, lng)
            } else {
                alert('Unable to geocode address.');
                // Handle no results or invalid data
            }
        } catch (error) {
            console.error('Geocoding error:', error);
            alert('Error geocoding address. Please try again.');
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ establishmentName, address, city, state, zip, discount, submitterID, lat, lng });

        // Perform the geocoding and update the map
        geocodeAddress().then(() => {
            console.log("Geocoding complete.")
        });

        // Check if the lat and lng are set
        if (lat === 0 || lng === 0) {
            alert('Please enter a valid address.');
            return;
        }

        // Build the request payload
        const payload = {
            establishmentName,
            address,
            city,
            state,
            zip,
            discount,
            submitterID,
            lat,
            lng
        };

        // Send the form data to the server
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };
        const backendUrl = 'http://localhost:5000';
        const submissionUrl = `${backendUrl}/submit`;
        try {
            const response = await fetch(submissionUrl, requestOptions);
            const data = await response.json();
            if (response.ok) {
                alert('Submission successful!');
            } else {
                alert('Submission failed. Please try again.');
            }
        }
        catch (error) {
            console.error('Submission error:', error);
            alert('Error submitting form. Please try again.');
        }

        // Clear the form fields after submission
        setEstablishmentName('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
        setDiscount('');
    };

    // Function to handle map click
    const handleMapClick = (e) => {
        setLocation(e.latlng); // Set the location when the map is clicked
    }

    return (
        <div className="submission-container mt-7">
            <div className="map-container">
                <MapContainer center={[39.9526, -75.1652]} zoom={13} style={{ height: '400px', width: '100%' }} onClick={handleMapClick}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
                    {location && (
                        <Marker position={location}>
                            <Popup>
                                <strong>{establishmentName}</strong>
                                <br />
                                {discount}
                            </Popup>
                        </Marker>
    )}
                </MapContainer>
            </div>
            <div className="form-fields-container">
                <div className="form-container">
                    <h2 className="mb-4">Submit Your Student Discount Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="establishmentName" className="form-label">Establishment Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ma and Pa's Bar and Grill"
                                id="establishmentName"
                                value={establishmentName}
                                onChange={(e) => setEstablishmentName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="address-fields mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Street"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="State"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Zip Code"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="discount" className="form-label">Discount Description</label>
                            <textarea
                                className="form-control"
                                placeholder='Bogo Fridays for temple students'
                                id="discount"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                required
                                rows="4"
                            />
                        </div>                        
                        <button type="submit" className="btn btn-primary">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default SubmissionPage;
