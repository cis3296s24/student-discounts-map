import {useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";

/**
 * Login component for user authentication.
 *
 * @component
 * @returns {JSX.Element} Login component.
 */
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { setJwtToken } = useOutletContext()
    const { setUserID } = useOutletContext()
    const { setAlertClassName } = useOutletContext()
    const { setAlertMessage } = useOutletContext()

    /**
     * Handles the form submission for user login.
     *
     * @async
     * @param {Event} e - The form submission event.
     * @returns {Promise<void>}
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // DEBUG: REMOVE IN RELEASE
        console.log("Login Attempt:", username, password);

        let payload = {
            username: username,
            password: password,
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
        const authenticateUrl = `${backendUrl}/authenticate`;

        fetch(authenticateUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    setAlertClassName("alert-danger");
                    setAlertMessage(data.message);
                } else {
                    setJwtToken(data.access_token);
                    setUserID(data.user_id);
                    setAlertClassName("d-none");
                    setAlertMessage("");
                    navigate("/");
                }
            })
            .catch((error) => {
                setAlertClassName("alert-danger");
                setAlertMessage("Error: " + error);
                return;
            })
        navigate("/home");
    };

    return (
        <div className="login-container">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
