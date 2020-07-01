import { CHANGE_ACTIVE_CARD } from "../types";

const userReducers = (state = { activeCard: "advanced" }, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    default:
      return state;
  }
};

export { userReducers };
