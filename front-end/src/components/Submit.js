import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function SubmissionPage() {
    // State variables to store form data
    const [name, setName] = useState('');
    const [establishmentName, setEstablishmentName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [location, setLocation] = useState(null);
    const [discount, setDiscount] = useState('');
    const [review, setReview] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ establishmentName, name, address, city, state, zip, location, discount, review });
        // Clear the form fields after submission
        setName('');
        setEstablishmentName('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
        setLocation(null);
        setDiscount('');
        setReview('');
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
                    {location && <Marker position={location}><Popup>Selected Location</Popup></Marker>}
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
