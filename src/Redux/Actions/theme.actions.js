import { TOGGLE_DARK_MODE } from "../types";

const toggleDarkMode = (darkMode) => ({
  type: TOGGLE_DARK_MODE,
  payload: darkMode === "light" ? "dark" : "light",
});

export { toggleDarkMode };
