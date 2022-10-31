const initState = null;

export const checkoutUserDataFetchCache = (state = initState, action) => {
    if (action.type === 'checkOutUserData') {
        return action.payload;
    }
    return state;
}