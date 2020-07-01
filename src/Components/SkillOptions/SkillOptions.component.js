import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Paper, Grid, Button } from "@material-ui/core";
import UserPortalStyles from "../UserPortal/UserPortalStyles";
import allActions from "../../Redux/Actions";

function SkillOptions() {
  const classes = UserPortalStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={classes.card}>
        <Paper className={classes.pseudoCard} />
        <Typography variant="h1" className={classes.cardTitle}>
          Welcome User
        </Typography>
        <div className={classes.mainGridContainer}>
          <Grid container justify="center" spacing={1} className={classes.grid}>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Button
                className={classes.gridItem}
                onClick={() =>
                  dispatch(allActions.userActions.changeActiveCard("easy"))
                }
              >
                <Typography variant="h4">I am a beginner</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Button
                className={classes.gridItem}
                onClick={() =>
                  dispatch(allActions.userActions.changeActiveCard("advanced"))
                }
              >
                <Typography variant="h4">I know what I'm doing</Typography>
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export default SkillOptions;
