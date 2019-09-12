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

import { Container, Paper, Button, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  pricingList: {
    display: 'flex',
    // alignItems: 'center',
  },
  premiumInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(0, 3, 0, 3),
  },
  listReset: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    padding: theme.spacing(5, 0, 0, 0),
    margin: 0,
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 0, 3, 0),
    lineHeight: 2,
    maxWidth: '100%',
    maxHeight: '100%',
    margin: theme.spacing(0, 1, 9, 1),
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
  iconCheck: {
    color: '#28a745',
  },
  iconClear: {
    color: '#dc3545',
  },
  basicPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#5c5e61',
    color: '#fff',
    fontSize: '24px',
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 4, 0),
  },
  standardPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#482880',
    color: 'white',
    fontSize: '24px',
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 4, 0),
  },
  PremiumPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffcd16',
    color: 'white',
    fontSize: '24px',
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 4, 0),
  },
  basicPricePaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#a2a2a2',
    color: '#fff',
    fontSize: '40px',
    fontWeight: 700,
    padding: theme.spacing(0, 0, 3, 0),
  },
  standardPricePaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#673ab7',
    color: '#fff',
    fontSize: '40px',
    fontWeight: 700,
    padding: theme.spacing(0, 0, 3, 0),
  },
  premiumPricePaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fbda37',
    color: '#fff',
    fontSize: '40px',
    fontWeight: 700,
    padding: theme.spacing(0, 0, 3, 0),
  },
  divider: {
    margin: theme.spacing(1, 0, 1, 0),
    width: '100%',
  },
  gridList: {
    display: 'flex',
    width: '100%',
  },
}));

export function Pricing() {
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.pricingTitle}>
        <FormattedMessage {...messages.title} />
      </h3>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.pricingList}>
          <Grid item xs={12} md={4}>
            <Paper elevation={24} className={classes.list}>
              <Paper square elevation={2} className={classes.basicPricePaper}>
                <Paper square elevation={2} className={classes.basicPaper}>
                  Basic
                </Paper>
                <h1 className={classes.price}>99$</h1>
              </Paper>
              <ul className={classes.listReset}>
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Basic Theme
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  5 Pages
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Responsive Design
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Content Management
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Free 1GB Hosting
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Free Custom Domain For 1 Year
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Free SSL certificate
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Database Integration
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Ecommerce
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Free 1 Year maintenance
                </li>
                <Divider className={classes.divider} />
              </ul>

              <Button
                variant="contained"
                aria-label="choose"
                color="default"
                size="large"
                href="#contact"
              >
                <FormattedMessage {...messages.choose} />
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={24} className={classes.list}>
              <Paper
                square
                elevation={2}
                className={classes.standardPricePaper}
              >
                <Paper square elevation={2} className={classes.standardPaper}>
                  Standard
                </Paper>
                <h1 className={classes.price}>499$</h1>
              </Paper>
              <ul className={classes.listReset}>
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Custom Theme
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  10 Pages
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Responsive Design
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Content Management
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Free 1GB Hosting
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Free Custom Domain For 1 Year
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Free SSL certificate
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Database Integration
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Ecommerce
                </li>
                <Divider className={classes.divider} />
                <li>
                  <ClearRoundedIcon
                    fontSize="small"
                    className={classes.iconClear}
                  />{' '}
                  Free 1 Year maintenance
                </li>
                <Divider className={classes.divider} />
              </ul>

              <Button
                variant="contained"
                aria-label="choose"
                color="primary"
                size="large"
                href="#contact"
              >
                <FormattedMessage {...messages.choose} />
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={24} className={classes.list}>
              <Paper square elevation={2} className={classes.premiumPricePaper}>
                <Paper square elevation={2} className={classes.PremiumPaper}>
                  Premium
                </Paper>
                <h1 className={classes.price}>Quote *</h1>
              </Paper>
              <ul className={classes.listReset}>
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Basic Theme
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  5 Pages
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Responsive Design
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Content Management
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Free 1GB Hosting
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Free Custom Domain For 1 Year
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Free SSL certificate
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Database Integration
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Ecommerce
                </li>
                <Divider className={classes.divider} />
                <li>
                  <CheckRoundedIcon
                    fontSize="small"
                    className={classes.iconCheck}
                  />{' '}
                  Free 1 Year maintenance
                </li>
                <Divider className={classes.divider} />
              </ul>

              <Button
                variant="contained"
                aria-label="choose"
                color="secondary"
                size="large"
                href="#contact"
              >
                <FormattedMessage {...messages.quote} />
              </Button>
            </Paper>
          </Grid>
        </Grid>
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
