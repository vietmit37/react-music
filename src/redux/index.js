import { combineReducers } from "redux";
import { musicReducer } from "../containers/music/reducers";

const rootReducer = combineReducers({
  musicReducer,
});
export default rootReducer;
