import { combineReducers } from "redux";

import useReducer from "./user/userReducer";
import cartReducer from "./cart/cartReduducer";

export default combineReducers({
  user: useReducer,
  cart: cartReducer
});
