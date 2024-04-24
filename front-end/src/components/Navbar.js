import {Link} from "react-router-dom";
import "../styles/Navbar.css";

/**
 * Navbar component that provides navigation links across the application.
 * It uses the react-router-dom 'Link' components for SPA-friendly navigation.
 * The navbar is fixed to the top of the page and includes links to Home, Map, Login, Sign Up, and Submit pages.
 * It's designed to collapse on smaller screens and be toggleable via a hamburger menu icon.
 *
 * @function Navbar
 * @returns {JSX.Element} A JSX element that renders the navigation bar with links for the application.
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme={"dark"}>
            <div className="container-fluid">
                <Link to={"/"} className={"navbar-brand"}>
                    Student Discounts Map
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/home"} className={"nav-link"}>
                                    Home
                                </Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/map"} className={"nav-link"}>
                                    Map
                                </Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/login"} className={"nav-link"}>
                                    Login
                                </Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/Signup"} className={"nav-link"}>
                                    Sign Up
                                </Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/Submit"} className={"nav-link"}>
                                    Submit
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;