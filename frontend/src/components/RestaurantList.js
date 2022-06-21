import { useRestaurantApi } from '../api/useRestaurantApi';
import { Grid, Slider, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { RestaurantItem } from "./RestaurantItem";
import { getDistance } from 'geolib';
import Map from "./Map";

export const RestaurantList = ({ lat, lng }) => {
    const [{ data, isLoading, isError }] = useRestaurantApi(lat, lng);
    const [distance, setDistance] = useState(1000);

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }
    if (isError) {
        return (
            <div>Error...</div>
        );
    }
    const handleChange = (event, newDistance) => {
        setDistance(newDistance);
    };

    return (
        <div>
            <Map lat={lat} lng={lng} data={data} />
            <Box sx={{ width: 500}} >
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Slider aria-label="Distance" value={distance} onChange={handleChange} min={100} max={3000} valueLabelDisplay="on" />
                    </Grid>
                </Grid>
                <Typography id="input-slider" gutterBottom>
                    検索範囲(メートル単位)
                </Typography>
            </Box>
            <Grid container rowSpacing={2} justifyContent="center" alignItems="center">
                {data.filter(d => (getDistance({ latitude: lat, longitude: lng }, { latitude: d.lat, longitude: d.lng }) <= distance)).map((d) => (
                    <Grid item>
                        <RestaurantItem data={d} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

