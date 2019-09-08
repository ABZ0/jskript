/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import GlobalStyle from '../../global-styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5b43d6',
    },
    secondary: {
      main: '#ffcb05',
    },
    error: {
      main: '#dc3545',
    },
    success: {
      main: '#28a745',
    },
    textPrimary: {
      main: '#ffffff',
    },
  },
  overrides: {
    MuiToolbar: {
      root: {
        minHeight: '56px',
      },
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: '#F2F3F5',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
