import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Paper, Button } from "@material-ui/core";
import EasyModeStyles from "./EasyMode.styles";
import allActions from "../../Redux/Actions";

function EasyMode() {
  const classes = EasyModeStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.card}>
      <Paper className={classes.pseudoCard} />
      <Typography variant="h2" className={classes.cardTitle}>
        Easy Mode
      </Typography>
      <Button
        className={classes.gridItem}
        onClick={() =>
          dispatch(allActions.userActions.changeActiveCard("skill"))
        }
      >
        <Typography variant="h4">back</Typography>
      </Button>
    </div>
  );
}

export default EasyMode;
