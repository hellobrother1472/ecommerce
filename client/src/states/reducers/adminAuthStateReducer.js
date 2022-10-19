const initialVal = "false";

export const adminAuthStateReducer = (state = initialVal, action) => {
    switch(action.type) {
        case "adminLogin":
            return "true";
        case "adminLogout":
            return "true";
        default:
            return state;
    }
}