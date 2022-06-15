import {useContext} from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    height: "100vh",
    width: "100%",
  };
const center = {
    lat:2,
    lng:3
};

const GMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBW6-lCWyiiCdDlehATcQOndaNmUuKDEpg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
      </GoogleMap>
    </LoadScript>
  );
};

export default GMap;