import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import IngredientDisplayStyles from "./IngredientDisplay.styles";

function InputSlider({ settings, children }) {
  const classes = IngredientDisplayStyles();
  const { title, data, units } = settings;
  return (
    <Fragment>
      <div className={classes.ingredientContainer}>
        <Typography variant="h6" className={classes.label}>
          {title}:{" "}
        </Typography>
        <Typography className={classes.data}>{data}</Typography>
        <Typography className={classes.units}>{units}</Typography>
      </div>
    </Fragment>
  );
}

export default InputSlider;
