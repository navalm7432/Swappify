import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import swapReducer from "./swapReducer"
export default combineReducers({
  item: itemReducer,
  auth: authReducer,
  error: errorReducer,
  swap:swapReducer,
});
