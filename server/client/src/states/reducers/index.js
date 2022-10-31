import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { userLoginStatusReducer } from "./userLoginStatusReducer";
import { adminAuthStateReducer } from "./adminAuthStateReducer";

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    userLoginStatusReducer: userLoginStatusReducer,
    adminAuthStateReducer: adminAuthStateReducer
})

export default rootReducer;