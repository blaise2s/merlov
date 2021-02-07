import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core';

import Landing from '../landing/Landing';
import Header from '../header/Header';
import Menu from '../menu/Menu';

const _theme = createMuiTheme({
  // palette: {
  // primary: {
  //   main: teal['A200']
  // },
  // secondary: {
  //   main: blueGrey[300]
  // },
  // warning: {
  //   main: deepOrange[700]
  // },
  // background: {
  //   default: grey[50]
  // }
  // }
});
const responsiveTheme = responsiveFontSizes(_theme);

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={responsiveTheme}>
        <Header />
        <main>
          <Route path="/" exact component={Landing} />
          <Route
            path="/menu"
            exact
            render={() => {
              return (
                <div>
                  <div
                    style={{
                      height: '4rem',
                      width: '100%',
                      backgroundColor: '#ffffff',
                      position: 'fixed'
                    }}
                  />
                  <div style={{ paddingTop: '4rem' }}>
                    <Menu />
                  </div>
                </div>
              );
            }}
          />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
