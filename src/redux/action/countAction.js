export const UserReg = (ID, PASS) => {
    return{
        type : 'REGISTER',
        payload : {id : ID, password : PASS }
    }
}