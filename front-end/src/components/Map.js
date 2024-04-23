import React, {useEffect, useState} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  // declar variables
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Ensures the div id 'map' is not already initialized by Leaflet
    const container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Function to add a marker to the map
    const addMarker = (e) => {
      // Extract latitude and longitude from the event
      const { lat, lng } = e.latlng;

      // Create and add the marker to the map
      L.marker([lat, lng]).addTo(map);
    };

    // Add click event listener to the map
    map.on("click", addMarker);

    // Cleanup function to run when the component unmounts
    return () => {
      map.remove();
    };
  }, []); // The empty array ensures this effect runs only once upon mounting

  // load submissions from backend upon mounting
    useEffect(() => {
      async function retrieveData() {
        const requestOptions = {
          method: "GET",
          credentials: "include",
        };

        const backendUrl = "http://localhost:5000/retrieve-all";

        try {
          const response = await fetch(backendUrl, requestOptions);
          const data = await response.json();

          if (response.ok) {
            // unpack JSON data
            console.log(data);
            setTableData(data);
          } else {
            console.log("Data fetch error:", data);
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      }

      retrieveData().then(() => {
        console.log("Data retrieved");
        //
      });
    }, []);

  return (
      <div>
        <div id="map" style={{height: "500px"}}></div>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Establishment Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            <th scope="col">Discount</th>
            <th scope="col">Submitter ID</th>
          </tr>
          </thead>
          <tbody>
          {tableData.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data[0]}</th>
                {/* Using the first value in the inner array as the row number */}
                <td>{data[1]}</td>
                {/* Establishment Name */}
                <td>{data[2]}</td>
                {/* Address */}
                <td>{data[3]}</td>
                {/* City */}
                <td>{data[4]}</td>
                {/* State */}
                <td>{data[5]}</td>
                {/* Zip */}
                <td>{data[6]}</td>
                {/* Discount */}
                <td>{data[13]}</td>
                {/* Submitter ID */}
              </tr>
          ))}
          </tbody>
        </table>
      </div>);
};

export default MapComponent;
