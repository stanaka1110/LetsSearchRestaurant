import './App.css';
import { Button, Grid, styled} from '@mui/material';
import Header from './components/Header';
import GMap from './components/GMap'
import SelectCard from './components/SelectCard';

const CardGrid = styled(Grid)({
  height: '20px'
});
const App = () => {
  return (
    <div>
      <Grid container direction={"column"}>
        <Grid item>
          <Header />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button>
              現在地
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
          <GMap />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;