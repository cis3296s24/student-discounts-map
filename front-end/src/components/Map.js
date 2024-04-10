import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    // Ensure the div id 'map' is not already initialized by Leaflet
    const container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Cleanup function to run when the component unmounts
    return () => {
      map.remove();
    };
  }, []); // The empty array ensures this effect runs only once upon mounting

  return <div id="map" style={{ height: "500px" }}></div>;
};

export default MapComponent;
