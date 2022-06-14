import './App.css';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
const App=() => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={2} />
        <Grid xs={12} sm={8}>
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
        </Grid>
        <Grid sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;