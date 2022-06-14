import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        fontSize: 24
    }
  }));

const Header=() =>{
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>Let's Search Restaurant</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
