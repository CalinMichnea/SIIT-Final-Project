import React from "react";
import "./location.css";
import GoogleMapReact from "google-map-react";
import { ReactSVG } from "react-svg";
import mapMarker from "./map-marker.svg";

const AnyReactComponent = ({ text }) => (
  <div className="map-marker">
    <ReactSVG src={mapMarker}></ReactSVG>
    <b>{text}</b>
  </div>
);

function ShowLocation() {
  const locationInfo = {
    center: {
      lat: 46.77481,
      lng: 23.58762,
    },
    zoom: 15,
  };

  return (
    <div className="map-wrapper">
      <div className="title-container">
        <h1>Come visit us</h1>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ""}}
        defaultCenter={locationInfo.center}
        defaultZoom={locationInfo.zoom}
      >
        <AnyReactComponent
          lat={46.77481}
          lng={23.58762}
          text="Strada Horea 2, Cluj-Napoca, 400038"
        />
      </GoogleMapReact>
    </div>
  );
}

export default ShowLocation;
