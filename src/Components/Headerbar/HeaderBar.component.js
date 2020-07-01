import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PostAddIcon from "@material-ui/icons/PostAdd";
import InfoIcon from "@material-ui/icons/Info";
import TelegramIcon from "@material-ui/icons/Telegram";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import HeaderStyles from "./Header.styles";
import AccountMenu from "./AccountMenu.component";

function HeaderBar({ onThemeToggle }) {
  const classes = HeaderStyles();
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme);
  const darkMode = themeState.darkMode;
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const [drawerState, setDrawerState] = useState(false);
  // handling drawer menu toggle
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };
  // handling dark theme toggle
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
    dispatch(allActions.themeActions.toggleDarkMode(darkMode));
  };

  const drawerOptions = [
    {
      title: "Saved Recipes",
      link: "blah",
      icon: <PostAddIcon />,
    },
    {
      title: "About",
      link: "blah",
      icon: <InfoIcon />,
    },
    {
      title: "Contact us",
      link: "blah",
      icon: <TelegramIcon />,
    },
    {
      title: "Donate",
      link: "blah",
      icon: <MonetizationOnIcon />,
    },
  ];

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
        {/* there is a warning that will pop up when using drawing about findDOMnode */}
        <Drawer
          anchor="left"
          open={drawerState}
          onClose={toggleDrawer(false)}
          className={classes.Drawer}
        >
          <List>
            {drawerOptions.map(({ title, link, icon }, index) => (
              <ListItem button key={title}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
          <div className={classes.darkToggleContainer}>
            <Switch
              checked={state.checkedB}
              onChange={handleChange("checkedB")}
              value="checkedB"
              color="secondary"
            />
            <Typography variant="h6" color="inherit">
              Dark Mode
            </Typography>
          </div>
        </Drawer>
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
