import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapComponent.css";
import "../styles/popup.css";

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
      // This function will be used to create markers and bind popups
  const createMarker = (submission) => {
    const marker = L.marker([submission.latitude, submission.longitude], { title: submission.establishmentName }).addTo(map);
    
    // Create a popup element
    const popupContent = `
      <div class="popup">
        <h2 class="place-name">${submission.establishmentName}</h2>
        ${submission.image ? `<div class="image-container"><img src="${submission.image}" alt="${submission.establishmentName}"></div>` : ''}
        <p class="address">${submission.address}, ${submission.city}, ${submission.state}, ${submission.zip}</p>
        <p class="discount">${submission.discount}</p>
        <p class="submitter">Submitted by: ${submission.submitterID}</p>
      </div>
    `;

    // Bind the popup to the marker
    marker.bindPopup(popupContent);
  };

  // Add a marker for each submission
  tableData.forEach(submission => createMarker(submission));
  }, []);

  return (
    <div className="map-page-container">
      <div className="map-container">
        <div id="map" className="map"></div>
      </div>
      <div className="submissions-container">
        <div className="submissions-scrollable">
          {tableData.map((submission, index) => (
            <div
              className="submission-box"
              key={index}
              onClick={() => handleRowClick(submission.latitude, submission.longitude)}
            >
              <div className="establishment-name">{submission.establishmentName}</div>
              <div className="address">{`${submission.address}, ${submission.city}, ${submission.state}, ${submission.zip}`}</div>
              <div className="discount-description">{submission.discount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default MapComponent;
