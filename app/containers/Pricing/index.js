/**
 *
 * Pricing
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { Container, Paper, Chip, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  pricingList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'start',
    },
  },
  premiumInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(0, 3, 0, 3),
  },
  listReset: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    lineHeight: 2,
    maxWidth: '100%',
    maxHeight: '100%',
    margin: theme.spacing(0, 3, 9, 3),
    width: '95%',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
  price: {
    fontSize: '53px',
    fontWeight: 700,
    margin: 0,
  },
  pricingTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '2px',
    margin: theme.spacing(10, 0, 10, 0),
  },
}));

export function Pricing() {
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.pricingTitle}>
        <FormattedMessage {...messages.title} />
      </h3>
      <Container maxWidth="lg" className={classes.pricingList}>
        <Paper elevation={24} className={classes.list}>
          <Chip color="default" label="Basic" />
          <br />
          <ul className={classes.listReset}>
            <li>
              <CheckCircleIcon fontSize="small" />{' '}
              <FormattedMessage {...messages.audit} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" />{' '}
              <FormattedMessage {...messages.development} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" />{' '}
              <FormattedMessage {...messages.cm} />
            </li>
          </ul>
          <h1 className={classes.price}>$99</h1>
          <Button
            variant="outlined"
            aria-label="choose"
            color="default"
            size="large"
            href="#contact"
          >
            <FormattedMessage {...messages.choose} />
          </Button>
        </Paper>
        <Paper elevation={24} className={classes.list}>
          <Chip color="primary" label="Standard" />
          <br />
          <ul className={classes.listReset}>
            <li>
              <CheckCircleIcon fontSize="small" color="primary" />{' '}
              <FormattedMessage {...messages.audit} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="primary" />{' '}
              <FormattedMessage {...messages.design} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="primary" />{' '}
              <FormattedMessage {...messages.development} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="primary" />{' '}
              <FormattedMessage {...messages.backups} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="primary" />{' '}
              <FormattedMessage {...messages.seo} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="primary" />{' '}
              <FormattedMessage {...messages.cm} />
            </li>
          </ul>
          <h1 className={classes.price}>$499</h1>
          <Button
            variant="contained"
            aria-label="request quote"
            color="primary"
            size="large"
            href="#contact"
          >
            <FormattedMessage {...messages.choose} />
          </Button>
        </Paper>
        <Paper elevation={24} className={classes.list}>
          <Chip color="secondary" label="Premium" />
          <br />
          <ul className={classes.listReset}>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.audit} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.design} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />
              <FormattedMessage {...messages.development} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.backups} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.seo} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.cm} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.maintenance} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.ecommerce} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.mail} />
            </li>
            <li>
              <CheckCircleIcon fontSize="small" color="secondary" />{' '}
              <FormattedMessage {...messages.hosting} />
            </li>
          </ul>
          <br />
          <Button
            variant="contained"
            color="secondary"
            aria-label="choose"
            size="large"
            href="#contact"
          >
            <FormattedMessage {...messages.quote} />
          </Button>
        </Paper>
      </Container>
      <h5 className={classes.premiumInfo}>
        <FormattedMessage {...messages.note} />
      </h5>
    </div>
  );
}

Pricing.propTypes = {
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

export default compose(withConnect)(Pricing);
