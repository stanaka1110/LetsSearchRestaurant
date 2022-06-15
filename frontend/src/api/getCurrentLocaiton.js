import React, { useState} from 'react';

const [position, setPosition] = useState({ latitude: null, longitude: null });

const getCurrent=()=>{
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setPosition({ latitude, longitude });
      });
}
