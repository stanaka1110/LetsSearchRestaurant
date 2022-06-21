import { useState, useCallback, useEffect } from "react";
import Header from "./Header";
import { Button, Grid, TextField, Stack, Dialog, DialogContent} from '@mui/material';
import { useSearchPosition } from "../api/useSearchPosition";
import { RestaurantList } from "./RestaurantList";

const App = () => {

    const [positionName, setPositionName] = useState('');
    const [hasPositionError, setHasPositionError] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [isCurrentSearch, setIsCurrentSearch] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    let [{ lat, lng }] = useSearchPosition(positionName);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setPosition({ latitude, longitude });
        });
    }, []);

    const inputPosition = useCallback(
        (event) => {
            const inputValue = event.target.value;
            const isEmpty = inputValue === '';
            setPositionName(inputValue);
            setHasPositionError(isEmpty);
        },
        [setPositionName, setHasPositionError]
    );

    const handleSubmit = (e) => {
        e.preventDefault()
        const isEmptyPosition = positionName === ''

        if (isEmptyPosition) {
            setHasPositionError(true)
        }
    }
    if (isCurrentSearch) {
        return (
            <div>
                <Button variant="outlined" onClick={() => { setIsCurrentSearch(false); }}>検索へ戻る</Button>
                <RestaurantList lat={position.latitude} lng={position.longitude} />
            </div>
        );
    }
    if (isSearch) {
        return (
            <div>
                <Button variant="outlined" onClick={() => { setIsSearch(false); }}>検索へ戻る</Button>
                <RestaurantList lat={lat} lng={lng} />

            </div>
        );
    }
    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                marginTop={5}
            >
                <Grid item xs={8}>
                    <Button variant="outlined" size="large" onClick={() => setIsCurrentSearch(true)}>
                        現在地から探す
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="outlined" size="large" onClick={() => setDialogOpen(true)}>
                        場所・住所から探す
                    </Button>
                </Grid>
            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogContent>
                    <Stack component="form" noValidate onSubmit={handleSubmit} spacing={2} sx={{ m: 2, width: '25ch' }}>
                        <TextField
                            type="text"
                            label="場所・住所"
                            required
                            value={positionName}
                            error={hasPositionError}
                            onChange={inputPosition}
                            helperText={hasPositionError ? '場所・住所を入力してください。' : ''}
                        />
                        <Button variant="contained" type="submit" onClick={() => {  if (!hasPositionError) { setDialogOpen(false); setIsSearch(true);} }}>
                            決定
                        </Button>
                        <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </div >

    );
}

export default App;