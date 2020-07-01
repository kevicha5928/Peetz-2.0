import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import { deepPurple, cyan } from "@material-ui/core/colors";
import { LoginScreen, UserPortal } from "./Components";
import AppStyles from "./App.styles";

function App() {
  const themeState = useSelector((state) => state.theme);
  const classes = AppStyles();
  const initTheme = {
    palette: {
      primary: cyan,
      secondary: deepPurple,
      type: themeState.darkMode,
    },
  };
  // Scales the font sizes based on window size
  const theme = responsiveFontSizes(createMuiTheme(initTheme));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Route path="/Login" exact component={LoginScreen} />
      <Route path="/" exact component={UserPortal} />
    </ThemeProvider>
  );
}

export default App;
