import { makeStyles } from "@material-ui/core";

const EasyModeStyles = makeStyles((theme) => ({
  cardContainer: {
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      height: "80%",
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "75%",
      width: "60%",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    position: "relative",
  },
  pseudoCard: {
    borderRadius: "2em",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.85,
  },
  cardTitle: {
    position: "relative",
    padding: theme.spacing(3),
  },
  grid: {
    [theme.breakpoints.down("xs")]: {
      height: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "80%",
    },
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      width: "50%",
    },
  },
  relativeCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ingredientContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      width: "30%",
    },
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  inputSlider: {
    width: "80%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  mainGridContainer: {
    position: "relative",
    width: "100%",
    display: "flex",

    flexGrow: 4,
  },
}));

export default EasyModeStyles;
