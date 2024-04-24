import {Outlet, useNavigate} from "react-router-dom";
import "./styles/App.css";
import "./styles/custom_bootstrap.css"
import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import Alert from "./components/Alert";

/**
 * Main App component for managing user authentication and navigation.
 *
 * @component
 * @returns {JSX.Element} Main App component.
 */
function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");


  const navigate = useNavigate();

    /**
     * Logs out the user by clearing cookies and resetting states.
     */
  const logOut = () => {
    // Clear all cookies
    Object.keys(Cookies.get()).forEach(cookie => Cookies.remove(cookie));

    setJwtToken("");
    setIsAdmin(false)
    setAlertClassName("alert-success");
    setAlertMessage("You have been logged out");
    navigate("/login");
  }

  useEffect(() => {
      /**
       * Refreshes the JWT token by sending a GET request to the /refresh endpoint.
       */
    if(jwtToken === "") {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      }

      fetch("/refresh", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
              setJwtToken(data.access_token);
            }
          })
          .catch((error) => {
            console.log("user is not logged in", error);
          })
    }
  }, [jwtToken])

  return (
      <div>
        <Alert
            message={alertMessage}
            className={alertClassName}
        />
        <Outlet context={{
          jwtToken: jwtToken,
          setJwtToken: setJwtToken,
            setUserID: setUserID,
          setAlertMessage: setAlertMessage,
          setAlertClassName: setAlertClassName,
            userID: userID,
        }}/>
      </div>
  );
}

export default App;
