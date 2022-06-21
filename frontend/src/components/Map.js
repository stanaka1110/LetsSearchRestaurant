
import {useState, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '50vh'
};

const Map = ({ lat, lng, data }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    });
    const center = {
        lat: lat,
        lng: lng
    };
    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {data.map((d) => (
                <div>
                    <InfoWindow position={{ lat: d.lat, lng: d.lng }} pixcelOffset={10}>
                        <p>{d.name}</p>
                    </InfoWindow>
                </div>
            ))}
            <Marker position={center} />

        </GoogleMap>
    ) : <></>
}

export default Map;