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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import GlobalStyle from '../../global-styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5b43d6',
    },
    secondary: {
      main: '#ffcb05',
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

export default function App() {
  return (
    <div>
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
