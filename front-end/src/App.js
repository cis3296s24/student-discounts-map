import {Outlet, useNavigate} from "react-router-dom";
import "./styles/App.css";
import "./styles/custom_bootstrap.css"
import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import Alert from "./components/Alert";

function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");


  const navigate = useNavigate();

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
    // TODO: Refresh code
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
          setAlertMessage: setAlertMessage,
          setAlertClassName: setAlertClassName,
        }}/>
      </div>
  );
}

export default App;
