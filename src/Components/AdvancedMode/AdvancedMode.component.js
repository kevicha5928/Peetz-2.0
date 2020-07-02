import React, { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Paper, Button, Grid, Divider } from "@material-ui/core";
import AdvancedModeStyles from "./AdvancedMode.styles";
import allActions from "../../Redux/Actions";
import { InputSlider, IngredientDisplay, Card } from "../Common";
function AdvancedMode() {
  const classes = AdvancedModeStyles();

  const initPercents = {
    hydration: 0.65,
    saltP: 0.03,
    ADY: 0.0025,
  };
  function ingredientCalc() {
    let total = dough * portions;
    let flourMass =
      total / (1 + (hydration + saltPercent + yeastPercent) / 100);
    let ingredients = {
      flour: Math.ceil(flourMass),
      yeast: ((flourMass * yeastPercent) / 100).toFixed(1),
      water: Math.ceil((flourMass * hydration) / 100),
      salt: ((flourMass * saltPercent) / 100).toFixed(1),
    };
    return ingredients;
  }

  const [dough, setDough] = useState(200);
  const [portions, setPortions] = useState(5);
  const [hydration, setHydration] = useState(65);
  const [saltPercent, setSaltPercent] = useState(2.5);
  const [yeastPercent, setYeastPercent] = useState(0.25);
  const initIngredients = ingredientCalc();
  const [ingredients, setIngredients] = useState(initIngredients);
  const { flour, water, salt, yeast } = ingredients;
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(dough, portions, hydration, saltPercent, yeastPercent);
    let temp = ingredientCalc();
    if (temp.flour) setIngredients(temp);
  }, [dough, portions, hydration, saltPercent, yeastPercent]);

  const results = [
    {
      title: "Flour",
      data: flour,
      units: "g",
    },
    {
      title: "Water",
      data: water,
      units: "mL",
    },
    {
      title: "Salt",
      data: salt,
      units: "g",
    },
    {
      title: "Yeast",
      data: yeast,
      units: "g",
    },
  ];

  const doughSettings = [
    {
      title: "Number of Portions",
      value: portions,
      setValue: setPortions,
      sliderConfig: { min: 1, max: 10, step: 1, units: "Portions" },
    },
    {
      title: "Portion Size",
      value: dough,
      setValue: setDough,
      sliderConfig: { min: 150, max: 350, step: 10, units: "g" },
    },
    {
      title: "Hydration",
      value: hydration,
      setValue: setHydration,
      sliderConfig: { min: 60, max: 80, step: 1, units: "%" },
    },
    {
      title: "Salt Levl",
      value: saltPercent,
      setValue: setSaltPercent,
      sliderConfig: { min: 0, max: 5, step: 0.2, units: "%" },
    },
    {
      title: "Yeast",
      value: yeastPercent,
      setValue: setYeastPercent,
      sliderConfig: { min: 0.1, max: 1, step: 0.01, units: "%" },
    },
  ];

  const renderInputs = (settings) => {
    const { title, value, setValue, sliderConfig } = settings;
    return (
      <Grid item xs={12} sm={6} className={classes.gridItem}>
        <InputSlider value={value} setValue={setValue} settings={sliderConfig}>
          {title}
        </InputSlider>
      </Grid>
    );
  };

  const renderResults = (settings, index) => {
    if (index < results.length - 1) {
      return (
        <Fragment>
          <IngredientDisplay settings={settings} />
          <Divider style={{ width: "80%" }} />
        </Fragment>
      );
    }
    return <IngredientDisplay settings={settings} />;
  };

  return (
    <Card>
      <div className={classes.relativeCard}>
        <Typography variant="h2" className={classes.cardTitle}>
          Advanced Mode
        </Typography>
        <Grid container justify="center" className={classes.grid}>
          {doughSettings.map((settings, index) => renderInputs(settings))}
          <Grid item xs={12} sm={12} className={classes.gridItem}>
            {results.map((settings, index) => renderResults(settings, index))}
          </Grid>
        </Grid>
        <Button
          className={classes.gridItem}
          onClick={() =>
            dispatch(allActions.userActions.changeActiveCard("skill"))
          }
        >
          <Typography variant="h4">back</Typography>
        </Button>
      </div>
    </Card>
  );
  // return (
  //   <div className={classes.card}>
  //     <Paper className={classes.pseudoCard} />
  //     <div className={classes.relativeCard}>
  //       <Typography variant="h2" className={classes.cardTitle}>
  //         Advanced Mode
  //       </Typography>
  //       <Grid container justify="center" className={classes.grid}>
  //         {doughSettings.map((settings, index) => renderInputs(settings))}
  //         <Grid item xs={12} sm={12} className={classes.gridItem}>
  //           {results.map((settings, index) => renderResults(settings, index))}
  //         </Grid>
  //       </Grid>
  //       <Button
  //         className={classes.gridItem}
  //         onClick={() =>
  //           dispatch(allActions.userActions.changeActiveCard("skill"))
  //         }
  //       >
  //         <Typography variant="h4">back</Typography>
  //       </Button>
  //     </div>
  //   </div>
  // );
}

export default AdvancedMode;
