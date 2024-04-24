/**
 * @file index.js
 * @description Main entry point for the React application. This file initializes the router,
 * sets up routes, and renders the main application components. It also includes utility functions
 * for authentication and performance monitoring.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Map from "./components/Map";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Submit from './components/Submit'
import ErrorPage from "./components/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import Cookies from "js-cookie";

/**
 * Determines if a user is authenticated by checking for an access token stored in cookies.
 * This function retrieves the 'access_token' from the cookies and checks its existence
 * to validate user authentication.
 *
 * @returns {boolean} True if an access token exists, indicating authenticated state; otherwise, false.
 */
const isAuthenticated = () => {
    const accessToken = Cookies.get('access_token');
    console.log("access token: ", accessToken);
    return !!accessToken; // Return true if access token exists, otherwise false
};
/**
 * Main router setup for the application using React Router. Defines the application layout
 * and routes for various components. It includes routes for home, map, login, signup, submit,
 * and a catch-all route for unmatched URLs that directs to an error page.
 *
 * @returns {JSX.Element} A JSX element representing the configured router with all routes and layout.
 */
const router = (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<App />} errorElement={<ErrorPage />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/submit" element={<Submit />}/>
                    {/* Catch-all route for unmatched routes */}
                    <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for unmatched routes */}
                </Route>
            </Routes>
        </Layout>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{router}</React.StrictMode>);

/**
 * Initializes performance reporting for the application. Provides a mechanism to pass a function
 * to log results or send to an analytics endpoint. More information can be found at the provided URL.
 * 
 * @see https://bit.ly/CRA-vitals
 */
reportWebVitals();
