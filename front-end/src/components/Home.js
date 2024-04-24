import {useState} from "react";

/**
 * Home component that serves as the landing page of the application.
 * It displays a map and manages the application state for the 'text' content.
 * The component also includes a function, `handleSubmit`, that is responsible for
 * asynchronously fetching data from the backend server and updating the state with the response.
 *
 * @function Home
 * @param {function} handleSubmit - Asynchronously fetches data from the backend server when invoked.
 *        On a successful response where the server returns an 'OK' status, the response data
 *        is set to the state's 'text'. Errors during the fetch process are logged to the console.
 *        This function does not take any parameters and does not return any value.
 * @returns {JSX.Element} A JSX element representing the home page.
 */
const Home = () => {
    const [text, setText] = useState("");
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

    return(
        <div className="text-center">
            <h2>Home</h2>
            <br/>
            <br/>
            <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-75.36861419677734%2C39.85730997290123%2C-74.96006011962892%2C40.04575171819509&amp;layer=mapnik&amp;marker=39.95159574030591%2C-75.16433715820312"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=39.9516&amp;mlon=-75.1643#map=12/39.9516/-75.1643">View Larger Map</a></small>
        </div>
    )
}

export default Home;