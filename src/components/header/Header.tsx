import React, { useState, KeyboardEvent, MouseEvent } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import SideDrawer from '../side-drawer/SideDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: '#ffffff8f'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    login: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  })
);

const Header = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: KeyboardEvent | MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" color="inherit" className={classes.header}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h5">
          <Link to="/">Merlov</Link>
        </Typography>
        {/* <Link className={classes.login} to="/login">
          <Button color="inherit">Login</Button>
        </Link> */}
      </Toolbar>
      <SideDrawer isOpen={isDrawerOpen} toggle={toggleDrawer} />
    </AppBar>
  );
};

export default Header;
