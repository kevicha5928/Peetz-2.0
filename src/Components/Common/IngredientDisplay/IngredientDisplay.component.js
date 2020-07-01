import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import IngredientDisplayStyles from "./IngredientDisplay.styles";

function InputSlider({ settings }) {
  const classes = IngredientDisplayStyles();
  const { title, data, units } = settings;
  return (
    <div className={classes.ingredientContainer}>
      <Typography variant="h6" className={classes.label}>
        {title}:{" "}
      </Typography>
      <Typography className={classes.data}>{data}</Typography>
      <Typography className={classes.units}>{units}</Typography>
    </div>
  );
}

export default InputSlider;
