import React, { KeyboardEvent, MouseEvent } from 'react';
import {
  createStyles,
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  Theme,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface SideDrawerProps {
  isOpen: boolean;
  toggle: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: '10rem'
    },
    loginLogout: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block'
      }
    }
  })
);

const DrawerList = () => {
  // const classes = useStyles();
  return (
    <div>
      <List>
        <ListItem button component={Link} to="/menu">
          <Typography>Menu</Typography>
        </ListItem>
        <ListItem button component="a" href="mailto:schaeffer.studio@gmail.com">
          <Typography>Contact Us</Typography>
        </ListItem>
      </List>
      {/* <Divider /> */}
      {/* <List>
        <ListItem button>
          <Typography>Resources</Typography>
        </ListItem>
      </List> */}
      {/* <Divider className={classes.loginLogout} /> */}
      {/* <List className={classes.loginLogout}>
        <Link to="/login">
          <ListItem button>
            <Typography>Login</Typography>
          </ListItem>
        </Link>
      </List> */}
    </div>
  );
};

const SideDrawer = (props: SideDrawerProps) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor="left"
      open={props.isOpen}
      onClose={props.toggle(false)}
      onOpen={props.toggle(true)}
    >
      <div className={classes.drawer}>
        <DrawerList />
      </div>
    </SwipeableDrawer>
  );
};

export default SideDrawer;
