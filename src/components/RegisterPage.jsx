import React from 'react'
import { connect } from 'react-redux'
import { UserReg } from './../redux/action/countAction'




class RegisterPage extends React.Component{

    isFalse=()=>{
        this.refs.userIdReg.value=""
        this.refs.userPassReg.value=""
    }

    isValid = (ID, PASS) =>{
        var invalid = ",./;'[]\-=`!@#$%^&*()_+~"
        if(PASS.length < 8 || PASS.length > 16){
          
        document.getElementsByTagName("p")[2].innerHTML='Password Harus diantara 8-12 karakter'
        this.isFalse()
        return false
        }
        if(ID.length < 8 || ID.length > 16){
          
        document.getElementsByTagName("p")[2].innerHTML='ID harus diantara 8-16 karakter'
        this.isFalse()
        return false
        }
        if (PASS.search(/[a-z]/) < 0) {
        
        document.getElementsByTagName("p")[2].innerHTML='Password harus memiliki setidaknya 1 huruf kecil'
        this.isFalse()
        return false
        } else if(PASS.search(/[A-Z]/) < 0) {
         
        document.getElementsByTagName("p")[2].innerHTML='Password harus memiliki setidaknya 1 huruf besar'
        this.isFalse()
        return false
        } else  if (PASS.search(/[0-9]/) < 0) {

        document.getElementsByTagName("p")[2].innerHTML='Password harus memiliki minimal 1 angka'
        this.isFalse()
        return false
        }else if (/^[a-zA-Z0-9-,_]*$/.test(PASS) == false){
            
        document.getElementsByTagName("p")[2].innerHTML='Password tidak boleh ada special character' 
        this.isFalse()
        return false
        } else {
        //var uservalid = {id : ID, password : PASS}
        this.props.UserReg(ID, PASS)
        
        }
    }
    render(){
        return(
            <div>
                <div className = 'justify-content-center text-center '>
                <h1 className='mb-5 mt-5'> Register Your Account </h1>
               
                <p> Account Name </p>
                <input type="text" className="form-control text-center mb-5" ref="userIdReg" placeholder="Your Account"/>
                <p> Enter Your Password </p>
                <input type="password" className="form-control text-center mb-5" ref="userPassReg" placeholder="Your Password "/>
                <input type="button" value="Submit" className="btn btn-success mb-5" onClick={() =>this.isValid(this.refs.userIdReg.value, this.refs.userPassReg.value)}/>
                <p className="text-center" style={{color : 'red'}}> </p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        useracc : state.USER_DATA.USER_ID,
        userpass : state.USER_DATA.USER_PASS
    }
}
export default connect(mapStateToProps, {UserReg})(RegisterPage);