import React from 'react'
import './Login.css'
export default function Login(props) {

  return (
    <div className='loginFullPage lato-regular'>
      <div className='loginFullPageContainer'>
        <div className='loginContainer'>
          <div className='login'>
            <div className='loginInputContainer'>
              <div className='loginFormHeading'>Welcome Back!</div>
              <div>Enter to get unlimited entertainment</div>
              <label className='loginFromLable'>Email</label>
              <input className='loginFromLableInput' type='email' placeholder='Enter your mail address'></input>
              <label className='loginFromLable'>Password</label>
              <input className='loginFromLableInput' type='password' placeholder='Enter password'></input>
            </div>
              <div className='forgetPassword'>Forgot password?</div>
              <div className='submitBtn lato-regular'>
              <button className='submitBtn loginBtn'>Login In</button>
              </div>
              <div className='loginOr'>Or Login with</div>
              <div className='googleSignIn submitBtn lato-regular'>
              <button className='submitBtn loginBtn lato-regular googleBtn'>Sign in with Google</button>
              </div>
              {/* <div className='loginSocial'>
              <img src='/images/instagram.png' alt='2'  className='loginSocial socialImages'></img>
              <img src='/images/facebook.png' alt='3' className='loginSocial socialImages'></img>
              <img src='/images/youtube.png' alt='4' className='loginSocial socialImages'></img>
              </div> */}
              <div className='loginSocial'>Don't have an account ? <a href='/signUp'>register here</a></div>
            </div>
            <div className='loginRightSide'>
              <h2>Welcome to ConvoCraft</h2>
            </div>
        </div>
        
      </div>
    </div>
  )
}
