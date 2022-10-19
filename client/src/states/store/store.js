import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducers";
import { userLoginStatusReducer } from "../reducers/userLoginStatusReducer";
import { adminAuthStateReducer } from "../reducers/adminAuthStateReducer";

const store = configureStore(({
    reducer:{
        cartReducer,
        userLoginStatusReducer,
        adminAuthStateReducer
    }
}))

export default store;
