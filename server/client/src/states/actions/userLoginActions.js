export const userLogin = (payload)=>{
    return ({
        type : "userLogin",
        payload: payload
    })
}

export const userLogout = (payload)=>{ 
    return {
        type : "userLogout"
    }
}