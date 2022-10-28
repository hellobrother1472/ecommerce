import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducers";
import { userLoginStatusReducer } from "../reducers/userLoginStatusReducer";
import { adminAuthStateReducer } from "../reducers/adminAuthStateReducer";
import { allCategoryFetchCache } from "../reducers/allCategoryFetchCache";
import { checkoutUserDataFetchCache } from "../reducers/checkoutUserDataFetchCache";

const store = configureStore(({
    reducer:{
        cartReducer,
        userLoginStatusReducer,
        adminAuthStateReducer,
        allCategoryFetchCache,
        checkoutUserDataFetchCache
    }
}))

export default store;
