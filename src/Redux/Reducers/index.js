import { combineReducers } from "redux";
import { themeReducers as theme } from "./theme.reducers";
import { userReducers as user } from "./user.reducers";

const rootReducer = combineReducers({
  user,
  theme,
});

export default rootReducer;
