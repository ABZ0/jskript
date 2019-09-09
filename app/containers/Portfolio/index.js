/**
 *
 * Portfolio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { Container, Grid, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import messages from './messages';
import projectPicture from '../../images/projectPicture.png';

const useStyles = makeStyles(theme => ({
  portfolio: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  portfolioTitle: {
    color: '#4D4D4D',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '2px',
    margin: theme.spacing(0, 0, 7, 0),
  },
  projectPicture: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'start',
      margin: theme.spacing(0, 0, 4, 0),
    },
  },
  projectBtn: {
    display: 'flex',
    marginTop: theme.spacing(3),
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: theme.spacing(3),
    },
  },
  Btn: {
    marginRight: theme.spacing(3),
  },
  pic: {
    maxWidth: '100%',
    maxHeight: '100%',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(10),
    },
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
    margin: theme.spacing(15, 0, 15, 0),
  },
  projectTitle: {
    color: '#212529',
  },
  projectText: {
    color: '#4D4D4D',
  },
  root: {
    paddingTop: theme.spacing(10),
  },
}));

export function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.portfolioTitle}>
        <FormattedMessage {...messages.title} />
      </h3>
      <Container maxWidth="lg" className={classes.portfolio}>
        <Grid container className={classes.projectPicture}>
          <img
            src={projectPicture}
            alt="project preview"
            className={classes.pic}
          />
        </Grid>
        <Grid item xs={9} className={classes.projectDetails}>
          <h1 className={classes.projectTitle}>
            <FormattedMessage {...messages.projectTitle} />
          </h1>
          <p className={classes.projectText}>
            <FormattedMessage {...messages.projectSubtitle} />
          </p>
          <Grid className={classes.projectBtn}>
            <Button
              className={classes.Btn}
              aria-label="preview website"
              variant="contained"
              color="primary"
              size="large"
              href="#pricing"
            >
              <FormattedMessage {...messages.preview} />
            </Button>
            <Button
              variant="outlined"
              aria-label="visit website"
              color="primary"
              size="large"
              href="#pricing"
            >
              <FormattedMessage {...messages.visit} />
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.divider} />
      <Container maxWidth="lg" className={classes.portfolio}>
        <Grid container className={classes.projectPicture}>
          <img
            src={projectPicture}
            alt="project preview"
            className={classes.pic}
          />
        </Grid>
        <Grid item xs={9} className={classes.projectDetails}>
          <h1 className={classes.projectTitle}>
            <FormattedMessage {...messages.projectTitle} />
          </h1>
          <p className={classes.projectText}>
            <FormattedMessage {...messages.projectSubtitle} />
          </p>
          <Grid className={classes.projectBtn}>
            <Button
              className={classes.Btn}
              variant="contained"
              aria-label="preview website"
              color="primary"
              size="large"
              href="#pricing"
            >
              <FormattedMessage {...messages.preview} />
            </Button>
            <Button
              variant="outlined"
              aria-label="visit website"
              color="primary"
              size="large"
              href="#pricing"
            >
              <FormattedMessage {...messages.visit} />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Portfolio.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Portfolio);
