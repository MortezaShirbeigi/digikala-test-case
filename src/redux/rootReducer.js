import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducers";
import appReducer from "./app/app.reducers";

const rootReducer = combineReducers({ cart: cartReducer, app: appReducer });

export default rootReducer;
