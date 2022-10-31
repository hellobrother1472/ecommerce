const initState = false;

export const reviewClickedReducers = (state = initState, action) => {
    if (action.type === 'clicked') {
        return true;
    }
    else if(action.type === 'unClicked'){
        return false;
    }
    return state;
}