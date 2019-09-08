/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Glide from '@glidejs/glide';
import {
  Container,
  Divider,
  Link,
  Button,
  Grid,
  IconButton,
  Chip,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MobileFriendlyRoundedIcon from '@material-ui/icons/MobileFriendlyRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FormattedMessage } from 'react-intl';
import ContactForm from 'containers/ContactForm';
import messages from './messages';

import p_1 from '../../images/p_1.png';

const useStyles = makeStyles(theme => ({
  '@global': {
    p: {
      color: '#565759',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
  },
  grow: {
    flexGrow: 1,
  },
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(20, 0, 20, 0),
    color: '#ffffff',
    textAlign: 'center',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(10, 0, 10, 0),
    textAlign: 'center',
    // color: '#7b63f9',
    color: '#6a54d9',
  },
  title: {
    fontSize: '40px',
    fontWeight: 700,
  },
  subTitle: {
    color: '#fff',
    fontWeight: 400,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
    margin: theme.spacing(15, 0, 15, 0),
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
    color: '#a9a9a9',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '2px',
    margin: theme.spacing(0, 0, 7, 0),
  },
  pricingTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '2px',
    margin: theme.spacing(-5, 0, 10, 0),
  },
  contactTitle: {
    textAlign: 'center',
    fontSize: '34px',
    fontWeight: 700,
    // letterSpacing: '2px',
    margin: theme.spacing(-5, 0, 5, 0),
  },
  learn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(-5, 0, 10, 0),
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
  pricing: {
    background: 'linear-gradient(to bottom,#7a19f1,#402e88)',
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
    // fontFamily: 'Roboto',
    margin: 0,
  },
  form: {
    marginBottom: theme.spacing(20),
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  carousel: {
    margin: theme.spacing(0, 4, 0, 4),
  },
  pic: {
    maxWidth: '100%',
    maxHeight: '100%',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(10),
    },
  },
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
}));

export default function HomePage({ Carousel }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="home" className={classes.grow}>
        <Container maxWidth="sm">
          <div className={classes.home}>
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
              color="secondary"
              size="large"
              href="#pricing"
            >
              <FormattedMessage {...messages.start} />
            </Button>
          </div>
        </Container>
      </div>
      <div id="services">
        <Container maxWidth="lg">
          <Grid container className={classes.center}>
            <Grid item xs={1} className={classes.center}>
              <IconButton type="button" onClick={() => Carousel.slidePrev()}>
                <ArrowBackIosRoundedIcon fontSize="large" />
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
                  Carousel = el;
                }}
              >
                <div className={classes.carousel}>
                  <MobileFriendlyRoundedIcon fontSize="large" />
                  <h4>
                    <FormattedMessage {...messages.mobileTitle} />
                  </h4>
                  <p>
                    <FormattedMessage {...messages.mobileSubtitle} />
                  </p>
                </div>
                <div className={classes.carousel}>
                  <LocalMallRoundedIcon fontSize="large" />
                  <h4>
                    <FormattedMessage {...messages.ecommerceTitle} />
                  </h4>
                  <p>
                    <FormattedMessage {...messages.ecommerceSubtitle} />
                  </p>
                </div>
                <div className={classes.carousel}>
                  <WbIncandescentRoundedIcon fontSize="large" />
                  <h4>
                    <FormattedMessage {...messages.designTitle} />
                  </h4>
                  <p>
                    <FormattedMessage {...messages.designSubtitle} />
                  </p>
                </div>
                <div className={classes.carousel}>
                  <CreateRoundedIcon fontSize="large" />
                  <h4>
                    <FormattedMessage {...messages.contentTitle} />
                  </h4>
                  <p>
                    <FormattedMessage {...messages.contentSubtitle} />
                  </p>
                </div>
                <div className={classes.carousel}>
                  <AssignmentRoundedIcon fontSize="large" />
                  <h4>
                    <FormattedMessage {...messages.auditTitle} />
                  </h4>
                  <p>
                    <FormattedMessage {...messages.auditSubtitle} />
                  </p>
                </div>
                <div className={classes.carousel}>
                  <ShowChartRoundedIcon fontSize="large" />
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
                <ArrowForwardIosRoundedIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <br />
          <Grid container className={classes.learn}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="#pricing"
            >
              <FormattedMessage {...messages.learn} />
            </Button>
          </Grid>
        </Container>
      </div>
      <Divider id="portfolio" className={classes.divider} />
      <div>
        <h3 className={classes.portfolioTitle}>OUR LATEST WORK</h3>
        <Container maxWidth="lg" className={classes.portfolio}>
          <Grid container className={classes.projectPicture}>
            <img src={p_1} alt="project preview" className={classes.pic} />
          </Grid>
          <Grid container xs={9} className={classes.projectDetails}>
            <h1>
              <FormattedMessage {...messages.projectTitle} />
            </h1>
            <p>
              <FormattedMessage {...messages.projectSubtitle} />
            </p>
            <Grid item className={classes.projectBtn}>
              <Button
                className={classes.Btn}
                variant="contained"
                color="primary"
                size="large"
                href="#pricing"
              >
                <FormattedMessage {...messages.preview} />
              </Button>
              <Button
                variant="outlined"
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
            <img src={p_1} alt="project preview" className={classes.pic} />
          </Grid>
          <Grid container xs={9} className={classes.projectDetails}>
            <h1>
              <FormattedMessage {...messages.projectTitle} />
            </h1>
            <p>
              <FormattedMessage {...messages.projectSubtitle} />
            </p>
            <Grid item className={classes.projectBtn}>
              <Button
                className={classes.Btn}
                variant="contained"
                color="primary"
                size="large"
                href="#pricing"
              >
                <FormattedMessage {...messages.preview} />
              </Button>
              <Button
                variant="outlined"
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
      <div id="pricing" className={classes.pricing}>
        <Divider className={classes.divider} />
        <h3 className={classes.pricingTitle}>PRICING PER BUILD</h3>
        <Container maxWidth="lg" className={classes.pricingList}>
          <Paper elevation={24} className={classes.list}>
            <Chip color="default" label="Basic" />
            <br />
            <ul className={classes.listReset}>
              <li>
                <CheckCircleIcon fontSize="small" /> Website Audit
              </li>
              <li>
                <CheckCircleIcon fontSize="small" /> Development
              </li>
              <li>
                <CheckCircleIcon fontSize="small" /> Content Management
              </li>
            </ul>
            <h1 className={classes.price}>$99</h1>
            <Button
              variant="outlined"
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
                <CheckCircleIcon fontSize="small" color="primary" /> Website
                Audit
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="primary" /> Design
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="primary" /> Development
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="primary" /> Backups
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="primary" /> SEO
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="primary" /> Content
                Management
              </li>
            </ul>
            <h1 className={classes.price}>$499</h1>
            <Button
              variant="contained"
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
                <CheckCircleIcon fontSize="small" color="secondary" /> Website
                Audit
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" /> Design
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" />
                Development
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" /> Backups
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" /> SEO
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" /> Content
                Management
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" />{' '}
                Maintenance Agreement
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" /> eCommerce
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" /> Email
                Setup
              </li>
              <li>
                <CheckCircleIcon fontSize="small" color="secondary" /> Hosting
              </li>
            </ul>
            <br />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="#contact"
            >
              <FormattedMessage {...messages.quote} />
            </Button>
          </Paper>
        </Container>
        <h5 className={classes.premiumInfo}>
          * Premium package is a more complicated order and the prices vary by a
          large margin so it is best to decide on the cost with the customer in
          person.
        </h5>
        <Divider id="contact" className={classes.divider} />
      </div>
      <div className={classes.form}>
        <Container maxWidth="sm">
          <h1 className={classes.contactTitle}>Get in touch</h1>
          <ContactForm />
        </Container>
      </div>
    </React.Fragment>
  );
}
