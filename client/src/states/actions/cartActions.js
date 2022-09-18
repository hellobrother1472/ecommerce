export const cartIncrement = (payload)=>{
    return ({
        type : "increment",
        payload: payload
    })
}

export const cartDecrement = (payload)=>{ 
    return {
        type : "decrement",
        payload : payload
    }
}