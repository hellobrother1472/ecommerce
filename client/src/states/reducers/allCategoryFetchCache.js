const initialVal = null;

export const allCategoryFetchCache = (state = initialVal, action)=>{
    if(action.type === 'data'){
        return action.payload;
    }
    return state;
}