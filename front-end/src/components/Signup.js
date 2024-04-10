import React, { useState } from 'react';
import {useNavigate, useOutletContext} from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { setAlertClassName } = useOutletContext()
    const { setAlertMessage } = useOutletContext()

    const navigate = useNavigate();

    //update input field state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //backend signup logic
    const handleSubmit = (e) => {
        e.preventDefault();

        //check if password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            setAlertClassName("alert-danger");
            setAlertMessage("Passwords do not match");
            return;
        }

        // build the request payload
        let payload = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        };

        const backendUrl = 'http://localhost:5000';

        const signupUrl = `${backendUrl}/signup`;

        fetch(signupUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setAlertClassName("alert-danger");
                    setAlertMessage(data.message);
                } else {
                    setAlertClassName("alert-success");
                    setAlertMessage("Signup successful");
                    navigate('/login');
                }
            })
            .catch((error) => {
                setAlertClassName("alert-danger");
                setAlertMessage("Signup failed");
            })
    };


    return (
        <div className="signup-container">
            <h2 className="mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
