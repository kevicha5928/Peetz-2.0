import { makeStyles } from "@material-ui/core";

const UserPortalStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "url(/Images/pizza3.jpg)",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundImage: "url(/Images/pizza1.jpg)",
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  cardContainer: {
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      top: "10%",
      bottom: "5%",
      // height: "90%",
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

  relativeCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  mainGridContainer: {
    position: "relative",
    width: "100%",
    display: "flex",

    flexGrow: 4,
  },
}));

export default UserPortalStyles;
