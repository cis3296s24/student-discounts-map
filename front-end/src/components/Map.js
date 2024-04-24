import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapComponent.css";

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
              onClick={() => handleRowClick(data.latitude, data.longitude)}
            >
              <div className="establishment-name">{data.establishmentName}</div>
              <div className="address">{`${data.address}, ${data.city}, ${data.state}, ${data.zip}`}</div>
              <div className="discount-description">{data.discount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
