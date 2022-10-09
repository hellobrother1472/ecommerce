import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { userLoginStatusReducer } from "./userLoginStatusReducer";

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    userLoginStatusReducer: userLoginStatusReducer
})

export default rootReducer;