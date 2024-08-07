import React, { useState } from 'react'
import './Home.css'

// import Login from '../../components/login/Login'
import Footer from '../../components/footer/Footer'
import { useNavigate, redirect } from 'react-router-dom'
export default function Home() {
  const [showLogin , setShowLogin] = useState(false)
  const [blur , setBlur] = useState(false)
 const handleLogin = ()=>{
    setShowLogin(!showLogin)
    setBlur(!blur)
  }
  const handleCancelBtn = ()=>{
    setShowLogin(false)
  }
  const navigate = useNavigate();
  return (
    <div className={`home ${blur ? 'blur' : ''}`}>
      <div className='homeBanner'>
        <div className='homeNavigation'>
          <div className='title'>
            <img src = '/images/icons8-discord-48.png'/>
            <span>convoCraft</span>
          </div>
          <div className='homeNavbar'>
              <span>Download</span>
              <span>Nitro</span>
              <span>Discover</span>
              <span>Safety</span> 
              <span>Support</span>
              <span>Blog</span>
              <span>Careers</span>
          </div>
          <button onClick={()=>navigate('/login')} className='loginBtn'>Sign In</button>
        </div>
        {showLogin && <Login handleCancelBtn={handleCancelBtn}/>}
        <div className='banner'>
            <img src='/images/pointgirl.png' className = 'pointgirl' alt="" />
          <div className='bannerLeft'>
            <div className='bannerHeading'>IMAGINE A PLACE...</div>
            <div className='bannerContent'>...where you can belong to a school club, a gaming group or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
            <div className='bannerBtn'>
                <button className='downloadBtn'>Download For Windows</button>
            </div>
          </div>
        </div>
        <img src='/images/group.png' className = 'peopleGroup' alt="" />
      </div>
      <div className='homeBanner2'>
        <img src="/images/banner2.png" alt="" className='banner2img'/>
        <div className='bannerHeading2'>
          <h1 className='banner2title'>
          Create an invite-only place where you belong
          </h1>
          <p className='banner2content'>convoCraft servers are organised into topic-based channels where you can collaborate, share and just talk about your day without clogging up a group chat.</p>
        </div>
      </div>
      <div className='homeBanner3'>
        <div className='banner3Heading'>
            <h1 className='banner3title'>
            Where hanging out is easy
            </h1>
            <p className='content3banner'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
        </div>
        <img src="/images/banner2nd.png" alt="" className='banner3img'/>
      </div>
      <div className='homeBanner2'>
        <img src="/images/banner3.png" alt="" className='banner2img'/>
        <div className='bannerHeading2'>
          <h1 className='banner2title'>
          From few to a fandom
          </h1>
          <p className='banner2content'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels and more.</p>
        </div>
      </div>
      <div className='homeBanner4'>
        <div className='bannerHeading mTop'>
          <h1 className=''>
          RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p className='content'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games or gather together over a drawing session with Screen Share.</p>
        </div>
        <img src="/images/banner4.png" alt="" className='banner4Img'/>
      </div>
      <Footer/>
    </div>
  )
}
