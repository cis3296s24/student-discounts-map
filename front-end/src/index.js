/**
 * @file index.js
 * @description This file is the entry point of the React application.
 * It sets up the routing and renders the main application component.
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
 * Check if the user is authenticated by verifying the presence of an access token.
 * @function
 * @name isAuthenticated
 * @returns {boolean} Returns true if the user is authenticated, otherwise false.
 */
const isAuthenticated = () => {
    const accessToken = Cookies.get('access_token');
    console.log("access token: ", accessToken);
    return !!accessToken; // Return true if access token exists, otherwise false
};

/**
 * The main routing configuration of the application.
 * @constant {JSX.Element}
 * @name router
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
