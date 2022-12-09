import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../pages/Map.css";
import L from "leaflet";

const Maps = () => {
  const blueIcon = L.icon({
    iconUrl: "../../../../assets/images/blue-icon.png",
    iconSize: [32, 32],
    popupAnchor: [0, -15],
  });

  const redIcon = L.icon({
    iconUrl: "../../../../assets/images/red-icon.png",
    iconSize: [32, 32],
    popupAnchor: [0, -15],
  });

  const yellowIcon = L.icon({
    iconUrl: "../../../../assets/images/yellow-icon.png",
    iconSize: [32, 32],
    popupAnchor: [0, -15],
  });

  const greenIcon = L.icon({
    iconUrl: "../../../../assets/images/green-icon.png",
    iconSize: [32, 32],
    popupAnchor: [0, -15],
  });

  const purpleIcon = L.icon({
    iconUrl: "../../../../assets/images/purple-icon.png",
    iconSize: [32, 32],
    popupAnchor: [0, -15],
  });

  const icons = [blueIcon, redIcon, yellowIcon, greenIcon, purpleIcon];
  const search = [
    { lat: 40.416761, long: -3.703691, name: "juan", id: 1, icon: redIcon },
    { lat: 40.416761, long: -3.704, name: "benito", id: 2, icon: blueIcon },
  ];

  return (
    <div className='map-container'>
      <MapContainer
        className='map'
        center={[40.416761, -3.703691]}
        zoom={13}
        zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {search.map((ubication) => {
          return (
            <Marker
              key={ubication.id}
              position={[ubication.lat, ubication.long]}
              icon={ubication.icon}
              eventHandlers={{
                click: (e) => {
                  console.log("marker clicked", e);
                  console.log(ubication);
                },
              }}>
              <Popup>{ubication.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Maps;
