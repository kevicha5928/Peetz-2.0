import { TOGGLE_DARK_MODE } from "../types";

const themeReducers = (state = { darkMode: "dark" }, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export { themeReducers };
