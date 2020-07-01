import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import LoginScreenStyles from "./LoginScreen.styles";

function LoginScreen({ onThemeToggle }) {
  const classes = LoginScreenStyles();
  return (
    <div className={classes.mainContainer}>
      <Button component={Link} to={"/user"}>
        <Typography variant="h4">Login</Typography>
      </Button>
      <Button>
        <Typography variant="h6">Sign up</Typography>
      </Button>
    </div>
  );
}

export default LoginScreen;
