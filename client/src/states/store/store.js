import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducers";
import { userLoginStatusReducer } from "../reducers/userLoginStatusReducer";

const store = configureStore(({
    reducer:{
        cartReducer,
        userLoginStatusReducer
    }
}))

export default store;
