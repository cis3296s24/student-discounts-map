import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function SubmissionPage() {
    // State variables to store form data
    const [name, setName] = useState('');
    const [location, setLocation] = useState(null); // Change to null initially
    const [discount, setDiscount] = useState('');
    const [review, setReview] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to the backend
        // For now, let's just log the form data
        console.log({ name, location, discount, review });
        // Clear the form fields after submission
        setName('');
        setLocation(null); // Reset location to null
        setDiscount('');
        setReview('');
    };

    // Function to handle map click
    const handleMapClick = (e) => {
        setLocation(e.latlng); // Set the location when the map is clicked
    }

    return (
        <div className="login-container">
            <h2 className="mb-4">Submit Your Student Discount Review</h2>
            <div className="form-container">
                <div className="map-container">
                    <label className="form-label">Location</label>
                    <MapContainer
                        center={[39.9526, -75.1652]} // Philadelphia coordinates
                        zoom={13}
                        style={{ height: '400px', width: '100%' }}
                        dragging={true}
                        touchZoom={true}
                        zoomControl={true}
                        scrollWheelZoom={true}
                        doubleClickZoom={false}
                        boxZoom={true}
                        tap={true}
                        onClick={handleMapClick}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {location && <Marker position={location}>
                            <Popup>You placed a pin here!</Popup>
                        </Marker>}
                    </MapContainer>
                </div>
                <div className="form-fields">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="discount" className="form-label">Discount</label>
                            <input
                                type="text"
                                className="form-control"
                                id="discount"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea
                                className="form-control"
                                id="review"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required
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
