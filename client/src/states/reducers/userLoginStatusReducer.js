const initVal = "false";

export const userLoginStatusReducer = (state=initVal,action)=>{
    switch (action.type) {
        case "userLogin":
            return "true"
        case "userLogout":
            return "false"
        default:
            return state;
    }
}