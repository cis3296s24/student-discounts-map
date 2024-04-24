import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * Map component for displaying a map with a table of data.
 *
 * @component
 * @returns {Element}
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
      <div>
        <div id="map" style={{ height: "500px" }}></div>
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
              <tr
                  key={index}
                  onClick={() => handleRowClick(data[11], data[12])}
                  style={{ cursor: "pointer" }}
              >
                <th scope="row">{data[0]}</th>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                <td>{data[3]}</td>
                <td>{data[4]}</td>
                <td>{data[5]}</td>
                <td>{data[6]}</td>
                <td>{data[13]}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default MapComponent;
