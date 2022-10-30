import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducers";
import { userLoginStatusReducer } from "../reducers/userLoginStatusReducer";
import { adminAuthStateReducer } from "../reducers/adminAuthStateReducer";
import { allCategoryFetchCache } from "../reducers/allCategoryFetchCache";
import { checkoutUserDataFetchCache } from "../reducers/checkoutUserDataFetchCache";
import { reviewClickedReducers } from "../reducers/reviewClickedReducers";

const store = configureStore(({
    reducer:{
        cartReducer,
        userLoginStatusReducer,
        adminAuthStateReducer,
        allCategoryFetchCache,
        checkoutUserDataFetchCache,
        reviewClickedReducers
    }
}))

export default store;
