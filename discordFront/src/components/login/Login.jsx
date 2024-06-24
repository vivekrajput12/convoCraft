import React from 'react'
import './Login.css'
export default function Login() {

  return (
    <div className='login'>
      <div className='loginFormHeading'>Sign In</div>
      <label className='loginFromLable'>Email</label>
      <input className='loginFromLableInput'></input>
      <label className='loginFromLable'>Password</label>
      <input className='loginFromLableInput' type='password'></input>
      <div className='forgetPassword'>Forgot password?</div>
      <div className='submitBtn'>
      <button className='loginBtn'>Sign in</button>
      <button className='loginBtn'>Cancel</button>
      </div>
      <div className='loginOr'>OR</div>
      <div className='googleSignIn submitBtn'>
      <button className='loginBtn googleBtn'>Sign in with Google</button>
      </div>
      <div className='loginSocial'>
      <img src='/images/instagram.png' alt='2'  className='socialImages'></img>
      <img src='/images/facebook.png' alt='3' className='socialImages'></img>
      <img src='/images/youtube.png' alt='4' className='socialImages youtube'></img>
      </div>
    </div>
  )
}
