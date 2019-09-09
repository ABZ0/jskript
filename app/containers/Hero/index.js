/**
 *
 * Hero
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { Link, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(20, 0, 15, 0),
    color: '#ffffff',
    textAlign: 'center',
  },
  title: {
    fontSize: '40px',
    fontWeight: 700,
  },
  subTitle: {
    color: '#fff',
    fontWeight: 400,
  },
  contact: {
    color: '#ffffff',
    borderBottom: '1px dotted white',
    '&:hover': {
      textDecoration: 'none',
      color: '#ffcb05',
    },
  },
  start: {
    marginTop: theme.spacing(5),
    '&:hover': {
      color: '#000',
    },
  },
}));

export function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <h1 className={classes.title}>
        <FormattedMessage {...messages.header} />
      </h1>
      <p className={classes.subTitle}>
        <FormattedMessage {...messages.subtitle} />
        <Link href="#contact" className={classes.contact}>
          <FormattedMessage {...messages.contact} />
        </Link>
      </p>
      <Button
        className={classes.start}
        variant="contained"
        aria-label="get started"
        color="secondary"
        size="large"
        href="#pricing"
      >
        <FormattedMessage {...messages.start} />
      </Button>
    </div>
  );
}

Hero.propTypes = {
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

export default compose(withConnect)(Hero);
