export const userLogin = (payload)=>{
    return ({
        type : "userLogin",
    })
}

export const userLogout = (payload)=>{ 
    return {
        type : "userLogout",
    }
}