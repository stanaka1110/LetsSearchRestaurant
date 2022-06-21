import { useState } from "react";
import Geocode from "react-geocode";

export const useSearchPosition = (positionName) =>{
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API);
    const[lat, setLat] = useState(null);
    const[lng, setLng] = useState(null);

    Geocode.fromAddress(positionName).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            setLat(lat);
            setLng(lng);
        },
        error => {
            console.error(error);
        }
    );
    return ([{lat, lng}]);
}