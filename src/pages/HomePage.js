import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      color: "red"
    }
  }));

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Hello World!
        </div>
    );
}

export default HomePage;
