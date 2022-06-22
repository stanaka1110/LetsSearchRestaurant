import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, Card} from '@mui/material';
import {useState} from 'react';

export const RestaurantItem = ({data}) =>{
    const [open, setOpen] = useState(false);
    console.log(data);
    return(
        <div>
            <Card>
                <Button onClick={() => setOpen(true)}>
                    <img src={data.logo_image} alt="ロゴ画像" />
                    {data.name}
                </Button>
                <Typography>
                    {data.access}
                </Typography>
            </Card>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>{data.name}</DialogTitle>
                <DialogContent>
                  <img src={data.photo.pc.l} alt="写真1"/>
                    <DialogContentText>
                        アクセス：{data.access}
                    </DialogContentText>
                    <DialogContentText>
                        営業時間：{data.open}
                    </DialogContentText>
                    <DialogContentText>
                      住所：{data.address}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
