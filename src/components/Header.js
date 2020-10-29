import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../imgs/logo.png';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    padding: theme.spacing(1)
  },
  logo: {
    height: '100px'
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
       <img alt="logo" src={logo} className={classes.logo}/>
      </Toolbar>
    </React.Fragment>
  );
}