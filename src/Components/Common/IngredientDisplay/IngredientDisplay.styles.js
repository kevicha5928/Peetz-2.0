import { makeStyles } from "@material-ui/core";

const IngredientDisplayStyles = makeStyles((theme) => ({
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
    alignItems: "center",
    // justifyContent: "space-between",
  },
  label: {
    flex: 7,
    // width: "50%",
  },
  data: {
    flex: 3,
    // width: "10%",
    textAlign: "right",
  },
  units: {
    flex: 1,
    // width: "10%",
    textAlign: "left",
    paddingLeft: ".5em",
  },
}));

export default IngredientDisplayStyles;
