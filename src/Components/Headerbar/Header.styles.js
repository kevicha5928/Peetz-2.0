import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles((theme) => ({
  header: {
    flex: 1,
    textAlign: "left",
  },
  appBar: {
    display: "flex",
    position: "absolute",
    width: "inherit",
    // backgroundColor: "rgba(255, 255,255, 0.5)",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    width: "100%",
  },
  darkToggleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  accountIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default HeaderStyles;
