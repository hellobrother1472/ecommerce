import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducers";

const store = configureStore(({
    reducer:{
        cartReducer,
    }
}))

export default store;