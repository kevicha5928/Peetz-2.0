import React, { useState, Fragment, useCallback } from "react";
import { useTransition, animated as ani } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Paper } from "@material-ui/core";
import UserPortalStyles from "./UserPortalStyles";
import { HeaderBar } from "../";
import AdvancedMode from "../AdvancedMode/AdvancedMode.component";
import EasyMode from "../EasyMode/EasyMode.component";
import SkillOptions from "../SkillOptions/SkillOptions.component";

function UserPortal() {
  const classes = UserPortalStyles();
  const userState = useSelector((state) => state.user);
  const pages = {
    skill: ({ style }) => (
      <ani.div style={{ ...style }} className={classes.cardContainer}>
        <SkillOptions />
      </ani.div>
    ),
    easy: ({ style }) => (
      <ani.div style={{ ...style }} className={classes.cardContainer}>
        <EasyMode />
      </ani.div>
    ),
    advanced: ({ style }) => (
      <ani.div style={{ ...style }} className={classes.cardContainer}>
        <AdvancedMode />
      </ani.div>
    ),
  };

  // const [index, set] = useState("skill");
  const transitions = useTransition(userState.activeCard, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div className={classes.mainContainer}>
      <div className={classes.bgImage}></div>
      <HeaderBar />
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
}

export default UserPortal;
