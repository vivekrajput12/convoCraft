import React, { Fragment, useState } from 'react'
import './Login.css'
import {loginUser,registerUser} from '../../slice/authSlice'
import { useDispatch } from 'react-redux';
export default function Login(props) {
const [signUp , setSignUp] = useState(false)
const [credentials, setCredentials] = useState({ email: '', password: '' });
const dispatch = useDispatch();
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setCredentials({ ...credentials, [name]: value });
};
const handleRegisterUser = ()=>{
  setSignUp(!signUp)
  setCredentials({ email:'',password: '' })
}
const handleAuthentication = (mode)=>{
  mode == 'login' ? dispatch(loginUser(credentials)) : dispatch(registerUser(credentials))
}
  return (
    <div className='loginFullPage lato-regular'>
      <div className='loginFullPageContainer'>
        <div className='loginContainer'>
          <div className='login'>
            <div className='loginInputContainer'>
              <div className={signUp ? 'loginFormHeading signUpActive':'loginFormHeading'}>{signUp ? "Welcome" : "Welcome Back!"}</div>
              <div>Enter to get unlimited entertainment</div>
              <label className='loginFromLable'>Email</label>
              <input className='loginFromLableInput' value={credentials.email} name = 'email' type='email' placeholder='Enter your mail address' onChange={handleInputChange}></input>
              <label className='loginFromLable'>Password</label>
              <input className='loginFromLableInput' value={credentials.password} name = 'password' type='password' placeholder='Enter password'  onChange={handleInputChange}></input>
              {signUp && <Fragment>
              <label className='loginFromLable'>Confirm Password</label>
              <input className='loginFromLableInput' type='password' placeholder='Confirm password'></input>
              </Fragment>
              }
            </div>
              {!signUp && <div className='forgetPassword'>Forgot password?</div>}
              <div className='submitBtn lato-regular'>
              <button className='submitBtn loginBtn' onClick={()=>handleAuthentication(signUp ? 'signup':'login')}>{signUp ? "Sign up" : "Sign In"}</button>
              </div>
              <div className='loginOr'>Or {signUp ? " Signup " : "Login"} with</div>
              <div className='googleSignIn submitBtn lato-regular'>
              <button className='submitBtn loginBtn lato-regular googleBtn'><img src='/images/google.png' className='googleImage'></img>Sign {signUp ? "up" : "in"} with Google</button>
              </div>
              {/* <div className='loginSocial'>
              <img src='/images/instagram.png' alt='2'  className='loginSocial socialImages'></img>
              <img src='/images/facebook.png' alt='3' className='loginSocial socialImages'></img>
              <img src='/images/youtube.png' alt='4' className='loginSocial socialImages'></img>
              </div> */}
              <div className='loginSocial'>{signUp ? "Back to login ? ":"Don't have an account ? "}<span className='ancherTagRegister' onClick={()=>{handleRegisterUser()}}>{signUp ? "Login":"register here"}</span></div>
            </div>
            <div className='loginRightSide'>
              <img className='loginPageImage' src='/images/loginPageImage.jpg'></img>
            </div>
        </div>
        {/* <div class = 'reDirect'><button className='loginPageNavigationbtn submitBtn loginBtn lato-regular'><a href='/'>Home</a></button></div> */}
      </div>
    </div>
  )
}
