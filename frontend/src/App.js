import './App.css';
import { useState, useEffect } from 'react';
import { Button, Grid, styled } from '@mui/material';
import Header from './components/Header';
import GMap from './components/GMap'
import SelectCard from './components/SelectCard';
import fetchSearchData from './api/getRestaurantList';

const CardGrid = styled(Grid)({
  height: '20px'
});
const App = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    setPosition({ latitude, longitude });
  });
  
  return (
    <div>
      <Grid container direction={"column"}>
        <Grid item>
          <Header />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button>
              現在地:{position.latitude}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <SelectCard />
          </Grid>
          <Grid item xs={4}>
            <SelectCard />
          </Grid>
        </Grid>
        <Grid>
          <GMap lat={position.latitude} lng={position.longitude} />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;