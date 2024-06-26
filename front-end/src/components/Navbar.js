import {Link} from "react-router-dom";
import "../styles/Navbar.css";

/**
 * Navbar component for the main page layout.
 *
 * @component
 * @returns {JSX.Element}
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