import { makeStyles } from "@material-ui/core";

const InputSliderStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    position: "relative",
    overflow: "hidden",
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
}));

export default InputSliderStyles;
