const initialVal = 0;

export const cartReducer = (state = initialVal, action)=>{
    switch (action.type) {
        case "increment":
            return state + action.payload;
    
        case "decrement":
            if(state === 0){
                return state;
            }
            return state - action.payload;
    
        default:
            return state;
    }
}