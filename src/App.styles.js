import { makeStyles } from "@material-ui/core";

const appStyles = makeStyles((theme) => ({
  "@global": {
    "html, body, #root": {
      height: "100%",
      width: "100%",
      overflow: "hidden",
    },
  },
  header: {
    flex: 1,
    textAlign: "left",
  },
  mainContainer: {
    display: "flex",
    height: "100%",
  },
}));

export default appStyles;
