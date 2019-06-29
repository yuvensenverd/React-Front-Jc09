const INITIAL_STATE = { 
    USER_ID : "",
    USER_PASS : "",
    IS_LOGGED_IN : false
}

var CountReducer =  (state = INITIAL_STATE, action) => {
    if(action.type === 'REGISTER'){
        return{...state, USER_ID : action.payload.id, USER_PASS : action.payload.password} // kalau mau tambah variablle untuk diubah , sisa tambah koma di setelah +1
    }else{
        return state
    }
} 
export default CountReducer;