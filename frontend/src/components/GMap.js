import { React } from 'react';
import { GoogleMap, LoadScript , Marker} from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%",
};


const GMap = ({lat, lng}) => {
  const  center = {
    lat: lat,
    lng: lng,
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBW6-lCWyiiCdDlehATcQOndaNmUuKDEpg">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker name='test' position={center}/>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GMap;