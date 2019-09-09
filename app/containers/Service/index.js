/**
 *
 * Service
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Grid, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MobileFriendlyRoundedIcon from '@material-ui/icons/MobileFriendlyRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(15, 0, 5, 0),
    textAlign: 'center',
    color: '#6a54d9',
  },
  carousel: {
    margin: theme.spacing(0, 4, 0, 4),
  },
  learn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 0, 10, 0),
  },
  arrow: {
    fontSize: '35px',
    color: '#ded9f7',
    '&:hover': {
      color: '#7b63f9',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
  },
  icon: {
    fontSize: '60px',
  },
}));

export function Service({ Carousel }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.center}>
        <Grid item xs={1} className={classes.center}>
          <IconButton type="button" onClick={() => Carousel.slidePrev()}>
            <ArrowBackIosRoundedIcon className={classes.arrow} />
          </IconButton>
        </Grid>
        <Grid item xs={10} className={classes.services}>
          <AliceCarousel
            mouseDragEnabled
            dotsDisabled
            buttonsDisabled
            responsive={{
              550: { items: 1 },
              800: { items: 2 },
              1270: { items: 3 },
            }}
            ref={el => {
              // eslint-disable-next-line no-param-reassign
              Carousel = el;
            }}
          >
            <div className={classes.carousel}>
              <MobileFriendlyRoundedIcon className={classes.icon} />
              <h4>
                <FormattedMessage {...messages.mobileTitle} />
              </h4>
              <p>
                <FormattedMessage {...messages.mobileSubtitle} />
              </p>
            </div>
            <div className={classes.carousel}>
              <LocalMallRoundedIcon className={classes.icon} />
              <h4>
                <FormattedMessage {...messages.ecommerceTitle} />
              </h4>
              <p>
                <FormattedMessage {...messages.ecommerceSubtitle} />
              </p>
            </div>
            <div className={classes.carousel}>
              <WbIncandescentRoundedIcon className={classes.icon} />
              <h4>
                <FormattedMessage {...messages.designTitle} />
              </h4>
              <p>
                <FormattedMessage {...messages.designSubtitle} />
              </p>
            </div>
            <div className={classes.carousel}>
              <CreateRoundedIcon className={classes.icon} />
              <h4>
                <FormattedMessage {...messages.contentTitle} />
              </h4>
              <p>
                <FormattedMessage {...messages.contentSubtitle} />
              </p>
            </div>
            <div className={classes.carousel}>
              <AssignmentRoundedIcon className={classes.icon} />
              <h4>
                <FormattedMessage {...messages.auditTitle} />
              </h4>
              <p>
                <FormattedMessage {...messages.auditSubtitle} />
              </p>
            </div>
            <div className={classes.carousel}>
              <ShowChartRoundedIcon className={classes.icon} />
              <h4>
                <FormattedMessage {...messages.analyticTitle} />
              </h4>
              <p>
                <FormattedMessage {...messages.analyticSubtitle} />
              </p>
            </div>
          </AliceCarousel>
        </Grid>
        <Grid item xs={1} className={classes.center}>
          <IconButton type="button" onClick={() => Carousel.slideNext()}>
            <ArrowForwardIosRoundedIcon className={classes.arrow} />
          </IconButton>
        </Grid>
      </Grid>
      <br />
      <Grid container className={classes.learn}>
        <Button variant="outlined" color="primary" size="large" href="#pricing">
          <FormattedMessage {...messages.learn} />
        </Button>
      </Grid>
    </div>
  );
}

Service.propTypes = {
  dispatch: PropTypes.func.isRequired,
  Carousel: PropTypes.object,
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

export default compose(withConnect)(Service);
