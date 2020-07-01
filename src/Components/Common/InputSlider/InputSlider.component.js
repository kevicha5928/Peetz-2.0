import React, { Fragment } from "react";
import { Slider, TextField, InputAdornment } from "@material-ui/core";
import InputSliderStyles from "./InputSlider.styles";

function InputSlider({ value, setValue, settings, children }) {
  const classes = InputSliderStyles();
  const { min, max, step, units } = settings;
  const handleTextInput = (event) => {
    console.log(event.target.value);
    setValue(parseFloat(event.target.value));
  };
  return (
    <div className={classes.mainContainer}>
      <TextField
        label={children}
        defaultValue={value}
        error={isNaN(value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">{units}</InputAdornment>
          ),
        }}
        style={{ width: "100%" }}
        className={classes.textField}
        value={!isNaN(value) ? value : ""}
        onChange={handleTextInput}
      />
      <Slider
        defaultValue={value}
        valueLabelDisplay="auto"
        step={step}
        marks
        min={min}
        max={max}
        value={value}
        onChange={(event, value) => setValue(value)}
      />
    </div>
  );
}

export default InputSlider;
