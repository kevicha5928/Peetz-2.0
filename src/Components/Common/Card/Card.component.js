import React, { Fragment } from "react";
import { Paper } from "@material-ui/core";
import CardStyles from "./Card.styles";

function Card({ children }) {
  const classes = CardStyles();

  return (
    <div className={classes.card}>
      <Paper className={classes.pseudoCard} />
      {children}
    </div>
  );
}

export default Card;
