/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactForm from 'containers/ContactForm';
import Hero from 'containers/Hero';
import Service from 'containers/Service';
import Portfolio from 'containers/Portfolio';
import Pricing from 'containers/Pricing';

const useStyles = makeStyles(theme => ({
  '@global': {
    p: {
      color: '#212529',
    },
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
    margin: theme.spacing(15, 0, 5, 0),
  },
  pricing: {
    background: 'linear-gradient(to bottom,#7a19f1,#402e88)',
  },
  form: {
    margin: theme.spacing(0, 5, 20, 5),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="hero">
        <Container maxWidth="sm">
          <Hero />
        </Container>
      </div>
      <div id="services">
        <Container maxWidth="lg">
          <Service />
        </Container>
      </div>
      <Divider className={classes.divider} />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="pricing" className={classes.pricing}>
        <Divider className={classes.divider} />
        <Pricing />
        <Divider id="contact" className={classes.divider} />
      </div>
      <div className={classes.form}>
        <Container maxWidth="sm">
          <ContactForm />
        </Container>
      </div>
    </React.Fragment>
  );
}
