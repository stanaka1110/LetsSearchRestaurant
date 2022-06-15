import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SelectCard = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Test
                    </Typography>
                    <Typography color="textSecondary">
                        adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default SelectCard;