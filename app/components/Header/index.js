/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  AppBar,
  Toolbar,
  Container,
  Link,
  useScrollTrigger,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import PollRoundedIcon from '@material-ui/icons/PollRounded';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    paddingTop: theme.spacing(2),
    backgroundColor: 'transparent',
  },
  sectionBrand: {
    display: 'flex',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    display: 'flex',
    overflow: 'visible',
    marginLeft: theme.spacing(1),
    fontWeight: '700',
    fontSize: '18px',
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLink: {
    padding: theme.spacing(0, 3, 0, 2),
    fontWeight: '600',
    fontSize: '15px',
    color: 'white',
    '&:hover': {
      color: '#ffcb05',
      textDecoration: 'none',
    },
  },
  activeBar: {
    backgroundColor: '#741ce8',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
  },
  fullList: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#741ce8',
  },
  listItem: {
    textAlign: 'center',
  },
}));

function ElevationScroll(props) {
  const classes = useStyles();
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
    className: !trigger ? classes.appBar : classes.activeBar,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['SERVICES', 'PORTFOLIO', 'PRICING'].map((text, index) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <ElevationScroll {...props}>
        <AppBar elevation={0}>
          <Container maxWidth="lg">
            <Toolbar className={classes.navBar} variant="regular">
              <div className={classes.sectionBrand}>
                <PollRoundedIcon />
                <Link
                  className={classes.title}
                  variant="inherit"
                  component={Link}
                  href="#home"
                >
                  jskript.org
                </Link>
              </div>
              <div className={classes.sectionDesktop}>
                <Link
                  className={classes.navLink}
                  variant="inherit"
                  component={Link}
                  href="#services"
                >
                  SERVICES
                </Link>
                <Link
                  className={classes.navLink}
                  variant="inherit"
                  component={Link}
                  href="#portfolio"
                >
                  PORTFOLIO
                </Link>
                <Link
                  className={classes.navLink}
                  variant="inherit"
                  component={Link}
                  href="#pricing"
                >
                  PRICING
                </Link>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={toggleDrawer('top', true)}
                >
                  <ViewListRoundedIcon fontSize="large" />
                </IconButton>
                <SwipeableDrawer
                  anchor="top"
                  open={state.top}
                  onClose={toggleDrawer('top', false)}
                  onOpen={toggleDrawer('top', true)}
                >
                  {fullList('top')}
                </SwipeableDrawer>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
