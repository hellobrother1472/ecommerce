const initialVal = "false";

export const adminAuthStateReducer = (state = initialVal, action) => {
    switch(action.type) {
        case "adminLogin":
            return "true";
        case "adminLogout":
            return "false";
        default:
            return state;
    }
}