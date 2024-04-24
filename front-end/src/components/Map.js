import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
/**
 * MapComponent is a functional component that integrates an interactive map using Leaflet.
 * It initializes and displays a map, allowing users to add markers with a click. The component also
 * handles fetching and displaying data in a tabular format, where clicking on a row centers the map on
 * the corresponding location.
 *
 * @function MapComponent
 * @param {function} handleRowClick - Handles the logic when a row in the table data is clicked. It centers
 *        the map to the coordinates of the clicked row. Expects latitude and longitude as arguments.
 * @param {function} addMarker - Adds a marker to the map at the location where the user clicks.
 * @param {Object[]} tableData - The state variable that holds the data fetched from the backend to populate
 *        the table list.
 * @param {Object} mapRef - A useRef hook to keep a mutable reference to the map instance for dynamic updates.
 * @returns {JSX.Element} A JSX element representing the map and the data table list.
 */

const MapComponent = () => {
  const [tableData, setTableData] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("map").setView([51.505, -0.09], 13);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const addMarker = (e) => {
      const { lat, lng } = e.latlng;
      L.marker([lat, lng]).addTo(map);
    };

    map.on("click", addMarker);

    return () => {
      map.remove();
    };
  }, []);

  const handleRowClick = (latitude, longitude) => {
    console.log("Clicked row with latitude:", latitude, "longitude:", longitude);

    if (latitude !== undefined && longitude !== undefined && mapRef.current) {
      const map = mapRef.current;
      map.setView([latitude, longitude], 13);
    } else {
      console.error("Invalid latitude or longitude");
    }
  };

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
    });
  }, []);

  return (
    <div className="map-page-container">
      <div className="map-container">
        <div id="map" className="map"></div>
      </div>
      <div className="submissions-container">
        <div className="submissions-scrollable">
          {tableData.map((data, index) => (
            <div
              className="submission-box"
              key={index}
              onClick={() => handleRowClick(data[11], data[12])}
            >
              <div className="establishment-name">{data[1]}</div>
              <div className="address">{`${data[2]}, ${data[3]}, ${data[4]}, ${data[5]}`}</div>
              <div className="discount-description">{data[6]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
