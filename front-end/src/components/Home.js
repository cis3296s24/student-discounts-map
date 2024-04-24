import {useState} from "react";
import {Link} from "react-router-dom";

/**
 * Home component for the home page.
 * @component
 * @returns {JSX.Element}
 */
const Home = () => {
    const [text, setText] = useState("");

    /**
     * Handles the form submission for fetching data from the backend.
     *
     * @async
     */
    const handleSubmit = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include',
        };

        const backendUrl = 'http://localhost:5000';

        try {
            const response = await fetch(backendUrl, requestOptions)

            const data = await response.json();

            if (response.ok) {
                setText(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-7">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                    <h2>Welcome to the Student Discounts Map Website</h2>
                    <p className="lead">
                        This website is designed to help students find discounts in their area.<br/>
                        If you are a student, you can use this website to find discounts near you,<br/>
                        OR you can add discounts to the map for other students to find.<br/>
                        Help us build a community of students who can save money!<br/>
                        <br/>
                        Happy discount hunting!
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <h3>Get started</h3>
                <div>
                    Create an account or log in to start finding discounts!
                    <br/>
                    <Link to={"/login"}>
                        <button type="button" className="btn btn-primary">
                            Login <span className="badge text-bg-warning">Existing users</span>
                        </button>
                    </Link>
                    <br/>
                    <Link to={"/signup"}>
                        <button type="button" className="btn btn-primary">
                            Sign Up <span className="badge text-bg-info">New users</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;