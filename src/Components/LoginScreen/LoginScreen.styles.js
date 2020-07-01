import { makeStyles } from "@material-ui/core";

const LoginScreenStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: "url(/Images/woman1.jpg)",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  bgImage: {
    position: "absolute",
    zIndex: "-100",
    height: "100%",
    width: "100%",
  },
}));

export default LoginScreenStyles;
