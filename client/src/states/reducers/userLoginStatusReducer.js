const initVal = {
    isSignedIn: "false",
    user: null
};

export const userLoginStatusReducer = (state=initVal,action)=>{
    switch (action.type) {
        case "userLogin":
            return {...state, isSignedIn: "true", user: action.payload}
        case "userLogout":
            return {...state, isSignedIn: "false", user: null}
        default:
            return state;
    }
}